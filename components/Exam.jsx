/* Exam mode: answer everything, submit, then see the score, lessons to review, and explanations.
   Used for chapter exams and both mock exams. Questions are grouped into the mock exam's parts. */

function Exam(props) {
  var store = useStore();
  var _s = React.useState(0), seed = _s[0], setSeed = _s[1];
  var qs = React.useMemo(function () { return props.build(); }, [seed]);
  var _p = React.useState({}), picks = _p[0], setPicks = _p[1];
  var _cv = React.useState({}), calcVals = _cv[0], setCalcVals = _cv[1];
  var _sub = React.useState(false), submitted = _sub[0], setSubmitted = _sub[1];

  var graded = qs.filter(isGradable);
  function correct(q) { return q.calc ? calcAllOk(q, calcVals[q.id]) : picks[q.id] === q.a; }
  function answeredQ(q) { return q.calc ? Object.keys(calcVals[q.id] || {}).length > 0 : picks[q.id] !== undefined; }
  var answered = graded.filter(answeredQ).length;
  var right = graded.filter(correct).length;
  var pct = graded.length ? Math.round(100 * right / graded.length) : 0;

  function pick(q, oi) {
    if (submitted) return;
    var next = Object.assign({}, picks); next[q.id] = oi; setPicks(next);
  }
  function onValues(id, vals) { var next = Object.assign({}, calcVals); next[id] = vals; setCalcVals(next); }
  function submit() {
    graded.forEach(function (q) { recordAnswer(store.up, q.id, correct(q)); });
    store.up(function (st) {
      var done = Object.assign({}, st.done); done[props.examId] = pct;
      var patch = { done: done };
      if (props.isMock) patch.mockBest = Math.max(st.mockBest || 0, pct);
      return Object.assign({}, st, patch);
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function retake() {
    setPicks({}); setCalcVals({}); setSubmitted(false); setSeed(seed + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var lidx = lessonIndex();
  var byLesson = {};
  if (submitted) graded.forEach(function (q) { if (!correct(q)) byLesson[q.l] = (byLesson[q.l] || 0) + 1; });
  var reviewIds = Object.keys(byLesson);

  var parts = [
    { t: 'Question 1 · Select the most correct answer', f: function (q) { return !q.open && !q.calc; } },
    { t: 'Question 2 · Calculation', f: function (q) { return q.calc; } },
    { t: 'Question 3 · Recommendation / written answer', f: function (q) { return q.open; } }
  ];
  var n = 0;

  return (
    <section className="exam">
      <h2>{props.title}</h2>
      <p className="muted">{props.note}</p>

      {submitted ? (
        <div className="result">
          <div className="score"><span className="big">{pct}%</span><span className="muted">{right} of {graded.length} correct</span></div>
          {reviewIds.length ? (
            <div>
              <p><b>Review these lessons</b></p>
              <ul className="plain">
                {reviewIds.map(function (id) {
                  var info = lidx[id];
                  return info ? (
                    <li key={id}><button type="button" className="link" onClick={function () { props.onJump(info.ch.id, id); }}>{info.lesson.t}</button> <span className="muted">· {byLesson[id]} wrong</span></li>
                  ) : null;
                })}
              </ul>
            </div>
          ) : <p>Perfect score.</p>}
        </div>
      ) : null}

      {parts.map(function (part) {
        var list = qs.filter(part.f);
        if (!list.length) return null;
        return (
          <div key={part.t} className="part">
            <h3 className="part-title">{part.t}</h3>
            {list.map(function (q) {
              var i = n++;
              return renderQuestion(q, i, { seed: seed, picks: picks, onPick: pick, examMode: true, reveal: submitted, onValues: onValues, showSource: submitted, onJump: props.onJump });
            })}
          </div>
        );
      })}

      <div className="summary sticky-summary">
        {!submitted ? (
          <>
            <span className="muted">{answered} of {graded.length} answered</span>
            <button type="button" className="btn" onClick={submit}>Submit exam</button>
          </>
        ) : (
          <>
            <span><b>{pct}%</b> · {right} of {graded.length}</span>
            <button type="button" className="btn ghost" onClick={retake}>New attempt</button>
          </>
        )}
      </div>
    </section>
  );
}
