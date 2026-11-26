/* Personal study layer: text highlights (with optional notes), per-lesson notes, and drawing boards.
   Saved in localStorage under its own key, separate from quiz progress. */

var ANNOT_KEY = 'sa-annotations-v1';
var ANNOT = (function () {
  try { var v = JSON.parse(localStorage.getItem(ANNOT_KEY) || 'null'); if (v) return v; } catch (e) {}
  return { hl: {}, notes: {}, boards: {} };
})();
ANNOT.hl = ANNOT.hl || {}; ANNOT.notes = ANNOT.notes || {}; ANNOT.boards = ANNOT.boards || {};
var ANNOT_LISTENERS = [];

function annotSave() {
  try { localStorage.setItem(ANNOT_KEY, JSON.stringify(ANNOT)); }
  catch (e) { window.dispatchEvent(new CustomEvent('annot-error')); }
  ANNOT_LISTENERS.forEach(function (fn) { fn(); });
}
function useAnnot() {
  var _t = React.useState(0), setTick = _t[1];
  React.useEffect(function () {
    function fn() { setTick(function (n) { return n + 1; }); }
    ANNOT_LISTENERS.push(fn);
    return function () { ANNOT_LISTENERS = ANNOT_LISTENERS.filter(function (x) { return x !== fn; }); };
  }, []);
  return ANNOT;
}
function newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function openBoard(id, title) { window.dispatchEvent(new CustomEvent('open-board', { detail: { id: id, title: title } })); }

var HL_COLORS = [
  { k: 'yellow', t: 'Yellow' },
  { k: 'green', t: 'Green' },
  { k: 'pink', t: 'Pink' },
  { k: 'blue', t: 'Blue' }
];

/* ---------- Highlights inside a lesson ----------
   A highlight is stored as character offsets into the lesson's text, plus the text itself
   (so it is skipped safely if the lesson text ever changes). */
function textOffset(root, node, offset) {
  var r = document.createRange();
  r.selectNodeContents(root);
  r.setEnd(node, offset);
  return r.toString().length;
}
function wrapRange(root, start, end, make) {
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  var pos = 0, node, targets = [];
  while ((node = walker.nextNode())) {
    var len = node.data.length;
    var s = Math.max(start, pos), e = Math.min(end, pos + len);
    var structural = node.data.trim() === '' && node.parentNode && /^(TABLE|TBODY|THEAD|TR|UL|OL)$/.test(node.parentNode.nodeName);
    if (s < e && !structural) targets.push([node, s - pos, e - pos]);
    pos += len;
    if (pos >= end) break;
  }
  targets.forEach(function (t) {
    var n = t[0];
    if (t[2] < n.data.length) n.splitText(t[2]);
    var mid = t[1] > 0 ? n.splitText(t[1]) : n;
    var mark = make();
    mid.parentNode.insertBefore(mark, mid);
    mark.appendChild(mid);
  });
}

