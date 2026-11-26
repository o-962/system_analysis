/* Review tools: Flashcards (know / not yet) and the global Mistakes page. */

function ChapterFilter(props) {
  var opts = [{ v: 'all', t: 'All chapters' }].concat(window.COURSE.chapters.map(function (ch) { return { v: ch.id, t: ch.short }; }));
  return (
    <div className="chips" role="group" aria-label="Filter by chapter">
      {opts.map(function (o) {
        return <button key={o.v} type="button" className={'chip' + (props.value === o.v ? ' on' : '')} aria-pressed={props.value === o.v} onClick={function () { props.onChange(o.v); }}>{o.t}</button>;
      })}
    </div>
  );
}

function Flashcards(props) {
  var store = useStore();
  var st = store.st;
  var _f = React.useState('all'), filter = _f[0], setFilter = _f[1];
  var _u = React.useState(false), onlyNew = _u[0], setOnlyNew = _u[1];
  var _i = React.useState(0), idx = _i[0], setIdx = _i[1];
  var _fl = React.useState(false), flipped = _fl[0], setFlipped = _fl[1];

  /* Opened from search: show that exact card, with all filters cleared. */
  React.useEffect(function () {
    if (props.jump) { setFilter('all'); setOnlyNew(false); setIdx(props.jump.i); setFlipped(false); }
  }, [props.jump && props.jump.n]);

  function key(c) { return c.c + ':' + c.f; }
  var deck = window.COURSE.cards.filter(function (c) {
    return (filter === 'all' || 'ch' + c.c === filter) && (!onlyNew || st.cards[key(c)] !== 1);
  });
  var i = deck.length ? Math.min(idx, deck.length - 1) : 0;
  var card = deck[i];
  var knownN = deck.filter(function (c) { return st.cards[key(c)] === 1; }).length;

  function go(d) { setFlipped(false); setIdx(deck.length ? (i + d + deck.length) % deck.length : 0); }
  function mark(v) {
    var k = key(card);
    store.up(function (s) { var cs = Object.assign({}, s.cards); cs[k] = v; return Object.assign({}, s, { cards: cs }); });
    setFlipped(false);
    if (!(onlyNew && v === 1)) setIdx(deck.length ? (i + 1) % deck.length : 0);
  }

  React.useEffect(function () {
    function onKey(e) {
      if (e.target && /TEXTAREA|INPUT|SELECT/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === ' ') { e.preventDefault(); setFlipped(function (f) { return !f; }); }
    }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  });

  return (
    <div className="wrap page">
      <h1>Flashcards</h1>
      <p className="lead">Click a card (or press Space) to flip it. Use the arrow keys to move.</p>
      <ChapterFilter value={filter} onChange={function (v) { setFilter(v); setIdx(0); setFlipped(false); }} />
      <label className="check"><input id="only-new" type="checkbox" checked={onlyNew} onChange={function (e) { setOnlyNew(e.target.checked); setIdx(0); }} /> Only show cards I don't know yet</label>
      {card ? (
        <>
          <button type="button" className={'flash' + (flipped ? ' flipped' : '')} onClick={function () { setFlipped(!flipped); }} aria-label={flipped ? 'Show term' : 'Show definition'}>
            <span className="face front"><small>{(window.COURSE.chapters[card.c - 1] || {}).label}: {(window.COURSE.chapters[card.c - 1] || {}).title}</small>{card.f}</span>
            <span className="face back"><span className="back-inner" dangerouslySetInnerHTML={{ __html: prettyText(card.b) }} /></span>
          </button>
          <div className="flash-controls">
            <button type="button" className="btn ghost" onClick={function () { go(-1); }}>← Previous</button>
            <div className="row">
              <button type="button" className="btn ghost" onClick={function () { mark(0); }}>Not yet</button>
              <button type="button" className="btn" onClick={function () { mark(1); }}>I know this</button>
            </div>
            <button type="button" className="btn ghost" onClick={function () { go(1); }}>Next →</button>
          </div>
          <p className="muted center small">Card {i + 1} of {deck.length} · {knownN} known</p>
        </>
      ) : <p className="empty">No cards left in this set. You know them all.</p>}
    </div>
  );
}

function MistakesPage(props) {
  var _f = React.useState('all'), filter = _f[0], setFilter = _f[1];
  return (
    <div className="wrap page">
      <h1>My mistakes</h1>
      <p className="lead">Every question you last answered incorrectly, across all chapters. Each chapter also has its own "My mistakes" section.</p>
      <ChapterFilter value={filter} onChange={setFilter} />
      <MistakesList key={filter} chId={filter === 'all' ? null : filter} onJump={props.onJump} />
    </div>
  );
}
