/* Question rendering shared by lesson quizzes, practice sets, mistakes, and exams.
   Options keep their letters (A-F) because answers like "Both B and C" refer to them. */

function recordAnswer(up, qid, correct) {
  up(function (st) {
    var prev = st.ans[qid] || { n: 0, w: 0 };
    var ans = Object.assign({}, st.ans);
    ans[qid] = { c: correct, n: prev.n + 1, w: prev.w + (correct ? 0 : 1) };
    return Object.assign({}, st, { ans: ans });
  });
}

function SourceLink(props) {
  var origin = lessonIndex()[props.q.l];
  if (!origin || !props.onJump) return null;
  return <button type="button" className="link small" onClick={function () { props.onJump(origin.ch.id, props.q.l); }}>Review: {origin.lesson.t}</button>;
}

function QuestionCard(props) {
  var q = props.q, pick = props.pick, reveal = props.reveal;
  var state = reveal ? (pick === q.a ? ' is-ok' : ' is-bad') : '';
  return (
    <article className={'qcard' + state}>
      <div className="qhead">
        <span className="qnum">Question {props.num}</span>
        {props.showSource && reveal ? <SourceLink q={q} onJump={props.onJump} /> : null}
      </div>
      <p className="qtext">{q.q}</p>
      <p className="muted small hint">Select the most correct answer.</p>
      <div className="opts">
        {q.o.map(function (opt, i) {
          var cls = 'opt';
          if (reveal) cls += i === q.a ? ' ok' : (i === pick ? ' bad' : ' dim');
          else if (i === pick) cls += ' sel';
          return (
            <button key={i} type="button" className={cls} disabled={reveal} aria-pressed={i === pick} onClick={function () { props.onPick(i); }}>
              <span className="letter">{LETTERS[i]}</span>
              <span>{opt[0]}</span>
            </button>
          );
        })}
      </div>
      {reveal ? (
        <div className="explain">
          <p className="verdict">{pick === q.a ? 'Correct' : (pick === undefined ? 'Not answered. The answer is ' + LETTERS[q.a] : 'Not quite. The answer is ' + LETTERS[q.a])}</p>
          {q.k ? <p className="idea">{q.k}</p> : null}
          <ul className="whys">
            {q.o.map(function (opt, i) {
              return (
                <li key={i} className={i === q.a ? 'right' : (i === pick ? 'mine' : '')}>
                  <b>{LETTERS[i]}</b>
                  <span dangerouslySetInnerHTML={{ __html: opt[1] }} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

/* Calculation question: numeric fields checked against the answer with a tolerance.
   In a quiz it has its own Check button; in an exam it is graded on submit. */
function CalcQuestion(props) {
  var q = props.q;
  var _v = React.useState({}), vals = _v[0], setVals = _v[1];
  var _c = React.useState(false), checked = _c[0], setChecked = _c[1];
  var reveal = props.examMode ? props.reveal : checked;
  var ok = calcAllOk(q, vals);

  function setVal(i, v) {
    var next = Object.assign({}, vals); next[i] = v; setVals(next);
    if (props.onValues) props.onValues(q.id, next);
  }
  function check() {
    setChecked(true);
    if (props.onDone) props.onDone(q.id, calcAllOk(q, vals));
  }
  return (
    <article className={'qcard' + (reveal ? (ok ? ' is-ok' : ' is-bad') : '')}>
      <div className="qhead"><span className="qnum">Question {props.num}</span><span className="tag">Calculation</span></div>
      <p className="qtext">{q.q}</p>
      <div className="calc">
        {q.fields.map(function (f, i) {
          var good = calcFieldOk(f, vals[i]);
          return (
            <label key={i} className={'calc-row' + (reveal ? (good ? ' ok' : ' bad') : '')}>
              <span>{f.t}</span>
              <input id={q.id + '-f' + i} type="text" inputMode="decimal" autoComplete="off" value={vals[i] || ''} disabled={reveal}
                onChange={function (e) { setVal(i, e.target.value); }} placeholder="Your answer" />
              {reveal ? <span className="calc-ans">{good ? '✓' : 'Answer: ' + f.ans.toLocaleString('en-US')}</span> : null}
            </label>
          );
        })}
      </div>
      {!props.examMode && !checked ? <button type="button" className="btn" onClick={check}>Check answers</button> : null}
      {reveal ? (
        <div className="explain">
          <p className="verdict">{ok ? 'All correct' : 'Some answers are off. Worked solution:'}</p>
          <div className="model" dangerouslySetInnerHTML={{ __html: q.sol }} />
          {props.showSource ? <SourceLink q={q} onJump={props.onJump} /> : null}
        </div>
      ) : null}
    </article>
  );
}

/* "Describe and explain" question: write, reveal the model answer, then mark yourself. */
function OpenQuestion(props) {
  var q = props.q;
  var store = useStore();
  var _a = React.useState(false), shown = _a[0], setShown = _a[1];
  var _b = React.useState(''), text = _b[0], setText = _b[1];
  var mark = store.st.ans[q.id];
  function markAs(ok) { recordAnswer(store.up, q.id, ok); if (props.onDone) props.onDone(q.id, ok); }
  return (
    <article className="qcard">
      <div className="qhead"><span className="qnum">Question {props.num}</span><span className="tag">Written answer</span></div>
      <p className="qtext">{q.q}</p>
      <label className="sr" htmlFor={'ta-' + q.id}>Your answer</label>
      <textarea id={'ta-' + q.id} value={text} onChange={function (e) { setText(e.target.value); }} placeholder="Write your answer as you would in the exam..." rows={5} />
      {!shown ? (
        <button type="button" className="btn ghost" onClick={function () { setShown(true); }}>Show model answer</button>
      ) : (
        <div className="explain">
          <div className="model" dangerouslySetInnerHTML={{ __html: q.m }} />
          <p className="muted">Did your answer cover all of these points?</p>
          <div className="row">
            <button type="button" className={'btn ghost' + (mark && mark.c === true ? ' on' : '')} onClick={function () { markAs(true); }}>Yes, fully</button>
            <button type="button" className={'btn ghost' + (mark && mark.c === false ? ' on' : '')} onClick={function () { markAs(false); }}>Partly / no</button>
          </div>
        </div>
      )}
    </article>
  );
}

function renderQuestion(q, i, p) {
  if (q.open) return <OpenQuestion key={q.id + p.seed} q={q} num={i + 1} onDone={p.onDone} />;
  if (q.calc) return <CalcQuestion key={q.id + p.seed} q={q} num={i + 1} examMode={p.examMode} reveal={p.reveal} onDone={p.onDone} onValues={p.onValues} showSource={p.showSource} onJump={p.onJump} />;
  return <QuestionCard key={q.id + p.seed} q={q} num={i + 1} pick={p.picks[q.id]} reveal={p.examMode ? p.reveal : p.picks[q.id] !== undefined} showSource={p.showSource} onJump={p.onJump} onPick={function (oi) { p.onPick(q, oi); }} />;
}

/* Instant-feedback quiz: each answer is explained as soon as it is picked. */
function Quiz(props) {
  var qs = props.qs;
  var store = useStore();
  var _s = React.useState(0), seed = _s[0], setSeed = _s[1];
  var _p = React.useState({}), picks = _p[0], setPicks = _p[1];
  var finished = React.useRef(false);

  function isRight(q) { var p = picks[q.id]; return p === true || (!q.open && !q.calc && p === q.a); }
  var answered = qs.filter(function (q) { return picks[q.id] !== undefined; }).length;
  var right = qs.filter(isRight).length;
  var complete = qs.length > 0 && answered === qs.length;

  React.useEffect(function () {
    if (complete && !finished.current) {
      finished.current = true;
      if (props.onFinish) props.onFinish(right, qs.length);
    }
  }, [complete]);

  function pick(q, oi) {
    if (picks[q.id] !== undefined) return;
    var next = Object.assign({}, picks); next[q.id] = oi; setPicks(next);
    recordAnswer(store.up, q.id, oi === q.a);
  }
  function done(id, ok) {
    var q = qs.find(function (x) { return x.id === id; });
    if (q && q.calc) recordAnswer(store.up, id, ok);
    var next = Object.assign({}, picks); next[id] = ok; setPicks(next);
  }
  function retry() {
    finished.current = false;
    setPicks({}); setSeed(seed + 1);
    var top = document.getElementById(props.anchor);
    if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="quiz" id={props.anchor}>
      {props.title ? <h3>{props.title}</h3> : null}
      {qs.map(function (q, i) {
        return renderQuestion(q, i, { seed: seed, picks: picks, onPick: pick, onDone: done, showSource: props.showSource, onJump: props.onJump });
      })}
      <div className="summary">
        {complete ? <span><b>{right} of {qs.length}</b> correct</span> : <span className="muted">{answered} of {qs.length} answered</span>}
        {complete && right < qs.length ? <button type="button" className="btn ghost" onClick={retry}>Try again</button> : null}
      </div>
    </section>
  );
}