function LessonBody(props) {
  var ls = props.lesson;
  var annot = useAnnot();
  var ref = React.useRef(null);
  var list = annot.hl[ls.id] || [];
  var _sel = React.useState(null), sel = _sel[0], setSel = _sel[1];       // pending selection {s,e,t,x,y}
  var _pop = React.useState(null), pop = _pop[0], setPop = _pop[1];       // clicked highlight {id,x,y}
  var _edit = React.useState(null), editing = _edit[0], setEditing = _edit[1]; // highlight id whose note is open

  /* Re-render the lesson HTML and paint every highlight. */
  React.useLayoutEffect(function () {
    var root = ref.current;
    if (!root) return;
    root.innerHTML = ls.body;
    var text = root.textContent;
    list.slice().sort(function (a, b) { return a.s - b.s; }).forEach(function (h) {
      if (text.slice(h.s, h.e) !== h.t) return;
      wrapRange(root, h.s, h.e, function () {
        var m = document.createElement('mark');
        m.className = 'hl hl-' + h.c + (h.note ? ' has-note' : '');
        m.setAttribute('data-hl', h.id);
        if (h.note) m.title = h.note;
        return m;
      });
    });
  }, [ls.id, JSON.stringify(list)]);

  /* Show the toolbar when text inside the lesson is selected. */
  React.useEffect(function () {
    function check() {
      var s = window.getSelection();
      var root = ref.current;
      if (!s || s.rangeCount === 0 || s.isCollapsed || !root) { setSel(null); return; }
      var r = s.getRangeAt(0);
      if (!root.contains(r.commonAncestorContainer)) { setSel(null); return; }
      var t = r.toString();
      if (!t.trim()) { setSel(null); return; }
      var start = textOffset(root, r.startContainer, r.startOffset);
      var rect = r.getBoundingClientRect();
      setSel({ s: start, e: start + t.length, t: t, x: rect.left + rect.width / 2, y: rect.bottom });
      setPop(null);
    }
    function onUp() { setTimeout(check, 10); }
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
    document.addEventListener('keyup', onUp);
    function onScroll() { setSel(null); setPop(null); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return function () {
      document.removeEventListener('mouseup', onUp); document.removeEventListener('touchend', onUp);
      document.removeEventListener('keyup', onUp); window.removeEventListener('scroll', onScroll);
    };
  }, [ls.id]);

  function addHighlight(color, withNote) {
    if (!sel) return;
    var h = { id: newId(), s: sel.s, e: sel.e, t: sel.t, c: color, note: '', at: Date.now() };
    ANNOT.hl[ls.id] = (ANNOT.hl[ls.id] || []).concat([h]);
    annotSave();
    window.getSelection().removeAllRanges();
    setSel(null);
    if (withNote) setEditing(h.id);
  }
  function update(id, patch) {
    ANNOT.hl[ls.id] = (ANNOT.hl[ls.id] || []).map(function (h) { return h.id === id ? Object.assign({}, h, patch) : h; });
    annotSave();
  }
  function remove(id) {
    ANNOT.hl[ls.id] = (ANNOT.hl[ls.id] || []).filter(function (h) { return h.id !== id; });
    annotSave(); setPop(null); setEditing(null);
  }
  function onClick(e) {
    var m = e.target.closest && e.target.closest('mark[data-hl]');
    if (!m) { setPop(null); return; }
    var rect = m.getBoundingClientRect();
    setPop({ id: m.getAttribute('data-hl'), x: rect.left + rect.width / 2, y: rect.bottom });
  }

  var popH = pop ? list.find(function (h) { return h.id === pop.id; }) : null;
  var editH = editing ? list.find(function (h) { return h.id === editing; }) : null;
  function place(p) {
    var w = 300;
    return { left: Math.max(8, Math.min(window.innerWidth - w - 8, p.x - w / 2)) + 'px', top: Math.min(window.innerHeight - 70, p.y + 10) + 'px' };
  }

  return (
    <>
      <div className="body annotatable" ref={ref} onClick={onClick} />
      {sel ? (
        <div className="hl-toolbar" style={place(sel)} onMouseDown={function (e) { e.preventDefault(); }}>
          <span className="hl-label">Highlight</span>
          {HL_COLORS.map(function (c) {
            return <button key={c.k} type="button" className={'swatch sw-' + c.k} aria-label={'Highlight ' + c.t} title={c.t} onClick={function () { addHighlight(c.k, false); }} />;
          })}
          <span className="hl-sep" />
          <button type="button" className="hl-text-btn" onClick={function () { addHighlight('yellow', true); }}>+ Note</button>
        </div>
      ) : null}
      {popH ? (
        <div className="hl-toolbar" style={place(pop)}>
          {HL_COLORS.map(function (c) {
            return <button key={c.k} type="button" className={'swatch sw-' + c.k + (popH.c === c.k ? ' on' : '')} aria-label={'Change to ' + c.t} onClick={function () { update(popH.id, { c: c.k }); }} />;
          })}
          <span className="hl-sep" />
          <button type="button" className="hl-text-btn" onClick={function () { setEditing(popH.id); setPop(null); }}>{popH.note ? 'Edit note' : '+ Note'}</button>
          <button type="button" className="hl-text-btn danger-text" onClick={function () { remove(popH.id); }}>Remove</button>
        </div>
      ) : null}
      {editH ? (
        <NoteDialog title="Note on highlight" quote={editH.t} value={editH.note}
          onSave={function (v) { update(editH.id, { note: v }); setEditing(null); }}
          onClose={function () { setEditing(null); }} />
      ) : null}
    </>
  );
}

function NoteDialog(props) {
  var _v = React.useState(props.value || ''), v = _v[0], setV = _v[1];
  var ref = React.useRef(null);
  React.useEffect(function () {
    if (ref.current) ref.current.focus();
    function onKey(e) { if (e.key === 'Escape') props.onClose(); }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  }, []);
  return (
    <div className="search-backdrop" onMouseDown={function (e) { if (e.target === e.currentTarget) props.onClose(); }}>
      <div className="note-dialog" role="dialog" aria-modal="true" aria-label={props.title}>
        <h3>{props.title}</h3>
        <blockquote className="note-quote">{props.quote}</blockquote>
        <label className="sr" htmlFor="note-text">Note</label>
        <textarea id="note-text" ref={ref} rows={5} value={v} placeholder="Write your note..." onChange={function (e) { setV(e.target.value); }}
          onKeyDown={function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) props.onSave(v.trim()); }} />
        <div className="row end">
          <button type="button" className="btn ghost" onClick={props.onClose}>Cancel</button>
          <button type="button" className="btn" onClick={function () { props.onSave(v.trim()); }}>Save note</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Tools row and notes box for a lesson ---------- */
function LessonTools(props) {
  var ls = props.lesson;
  var annot = useAnnot();
  var nHl = (annot.hl[ls.id] || []).length;
  var hasBoard = (annot.boards[ls.id] || []).length > 0;
  return (
    <div className="lesson-tools">
      <span className="muted small tip">Select any text to highlight it or add a note.</span>
      <div className="row">
        <a className="btn ghost small" href={'#notes-' + ls.id} onClick={function (e) { e.preventDefault(); var el = document.getElementById('notes-' + ls.id); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); var t = el.querySelector('textarea'); if (t) t.focus({ preventScroll: true }); } }}>
          My notes{nHl ? ' · ' + nHl + ' highlight' + (nHl === 1 ? '' : 's') : ''}
        </a>
        <button type="button" className="btn ghost small" onClick={function () { openBoard(ls.id, ls.t); }}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
          {hasBoard ? 'Open my board' : 'Draw on a board'}
        </button>
      </div>
    </div>
  );
}

