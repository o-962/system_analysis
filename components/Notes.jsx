/* Edit mode: works on every page. Highlight any text, draw over the page, and pin notes.
   - Text highlights use the CSS Custom Highlight API: they are painted over the text without
     changing the page's DOM, so they cannot break React or the quizzes.
   - Highlights and notes are anchored by their text plus the words around it, so they find
     their place again after the page re-renders or changes width.
   - Ink is stored in units of 1/1000 of the page width, so it scales with the page.
   Saved in localStorage per page (e.g. "ch1/c1l2", "mock/official", "cards"). */

var MARKS_KEY = 'sa-marks-v1';
var MARKS = (function () {
  try { var v = JSON.parse(localStorage.getItem(MARKS_KEY) || 'null'); if (v && v.pages) return v; } catch (e) {}
  return { pages: {} };
})();
var MARK_LISTENERS = [];
var HAS_HIGHLIGHT_API = !!(window.CSS && CSS.highlights && typeof Highlight !== 'undefined');

/* One-time migration from the earlier lesson-only highlighter (sa-annotations-v1). */
(function migrate() {
  var old;
  try { old = JSON.parse(localStorage.getItem('sa-annotations-v1') || 'null'); } catch (e) { old = null; }
  if (!old || MARKS.migrated) return;
  var lessonCh = {};
  window.COURSE.chapters.forEach(function (ch) { ch.lessons.forEach(function (ls) { lessonCh[ls.id] = { ch: ch, ls: ls }; }); });
  Object.keys(old.hl || {}).forEach(function (lid) {
    var info = lessonCh[lid]; if (!info) return;
    var pg = pageData(info.ch.id + '/' + lid);
    (old.hl[lid] || []).forEach(function (h) { pg.marks.push({ id: h.id, type: 'hl', q: h.t, pre: '', suf: '', c: h.c, note: h.note || '', at: h.at || Date.now() }); });
  });
  Object.keys(old.notes || {}).forEach(function (lid) {
    var info = lessonCh[lid]; if (!info || !old.notes[lid].text) return;
    pageData(info.ch.id + '/' + lid).marks.push({ id: 'n' + lid, type: 'note', q: info.ls.t, pre: '', suf: '', c: 'yellow', note: old.notes[lid].text, at: Date.now() });
  });
  MARKS.migrated = true;
  saveMarks();
})();

function pageData(key) {
  var p = MARKS.pages[key];
  if (!p) p = MARKS.pages[key] = { marks: [], ink: [] };
  p.marks = p.marks || []; p.ink = p.ink || [];
  return p;
}
function saveMarks() {
  Object.keys(MARKS.pages).forEach(function (k) {
    var p = MARKS.pages[k];
    if (!p.marks.length && !p.ink.length) delete MARKS.pages[k];
  });
  try { localStorage.setItem(MARKS_KEY, JSON.stringify(MARKS)); }
  catch (e) { window.dispatchEvent(new CustomEvent('annot-error')); }
  MARK_LISTENERS.forEach(function (fn) { fn(); });
}
function useMarks() {
  var _t = React.useState(0), setTick = _t[1];
  React.useEffect(function () {
    function fn() { setTick(function (n) { return n + 1; }); }
    MARK_LISTENERS.push(fn);
    return function () { MARK_LISTENERS = MARK_LISTENERS.filter(function (x) { return x !== fn; }); };
  }, []);
  return MARKS;
}
function markId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

var MARK_COLORS = [
  { k: 'yellow', t: 'Yellow' }, { k: 'green', t: 'Green' }, { k: 'pink', t: 'Pink' }, { k: 'blue', t: 'Blue' }
];
function inkColor(k) {
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  var map = dark
    ? { yellow: '#ffd84d', green: '#5fd39a', pink: '#ff8fb8', blue: '#7fa8ff', ink: '#f1f3f6', red: '#ff7b72' }
    : { yellow: '#e0a800', green: '#1f8a5a', pink: '#d6336c', blue: '#2f5bd3', ink: '#1f2933', red: '#d33a2f' };
  return map[k] || map.ink;
}

/* ---------- Text index and anchoring ---------- */
function pageRoot() { return document.getElementById('page-root'); }

