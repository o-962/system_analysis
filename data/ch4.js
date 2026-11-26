/* Chapter 3: Managing System Projects (lecture 15, "Ch3 part 2"). Site id ch4 only because Chapter 3 has two parts.
   Sources: Ch3 Managing System Projects.pptx (50 slides, figures, speaker notes), lecture 15 notes, the lecturer's mock exam.
   Format: o[0] correct unless `fixed: true`, in which case options are final and `a` is the correct index. */
window.COURSE = window.COURSE || { chapters: [], cards: [], mock: [] };
window.COURSE.chapters.push({
  id: 'ch4',
  n: 4,
  label: 'Chapter 3',
  short: 'Ch 3 · Projects',
  title: 'Managing System Projects',
  lessons: [
    {
      id: 'c4l1',
      t: 'Project Management and the Project Triangle',
      src: 'Managing System Projects slides 2-6 (Figures 3-3, 3-5) + speaker notes · Lecture 15 notes',
      body: `
<p><b>Project management</b> is the process of <b>planning, scheduling, monitoring, and reporting</b> on the development of an information system. A formal project can start as early as the preliminary investigation.</p>

<h4>What makes a project successful?</h4>
<p>The slide: completed <b>on time</b> · <b>within budget</b> · delivers a <b>quality product that satisfies users and meets requirements</b></p>
<div class="note"><b>From your notes (lecture 15):</b> the <b>book</b> perspective: deliver the scope on time and on budget and you are a successful PM. The <b>industrial</b> perspective adds <b>user adoption</b>: if people don't use the system, the project failed.</div>
<div class="ex"><b>Real example:</b> a university delivers a new attendance app on time and on budget, but lecturers keep using paper sheets because the app needs five taps per student. By the book it succeeded; in industry it failed.</div>

<h4>The project triangle</h4>
<figure class="dg"><div class="feas"><span class="n">Scope</span><span class="w">Cost</span><span class="c">Project</span><span class="e">Time</span><span class="s">A change in one leg affects the other two</span></div><figcaption>Figure 3-5: cost, scope, and time. Figure 3-3 shows success as balancing them against constraints.</figcaption></figure>
<p>The challenge is the <b>optimal balance</b>. Usually <b>one leg is fixed</b>: a definite budget, an inflexible scope, or a schedule driven by factors beyond the firm's control.</p>
<div class="note"><b>Speaker notes: find the "stuck side".</b><br>
If the problem is <b>in the fixed leg</b> → work on the other two legs.<br>
If the problem is <b>in another leg</b> → adjust the remaining (third) leg.</div>
<div class="tbl"><table><tr><th>Situation</th><th>Fixed leg</th><th>Problem leg</th><th>Adjust</th></tr>
<tr><td>Contract budget, running over budget</td><td>Cost</td><td>Cost</td><td>Time and/or scope</td></tr>
<tr><td>Contract budget, schedule slipping</td><td>Cost</td><td>Time</td><td>Scope</td></tr>
<tr><td>Must launch before registration week, costs rising</td><td>Time</td><td>Cost</td><td>Scope</td></tr>
<tr><td>Legally required features, schedule slipping</td><td>Scope</td><td>Time</td><td>Cost (add people)</td></tr></table></div>

<h4>What does a project manager do?</h4>
<div class="tbl"><table><tr><th>Activity</th><th>What it involves</th><th>Example</th></tr>
<tr><td>Planning</td><td>Identify all tasks; estimate time and cost of each</td><td>List 40 tasks for the attendance app, each with days and cost</td></tr>
<tr><td>Scheduling</td><td>Timetable with tasks, dependencies, critical tasks; select the team and assign tasks</td><td>A Gantt chart; Sara builds the API, Omar the screens</td></tr>
<tr><td>Monitoring</td><td>Guide, supervise, coordinate; monitor progress; evaluate results; <b>take corrective action</b></td><td>Testing is 3 days late, so a developer is moved to help</td></tr>
<tr><td>Reporting</td><td>Regular progress reports to management, users, and the team</td><td>A weekly status email with the Gantt chart</td></tr></table></div>
<div class="note"><b>From your notes (lecture 15):</b> tasks, cost, and duration make up the <b>baseline</b> (the approved plan you compare progress against). Actions can be <b>proactive</b> (before a problem), <b>reactive</b> (after it), or <b>corrective</b> (fixing a deviation from the baseline).</div>`,
      quiz: [
        { id: 'c4l1q1', l: 'c4l1', q: 'A project\'s budget is fixed by contract, and the project is starting to run over budget. What should the project manager adjust?',
          o: [['The schedule, the scope, or both', 'Correct: the problem is in the fixed leg, so work on the other two.'],
              ['Only the scope, since scope is always the flexible leg', 'Scope is not always the flexible leg.'],
              ['The budget, since cost is where the problem is', 'The budget is the fixed leg; it cannot move.'],
              ['Nothing, since the triangle\'s legs are independent', 'A change in one leg affects the others.']],
          k: 'Problem in the fixed leg → adjust the other two.' },
        { id: 'c4l1q2', l: 'c4l1', q: 'The budget is fixed, and the schedule (not the budget) is slipping. Which leg should be adjusted?',
          o: [['Scope', 'Correct: fixed leg cost, problem leg time, so adjust the remaining leg.'],
              ['Cost, by adding people to catch up', 'Cost is the fixed leg.'],
              ['Time, by moving the deadline', 'Time is the problem leg, not the one to adjust.'],
              ['Both cost and time together', 'Cost is fixed.']],
          k: 'Problem in another leg → adjust the remaining leg.' },
        { id: 'c4l1q3', l: 'c4l1', fixed: true, q: 'According to the slides, a successful project must:',
          o: [['Be completed on time and within budget', 'True, but not the whole definition.'],
              ['Deliver a quality product that satisfies users and meets requirements', 'True, but not the whole definition.'],
              ['Use the latest available technology', 'Not part of the definition.'],
              ['Avoid any change to the original scope', 'Scope can change; the triangle balances it.'],
              ['Both A and B', 'Correct: on time, within budget, AND a quality product that satisfies users.'],
              ['None of the above', 'A and B are both true.']],
          a: 4, k: 'Watch for "Both" when two options are each part of a definition.' },
        { id: 'c4l1q4', l: 'c4l1', q: 'Testing is three days behind, so the PM moves a developer to help the testers. Which PM activity is this?',
          o: [['Monitoring: taking corrective action when necessary', 'Correct.'],
              ['Planning: identifying all tasks and their durations', 'The tasks were already planned.'],
              ['Scheduling: creating the timetable of tasks', 'The timetable exists; this reacts to a deviation.'],
              ['Reporting: sending progress reports to management', 'Nothing is being reported.']],
          k: 'Planning · scheduling · monitoring · reporting.' },
        { id: 'c4l1q5', l: 'c4l1', q: 'An attendance app is delivered on time and on budget, but lecturers keep using paper sheets. From the industrial perspective, the project:',
          o: [['Is not truly successful, because there is no user adoption', 'Correct.'],
              ['Is fully successful, because it met scope, time, and budget', 'Only by the book perspective.'],
              ['Failed on schedule, because adoption takes time', 'It was delivered on time.'],
              ['Failed on budget, because paper sheets cost money', 'It was within budget.']],
          k: 'Book: scope + time + budget. Industry: + user adoption.' },
        { id: 'c4l1q6', l: 'c4l1', q: 'The approved plan of tasks, cost, and duration that actual progress is compared against is called the:',
          o: [['Baseline', 'Correct.'],
              ['Business case', 'That justifies the project.'],
              ['Critical path', 'That is the longest chain of tasks.'],
              ['Work breakdown structure', 'That lists the tasks, but the approved plan with cost and duration is the baseline.']],
          k: 'Baseline = the reference point.' },
        { id: 'c4l1q7', l: 'c4l1', q: 'At the start, the PM adds a buffer week because a vendor is known to deliver late. This action is:',
          o: [['Proactive', 'Correct: before the problem happens.'],
              ['Reactive', 'Reactive is after the problem.'],
              ['Corrective', 'Corrective fixes a deviation that has already happened.'],
              ['Nondiscretionary', 'Not a type of action.']],
          k: 'Proactive = before. Reactive / corrective = after.' }
      ]
    },
    {
      id: 'c4l2',
      t: 'Work Breakdown Structure, Gantt Charts, and PERT/CPM',
      src: 'Managing System Projects slides 7-16 (Figures 3-6 to 3-12) + speaker notes',
      body: `
<p>Planning and scheduling follow three steps: <b>1. create a work breakdown structure (WBS)</b> · <b>2. identify task patterns</b> · <b>3. calculate the critical path</b></p>

<h4>Step 1: the work breakdown structure</h4>
<p>A WBS breaks the project into smaller tasks. It must clearly identify each task and include an <b>estimated duration</b>.</p>
<div class="two"><div class="card"><h5>Task (activity)</h5><p>Work with a <b>beginning and an end</b> that uses resources (people, time, money). The basic unit the PM plans, schedules, and monitors, so it should be small and manageable.</p><p><b>Example:</b> "Design the attendance screen" (3 days).</p></div>
<div class="card"><h5>Event (milestone)</h5><p>A recognizable <b>reference point</b> marking a significant achievement, a major deliverable, or the end of a phase. <b>No duration.</b></p><p><b>Examples (speaker notes):</b> a working prototype; user acceptance testing completed.</p></div></div>
<p>Figure 3-8 (a questionnaire project): milestones such as "Questionnaire approved" and "Tabulation complete" mark the start and end of tasks such as "Distribute questionnaire" and "Tabulate responses".</p>
<p><b>Listing tasks:</b> List all tasks · Put them in order · Add a description to each · Decide which tasks must go first</p>
<p>Durations can be hours, days, or weeks. A complete WBS table has task number, description, duration, and <b>predecessor tasks</b> (Figures 3-10 to 3-12, e.g. "Reserve the meeting room 1 day", "Order the marketing materials 9 days").</p>

<h4>Gantt chart vs PERT/CPM chart</h4>
<div class="tbl"><table><tr><th></th><th>Gantt chart</th><th>PERT/CPM chart</th></tr>
<tr><td>Origin</td><td>Henry L. Gantt, almost 100 years ago</td><td>PERT: the <b>U.S. Navy</b>. CPM: <b>private industry</b>. Most analysts call both PERT</td></tr>
<tr><td>Form</td><td>Horizontal <b>bar chart</b>: time on the horizontal axis, tasks on the vertical</td><td><b>Network diagram</b> of task boxes (nodes) joined by arrows</td></tr>
<tr><td>Approach</td><td>A snapshot of the schedule; shows planned and actual progress (Figure 3-6)</td><td><b>Bottom-up</b>: a large project analyzed as individual tasks</td></tr>
<tr><td>Best for</td><td><b>Simple to moderately complex</b> projects; time management</td><td><b>Complex</b> projects with many interdependencies, where the critical path matters</td></tr>
<tr><td>Detail</td><td>Less detail per task</td><td>Boxes can hold more detail</td></tr></table></div>
<div class="ex"><b>Real example:</b> a 6-task website update for a café → a Gantt chart is enough. A hospital system with 300 interdependent tasks across 8 teams → PERT, to find which tasks would delay the whole project.</div>`,
      quiz: [
        { id: 'c4l2q1', l: 'c4l2', q: '"User acceptance testing completed" in a WBS is best described as:',
          o: [['A milestone: a reference point with no duration', 'Correct, an example from the speaker notes.'],
              ['A task, because acceptance testing uses resources', 'The testing is a task; its completion is a milestone.'],
              ['A predecessor, because deployment depends on it', 'A predecessor is a task that must finish first.'],
              ['A critical path, because the project cannot end without it', 'A path is a series of tasks.']],
          k: 'Task = work. Milestone = a point marking an achievement.' },
        { id: 'c4l2q2', l: 'c4l2', q: '"Design the attendance screen, 3 days, done by Omar" is best described as:',
          o: [['A task (activity)', 'Correct: it has a start, an end, and uses resources.'],
              ['A milestone, because it produces a deliverable', 'Milestones have no duration; this has 3 days.'],
              ['An event, because it happens at a point in time', 'It spans 3 days.'],
              ['A baseline, because it has a duration and an owner', 'The baseline is the whole approved plan.']],
          k: 'Duration + resources → task.' },
        { id: 'c4l2q3', l: 'c4l2', q: 'A hospital system has 300 interdependent tasks, and the PM must know which tasks would delay the whole project. Which chart fits best?',
          o: [['A PERT/CPM chart', 'Correct: complex, interdependent, critical path.'],
              ['A Gantt chart', 'Gantt suits simple to moderately complex projects.'],
              ['A Pareto chart', 'That ranks the causes of a problem.'],
              ['An XY chart', 'That shows correlation.']],
          k: 'Complex + dependencies → PERT.' },
        { id: 'c4l2q4', l: 'c4l2', fixed: true, q: 'Which statements about the Gantt chart are correct?',
          o: [['Time is displayed on the horizontal axis', 'True.'],
              ['It was developed by the U.S. Navy', 'False: that is PERT.'],
              ['Tasks are shown on the vertical axis', 'True.'],
              ['It is a bottom-up network diagram', 'False: that describes PERT.'],
              ['Both A and C', 'Correct.'],
              ['None of the above', 'A and C are true.']],
          a: 4, k: 'Gantt: bars, time horizontal, tasks vertical.' },
        { id: 'c4l2q5', l: 'c4l2', q: 'PERT was developed by ___, and CPM by ___.',
          o: [['The U.S. Navy; private industry', 'Correct.'],
              ['Henry L. Gantt; the U.S. Navy', 'Gantt developed the Gantt chart.'],
              ['Private industry; the U.S. Navy', 'Reversed.'],
              ['The U.S. Navy; Henry L. Gantt', 'Gantt did not develop CPM.']],
          k: 'PERT = Navy, CPM = industry.' },
        { id: 'c4l2q6', l: 'c4l2', q: 'What are the three planning and scheduling steps, in order?',
          o: [['Work breakdown structure → task patterns → critical path', 'Correct.'],
              ['Task patterns → work breakdown structure → critical path', 'You need the tasks before their patterns.'],
              ['Critical path → work breakdown structure → task patterns', 'The critical path comes last.'],
              ['Gantt chart → PERT chart → work breakdown structure', 'These are charts, not the steps.']],
          k: 'WBS → patterns → critical path.' }
      ]
    },
    {
      id: 'c4l3',
      t: 'Task Patterns, the Critical Path, and Slack Time',
      src: 'Managing System Projects slides 17-33 (Figures 3-13 to 3-27, Gantt example) · Mock exam Q4',
      body: `
<h4>Step 2: task patterns</h4>
<p>Each <b>task box</b> holds: Task name · Task ID · Task duration · Start day/date · Finish day/date</p>
<div class="tbl"><table><tr><th>Pattern</th><th>Meaning</th><th>Signal words</th><th>Example</th></tr>
<tr><td>Dependent task</td><td>Tasks done one after another</td><td>"Do Task 1, <b>then</b> Task 2"</td><td>Figure 3-15: Prepare outline ends day 5 → Create document starts day 6</td></tr>
<tr><td>Multiple successor tasks</td><td>Several tasks start together after one task (<b>concurrent</b> tasks); the task before them is the <b>predecessor</b></td><td>"<b>When</b> Task 2 is finished, start Tasks 3 and 4"</td><td>Figure 3-16: Develop plan ends day 30 → Arrange interviews and Design survey both start day 31</td></tr>
<tr><td>Multiple predecessor tasks</td><td>A task needs two or more tasks finished first; it starts after the <b>latest (largest) finish</b></td><td>"When Tasks 5 <b>and</b> 6 are done, start Task 7"</td><td>Figure 3-17: Obtain authorization ends day 15, Create job description ends day 5 → Conduct interviews starts day 16</td></tr></table></div>
<p>Study the facts carefully: if the task patterns are wrong, the schedule is wrong.</p>

<h4>Step 3: the critical path</h4>
<p>The <b>critical path</b> is a series of tasks which, if delayed, would delay the whole project. It is the <b>longest path</b> through the network.</p>
<figure class="dg"><div class="flow wrap"><div class="bx">1 Obtain authorization<br><small>Day 1-10 · 10d</small></div><div class="ar">→</div><div class="bx">2 Hire analyst<br><small>Day 11-40 · 30d</small></div><div class="ar">→</div><div class="bx hi">4 Arrange logistics<br><small>Day 41-65 · 25d</small></div><div class="ar">→</div><div class="bx">5 Announce training<br><small>Day 66-95 · 30d</small></div></div>
<p class="center small muted">Task 3, Plan training (day 41-45, 5 days), runs alongside Task 4 but is not critical.</p>
<figcaption>Figure 3-22: critical path 1-2-4-5, total duration 95 days</figcaption></figure>

<h4>Slack time</h4>
<p><b>Slack time</b> is the amount of time a task can be delayed <b>without delaying</b> the early start of the following task(s). Critical tasks have <b>zero slack</b>.</p>
<div class="ex"><b>In Figure 3-22:</b> Task 3 finishes on day 45, but Task 5 cannot start until Task 4 finishes on day 65. Task 3 can slip by up to <b>20 days</b> without delaying anything. Task 4 has 0 slack: one day late on Task 4 makes the whole project one day late.</div>
<div class="extra"><b>Source note:</b> slack time is not defined in the slides, but it is the lecturer's mock exam Question 4.</div>

<h4>The slides' Gantt chart example</h4>
<div class="tbl"><table><tr><th>Activity</th><th>Description</th><th>Predecessors</th><th>Duration</th><th>Start-finish</th></tr>
<tr><td>A</td><td>System request</td><td>-</td><td>2</td><td>0-2</td></tr>
<tr><td>B</td><td>Feasibility study</td><td>-</td><td>4</td><td>0-4</td></tr>
<tr><td>C</td><td>Methodology</td><td>B</td><td>5</td><td>4-9</td></tr>
<tr><td>D</td><td>Time estimation</td><td>A, C</td><td>3</td><td>9-12</td></tr></table></div>
<div class="formula">Paths: A → D = 2 + 3 = 5 · B → C → D = 4 + 5 + 3 = 12<br>Critical path = <b>B → C → D</b>, minimum duration = <b>12</b> · A finishes at 2 but D starts at 9 → A has <b>7 units of slack</b></div>`,
      quiz: [
        { id: 'c4l3q1', l: 'c4l3', fixed: true, q: 'The amount of time a task can be delayed without delaying the early start of subsequent task(s) is called:',
          o: [['Slack time', 'Correct. Critical tasks have zero slack.'],
              ['Delay time', 'Not the defined term.'],
              ['Lag time', 'Lag is a forced wait between tasks, not spare time.'],
              ['All of the above', 'Only slack time matches.'],
              ['None of the above', 'Slack time matches.']],
          a: 0, k: 'Critical tasks have zero slack.' },
        { id: 'c4l3q2', l: 'c4l3', q: 'Task 7 can start only after Task 5 (finishing day 20) and Task 6 (finishing day 32) are both done. When does Task 7 start?',
          o: [['Day 33', 'Correct: the latest finish (32) controls.'],
              ['Day 21', 'That ignores Task 6, which finishes later.'],
              ['Day 26', 'Not an average of the two finishes.'],
              ['Day 53', 'The finishes are not added.']],
          k: 'Multiple predecessors → latest finish controls.' },
        { id: 'c4l3q3', l: 'c4l3', q: '"When the plan is finished, start arranging interviews and designing the survey." Which task pattern is described?',
          o: [['Multiple successor tasks (concurrent tasks)', 'Correct: two tasks start after one predecessor.'],
              ['Multiple predecessor tasks (one task waits)', 'That is one task waiting for several.'],
              ['Dependent tasks done one after another', 'Dependent tasks run one after another, not two at once.'],
              ['A critical path through the project', 'A path is not a pattern.']],
          k: '"When X is done, start Y and Z" → multiple successors.' },
        { id: 'c4l3q4', l: 'c4l3', q: 'In Figure 3-22, why is Task 4 (Arrange logistics) on the critical path but Task 3 (Plan training) is not?',
          o: [['Task 4 finishes on day 65 and controls when Task 5 starts; Task 3 finishes on day 45 with 20 days of slack', 'Correct.'],
              ['Task 4 has a larger task ID, so the software schedules it after Task 3 and marks it as critical', 'IDs do not decide criticality.'],
              ['Task 3 has no predecessor of its own, so by definition it can never be on the critical path', 'Both depend on Task 2.'],
              ['Task 4 starts before Task 3 does, so it is always scheduled first and becomes the critical task', 'Both start on day 41.']],
          k: 'Critical = the longest path; zero slack.' },
        { id: 'c4l3calc', l: 'c4l3', calc: true, q: 'Activities: A (3, no predecessor), B (4, after A), C (6, after A), D (2, after B), E (5, after C and D). What is the minimum project duration, and how much slack does task B have?',
          fields: [{ t: 'Minimum duration', ans: 14, tol: 0 }, { t: 'Slack of task B', ans: 0, tol: 0 }],
          sol: '<p>Paths: A → B → D → E = 3 + 4 + 2 + 5 = 14. A → C → E = 3 + 6 + 5 = 14. Both are 14, so the minimum duration is <b>14</b> and both paths are critical.</p><p>B runs 3-7, D runs 7-9; E starts at 9 (after both C and D). B has no spare time: slack = <b>0</b>.</p>' },
        { id: 'c4l3q5', l: 'c4l3', q: 'In the slides\' Gantt example (A: 2; B: 4; C: 5 after B; D: 3 after A and C), how much slack does task A have?',
          o: [['7', 'Correct: A finishes at 2, D starts at 9.'],
              ['0', 'A is not on the critical path.'],
              ['2', 'That is A\'s duration.'],
              ['5', 'That is the length of path A → D.']],
          k: 'Slack = latest start of successor − own finish.' }
      ]
    },
    {
      id: 'c4l4',
      t: 'Monitoring, Reporting, and Project Management Software',
      src: 'Managing System Projects slides 27-40 (Figure 3-30) + speaker notes',
      body: `
<h4>Monitoring and control</h4>
<p><b>Structured walkthrough</b>: a review of a team member's work by other team members, a form of <b>peer review</b>.</p>
<div class="ex"><b>Example:</b> before Sara's database design goes to the developers, two teammates walk through it and spot a missing table for late fines.</div>
<p><b>Maintaining a schedule:</b> Anticipate problems · Avoid them · Minimize their impact · Identify potential solutions · Select the best way to solve the problem</p>
<div class="note"><b>Speaker notes:</b> the better the original plan, the easier it is to control the project. Clear, verifiable milestones and frequent checkpoints make problems visible quickly.</div>

<h4>Reporting</h4>
<div class="two"><div class="card"><h5>Project status meetings</h5><p>Regular meetings to update the team on status, issues, problems, and progress. Time-consuming, but worth it.</p></div><div class="card"><h5>Project status reports</h5><p>Can be verbal, usually written; often include a <b>Gantt chart</b> to show status graphically.</p></div></div>
<div class="trap"><b>Two reporting mistakes:</b><br><b>Overly cautious PM:</b> alerts management to every snag and small delay → loses credibility → management may ignore a serious warning later.<br><b>Single-handed PM:</b> handles everything alone and reports only when a problem is serious → leaves little time to react.</div>

<h4>Project management software</h4>
<div class="tbl"><table><tr><th>Tool or view</th><th>What it does</th></tr>
<tr><td><b>Microsoft Project</b></td><td>Full-featured, the dominant market share; calculates automatically, detects task patterns, builds the Gantt chart; can use a 24/7 calendar for mission-critical projects</td></tr>
<tr><td>Gantt chart view</td><td>Horizontal bars connected with arrows for dependencies</td></tr>
<tr><td>Network diagram view</td><td>Like a PERT chart, with more detail in each task box</td></tr>
<tr><td>Calendar view</td><td>Good for managing <b>day-to-day</b> activity; tasks shown on the calendar</td></tr>
<tr><td><b>GanttProject</b></td><td>A free, open-source alternative</td></tr></table></div>
<p>In every view the <b>critical path is highlighted in red</b>, so the PM can see priorities at any point.</p>`,
      quiz: [
        { id: 'c4l4q1', l: 'c4l4', q: 'Before Sara\'s design goes to developers, two teammates review it and find a missing table. This is:',
          o: [['A structured walkthrough (peer review)', 'Correct.'],
              ['A project status meeting', 'That updates the whole team on overall status.'],
              ['Qualitative risk analysis', 'That rates the probability and impact of risks.'],
              ['A milestone review by management', 'The reviewers are teammates, not management.']],
          k: 'Walkthrough = peer review.' },
        { id: 'c4l4q2', l: 'c4l4', q: 'A PM alerts management about every tiny delay. Months later, management ignores a serious warning. What happened?',
          o: [['The overly cautious PM lost credibility', 'Correct.'],
              ['The PM handled every problem single-handedly', 'That is the opposite mistake.'],
              ['The critical path changed without being reported', 'Not described.'],
              ['The status reports did not include a Gantt chart', 'Not the issue.']],
          k: 'Report what matters, at the right time.' },
        { id: 'c4l4q3', l: 'c4l4', q: 'A PM solves every problem alone and tells management only when a problem becomes serious. What is the risk?',
          o: [['Management has little time left to react or find a solution', 'Correct.'],
              ['Management loses trust because it hears about too many small delays', 'That is the overly cautious mistake.'],
              ['The team cannot hold structured walkthroughs', 'Not related.'],
              ['The baseline becomes invalid', 'Not related.']],
          k: 'Two opposite reporting mistakes.' },
        { id: 'c4l4q4', l: 'c4l4', q: 'Which Microsoft Project view is described as best for managing day-to-day activity?',
          o: [['Calendar view', 'Correct.'],
              ['Network diagram view', 'Like PERT, with detailed boxes.'],
              ['Gantt chart view', 'Bars over time.'],
              ['Risk matrix view', 'Not a Microsoft Project view.']],
          k: 'Calendar → day to day.' },
        { id: 'c4l4q5', l: 'c4l4', q: 'Which statement about project management software is TRUE?',
          o: [['GanttProject is free and open source, while Microsoft Project holds the dominant market share', 'Correct.'],
              ['Microsoft Project is free and open source, while GanttProject holds the dominant share', 'Reversed.'],
              ['Project management software cannot detect task patterns automatically', 'Microsoft Project detects them.'],
              ['The critical path is shown only in the network diagram view', 'It is highlighted in every view.']],
          k: 'MS Project dominant; GanttProject free.' }
      ]
    },
    {
      id: 'c4l5',
      t: 'Risk Management and Managing for Success',
      src: 'Managing System Projects slides 41-50 (Figure 3-33) + speaker notes',
      body: `
<p>A <b>risk</b> is an event that could affect the project negatively. <b>Risk management</b> is identifying, analyzing, anticipating, and monitoring risks to minimize their impact.</p>
<h4>The steps of risk management</h4>
<div class="tbl"><table><tr><th>Step</th><th>What happens</th><th>Example: a new online exam system</th></tr>
<tr><td>1. Develop a risk management plan</td><td>Review scope, stakeholders, budget, schedule, other factors; define roles and responsibilities, methods and procedures, categories of risks, and <b>contingency plans</b></td><td>The PM owns risk; risks are reviewed weekly; categories: technical, schedule, financial, external</td></tr>
<tr><td>2. Identify the risks</td><td>List each risk with its likelihood, cause, who responds, and potential impact</td><td>"The servers may crash during exam week" (likely, high impact, IT responds)</td></tr>
<tr><td>3. Analyze the risks</td><td><b>Qualitative</b>: estimate probability and impact (e.g. a risk matrix, Figure 3-33). <b>Quantitative</b>: the actual impact in money, time, scope, or quality</td><td>Qualitative: probability 8/10, impact 9/10. Quantitative: a crash would cost 3 lost days and 5,000 JOD</td></tr></table></div>
<p><b>Risk methods (speaker notes):</b> Identify: brainstorming sessions · Assess: a probability and impact matrix · Mitigate: risk transfer · Monitor: regular status reports</p>
<p><b>Risk categories:</b> Technical · Financial · Schedule · External</p>
<p><b>Contingency plans</b> are the actions taken if a risk becomes an actual issue: e.g. "if the servers crash, switch to the backup cloud region and extend the exam by one day".</p>
<div class="note"><b>Figure 3-33 (risk matrix):</b> an XY chart with risk probability on one axis and potential impact on the other. Focus on the corner where <b>both are high</b>.</div>

<h4>Managing for success</h4>
<div class="tbl"><table><tr><th>Issue type</th><th>What goes wrong</th></tr>
<tr><td><b>Business issues</b></td><td>If the system does not solve the business problem, it is a <b>failure</b>, regardless of positive user reaction, budget, or timely delivery</td></tr>
<tr><td><b>Budget issues</b></td><td>Unrealistic, too-optimistic estimates · Poor monitoring and slow response to early warnings · Unforeseen schedule delays · Human resource issues (turnover, inadequate training, motivation)</td></tr>
<tr><td><b>Schedule issues</b></td><td>Problems with timetables and milestones · Failing to recognize task dependencies · Confusing effort with progress · Poor monitoring · Personality conflicts</td></tr></table></div>
<div class="ex"><b>"Confusing effort with progress":</b> the team worked 300 hours this week (effort), but only 2 of 10 screens are finished (progress). Hours spent are not the same as work completed.</div>
<p><b>The bottom line:</b> PMs must be alert, technically competent, resourceful, and good communicators with strong human-resource skills. When problems occur, the PM's ability to handle them is the critical factor.</p>`,
      quiz: [
        { id: 'c4l5q1', l: 'c4l5', q: 'Estimating that a server crash would cost about 5,000 JOD and three lost days is an example of:',
          o: [['Quantitative risk analysis', 'Correct: actual impact in money and time.'],
              ['Qualitative risk analysis', 'That rates probability and impact on a scale.'],
              ['A contingency plan', 'That is the response if the risk happens.'],
              ['Risk identification', 'Identification lists the risks.']],
          k: 'Qualitative = ratings. Quantitative = money, time, scope, quality.' },
        { id: 'c4l5q2', l: 'c4l5', q: '"If the servers crash, switch to the backup cloud region and extend the exam by one day." This is a:',
          o: [['Contingency plan', 'Correct: actions taken if a risk becomes an issue.'],
              ['Risk identification entry', 'Identification describes the risk, not the response.'],
              ['Quantitative risk analysis', 'No impact is measured.'],
              ['Risk category', 'Categories are technical, financial, schedule, external.']],
          k: 'If it happens → contingency plan.' },
        { id: 'c4l5q3', l: 'c4l5', q: 'On a risk matrix (Figure 3-33), which risks deserve the most attention?',
          o: [['Those with both high probability and high impact', 'Correct.'],
              ['Those with high probability but low impact', 'Frequent but minor.'],
              ['Those with low probability and low impact', 'The least important.'],
              ['Those with low probability but high impact only', 'Important, but not the top priority.']],
          k: 'High + high → focus.' },
        { id: 'c4l5q4', l: 'c4l5', fixed: true, q: 'A system is delivered on time and within budget, and users like its interface, but it does not solve the business problem it was built for. The project is:',
          o: [['A success, because of the positive user reaction', 'The slides say it is a failure regardless of user reaction.'],
              ['A success, because it was on time and within budget', 'Not if the business problem remains.'],
              ['A failure', 'Correct: a system that does not solve the business problem fails regardless of anything else.'],
              ['Both A and B', 'Neither A nor B is correct.'],
              ['None of the above', 'C is correct.']],
          a: 2, k: 'The business purpose comes first.' },
        { id: 'c4l5q5', l: 'c4l5', fixed: true, q: 'Which are listed as budget issues in "Managing for Success"?',
          o: [['Unrealistic, overly optimistic estimates', 'Listed.'],
              ['Human resource issues such as turnover and inadequate training', 'Listed.'],
              ['Poor monitoring and slow response to early warning signs', 'Listed.'],
              ['Using Microsoft Project instead of GanttProject', 'Not an issue.'],
              ['All of A, B, and C', 'Correct.'],
              ['None of the above', 'A, B, and C are listed.']],
          a: 4, k: 'Budget issues: estimates, monitoring, unforeseen delays, HR.' },
        { id: 'c4l5q6', l: 'c4l5', q: 'The team worked 300 hours this week, but only 2 of 10 screens are finished. Which schedule issue does treating 300 hours as good news show?',
          o: [['Confusing effort with progress', 'Correct.'],
              ['Failing to recognize task dependencies', 'Nothing about dependencies is described.'],
              ['Personality conflicts among team members', 'Not described.'],
              ['Unrealistic, overly optimistic estimates', 'That is a budget issue, and not what is described.']],
          k: 'Hours spent ≠ work completed.' }
      ]
    }
  ],
  groups: [
    { id: 'c4g1', after: 'c4l2', t: 'Practice: Triangle, Roles, and Charts', qs: [
      { id: 'c4g1q1', l: 'c4l1', q: 'A schedule is fixed by a government deadline, the schedule itself is fine, but costs are rising. Which leg should be adjusted?',
        o: [['Scope', 'Correct: fixed leg time, problem leg cost, so adjust the remaining leg.'],
            ['Time, by asking for a later deadline', 'Time is the fixed leg.'],
            ['Cost, by approving a larger budget', 'Cost is the problem leg, not the one to adjust.'],
            ['None of the legs can be adjusted', 'One leg can always move.']],
        k: 'Fixed leg + problem leg → adjust the third.' },
      { id: 'c4g1q2', l: 'c4l2', q: 'An analyst wants a simple visual snapshot of a 6-task project showing progress over time for management. Best choice?',
        o: [['A Gantt chart', 'Correct.'],
            ['A PERT/CPM chart', 'More detail than a 6-task snapshot needs.'],
            ['A risk matrix', 'That shows probability and impact.'],
            ['A fishbone diagram', 'That shows causes of a problem.']],
        k: 'Simple + progress over time → Gantt.' },
      { id: 'c4g1q3', l: 'c4l1', q: '"Will a project manager be appointed?" is a schedule feasibility question. Once one is appointed, which PM activity comes first?',
        o: [['Planning: identify all tasks and estimate their time and cost', 'Correct.'],
            ['Reporting: send the first status report to management', 'Reporting comes once work is under way.'],
            ['Monitoring: take corrective action on deviations', 'There is nothing to monitor yet.'],
            ['Scheduling: assign tasks to team members', 'You must identify the tasks first.']],
        k: 'Planning → scheduling → monitoring → reporting.' }
    ]},
    { id: 'c4g2', after: 'c4l5', t: 'Practice: Scheduling, Control, and Risk', qs: [
      { id: 'c4g2calc', l: 'c4l3', calc: true, q: 'Using Figure 3-22 (1: days 1-10; 2: days 11-40; 3: Plan training, 5 days, and 4: Arrange logistics, 25 days, both after 2; 5: Announce training, 30 days, after 3 and 4): what is the total duration, and how many days of slack does Task 3 have?',
        fields: [{ t: 'Total duration (days)', ans: 95, tol: 0 }, { t: 'Slack of Task 3 (days)', ans: 20, tol: 0 }],
        sol: '<p>Tasks 3 and 4 both start on day 41. Task 3 ends day 45; Task 4 ends day 65. Task 5 starts after the latest predecessor (day 65), so it runs days 66-95: total <b>95 days</b>. Task 3 could finish as late as day 65 without delaying Task 5: slack = 65 − 45 = <b>20 days</b>.</p>' },
      { id: 'c4g2q2', l: 'c4l4', q: 'Mid-project, costs exceed the baseline by 15%, so the PM drops a "could have" feature to get back on budget. This is:',
        o: [['A corrective action, using MoSCoW priorities', 'Correct.'],
            ['A proactive action, because it prevents future overruns', 'The deviation has already happened.'],
            ['A cancellation of the project', 'The project continues.'],
            ['Project creep', 'The opposite: the scope shrank.']],
        k: 'Baseline + MoSCoW + corrective action.' },
      { id: 'c4g2q3', l: 'c4l5', q: 'Which risk management step lists each risk with its likelihood, cause, who responds, and potential impact?',
        o: [['Identify the risks', 'Correct.'],
            ['Develop a risk management plan', 'The plan defines roles, methods, categories, and contingency plans.'],
            ['Analyze the risks qualitatively', 'Analysis rates or measures risks already listed.'],
            ['Analyze the risks quantitatively', 'Analysis comes after identification.']],
        k: 'Plan → identify → analyze.' }
    ]}
  ],
  exam: [
    { id: 'c4x1', l: 'c4l3', q: 'In the slides\' Gantt example (A: 2; B: 4; C: 5 after B; D: 3 after A and C), what is the critical path?',
      o: [['B → C → D, minimum duration 12', 'Correct.'],
          ['A → D, minimum duration 5', 'The shorter path; it has slack.'],
          ['A → B → C → D, duration 14', 'A and B have no predecessors; they are not in sequence.'],
          ['B → C, duration 9', 'D must follow.']],
      k: 'Critical path = the longest path.' },
    { id: 'c4x2', l: 'c4l2', q: 'Which statement compares Gantt and PERT charts correctly?',
      o: [['Gantt is a bar chart for simpler projects; PERT is a network diagram for complex, interdependent ones', 'Correct.'],
          ['Gantt is a network diagram for complex projects; PERT is a bar chart for simpler projects', 'Reversed.'],
          ['Both are bar charts, but PERT also shows the project budget and the cost of each task', 'PERT is a network diagram.'],
          ['Gantt was developed by the U.S. Navy and PERT by Henry Gantt about a hundred years ago', 'Reversed origins.']],
      k: 'Gantt = bars. PERT = network.' },
    { id: 'c4x3', l: 'c4l4', q: 'Which Microsoft Project view looks most like a PERT chart?',
      o: [['Network diagram view', 'Correct.'],
          ['Calendar view', 'Tasks on a calendar.'],
          ['Gantt chart view', 'Horizontal bars.'],
          ['Risk matrix view', 'Not a Microsoft Project view.']],
      k: 'Network diagram ≈ PERT.' },
    { id: 'c4x4', l: 'c4l1', q: '"Usually one of these is fixed" refers to:',
      o: [['One leg of the project triangle: cost, scope, or time', 'Correct.'],
          ['One task on the critical path with zero slack', 'Not what the slide refers to.'],
          ['One milestone that marks the end of a phase', 'Not what the slide refers to.'],
          ['One category of risk in the risk plan', 'Not what the slide refers to.']],
      k: 'The stuck side.' },
    { id: 'c4x5', l: 'c4l5', q: 'Which is a SCHEDULE issue in "Managing for Success"?',
      o: [['Failing to recognize task dependencies', 'Correct.'],
          ['Unrealistic, overly optimistic cost estimates', 'Budget issue.'],
          ['High staff turnover and inadequate training', 'Budget issue.'],
          ['A system that does not solve the business problem', 'Business issue.']],
      k: 'Business, budget, schedule issues.' },
    { id: 'c4x6', l: 'c4l1', open: true, q: 'Explain the project triangle, and describe what a project manager should do if the budget is fixed and the schedule starts slipping.',
      m: '<p>The project triangle has three legs: <b>cost, scope, and time</b>. A change in any leg affects the other two, so the PM must find the best balance. Usually one leg is fixed (a definite budget, an inflexible scope, or a schedule driven by outside factors).</p><p>If the <b>budget is fixed</b> and the problem is in a different leg (the <b>schedule</b> is slipping), the adjustment must come from the <b>remaining leg, the scope</b>: reduce or postpone features so the project can finish on time without exceeding the budget. Explaining this to management is often the hardest part.</p>' },
    { id: 'c4x7', l: 'c4l5', open: true, q: 'Describe the steps of risk management, with an example for each.',
      m: '<p><b>1. Develop a risk management plan:</b> review scope, stakeholders, budget, schedule, and other factors; define roles, methods, risk categories (technical, financial, schedule, external), and contingency plans. <b>2. Identify the risks:</b> list each risk with its likelihood, cause, owner, and impact, e.g. "servers may crash during exam week". <b>3. Analyze the risks:</b> qualitatively (probability and impact on a risk matrix, e.g. 8/10 and 9/10) and quantitatively (the actual impact, e.g. 3 lost days and 5,000 JOD). Contingency plans say what to do if a risk happens, e.g. switch to a backup region.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 4, f: 'Project management', b: 'Planning · Scheduling · Monitoring · Reporting' },
  { c: 4, f: 'Successful project', b: 'On time · Within budget · Quality product that satisfies users and meets requirements · (Industry adds: user adoption)' },
  { c: 4, f: 'Project triangle', b: 'Cost, scope, time. A change in one leg affects the other two; usually one leg is fixed.' },
  { c: 4, f: 'Stuck side rule', b: 'Problem in the fixed leg → adjust the other two. Problem in another leg → adjust the remaining leg.' },
  { c: 4, f: 'Baseline', b: 'The approved tasks, cost, and duration that progress is compared against.' },
  { c: 4, f: 'Proactive / reactive / corrective', b: 'Proactive: before the problem · Reactive: after it · Corrective: fixes a deviation from the baseline' },
  { c: 4, f: 'Three scheduling steps', b: 'Work breakdown structure · Task patterns · Critical path' },
  { c: 4, f: 'Task vs milestone', b: 'Task: work with a start and end that uses resources. Milestone: a reference point with no duration (e.g. UAT completed).' },
  { c: 4, f: 'Gantt vs PERT', b: 'Gantt: Henry Gantt, bars, time horizontal, simpler projects. PERT/CPM: Navy/industry, network diagram, bottom-up, complex projects.' },
  { c: 4, f: 'Task patterns', b: 'Dependent ("then") · Multiple successors ("when X, start Y and Z") · Multiple predecessors ("when X and Y are done")' },
  { c: 4, f: 'Multiple predecessor start', b: 'Starts after the LATEST (largest) finish of its predecessors.' },
  { c: 4, f: 'Critical path', b: 'The longest path; any delay on it delays the whole project. Figure 3-22: 1-2-4-5 = 95 days.' },
  { c: 4, f: 'Slack time', b: 'How long a task can be delayed without delaying the next task(s). Critical tasks have zero slack.' },
  { c: 4, f: 'Reporting mistakes', b: 'Overly cautious PM loses credibility · Single-handed PM leaves no time to react' },
  { c: 4, f: 'Project management software', b: 'Microsoft Project (dominant) · GanttProject (free, open source) · Views: Gantt, network diagram, calendar (day to day); critical path in red' },
  { c: 4, f: 'Risk management steps', b: 'Develop a plan · Identify risks · Analyze risks (qualitative: probability and impact; quantitative: money, time, scope, quality)' },
  { c: 4, f: 'Risk methods', b: 'Identify: brainstorming · Assess: probability-impact matrix · Mitigate: risk transfer · Monitor: status reports' },
  { c: 4, f: 'Managing for success', b: 'Business issues (no business solution = failure) · Budget issues · Schedule issues (incl. confusing effort with progress)' }
);
