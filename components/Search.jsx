/* Full-text search across every lesson, question (text, options, explanations, model answers,
   worked solutions), mock exam, and flashcard. All typed words must appear (any order, any case).
   Opens from the top bar, or with "/" or Ctrl+K. */

var SEARCH_INDEX = null;

function stripHtml(html) {
  var d = document.createElement('div');
  d.innerHTML = html || '';
  return (d.textContent || '').replace(/\s+/g, ' ').trim();
}

function questionText(q) {
  var parts = [q.q];
  if (q.o) q.o.forEach(function (o, i) { parts.push(LETTERS[i] + ') ' + o[0]); parts.push(stripHtml(o[1])); });
  if (q.k) parts.push(q.k);
  if (q.m) parts.push(stripHtml(q.m));
  if (q.sol) parts.push(stripHtml(q.sol));
  if (q.fields) q.fields.forEach(function (f) { parts.push(f.t + ' ' + f.ans); });
  return parts.join(' · ');
}

function buildSearchIndex() {
  if (SEARCH_INDEX) return SEARCH_INDEX;
  var C = window.COURSE;
  var out = [];
  function add(e) { e.lower = (e.title + ' · ' + e.text).toLowerCase(); out.push(e); }
  function addQs(qs, ch, place, target) {
    qs.forEach(function (q, i) {
      add({ kind: 'Question', title: q.q, where: place + ' · question ' + (i + 1), ch: ch, text: questionText(q), target: Object.assign({ anchor: 'q-' + q.id }, target) });
    });
  }
  C.chapters.forEach(function (ch) {
    var chName = ch.label + ': ' + ch.title;
    ch.lessons.forEach(function (ls, i) {
      add({ kind: 'Lesson', title: ls.t, where: chName + ' · lesson ' + (i + 1), ch: ch, text: ls.src + ' · ' + stripHtml(ls.body), target: { route: ch.id, item: ls.id } });
      addQs(ls.quiz, ch, chName + ' · ' + ls.t, { route: ch.id, item: ls.id });
    });
    ch.groups.forEach(function (g) { addQs(g.qs, ch, chName + ' · ' + g.t, { route: ch.id, item: g.id }); });
    addQs(ch.exam, ch, chName + ' · final exam', { route: ch.id, item: ch.id + '-exam', anchor: null });
  });
  C.official.forEach(function (q, i) {
    add({ kind: 'Question', title: q.q, where: 'Lecturer\'s mock exam · question ' + (i + 1), text: questionText(q), target: { route: 'mock', tab: 'official', anchor: 'q-' + q.id } });
  });
  C.mock.forEach(function (q) {
    add({ kind: 'Question', title: q.q, where: 'Practice mock exam', text: questionText(q), target: { route: 'mock', tab: 'practice' } });
  });
  C.cards.forEach(function (c, i) {
    var ch = C.chapters[c.c - 1] || {};
    add({ kind: 'Flashcard', title: c.f, where: 'Flashcards · ' + (ch.label || '') + ': ' + (ch.title || ''), text: stripHtml(c.b), target: { route: 'cards', card: i } });
  });
  SEARCH_INDEX = out;
  return out;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
}
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* A short excerpt around the first match, with every search word highlighted. */
function snippet(text, words) {
  var lower = text.toLowerCase();
  var pos = -1;
  words.forEach(function (w) { var p = lower.indexOf(w); if (p >= 0 && (pos < 0 || p < pos)) pos = p; });
  var start = Math.max(0, pos - 70);
  var end = Math.min(text.length, (pos < 0 ? 0 : pos) + 170);
  var cut = (start > 0 ? '… ' : '') + text.slice(start, end) + (end < text.length ? ' …' : '');
  return highlight(cut, words);
}
function highlight(text, words) {
  var html = escapeHtml(text);
  if (!words.length) return html;
  var re = new RegExp('(' + words.map(function (w) { return escapeRe(escapeHtml(w)); }).join('|') + ')', 'gi');
  return html.replace(re, '<mark>$1</mark>');
}

