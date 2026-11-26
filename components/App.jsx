/* App shell: hash routing, the store provider, the top bar (with dark mode and a phone menu), and the mock exam page. */

var ROUTES = ['home', 'ch1', 'ch2', 'ch3', 'ch4', 'mock', 'cards', 'notes', 'mistakes'];

function currentRoute() {
  var h = (location.hash || '').replace('#', '');
  return ROUTES.indexOf(h) >= 0 ? h : 'home';
}

function TopBar(props) {
  var _o = React.useState(false), open = _o[0], setOpen = _o[1];
  var links = [
    { r: 'home', t: 'Home' },
    { r: 'ch1', t: 'Chapter 1' },
    { r: 'ch2', t: 'Chapter 2' },
    { r: 'ch3', t: 'Ch 3 · Financial' },
    { r: 'ch4', t: 'Ch 3 · Projects' },
    { r: 'mock', t: 'Mock exam' },
    { r: 'cards', t: 'Flashcards' },
    { r: 'notes', t: 'Notes' },
    { r: 'mistakes', t: 'My mistakes' + (props.mistakes ? ' (' + props.mistakes + ')' : '') }
  ];
  React.useEffect(function () { setOpen(false); }, [props.route]);
  var dark = props.theme === 'dark';
  return (
    <header className="top">
      <div className="wrap top-in">
        <nav className={'nav' + (open ? ' open' : '')} id="main-nav">
          {links.map(function (l) {
            return <a key={l.r} href={'#' + l.r} className={props.route === l.r ? 'on' : ''} aria-current={props.route === l.r ? 'page' : undefined}>{l.t}</a>;
          })}
        </nav>
        <div className="top-actions">
          <button type="button" className="theme-btn search-btn" onClick={props.onSearch} aria-label="Search everything" title="Search (/ or Ctrl+K)">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          <button type="button" className="theme-btn" onClick={props.onToggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'}>
            {dark
              ? <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor" /><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></g></svg>
              : <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor" /></svg>}
          </button>
          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="main-nav" onClick={function () { setOpen(!open); }}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
}

function MockPage(props) {
  var tab = props.tab, setTab = props.setTab;
  return (
    <div className="wrap page narrow">
      <h1>Mock exams</h1>
      <p className="lead">Same format as the lecturer's mock midterm: multiple choice with "Both", "All of the above" and "None of the above" options, a cash flow calculation, and a written recommendation.</p>
      <div className="tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'official'} className={'tab' + (tab === 'official' ? ' on' : '')} onClick={function () { setTab('official'); }}>Lecturer's mock</button>
        <button type="button" role="tab" aria-selected={tab === 'practice'} className={'tab' + (tab === 'practice' ? ' on' : '')} onClick={function () { setTab('practice'); }}>Practice mock</button>
      </div>
      {tab === 'official' ? (
        <Exam key="official" examId="mock-official" isMock title="Lecturer's mock midterm, with worked answers" onJump={props.onJump}
          note="The exact questions from the mock exam PDF. Answer them, submit, then read the worked solutions and explanations."
          build={function () { return window.COURSE.official.slice(); }} />
      ) : (
        <Exam key="practice" examId="mock" isMock title="Practice mock exam" onJump={props.onJump}
          note="20 new multiple-choice questions from all chapters (random each attempt), one cash flow calculation, and written questions. None appear in the lessons."
          build={function () {
            var m = window.COURSE.mock;
            var mcq = shuffled(m.filter(function (q) { return !q.open && !q.calc; })).slice(0, 20);
            return mcq.concat(m.filter(function (q) { return q.calc; }), m.filter(function (q) { return q.open; }));
          }} />
      )}
    </div>
  );
}

function App() {
  var _st = React.useState(function () { return withDefaults(loadState()); }), st = _st[0], setSt = _st[1];
  var _r = React.useState(currentRoute()), route = _r[0], setRoute = _r[1];
  var _th = React.useState(getTheme()), theme = _th[0], setTheme = _th[1];
  var _c = React.useState(false), confirmReset = _c[0], setConfirmReset = _c[1];
  var _sr = React.useState(false), searching = _sr[0], setSearching = _sr[1];
  var _mt = React.useState('official'), mockTab = _mt[0], setMockTab = _mt[1];
  var _cj = React.useState(null), cardJump = _cj[0], setCardJump = _cj[1];
  var _ed = React.useState(false), editing = _ed[0], setEditing = _ed[1];
  var _ae = React.useState(false), annotError = _ae[0], setAnnotError = _ae[1];

  React.useEffect(function () {
    function onErr() { setAnnotError(true); }
    window.addEventListener('annot-error', onErr);
    return function () { window.removeEventListener('annot-error', onErr); };
  }, []);

  /* Open search with "/" or Ctrl+K (not while typing in a field). */
  React.useEffect(function () {
    function onKey(e) {
      var typing = e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
      if ((e.key === '/' && !typing) || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K'))) {
        e.preventDefault(); setSearching(true);
      }
    }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  }, []);

  React.useEffect(function () { applyTheme(theme); }, [theme]);
  React.useEffect(function () {
    function onHash() { setRoute(currentRoute()); window.scrollTo(0, 0); }
    window.addEventListener('hashchange', onHash);
    return function () { window.removeEventListener('hashchange', onHash); };
  }, []);

  var up = React.useCallback(function (fn) {
    setSt(function (prev) { var next = fn(prev); saveState(next); return next; });
  }, []);

  /* Open a specific section inside a chapter. */
  var onJump = React.useCallback(function (chId, itemId) {
    up(function (s) { var c = Object.assign({}, s.cur); c[chId] = itemId; return Object.assign({}, s, { cur: c }); });
    goTo(chId);
  }, [up]);

  /* Go to a search result: a chapter section, a mock exam tab, or a flashcard, then scroll to it. */
  function openResult(t) {
    if (t.route === 'mock') { setMockTab(t.tab); goTo('mock'); }
    else if (t.route === 'cards') { setCardJump({ i: t.card, n: Date.now() }); goTo('cards'); }
    else onJump(t.route, t.item);
    if (t.anchor) setTimeout(function () { scrollToAnchor(t.anchor); }, 150);
  }

  var store = React.useMemo(function () { return { st: st, up: up }; }, [st, up]);
  var mistakes = Object.keys(st.ans).filter(function (id) { return st.ans[id].c === false; }).length;

  /* Which page is on screen: highlights, notes, and drawings are saved per page. */
  var pageKey = route;
  if (route === 'mock') pageKey = 'mock/' + mockTab;
  var chObj = window.COURSE.chapters.find(function (c) { return c.id === route; });
  if (chObj) {
    var secs = chapterSections(chObj);
    var curSec = secs.some(function (x) { return x.id === st.cur[route]; }) ? st.cur[route] : secs[0].id;
    pageKey = route + '/' + curSec;
  }

  /* Open a page from the Notes list. */
  function openPage(k) {
    var parts = k.split('/');
    if (parts[0] === 'mock') { setMockTab(parts[1]); goTo('mock'); }
    else if (parts[1]) onJump(parts[0], parts[1]);
    else goTo(parts[0]);
  }

  var page;
  if (route === 'home') page = <Home onJump={onJump} />;
  else if (route === 'mock') page = <MockPage onJump={onJump} tab={mockTab} setTab={setMockTab} />;
  else if (route === 'cards') page = <Flashcards jump={cardJump} />;
  else if (route === 'mistakes') page = <MistakesPage onJump={onJump} />;
  else if (route === 'notes') page = <NotesPage onOpenPage={openPage} />;
  else {
    var ch = window.COURSE.chapters.find(function (c) { return c.id === route; });
    page = <ChapterView key={ch.id} ch={ch} onJump={onJump} />;
  }

  return (
    <StoreCtx.Provider value={store}>
      <TopBar route={route} mistakes={mistakes} theme={theme} editing={editing} onToggleEdit={function () { setEditing(!editing); }} onSearch={function () { setSearching(true); }} onToggleTheme={function () { setTheme(theme === 'dark' ? 'light' : 'dark'); }} />
      {annotError ? <div className="toast" role="alert">Your notes could not be saved: browser storage is full. Clear some drawings or highlights. <button type="button" className="link" onClick={function () { setAnnotError(false); }}>Dismiss</button></div> : null}
      {searching ? <SearchDialog onClose={function () { setSearching(false); }} onOpen={openResult} /> : null}
      <div id="page-root">{page}</div>
      <EditLayer pageKey={pageKey} active={editing} onDone={function () { setEditing(false); }} />
      {!editing ? (
        <button type="button" className="edit-fab" onClick={function () { setEditing(true); }} aria-label="Edit: highlight, draw, and take notes on this page" title="Highlight, draw, and take notes">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 20l1.2-4.6L15.6 5a2 2 0 0 1 2.8 0l.6.6a2 2 0 0 1 0 2.8L8.6 18.8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M13.8 6.8l3.4 3.4" stroke="currentColor" strokeWidth="2" /><path d="M4 20l4.6-1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      ) : null}
      <footer className="foot">
        <div className="wrap foot-in">
          <p>Sources: your four chapters (Introduction to Information Systems, Analyzing a Business Case, Financial Analysis, Managing System Projects) with speaker notes, the lecturer's mock exam and financial analysis exercise, annotated slide screenshots, the lecture notebook, and the class whiteboard. Progress is saved in this browser only.</p>
          {!confirmReset
            ? <button type="button" className="btn ghost small" onClick={function () { setConfirmReset(true); }}>Reset progress</button>
            : <span className="row">
                <button type="button" className="btn danger small" onClick={function () { up(function () { return withDefaults({}); }); setConfirmReset(false); }}>Yes, erase everything</button>
                <button type="button" className="btn ghost small" onClick={function () { setConfirmReset(false); }}>Cancel</button>
              </span>}
        </div>
      </footer>
    </StoreCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
