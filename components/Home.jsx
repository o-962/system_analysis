/* Home: chapters with progress, a "continue" button, weak topics, and quick stats. */

function Home(props) {
  var st = useStore().st;
  var weak = weakLessons(st.ans, 5);
  var mistakes = Object.keys(st.ans).filter(function (id) { return st.ans[id].c === false; }).length;
  var answered = Object.keys(st.ans).length;
  var totalQ = Object.keys(qIndex()).length;
  var known = Object.keys(st.cards).filter(function (k) { return st.cards[k] === 1; }).length;

  var next = null;
  window.COURSE.chapters.some(function (ch) {
    var it = chapterItems(ch).find(function (x) { return st.done[x.id] === undefined; });
    if (it) { next = { ch: ch, it: it }; return true; }
    return false;
  });

  return (
    <div className="wrap home">
      <header className="intro">
        <h1>Systems Analysis</h1>
        <p className="lead">Short lessons built from the slides, your notebook, and the lecturer's annotations. Each lesson ends with a quick check, and practice sets connect the ideas.</p>
        {next ? (
          <button type="button" className="btn" onClick={function () { props.onJump(next.ch.id, next.it.id); }}>
            Continue: {next.ch.short} · {next.it.t}
          </button>
        ) : <a className="btn" href="#mock">Everything done. Take the mock exam</a>}
      </header>

      <section className="chapters">
        {window.COURSE.chapters.map(function (ch) {
          var prog = chapterProgress(st, ch);
          return (
            <a key={ch.id} className="ch-card" href={'#' + ch.id}>
              <span className="eyebrow">{ch.label}</span>
              <span className="ch-title">{ch.title}</span>
              <span className="muted small">{ch.lessons.length} lessons · {ch.groups.length} practice sets · final exam</span>
              <span className="progress"><span style={{ width: prog.pct + '%' }}></span></span>
              <span className="muted small">{prog.pct}% complete{prog.acc !== null ? ' · ' + prog.acc + '% accuracy' : ''}</span>
            </a>
          );
        })}
      </section>

      <section className="two-col">
        <div className="panel">
          <h3>Topics to review</h3>
          {weak.length ? (
            <ul className="plain weak">
              {weak.map(function (w) {
                return (
                  <li key={w.id}>
                    <button type="button" className="link" onClick={function () { props.onJump(w.info.ch.id, w.id); }}>{w.info.lesson.t}</button>
                    <span className="muted small">{Math.round(w.acc * 100)}%</span>
                  </li>
                );
              })}
            </ul>
          ) : <p className="muted">Nothing yet. Any lesson where your accuracy drops below 70% will show up here.</p>}
        </div>
        <div className="panel">
          <h3>Your progress</h3>
          <dl className="stats">
            <div><dt>Questions answered</dt><dd>{answered} / {totalQ}</dd></div>
            <div><dt>Open mistakes</dt><dd>{mistakes}</dd></div>
            <div><dt>Flashcards known</dt><dd>{known} / {window.COURSE.cards.length}</dd></div>
            <div><dt>Best mock score</dt><dd>{st.mockBest === null ? '–' : st.mockBest + '%'}</dd></div>
          </dl>
        </div>
      </section>

      <section className="panel note-panel">
        <h3>About the exam style</h3>
        <p>From your notes (lecture 5), the lecturer said: <b>"List ✗ · Describe &amp; Explain ✓"</b>. So the questions here are scenarios, close options, and "describe and explain" prompts rather than lists to memorize.</p>
        <p className="muted small">The real mock exams haven't been shared yet, so the question style is based on the material and the lecturer's comments. It can be adjusted once the mock exams are available.</p>
      </section>
    </div>
  );
}