function SearchDialog(props) {
  var _q = React.useState(''), query = _q[0], setQuery = _q[1];
  var _f = React.useState('all'), filter = _f[0], setFilter = _f[1];
  var _a = React.useState(0), active = _a[0], setActive = _a[1];
  var inputRef = React.useRef(null);
  var index = React.useMemo(buildSearchIndex, []);

  React.useEffect(function () {
    if (inputRef.current) inputRef.current.focus();
    function onKey(e) { if (e.key === 'Escape') props.onClose(); }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return function () { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);

  var words = query.toLowerCase().split(/\s+/).filter(function (w) { return w.length > 0; });
  var all = words.length ? index.filter(function (e) { return words.every(function (w) { return e.lower.indexOf(w) >= 0; }); }) : [];
  /* Rank: title matches first, then lessons, then by how early the match appears. */
  all.sort(function (a, b) {
    var at = words.every(function (w) { return a.title.toLowerCase().indexOf(w) >= 0; }) ? 0 : 1;
    var bt = words.every(function (w) { return b.title.toLowerCase().indexOf(w) >= 0; }) ? 0 : 1;
    if (at !== bt) return at - bt;
    var order = { Lesson: 0, Flashcard: 1, Question: 2 };
    return order[a.kind] - order[b.kind];
  });
  var counts = { all: all.length, Lesson: 0, Question: 0, Flashcard: 0 };
  all.forEach(function (e) { counts[e.kind]++; });
  var results = (filter === 'all' ? all : all.filter(function (e) { return e.kind === filter; })).slice(0, 80);

  function open(e) { props.onOpen(e.target); props.onClose(); }
  function onInputKey(ev) {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); setActive(Math.min(active + 1, results.length - 1)); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); setActive(Math.max(active - 1, 0)); }
    else if (ev.key === 'Enter' && results[active]) { open(results[active]); }
  }

  return (
    <div className="search-backdrop" onMouseDown={function (e) { if (e.target === e.currentTarget) props.onClose(); }}>
      <div className="search-box" role="dialog" aria-modal="true" aria-label="Search">
        <div className="search-head">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <label className="sr" htmlFor="search-input">Search everything</label>
          <input id="search-input" ref={inputRef} type="search" autoComplete="off" spellCheck="false" value={query}
            placeholder="Search lessons, questions, answers, flashcards..."
            onChange={function (e) { setQuery(e.target.value); setActive(0); }} onKeyDown={onInputKey} />
          <button type="button" className="btn ghost small" onClick={props.onClose}>Close</button>
        </div>
        {words.length ? (
          <div className="chips search-filters" role="group" aria-label="Filter results">
            {[['all', 'All'], ['Lesson', 'Lessons'], ['Question', 'Questions'], ['Flashcard', 'Flashcards']].map(function (f) {
              return <button key={f[0]} type="button" className={'chip' + (filter === f[0] ? ' on' : '')} aria-pressed={filter === f[0]} onClick={function () { setFilter(f[0]); setActive(0); }}>{f[1]} <span className="muted">{counts[f[0]]}</span></button>;
            })}
          </div>
        ) : null}
        <div className="search-results">
          {!words.length ? (
            <p className="muted search-empty">Type any word or phrase. Every word you type must appear, in any order. Searches lesson text, question text, all answer options, explanations, model answers, worked solutions, and flashcards.</p>
          ) : !results.length ? (
            <p className="muted search-empty">No matches for "{query}".</p>
          ) : (
            <ul className="plain">
              {results.map(function (e, i) {
                return (
                  <li key={i}>
                    <button type="button" className={'result-item' + (i === active ? ' active' : '')} onMouseEnter={function () { setActive(i); }} onClick={function () { open(e); }}>
                      <span className="result-meta"><span className={'kind k-' + e.kind}>{e.kind}</span>{e.where}</span>
                      <span className="result-title" dangerouslySetInnerHTML={{ __html: highlight(e.title.length > 160 ? e.title.slice(0, 160) + ' …' : e.title, words) }} />
                      <span className="result-snip" dangerouslySetInnerHTML={{ __html: snippet(e.text, words) }} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {all.length > results.length && filter === 'all' ? <p className="muted small search-empty">Showing the first 80 of {all.length}. Add another word to narrow it down.</p> : null}
        </div>
      </div>
    </div>
  );
}

/* Scroll to an element once it has rendered (the target page may still be mounting). */
function scrollToAnchor(id, tries) {
  var el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('flash-hit');
    setTimeout(function () { el.classList.remove('flash-hit'); }, 2200);
  } else if ((tries || 0) < 20) {
    setTimeout(function () { scrollToAnchor(id, (tries || 0) + 1); }, 100);
  }
}