function LessonNotes(props) {
  var ls = props.lesson;
  var annot = useAnnot();
  var _v = React.useState(annot.notes[ls.id] ? annot.notes[ls.id].text : ''), v = _v[0], setV = _v[1];
  var _s = React.useState(''), status = _s[0], setStatus = _s[1];
  var timer = React.useRef(null);
  var hls = (annot.hl[ls.id] || []).slice().sort(function (a, b) { return a.s - b.s; });
  React.useEffect(function () { setV(annot.notes[ls.id] ? annot.notes[ls.id].text : ''); setStatus(''); }, [ls.id]);
  function change(text) {
    setV(text); setStatus('Saving...');
    clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      if (text.trim()) ANNOT.notes[ls.id] = { text: text, at: Date.now() }; else delete ANNOT.notes[ls.id];
      annotSave(); setStatus('Saved');
    }, 400);
  }
  return (
    <section className="my-notes" id={'notes-' + ls.id}>
      <div className="my-notes-head">
        <h3>My notes</h3>
        <span className="muted small" aria-live="polite">{status}</span>
      </div>
      <label className="sr" htmlFor={'ta-notes-' + ls.id}>My notes for this lesson</label>
      <textarea id={'ta-notes-' + ls.id} rows={4} value={v} placeholder="Type anything you want to remember from this lesson. It saves automatically." onChange={function (e) { change(e.target.value); }} />
      {hls.length ? (
        <div className="hl-list">
          <p className="muted small">Your highlights in this lesson</p>
          <ul className="plain">
            {hls.map(function (h) {
              return (
                <li key={h.id}>
                  <span className={'hl hl-' + h.c}>{h.t.length > 220 ? h.t.slice(0, 220) + '…' : h.t}</span>
                  {h.note ? <span className="hl-note">{h.note}</span> : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

/* ---------- Drawing board ----------
   Strokes are stored as vectors in a fixed 1600 x 1000 space and scaled to the screen,
   so a drawing looks the same on a phone and a laptop. */
var BOARD_W = 1600, BOARD_H = 1000;
var INK = [
  { k: 'ink', t: 'Black / white' },
  { k: 'blue', t: 'Blue' },
  { k: 'red', t: 'Red' },
  { k: 'green', t: 'Green' },
  { k: 'orange', t: 'Orange' }
];
var SIZES = [{ w: 3, t: 'Thin' }, { w: 6, t: 'Medium' }, { w: 12, t: 'Thick' }];

function inkColor(k) {
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  var map = dark
    ? { ink: '#f1f3f6', blue: '#7fa8ff', red: '#ff7b72', green: '#5fd39a', orange: '#ffb35c' }
    : { ink: '#1f2933', blue: '#2f5bd3', red: '#d33a2f', green: '#1f8a5a', orange: '#e07b13' };
  return map[k] || map.ink;
}

function drawStroke(ctx, st, scale) {
  var p = st.p;
  if (!p.length) return;
  ctx.save();
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.globalCompositeOperation = st.tool === 'eraser' ? 'destination-out' : 'source-over';
  ctx.globalAlpha = st.tool === 'marker' ? 0.35 : 1;
  ctx.strokeStyle = inkColor(st.c);
  ctx.lineWidth = (st.tool === 'marker' ? st.w * 3 : st.tool === 'eraser' ? st.w * 4 : st.w) * scale;
  ctx.beginPath();
  ctx.moveTo(p[0][0] * scale, p[0][1] * scale);
  if (p.length === 1) ctx.lineTo(p[0][0] * scale + 0.01, p[0][1] * scale);
  for (var i = 1; i < p.length - 1; i++) {
    var mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2;
    ctx.quadraticCurveTo(p[i][0] * scale, p[i][1] * scale, mx * scale, my * scale);
  }
  if (p.length > 1) ctx.lineTo(p[p.length - 1][0] * scale, p[p.length - 1][1] * scale);
  ctx.stroke();
  ctx.restore();
}

function Board(props) {
  var id = props.id;
  var canvasRef = React.useRef(null), wrapRef = React.useRef(null);
  var strokes = React.useRef((ANNOT.boards[id] || []).slice());
  var redoStack = React.useRef([]);
  var current = React.useRef(null);
  var scaleRef = React.useRef(1);
  var _tool = React.useState('pen'), tool = _tool[0], setTool = _tool[1];
  var _c = React.useState('ink'), color = _c[0], setColor = _c[1];
  var _w = React.useState(6), size = _w[0], setSize = _w[1];
  var _n = React.useState(0), setVersion = _n[1];
  var _cf = React.useState(false), confirmClear = _cf[0], setConfirmClear = _cf[1];

  function redraw() {
    var cv = canvasRef.current; if (!cv) return;
    var ctx = cv.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    strokes.current.forEach(function (s) { drawStroke(ctx, s, scaleRef.current); });
    if (current.current) drawStroke(ctx, current.current, scaleRef.current);
  }
  function fit() {
    var wrap = wrapRef.current, cv = canvasRef.current; if (!wrap || !cv) return;
    var availW = wrap.clientWidth, availH = wrap.clientHeight;
    var scale = Math.min(availW / BOARD_W, availH / BOARD_H);
    var w = Math.floor(BOARD_W * scale), h = Math.floor(BOARD_H * scale);
    var dpr = window.devicePixelRatio || 1;
    cv.style.width = w + 'px'; cv.style.height = h + 'px';
    cv.width = Math.floor(w * dpr); cv.height = Math.floor(h * dpr);
    scaleRef.current = scale;
    redraw();
  }
  React.useEffect(function () {
    fit();
    var ro = new ResizeObserver(fit);
    ro.observe(wrapRef.current);
    var mo = new MutationObserver(redraw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    function onKey(e) {
      if (e.key === 'Escape') props.onClose();
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); if (e.shiftKey) redo(); else undo(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return function () { ro.disconnect(); mo.disconnect(); window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);

  function save() {
    if (strokes.current.length) ANNOT.boards[id] = strokes.current; else delete ANNOT.boards[id];
    annotSave(); setVersion(function (n) { return n + 1; });
  }
  function point(e) {
    var r = canvasRef.current.getBoundingClientRect();
    return [Math.round((e.clientX - r.left) / scaleRef.current), Math.round((e.clientY - r.top) / scaleRef.current)];
  }
  function down(e) {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    canvasRef.current.setPointerCapture(e.pointerId);
    current.current = { tool: tool, c: color, w: size, p: [point(e)] };
    redraw();
  }
  function move(e) {
    if (!current.current) return;
    var pt = point(e), p = current.current.p, last = p[p.length - 1];
    if (Math.abs(pt[0] - last[0]) + Math.abs(pt[1] - last[1]) < 2) return;
    p.push(pt);
    redraw();
  }
  function up() {
    if (!current.current) return;
    strokes.current.push(current.current);
    current.current = null;
    redoStack.current = [];
    redraw(); save();
  }
  function undo() { if (!strokes.current.length) return; redoStack.current.push(strokes.current.pop()); redraw(); save(); }
  function redo() { if (!redoStack.current.length) return; strokes.current.push(redoStack.current.pop()); redraw(); save(); }
  function clearAll() { redoStack.current = strokes.current.slice().reverse(); strokes.current = []; setConfirmClear(false); redraw(); save(); }

  var canUndo = strokes.current.length > 0, canRedo = redoStack.current.length > 0;
  return (
    <div className="board-overlay" role="dialog" aria-modal="true" aria-label={'Drawing board: ' + props.title}>
      <div className="board-bar">
        <div className="board-title"><b>Board</b><span className="muted">{props.title}</span></div>
        <div className="board-group" role="group" aria-label="Tool">
          {[['pen', 'Pen'], ['marker', 'Highlighter'], ['eraser', 'Eraser']].map(function (t) {
            return <button key={t[0]} type="button" className={'tool-btn' + (tool === t[0] ? ' on' : '')} aria-pressed={tool === t[0]} onClick={function () { setTool(t[0]); }}>{t[1]}</button>;
          })}
        </div>
        <div className="board-group" role="group" aria-label="Color">
          {INK.map(function (c) {
            return <button key={c.k} type="button" className={'ink-dot' + (color === c.k ? ' on' : '')} style={{ background: inkColor(c.k) }} aria-label={c.t} title={c.t} aria-pressed={color === c.k} onClick={function () { setColor(c.k); if (tool === 'eraser') setTool('pen'); }} />;
          })}
        </div>
        <div className="board-group" role="group" aria-label="Size">
          {SIZES.map(function (s) {
            return <button key={s.w} type="button" className={'size-btn' + (size === s.w ? ' on' : '')} aria-label={s.t} title={s.t} aria-pressed={size === s.w} onClick={function () { setSize(s.w); }}><span style={{ width: s.w + 4 + 'px', height: s.w + 4 + 'px' }} /></button>;
          })}
        </div>
        <div className="board-group">
          <button type="button" className="tool-btn" onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)">Undo</button>
          <button type="button" className="tool-btn" onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Y)">Redo</button>
          {!confirmClear
            ? <button type="button" className="tool-btn" onClick={function () { setConfirmClear(true); }} disabled={!canUndo}>Clear</button>
            : <button type="button" className="tool-btn danger-text" onClick={clearAll}>Clear all?</button>}
        </div>
        <button type="button" className="btn small board-close" onClick={props.onClose}>Done</button>
      </div>
      <div className="board-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className={'board-canvas tool-' + tool}
          onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={function (e) { if (e.pointerType === 'mouse') up(); }} />
      </div>
      <p className="board-foot muted small">Saved automatically · Ctrl+Z undo · Esc to close</p>
    </div>
  );
}

/* ---------- Notes page: everything in one place ---------- */
function NotesPage(props) {
  var annot = useAnnot();
  var lidx = lessonIndex();
  var ids = {};
  Object.keys(annot.hl).forEach(function (k) { if ((annot.hl[k] || []).length) ids[k] = 1; });
  Object.keys(annot.notes).forEach(function (k) { ids[k] = 1; });
  Object.keys(annot.boards).forEach(function (k) { if (k !== 'free' && (annot.boards[k] || []).length) ids[k] = 1; });
  var order = [];
  window.COURSE.chapters.forEach(function (ch) { ch.lessons.forEach(function (ls) { if (ids[ls.id]) order.push(ls.id); }); });
  var total = order.length;

  return (
    <div className="wrap page narrow">
      <h1>My notes</h1>
      <p className="lead">Your highlights, notes, and drawings from every lesson. To add more, open a lesson and select text, type in its "My notes" box, or open its board.</p>
      <div className="row notes-actions">
        <button type="button" className="btn" onClick={function () { openBoard('free', 'Free board'); }}>Open free board</button>
        {(annot.boards.free || []).length ? <span className="muted small">Your free board has a drawing.</span> : null}
      </div>
      {!total ? <p className="empty">Nothing yet. Open any lesson and select some text to make your first highlight.</p> : null}
      {order.map(function (id) {
        var info = lidx[id];
        var hls = (annot.hl[id] || []).slice().sort(function (a, b) { return a.s - b.s; });
        var note = annot.notes[id];
        var board = (annot.boards[id] || []).length;
        return (
          <section key={id} className="panel note-card">
            <p className="eyebrow">{info.ch.label}: {info.ch.title}</p>
            <h3><button type="button" className="link" onClick={function () { props.onJump(info.ch.id, id); }}>{info.lesson.t}</button></h3>
            {note ? <p className="note-text">{note.text}</p> : null}
            {hls.length ? (
              <ul className="plain hl-list">
                {hls.map(function (h) {
                  return <li key={h.id}><span className={'hl hl-' + h.c}>{h.t.length > 260 ? h.t.slice(0, 260) + '…' : h.t}</span>{h.note ? <span className="hl-note">{h.note}</span> : null}</li>;
                })}
              </ul>
            ) : null}
            {board ? <button type="button" className="btn ghost small" onClick={function () { openBoard(id, info.lesson.t); }}>Open drawing ({board} stroke{board === 1 ? '' : 's'})</button> : null}
          </section>
        );
      })}
    </div>
  );
}
