# system_analysis

A study site for the Systems Analysis course: short lessons, quizzes in the lecturer's mock-exam format, cash flow calculation practice, mock exams with worked answers, flashcards, and a mistakes tracker.

Chapters:

1. Introduction to Information Systems
2. Analyzing a Business Case
3. Financial Analysis
4. Managing System Projects (also Chapter 3 in the course)

## Run it

The site is plain HTML with React loaded from a CDN, so there is nothing to install or build. Because the JSX files are loaded and compiled in the browser, the folder must be served over HTTP (opening `index.html` directly from disk will not work):

```
python -m http.server 8765
```

Then open http://localhost:8765.

## Structure

- `index.html`: the page, styles, and script tags (React 18, ReactDOM, Babel standalone from unpkg).
- `components/`: React components in JSX, compiled in the browser.
- `data/`: course content (lessons, questions, flashcards, mock exams).

Progress and the dark mode choice are saved in the browser's localStorage.