function buildIndex(root) {
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var p = n.parentNode;
      if (!p || (p.closest && p.closest('script,style,textarea,select,.no-annot'))) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var nodes = [], text = '', n;
  while ((n = walker.nextNode())) { nodes.push([n, text.length]); text += n.data; }
  return { text: text, nodes: nodes };
}
function offsetOf(idx, container, off) {
  if (container.nodeType === 3) {
    for (var i = 0; i < idx.nodes.length; i++) if (idx.nodes[i][0] === container) return idx.nodes[i][1] + Math.min(off, container.data.length);
  }
  var b = document.createRange();
  try { b.setStart(container, off); } catch (e) { return -1; }
  for (var j = 0; j < idx.nodes.length; j++) {
    var nr = document.createRange(); nr.selectNode(idx.nodes[j][0]);
    if (b.compareBoundaryPoints(Range.START_TO_START, nr) <= 0) return idx.nodes[j][1];
  }
  return idx.text.length;
}
function rangeFromOffsets(idx, s, e) {
  var r = document.createRange(), started = false;
  for (var i = 0; i < idx.nodes.length; i++) {
    var node = idx.nodes[i][0], st = idx.nodes[i][1], len = node.data.length;
    if (!started && s < st + len) { r.setStart(node, s - st); started = true; }
    if (started && e <= st + len) { r.setEnd(node, e - st); return r; }
  }
  return null;
}
function anchorFor(idx, s, e) {
  return { q: idx.text.slice(s, e), pre: idx.text.slice(Math.max(0, s - 40), s), suf: idx.text.slice(e, e + 40) };
}
function locate(idx, m) {
  if (!m.q) return null;
  var best = -1, bestScore = -1, from = 0, count = 0, pos;
  while ((pos = idx.text.indexOf(m.q, from)) >= 0 && count < 300) {
    var score = 0, a = idx.text.slice(0, pos), b = idx.text.slice(pos + m.q.length);
    for (var i = 1; i <= m.pre.length && a.charAt(a.length - i) === m.pre.charAt(m.pre.length - i); i++) score++;
    for (var j = 0; j < m.suf.length && b.charAt(j) === m.suf.charAt(j); j++) score++;
    if (score > bestScore) { bestScore = score; best = pos; }
    from = pos + 1; count++;
  }
  return best < 0 ? null : [best, best + m.q.length];
}
function caretOffset(idx, x, y) {
  var node, off;
  if (document.caretPositionFromPoint) { var p = document.caretPositionFromPoint(x, y); if (!p) return -1; node = p.offsetNode; off = p.offset; }
  else if (document.caretRangeFromPoint) { var r = document.caretRangeFromPoint(x, y); if (!r) return -1; node = r.startContainer; off = r.startOffset; }
  else return -1;
  return offsetOf(idx, node, off);
}

/* ---------- Ink helpers ---------- */
function inkPath(p) {
  if (!p.length) return '';
  if (p.length === 1) return 'M' + p[0][0] + ' ' + p[0][1] + 'l0.01 0';
  var d = 'M' + p[0][0] + ' ' + p[0][1];
  for (var i = 1; i < p.length - 1; i++) {
    var mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2;
    d += 'Q' + p[i][0] + ' ' + p[i][1] + ' ' + mx.toFixed(1) + ' ' + my.toFixed(1);
  }
  var l = p[p.length - 1];
  return d + 'L' + l[0] + ' ' + l[1];
}
function strokeHit(st, pt, r) {
  for (var i = 0; i < st.p.length; i++) {
    var dx = st.p[i][0] - pt[0], dy = st.p[i][1] - pt[1];
    if (dx * dx + dy * dy <= (r + st.w / 2) * (r + st.w / 2)) return true;
  }
  return false;
}

