/* Shared state, persistence, question normalization, and lookups.
   Babel runs each .jsx file as a separate classic script, so this file uses function
   declarations and var only (no top-level const/let), to avoid clashes between files. */

var STORE_KEY = 'sa-study-v2';
var THEME_KEY = 'sa-theme';
var StoreCtx = React.createContext(null);
var LETTERS = 'ABCDEF';

/* ---------- Mock-exam question format ----------
   The lecturer's MCQs have 5-6 options: A-D, then "Both X and Y" / "All of the above" / "None of the above".
   Authored 4-option questions (o[0] correct) are converted into that format once, deterministically,
   so the letters never move (options like "Both B and C" refer to letters). */
function hashStr(s) {
  var h = 2166136261;
  for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function seededRandom(seed) {
  var s = seed || 1;
  return function () { s = (Math.imul(s, 1103515245) + 12345) >>> 0; return s / 4294967296; };
}
function examify(q) {
  if (q.open || q.calc || q.fixed || q.a !== undefined) return q;
  var rnd = seededRandom(hashStr(q.id));
  var idx = [0, 1, 2, 3];
  for (var i = 3; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
  var opts = idx.map(function (k) { return q.o[k]; });
  var a = idx.indexOf(0);
  var A = LETTERS[a];
  var kind = hashStr(q.id + '#') % 3;
  var none = ['None of the above', A + ' is correct, so "none of the above" is wrong.'];
  if (kind === 0) {
    var w = a; while (w === a) w = Math.floor(rnd() * 4);
    var pair = [a, w].sort();
    opts.push(['Both ' + LETTERS[pair[0]] + ' and ' + LETTERS[pair[1]], 'Only ' + A + ' is correct; ' + LETTERS[w] + ' is not, so "both" is wrong.']);
    opts.push(none);
  } else if (kind === 1) {
    opts.push(['All of the above', 'Only ' + A + ' is correct, so not all of them are.']);
    opts.push(none);
  } else {
    opts.push(none);
  }
  return Object.assign({}, q, { o: opts, a: a });
}
function normalizeCourse() {
  var C = window.COURSE;
  if (C.normalized) return;
  C.chapters.forEach(function (ch) {
    ch.lessons.forEach(function (ls) { ls.quiz = ls.quiz.map(examify); });
    ch.groups.forEach(function (g) { g.qs = g.qs.map(examify); });
    ch.exam = ch.exam.map(examify);
  });
  C.mock = C.mock.map(examify);
  C.official = (C.official || []).map(examify);
  C.normalized = true;
}
normalizeCourse();

/* Numeric answers: accept "56,000", "39.4%", "2.87 years". */
function parseNum(v) {
  if (v === undefined || v === null) return NaN;
  var s = String(v).replace(/,/g, '').replace(/[^0-9.\-]/g, '');
  return s === '' ? NaN : parseFloat(s);
}
function calcFieldOk(f, v) { var n = parseNum(v); return !isNaN(n) && Math.abs(n - f.ans) <= f.tol + 1e-9; }
function calcAllOk(q, vals) { return q.fields.every(function (f, i) { return calcFieldOk(f, (vals || {})[i]); }); }

/* ---------- Persistence ---------- */
function loadState() {
  try { var raw = localStorage.getItem(STORE_KEY); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
}
function saveState(st) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(st)); } catch (e) { /* storage may be blocked */ }
}
function withDefaults(st) {
  return Object.assign({ ans: {}, done: {}, cards: {}, cur: {}, mockBest: null }, st);
}
function useStore() { return React.useContext(StoreCtx); }

function getTheme() {
  try { var t = localStorage.getItem(THEME_KEY); if (t === 'dark' || t === 'light') return t; } catch (e) {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
}

/* Fisher-Yates shuffle that returns a new array. */
function shuffled(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}

/* Items a chapter is made of, in learning order. */
function chapterItems(ch) {
  var items = [];
  ch.lessons.forEach(function (ls) {
    items.push({ type: 'lesson', id: ls.id, t: ls.t, lesson: ls });
    ch.groups.filter(function (g) { return g.after === ls.id; }).forEach(function (g) {
      items.push({ type: 'group', id: g.id, t: g.t, group: g });
    });
  });
  items.push({ type: 'exam', id: ch.id + '-exam', t: 'Final exam' });
  return items;
}

/* Every question in the course, keyed by id, with its chapter. */
var QINDEX_CACHE = null;
function qIndex() {
  if (QINDEX_CACHE) return QINDEX_CACHE;
  var idx = {};
  window.COURSE.chapters.forEach(function (ch) {
    ch.lessons.forEach(function (ls) { ls.quiz.forEach(function (q) { idx[q.id] = { q: q, ch: ch.id }; }); });
    ch.groups.forEach(function (g) { g.qs.forEach(function (q) { idx[q.id] = { q: q, ch: ch.id }; }); });
    ch.exam.forEach(function (q) { idx[q.id] = { q: q, ch: ch.id }; });
  });
  window.COURSE.mock.concat(window.COURSE.official).forEach(function (q) { idx[q.id] = { q: q, ch: 'ch' + q.l.charAt(1) }; });
  QINDEX_CACHE = idx;
  return idx;
}

var LESSON_CACHE = null;
function lessonIndex() {
  if (LESSON_CACHE) return LESSON_CACHE;
  var idx = {};
  window.COURSE.chapters.forEach(function (ch) { ch.lessons.forEach(function (ls) { idx[ls.id] = { lesson: ls, ch: ch }; }); });
  LESSON_CACHE = idx;
  return idx;
}

function isGradable(q) { return !q.open; }

/* Accuracy per lesson from the latest answer to each question. */
function lessonStats(ans) {
  var stats = {};
  var idx = qIndex();
  Object.keys(idx).forEach(function (id) {
    var a = ans[id];
    if (!a || a.c === undefined) return;
    var l = idx[id].q.l;
    var s = stats[l] || (stats[l] = { right: 0, total: 0 });
    s.total += 1;
    if (a.c) s.right += 1;
  });
  return stats;
}

function weakLessons(ans, limit) {
  var stats = lessonStats(ans);
  var lidx = lessonIndex();
  return Object.keys(stats)
    .map(function (id) { return { id: id, acc: stats[id].right / stats[id].total, info: lidx[id] }; })
    .filter(function (x) { return x.info && x.acc < 0.7; })
    .sort(function (a, b) { return a.acc - b.acc; })
    .slice(0, limit || 6);
}

function chapterProgress(st, ch) {
  var items = chapterItems(ch);
  var done = items.filter(function (it) { return st.done[it.id] !== undefined; }).length;
  var right = 0, total = 0;
  var idx = qIndex();
  Object.keys(st.ans).forEach(function (id) {
    var e = idx[id];
    if (!e || e.ch !== ch.id || st.ans[id].c === undefined) return;
    total += 1;
    if (st.ans[id].c) right += 1;
  });
  return { done: done, items: items.length, pct: Math.round(100 * done / items.length), acc: total ? Math.round(100 * right / total) : null };
}

function goTo(hash) {
  if (location.hash !== '#' + hash) location.hash = hash;
  window.scrollTo(0, 0);
}
