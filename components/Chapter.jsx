/* Chapter page: a section list on the left (lessons, practice sets, final exam, my mistakes),
   the selected section on the right, and Previous / Next at the bottom. Every section is open. */

function chapterSections(ch) {
  var items = chapterItems(ch);
  items.push({ type: 'mistakes', id: ch.id + '-mistakes', t: 'My mistakes' });
  return items;
}

function SectionNav(props) {
  var st = useStore().st;
  var groups = [
    { label: 'Lessons', types: ['lesson'] },
    { label: 'Practice', types: ['group'] },
    { label: 'Review', types: ['exam', 'mistakes'] }
  ];
  var lessonNo = 0;
  var numbers = {};
  props.items.forEach(function (it) { if (it.type === 'lesson') numbers[it.id] = ++lessonNo; });

  return (
    <nav className="sections" aria-label="Chapter sections">
      {groups.map(function (g) {
        return (
          <div key={g.label} className="sec-group">
            <p className="sec-label">{g.label}</p>
            <ul>
              {props.items.filter(function (it) { return g.types.indexOf(it.type) >= 0; }).map(function (it) {
                var done = st.done[it.id] !== undefined;
                var extra = it.type === 'mistakes' ? props.mistakeCount : (it.type === 'exam' && done ? st.done[it.id] + '%' : null);
                return (
                  <li key={it.id}>
                    <button type="button" className={'sec' + (props.cur === it.id ? ' cur' : '')} aria-current={props.cur === it.id ? 'true' : undefined} onClick={function () { props.onSelect(it.id); }}>
                      <span className={'tick' + (done ? ' done' : '')} aria-hidden="true">{done ? '✓' : (numbers[it.id] || '')}</span>
                      <span className="sec-t">{it.t}</span>
                      {extra !== null && extra !== undefined && extra !== 0 ? <span className="sec-x">{extra}</span> : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

function MistakesList(props) {
  var store = useStore();
  var _r = React.useState(0), round = _r[0], setRound = _r[1];
  var idx = qIndex();
  /* Freeze the list for this round so questions don't disappear while you answer them. */
  var qs = React.useMemo(function () {
    var ans = store.st.ans;
    return Object.keys(ans)
      .filter(function (id) { return ans[id].c === false && idx[id] && !idx[id].q.open && (!props.chId || idx[id].ch === props.chId); })
      .sort(function (a, b) { return (ans[b].w || 0) - (ans[a].w || 0); })
      .map(function (id) { return idx[id].q; });
  }, [props.chId, round]);

  if (!qs.length) {
    return <p className="empty">No mistakes to review here. Questions you get wrong will appear in this list until you answer them correctly.</p>;
  }
  return (
    <>
      <p className="muted">{qs.length} question{qs.length === 1 ? '' : 's'} you last answered incorrectly, most-missed first. Answer correctly to clear them.</p>
      <Quiz key={(props.chId || 'all') + round} anchor={'mistakes-' + (props.chId || 'all')} qs={qs} showSource onJump={props.onJump} />
      <button type="button" className="btn ghost" onClick={function () { setRound(round + 1); }}>Refresh list</button>
    </>
  );
}

function ChapterView(props) {
  var ch = props.ch;
  var store = useStore();
  var st = store.st;
  var items = React.useMemo(function () { return chapterSections(ch); }, [ch]);
  var curId = items.some(function (it) { return it.id === st.cur[ch.id]; }) ? st.cur[ch.id] : items[0].id;
  var curIdx = items.findIndex(function (it) { return it.id === curId; });
  var cur = items[curIdx];
  var prev = items[curIdx - 1], next = items[curIdx + 1];

  var idx = qIndex();
  var mistakeCount = Object.keys(st.ans).filter(function (id) { return st.ans[id].c === false && idx[id] && idx[id].ch === ch.id && !idx[id].q.open; }).length;

  function select(id) {
    store.up(function (s) { var c = Object.assign({}, s.cur); c[ch.id] = id; return Object.assign({}, s, { cur: c }); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function markDone(id, r, n) {
    store.up(function (s) { var d = Object.assign({}, s.done); d[id] = Math.round(100 * r / n); return Object.assign({}, s, { done: d }); });
  }

  var pool = React.useMemo(function () {
    var p = [];
    ch.lessons.forEach(function (ls) { p = p.concat(ls.quiz); });
    ch.groups.forEach(function (g) { p = p.concat(g.qs); });
    return p;
  }, [ch]);

  var main;
  if (cur.type === 'lesson') {
    var ls = cur.lesson;
    main = (
      <article className="lesson">
        <p className="eyebrow">Lesson {ch.lessons.indexOf(ls) + 1} of {ch.lessons.length} · {ls.src}</p>
        <h2>{ls.t}</h2>
        <div className="body" dangerouslySetInnerHTML={{ __html: ls.body }} />
        <Quiz key={ls.id} anchor={'quiz-' + ls.id} title="Check your understanding" qs={ls.quiz} onFinish={function (r, n) { markDone(ls.id, r, n); }} />
      </article>
    );
  } else if (cur.type === 'group') {
    var g = cur.group;
    var lidx = lessonIndex();
    var linked = [];
    g.qs.forEach(function (q) { if (linked.indexOf(q.l) < 0) linked.push(q.l); });
    main = (
      <article className="lesson">
        <p className="eyebrow">Practice set</p>
        <h2>{g.t}</h2>
        <p>Scenario questions that connect several lessons: {linked.map(function (id) { return lidx[id] ? lidx[id].lesson.t : id; }).join(', ')}.</p>
        <Quiz key={g.id} anchor={'quiz-' + g.id} qs={g.qs} showSource onJump={props.onJump} onFinish={function (r, n) { markDone(g.id, r, n); }} />
      </article>
    );
  } else if (cur.type === 'exam') {
    main = (
      <Exam key={cur.id} examId={cur.id} title={ch.label + ': ' + ch.title + ' · final exam'} onJump={props.onJump}
        note="New questions plus 10 random questions from this chapter's lessons and practice sets. Answer everything, then submit to see results."
        build={function () {
          return ch.exam.filter(function (q) { return !q.open; })
            .concat(shuffled(pool).slice(0, 10))
            .concat(ch.exam.filter(function (q) { return q.open; }));
        }} />
    );
  } else {
    main = (
      <article className="lesson">
        <p className="eyebrow">Review</p>
        <h2>My mistakes in {ch.label}: {ch.title}</h2>
        <MistakesList chId={ch.id} onJump={props.onJump} />
      </article>
    );
  }

  var prog = chapterProgress(st, ch);
  return (
    <div className="wrap chapter">
      <header className="ch-head">
        <p className="eyebrow">{ch.label}</p>
        <h1>{ch.title}</h1>
        <div className="progress"><span style={{ width: prog.pct + '%' }}></span></div>
        <p className="muted">{prog.done} of {prog.items} sections completed{prog.acc !== null ? ' · ' + prog.acc + '% accuracy' : ''}</p>
      </header>

      <div className="ch-grid">
        <aside>
          <div className="mobile-bar">
            <button type="button" className="icon-btn" aria-label="Previous section" disabled={!prev} onClick={function () { if (prev) select(prev.id); }}>‹</button>
            <label className="sr" htmlFor={'jump-' + ch.id}>Go to section</label>
            <select id={'jump-' + ch.id} className="jump" value={curId} onChange={function (e) { select(e.target.value); }}>
              {items.map(function (it, i) {
                var label = it.type === 'lesson' ? (ch.lessons.indexOf(it.lesson) + 1) + '. ' + it.t : it.t;
                return <option key={it.id} value={it.id}>{(st.done[it.id] !== undefined ? '✓ ' : '') + label}</option>;
              })}
            </select>
            <button type="button" className="icon-btn" aria-label="Next section" disabled={!next} onClick={function () { if (next) select(next.id); }}>›</button>
          </div>
          <SectionNav items={items} cur={curId} onSelect={select} mistakeCount={mistakeCount} />
        </aside>
        <main key={curId}>
          {main}
          <div className="pager">
            {prev ? <button type="button" className="btn ghost" onClick={function () { select(prev.id); }}>← {prev.t}</button> : <span></span>}
            {next ? <button type="button" className="btn" onClick={function () { select(next.id); }}>{next.t} →</button> : null}
          </div>
        </main>
      </div>
    </div>
  );
}