var TOOL_HINTS = {
  highlight: 'Select any text on the page to highlight it. Click a highlight to recolor it, add a note, or remove it.',
  pen: 'Draw anywhere on the page.',
  marker: 'Draw a see-through marker anywhere on the page.',
  eraser: 'Drag over a drawing to erase it.',
  note: 'Click any spot in the text to pin a note there.'
};

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
    <div className="search-backdrop edit-ui" onMouseDown={function (e) { if (e.target === e.currentTarget) props.onClose(); }}>
      <div className="note-dialog" role="dialog" aria-modal="true" aria-label={props.title}>
        <h3>{props.title}</h3>
        {props.quote ? <blockquote className="note-quote">{props.quote}</blockquote> : null}
        <label className="sr" htmlFor="note-text">Note</label>
        <textarea id="note-text" ref={ref} rows={5} value={v} placeholder="Write your note..." onChange={function (e) { setV(e.target.value); }}
          onKeyDown={function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) props.onSave(v.trim()); }} />
        <div className="row note-dialog-actions">
          {props.onDelete ? <button type="button" className="btn ghost danger-text" onClick={props.onDelete}>Delete</button> : <span />}
          <span className="row">
            <button type="button" className="btn ghost" onClick={props.onClose}>Cancel</button>
            <button type="button" className="btn" onClick={function () { props.onSave(v.trim()); }}>Save</button>
          </span>
        </div>
      </div>
    </div>
  );
}

function EditLayer(props) {
  var key = props.pageKey;
  useMarks();
  var page = MARKS.pages[key] || { marks: [], ink: [] };
  var _tool = React.useState('highlight'), tool = _tool[0], setTool = _tool[1];
  var _col = React.useState('yellow'), color = _col[0], setColor = _col[1];
  var _sz = React.useState(4), size = _sz[0], setSize = _sz[1];
  var _lay = React.useState(null), layout = _lay[0], setLayout = _lay[1];   // { rect, pins, located }
  var _pop = React.useState(null), pop = _pop[0], setPop = _pop[1];
  var _dlg = React.useState(null), dialog = _dlg[0], setDialog = _dlg[1];
  var _cl = React.useState(false), confirmClear = _cl[0], setConfirmClear = _cl[1];
  var _cur = React.useState(null), current = _cur[0], setCurrent = _cur[1];  // stroke being drawn
  var history = React.useRef([]);
  var located = React.useRef({});
  var drawing = React.useRef(null);
  var active = props.active;

  var redoStack = React.useRef([]);
  function pageJson() { return JSON.stringify(MARKS.pages[key] || { marks: [], ink: [] }); }
  function snapshot() {
    history.current.push(pageJson());
    if (history.current.length > 100) history.current.shift();
    redoStack.current = [];
  }
  function commit() { saveMarks(); }
  React.useEffect(function () { history.current = []; redoStack.current = []; setPop(null); setDialog(null); setConfirmClear(false); }, [key]);

  /* Ctrl+Z / Cmd+Z undo, Ctrl+Y or Ctrl+Shift+Z redo: on any page, unless typing in a field. */
  React.useEffect(function () {
    function onKey(e) {
      if (!(e.ctrlKey || e.metaKey)) return;
      var t = e.target;
      if (t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable)) return;
      var k = e.key.toLowerCase();
      if (k === 'z' && !e.shiftKey) { if (history.current.length) { e.preventDefault(); undo(); } }
      else if (k === 'y' || (k === 'z' && e.shiftKey)) { if (redoStack.current.length) { e.preventDefault(); redo(); } }
    }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  });

  /* Re-locate highlights and notes, paint them, and position pins and the ink layer. */
  var relayout = React.useCallback(function () {
    var root = pageRoot(); if (!root) return;
    var idx = buildIndex(root);
    var groups = {}, pins = [], loc = {};
    (MARKS.pages[key] ? MARKS.pages[key].marks : []).forEach(function (m) {
      var se = locate(idx, m);
      if (!se) return;
      var r = rangeFromOffsets(idx, se[0], se[1]);
      if (!r) return;
      loc[m.id] = { s: se[0], e: se[1], r: r };
      if (m.type === 'hl') (groups[m.c] = groups[m.c] || []).push(r);
      if (m.type === 'note' || m.note) {
        var rects = r.getClientRects();
        var box = m.type === 'note' ? rects[0] : rects[rects.length - 1];
        if (box) pins.push({ id: m.id, x: (m.type === 'note' ? box.left : box.right) + window.scrollX, y: box.top + window.scrollY, type: m.type });
      }
    });
    if (HAS_HIGHLIGHT_API) {
      MARK_COLORS.forEach(function (c) {
        var name = 'mk-' + c.k;
        if (groups[c.k] && groups[c.k].length) {
          var h = new Highlight();
          groups[c.k].forEach(function (r) { h.add(r); });
          CSS.highlights.set(name, h);
        } else CSS.highlights.delete(name);
      });
    }
    located.current = loc;
    var rr = root.getBoundingClientRect();
    setLayout({ x: rr.left + window.scrollX, y: rr.top + window.scrollY, w: rr.width, h: rr.height, pins: pins });
  }, [key]);

  React.useEffect(function () {
    var root = pageRoot(); if (!root) return;
    var t = null;
    function soon() { clearTimeout(t); t = setTimeout(relayout, 120); }
    var mo = new MutationObserver(soon);
    mo.observe(root, { childList: true, subtree: true, characterData: true });
    var ro = new ResizeObserver(soon);
    ro.observe(root);
    window.addEventListener('resize', soon);
    MARK_LISTENERS.push(soon);
    var first = setTimeout(relayout, 60);
    return function () {
      mo.disconnect(); ro.disconnect(); window.removeEventListener('resize', soon);
      MARK_LISTENERS = MARK_LISTENERS.filter(function (x) { return x !== soon; });
      clearTimeout(t); clearTimeout(first);
    };
  }, [relayout]);

  /* In edit mode: page buttons and links do nothing, and text inside them can be selected. */
  React.useEffect(function () {
    document.body.classList.toggle('editing', !!active);
    if (!active) return;
    var root = pageRoot();
    function block(e) {
      var t = e.target;
      if (t.closest && t.closest('a,button,input,select,label,textarea,summary,[role=tab]')) { e.preventDefault(); e.stopPropagation(); }
    }
    root.addEventListener('click', block, true);
    return function () { root.removeEventListener('click', block, true); document.body.classList.remove('editing'); };
  }, [active, key]);

  /* Highlight tool: highlight the selection as soon as the mouse or finger is lifted. */
  React.useEffect(function () {
    if (!active || tool !== 'highlight') return;
    function apply() {
      var s = window.getSelection(); var root = pageRoot();
      if (!s || s.rangeCount === 0 || s.isCollapsed || !root) return;
      var r = s.getRangeAt(0);
      if (!root.contains(r.commonAncestorContainer)) return;
      var idx = buildIndex(root);
      var a = offsetOf(idx, r.startContainer, r.startOffset), b = offsetOf(idx, r.endContainer, r.endOffset);
      if (a < 0 || b <= a) return;
      var q = idx.text.slice(a, b);
      if (!q.trim()) return;
      snapshot();
      var an = anchorFor(idx, a, b);
      pageData(key).marks.push({ id: markId(), type: 'hl', q: an.q, pre: an.pre, suf: an.suf, c: color, note: '', at: Date.now() });
      s.removeAllRanges();
      commit();
    }
    function later() { setTimeout(apply, 30); }
    document.addEventListener('mouseup', later);
    document.addEventListener('touchend', later);
    return function () { document.removeEventListener('mouseup', later); document.removeEventListener('touchend', later); };
  }, [active, tool, color, key]);

  /* Clicks on the page: open an existing highlight (highlight tool) or pin a note (note tool). */
  React.useEffect(function () {
    var root = pageRoot(); if (!root) return;
    function onClick(e) {
      if (!active) return;
      if (tool !== 'highlight' && tool !== 'note') return;
      var sel = window.getSelection();
      if (sel && !sel.isCollapsed) return;
      var idx = buildIndex(root);
      var off = caretOffset(idx, e.clientX, e.clientY);
      if (off < 0) return;
      if (tool === 'highlight') {
        var hit = null;
        (MARKS.pages[key] ? MARKS.pages[key].marks : []).forEach(function (m) {
          var l = located.current[m.id];
          if (m.type === 'hl' && l && off >= l.s && off < l.e) hit = m;
        });
        if (hit) setPop({ id: hit.id, x: e.clientX, y: e.clientY });
        else setPop(null);
      } else {
        if (!idx.text.length) return;
        var s = Math.min(off, idx.text.length - 1);
        var e2 = Math.min(idx.text.length, s + 24);
        var an = anchorFor(idx, s, e2);
        setDialog({ mode: 'new', anchor: an, quote: null });
      }
    }
    root.addEventListener('click', onClick);
    return function () { root.removeEventListener('click', onClick); };
  }, [active, tool, key]);

  /* ---------- mark operations ---------- */
  function findMark(id) { return (MARKS.pages[key] ? MARKS.pages[key].marks : []).find(function (m) { return m.id === id; }); }
  function patchMark(id, patch) { snapshot(); var m = findMark(id); if (m) Object.assign(m, patch); commit(); }
  function removeMark(id) { snapshot(); var p = pageData(key); p.marks = p.marks.filter(function (m) { return m.id !== id; }); commit(); setPop(null); setDialog(null); }
  function saveDialog(text) {
    if (dialog.mode === 'new') {
      if (text) { snapshot(); pageData(key).marks.push({ id: markId(), type: 'note', q: dialog.anchor.q, pre: dialog.anchor.pre, suf: dialog.anchor.suf, c: 'yellow', note: text, at: Date.now() }); commit(); }
    } else {
      var m = findMark(dialog.id);
      if (m && m.type === 'note' && !text) removeMark(dialog.id);
      else patchMark(dialog.id, { note: text });
    }
    setDialog(null);
  }
  function undo() {
    var prev = history.current.pop(); if (!prev) return;
    redoStack.current.push(pageJson());
    MARKS.pages[key] = JSON.parse(prev); setPop(null); commit();
  }
  function redo() {
    var next = redoStack.current.pop(); if (!next) return;
    history.current.push(pageJson());
    MARKS.pages[key] = JSON.parse(next); setPop(null); commit();
  }
  function clearPage() { snapshot(); MARKS.pages[key] = { marks: [], ink: [] }; commit(); setConfirmClear(false); }

  /* ---------- drawing ---------- */
  var drawTool = active && (tool === 'pen' || tool === 'marker' || tool === 'eraser');
  function unit() { return layout && layout.w ? 1000 / layout.w : 1; }
  function toUnits(e) {
    var root = pageRoot(); var rr = root.getBoundingClientRect(); var k = 1000 / rr.width;
    return [Math.round((e.clientX - rr.left) * k * 10) / 10, Math.round((e.clientY - rr.top) * k * 10) / 10];
  }
  function eraseAt(pt) {
    var p = MARKS.pages[key]; if (!p || !p.ink.length) return;
    var r = 10 * unit();
    var keep = p.ink.filter(function (st) { return !strokeHit(st, pt, r); });
    if (keep.length !== p.ink.length) { if (!drawing.current.erased) { snapshot(); drawing.current.erased = true; } p.ink = keep; commit(); }
  }
  function down(e) {
    if (!drawTool) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    var pt = toUnits(e);
    if (tool === 'eraser') { drawing.current = { erased: false }; eraseAt(pt); return; }
    var k = unit();
    drawing.current = { tool: tool, c: color, w: Math.round((tool === 'marker' ? size * 4 : size) * k * 10) / 10, p: [pt] };
    setCurrent(Object.assign({}, drawing.current));
  }
  function move(e) {
    if (!drawing.current) return;
    var pt = toUnits(e);
    if (tool === 'eraser') { eraseAt(pt); return; }
    var p = drawing.current.p, last = p[p.length - 1];
    if (Math.abs(pt[0] - last[0]) + Math.abs(pt[1] - last[1]) < 1.5 * unit()) return;
    p.push(pt);
    setCurrent({ tool: drawing.current.tool, c: drawing.current.c, w: drawing.current.w, p: p.slice() });
  }
  function up() {
    var d = drawing.current; drawing.current = null;
    if (!d || tool === 'eraser') return;
    snapshot();
    pageData(key).ink.push({ tool: d.tool, c: d.c, w: d.w, p: d.p });
    setCurrent(null);
    commit();
  }

  var popMark = pop ? findMark(pop.id) : null;
  var ink = page.ink;
  var dialogMark = dialog && dialog.id ? findMark(dialog.id) : null;
  var inkView = layout ? '0 0 1000 ' + (1000 * layout.h / Math.max(1, layout.w)).toFixed(1) : '0 0 1000 1000';

  var layer = (
    <div className="edit-ui">
      {layout && (ink.length || current || drawTool) ? (
        <svg className={'ink-layer' + (drawTool ? ' drawing tool-' + tool : '')} viewBox={inkView} preserveAspectRatio="none"
          style={{ left: layout.x + 'px', top: layout.y + 'px', width: layout.w + 'px', height: layout.h + 'px' }}
          onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
          {ink.concat(current ? [current] : []).map(function (st, i) {
            return <path key={i} d={inkPath(st.p)} fill="none" stroke={inkColor(st.c)} strokeWidth={st.w} strokeLinecap="round" strokeLinejoin="round" opacity={st.tool === 'marker' ? 0.35 : 1} />;
          })}
        </svg>
      ) : null}

      {layout ? layout.pins.map(function (p) {
        var m = findMark(p.id); if (!m) return null;
        return (
          <button key={p.id} type="button" className={'note-pin' + (p.type === 'note' ? ' pin-note' : ' pin-hl')} style={{ left: p.x + 'px', top: p.y + 'px' }}
            title={m.note} aria-label={'Note: ' + m.note}
            onClick={function (e) { e.stopPropagation(); setDialog({ mode: 'edit', id: m.id, quote: m.type === 'hl' ? m.q : null }); }}>
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 4h14v12l-5 4H5z" fill="currentColor" /></svg>
          </button>
        );
      }) : null}

      {active ? (
        <div className="edit-toolbar" role="toolbar" aria-label="Edit tools">
          <p className="edit-hint">{HAS_HIGHLIGHT_API || tool !== 'highlight' ? TOOL_HINTS[tool] : 'Text highlighting needs a newer browser (Chrome, Edge, Safari 17.2+, or Firefox 140+). Pen, marker, and notes still work.'}</p>
          <div className="edit-row">
            <div className="edit-group">
              {[['highlight', 'Highlight'], ['pen', 'Pen'], ['marker', 'Marker'], ['eraser', 'Eraser'], ['note', 'Note']].map(function (t) {
                return <button key={t[0]} type="button" className={'tool-btn' + (tool === t[0] ? ' on' : '')} aria-pressed={tool === t[0]} onClick={function () { setTool(t[0]); setPop(null); }}>{t[1]}</button>;
              })}
            </div>
            {tool !== 'eraser' && tool !== 'note' ? (
              <div className="edit-group">
                {MARK_COLORS.concat(tool === 'highlight' ? [] : [{ k: 'ink', t: 'Black / white' }, { k: 'red', t: 'Red' }]).map(function (c) {
                  return <button key={c.k} type="button" className={'ink-dot' + (color === c.k ? ' on' : '')} style={{ background: tool === 'highlight' ? undefined : inkColor(c.k) }}
                    data-c={c.k} aria-label={c.t} title={c.t} aria-pressed={color === c.k} onClick={function () { setColor(c.k); }} />;
                })}
              </div>
            ) : null}
            {tool === 'pen' || tool === 'marker' ? (
              <div className="edit-group">
                {[[2, 'Thin'], [4, 'Medium'], [8, 'Thick']].map(function (s) {
                  return <button key={s[0]} type="button" className={'size-btn' + (size === s[0] ? ' on' : '')} aria-label={s[1]} title={s[1]} aria-pressed={size === s[0]} onClick={function () { setSize(s[0]); }}><span style={{ width: s[0] + 4 + 'px', height: s[0] + 4 + 'px' }} /></button>;
                })}
              </div>
            ) : null}
            <div className="edit-group">
              <button type="button" className="tool-btn" onClick={undo} disabled={!history.current.length} title="Undo (Ctrl+Z)">Undo</button>
              <button type="button" className="tool-btn" onClick={redo} disabled={!redoStack.current.length} title="Redo (Ctrl+Y)">Redo</button>
              {!confirmClear
                ? <button type="button" className="tool-btn" onClick={function () { setConfirmClear(true); }} disabled={!page.marks.length && !page.ink.length}>Clear page</button>
                : <button type="button" className="tool-btn danger-text" onClick={clearPage}>Clear all on this page?</button>}
            </div>
            <button type="button" className="btn small" onClick={props.onDone}>Done</button>
          </div>
        </div>
      ) : null}

      {popMark ? (
        <div className="hl-toolbar" style={{ left: Math.max(8, Math.min(window.innerWidth - 308, pop.x - 150)) + 'px', top: Math.min(window.innerHeight - 140, pop.y + 14) + 'px' }}>
          {MARK_COLORS.map(function (c) {
            return <button key={c.k} type="button" className={'swatch sw-' + c.k + (popMark.c === c.k ? ' on' : '')} aria-label={'Change to ' + c.t} onClick={function () { patchMark(popMark.id, { c: c.k }); }} />;
          })}
          <span className="hl-sep" />
          <button type="button" className="hl-text-btn" onClick={function () { setDialog({ mode: 'edit', id: popMark.id, quote: popMark.q }); setPop(null); }}>{popMark.note ? 'Edit note' : '+ Note'}</button>
          <button type="button" className="hl-text-btn danger-text" onClick={function () { removeMark(popMark.id); }}>Remove</button>
        </div>
      ) : null}

      {dialog ? (
        <NoteDialog title={dialog.mode === 'new' ? 'New note' : (dialogMark && dialogMark.type === 'hl' ? 'Note on highlight' : 'Note')}
          quote={dialog.quote} value={dialogMark ? dialogMark.note : ''}
          onSave={saveDialog} onClose={function () { setDialog(null); }}
          onDelete={dialog.mode === 'edit' ? function () { if (dialogMark && dialogMark.type === 'hl') { patchMark(dialog.id, { note: '' }); setDialog(null); } else removeMark(dialog.id); } : null} />
      ) : null}
    </div>
  );
  return ReactDOM.createPortal(layer, document.body);
}

/* ---------- Notes page: everything in one place ---------- */
function pageLabel(key) {
  var parts = key.split('/');
  var ch = window.COURSE.chapters.find(function (c) { return c.id === parts[0]; });
  if (ch) {
    var it = chapterSections(ch).find(function (x) { return x.id === parts[1]; });
    return { group: ch.label + ': ' + ch.title, title: it ? it.t : 'Chapter page' };
  }
  var names = { home: 'Home', cards: 'Flashcards', mistakes: 'My mistakes', notes: 'Notes', 'mock/official': 'Lecturer\'s mock exam', 'mock/practice': 'Practice mock exam' };
  return { group: 'Other pages', title: names[key] || key };
}

function NotesPage(props) {
  useMarks();
  var keys = Object.keys(MARKS.pages).filter(function (k) { var p = MARKS.pages[k]; return p.marks.length || p.ink.length; });
  var orderKey = {};
  var n = 0;
  window.COURSE.chapters.forEach(function (ch) { chapterSections(ch).forEach(function (it) { orderKey[ch.id + '/' + it.id] = n++; }); });
  keys.sort(function (a, b) { return (orderKey[a] === undefined ? 1e6 : orderKey[a]) - (orderKey[b] === undefined ? 1e6 : orderKey[b]); });

  return (
    <div className="wrap page narrow">
      <h1>My notes</h1>
      <p className="lead">Everything you highlighted, noted, or drew, on every page. Press <b>Edit</b> in the top bar on any page to add more.</p>
      {!keys.length ? <p className="empty">Nothing yet. Open any page, press Edit, and select some text, draw, or pin a note.</p> : null}
      {keys.map(function (k) {
        var p = MARKS.pages[k], lab = pageLabel(k);
        var hls = p.marks.filter(function (m) { return m.type === 'hl'; });
        var notes = p.marks.filter(function (m) { return m.type === 'note'; });
        return (
          <section key={k} className="panel note-card">
            <p className="eyebrow">{lab.group}</p>
            <h3><button type="button" className="link" onClick={function () { props.onOpenPage(k); }}>{lab.title}</button></h3>
            {notes.map(function (m) { return <p key={m.id} className="note-text">{m.note}</p>; })}
            {hls.length ? (
              <ul className="plain hl-list">
                {hls.map(function (m) {
                  return <li key={m.id}><span className={'hl hl-' + m.c}>{m.q.length > 260 ? m.q.slice(0, 260) + '…' : m.q}</span>{m.note ? <span className="hl-note">{m.note}</span> : null}</li>;
                })}
              </ul>
            ) : null}
            {p.ink.length ? <p className="muted small">{p.ink.length} drawing stroke{p.ink.length === 1 ? '' : 's'} on this page.</p> : null}
          </section>
        );
      })}
    </div>
  );
}
