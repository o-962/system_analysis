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
      src: 'Managing Systems Projects slides 2-6 (Figures 3-3, 3-5) + speaker notes · Lecture 15 notes',
      body: `
<p><b>Project management</b> is the process of planning, scheduling, monitoring, and reporting on the development of an information system. A successful project is <b>completed on time, within budget, and delivers a quality product that satisfies users and meets requirements</b>. A formal project can start as early as the preliminary investigation.</p>
<h4>The project triangle</h4>
<figure class="dg"><div class="feas"><span class="n">Scope</span><span class="w">Cost</span><span class="c">Project</span><span class="e">Time</span><span class="s">Any change in one leg affects the other two</span></div><figcaption>Figure 3-5: a project triangle includes cost, scope, and time. Figure 3-3 shows a project succeeding when cost, scope, and time are balanced against constraints.</figcaption></figure>
<ul><li>The challenge is to find the <b>optimal balance</b> among the three.</li><li>Usually <b>one leg is fixed</b>: a definite budget, an inflexible scope, or a schedule driven by factors beyond the firm's control.</li></ul>
<div class="note"><b>Speaker notes: find the "stuck side".</b> The fixed leg is usually critical to success. If the problem is in the fixed leg, work on the other two legs (budget fixed and running over → adjust schedule, scope, or both). If the problem is in a different leg, adjust the remaining leg (budget fixed + schedule slipping → adjust scope). Explaining this to management is often the hardest part.</div>
<h4>What does a project manager do?</h4>
<div class="tbl"><table><tr><th>Activity</th><th>What it involves</th></tr>
<tr><td>Planning</td><td>Identify all project tasks and estimate the completion time and cost of each</td></tr>
<tr><td>Scheduling</td><td>Create a timetable of tasks, dependencies, and critical tasks; select the team and assign tasks</td></tr>
<tr><td>Monitoring</td><td>Guide, supervise, and coordinate the team's workload; monitor progress, evaluate results, <b>take corrective action</b> when necessary</td></tr>
<tr><td>Reporting</td><td>Regular progress reports to management, users, and the project team</td></tr></table></div>
<p>Good leadership is essential throughout.</p>
<div class="note"><b>From your notes (lecture 15):</b><ul>
<li>Book perspective: deliver the <b>scope on time and on budget</b> and you are a successful PM. Industrial perspective: there must also be <b>user adoption</b>.</li>
<li>Tasks, cost, and duration form the <b>baseline</b>: the approved plan you compare progress against.</li>
<li>Actions can be <b>proactive</b> (before a problem), <b>reactive</b> (after it), or <b>corrective</b> (fixing a deviation from the baseline).</li>
<li>Project questions map to feasibility: employees → operational, team members → technical, cost → economic, schedule → "before year end".</li></ul></div>
<div class="ex"><b>Example:</b> a university portal must launch before registration week (schedule is the fixed leg). Halfway through, costs are rising. Because the problem (cost) is not in the fixed leg, the remaining leg, scope, is adjusted: the "Could have" features move to a later release.</div>`,
      quiz: [
        { id: 'c4l1q1', l: 'c4l1', q: 'A project\'s budget is fixed by contract, and it is starting to run over budget. What should the project manager adjust?',
          o: [['The schedule, the scope, or both', 'Correct. The problem is in the fixed leg, so work on the other two legs.'],
              ['Only the budget', 'The budget is the fixed leg; it cannot move.'],
              ['Nothing; the triangle legs are independent', 'A change in one leg affects the other two.'],
              ['The project manager', 'Not part of the triangle.']],
          k: 'Problem in the fixed leg → adjust the other two.' },
        { id: 'c4l1q2', l: 'c4l1', q: 'Which project manager activity includes taking corrective action when necessary?',
          o: [['Project monitoring', 'Correct: guide, supervise, coordinate, monitor progress, evaluate results, take corrective action.'],
              ['Project planning', 'Planning identifies tasks and estimates time and cost.'],
              ['Project reporting', 'Reporting creates progress reports.'],
              ['Project scheduling', 'Scheduling creates the timetable and assigns tasks.']],
          k: 'Planning · scheduling · monitoring · reporting.' },
        { id: 'c4l1q3', l: 'c4l1', fixed: true, q: 'A successful project must:',
          o: [['Be completed on time and within budget', 'True, but not the whole definition.'],
              ['Deliver a quality product that satisfies users and meets requirements', 'True, but not the whole definition.'],
              ['Use the most expensive technology available', 'Not part of the definition.'],
              ['Avoid any change to scope', 'Scope can change; the triangle is about balancing it.'],
              ['Both A and B', 'Correct. The slide lists on time, within budget, AND a quality product that satisfies users and meets requirements.'],
              ['None of the above', 'A and B are both true.']],
          a: 4, k: 'Watch for "Both" when two options are each part of a definition.' }
      ]
    },
    {
      id: 'c4l2',
      t: 'Work Breakdown Structure, Gantt Charts, and PERT/CPM',
      src: 'Managing Systems Projects slides 7-16 (Figures 3-6 to 3-12) + speaker notes',
      body: `
<p>Planning and scheduling follow three steps: <b>1. create a work breakdown structure (WBS)</b>, <b>2. identify task patterns</b>, <b>3. calculate the critical path</b>.</p>
<h4>Step 1: the work breakdown structure</h4>
<p>A WBS breaks the project into a series of smaller tasks. It must clearly identify each task and include an <b>estimated duration</b>.</p>
<div class="two"><div class="card"><h5>Task (activity)</h5><p>Any work that has a <b>beginning and an end</b> and requires company resources such as people, time, or money. Tasks are the basic units the PM plans, schedules, and monitors, so they should be small and manageable.</p></div>
<div class="card"><h5>Event (milestone)</h5><p>A recognizable <b>reference point</b> that marks a significant achievement, a major deliverable, or the end of a phase. It has no duration. Examples from the speaker notes: a working prototype, the completion of user acceptance testing.</p></div></div>
<p>Figure 3-8 shows a questionnaire project: milestones such as "Questionnaire approved" and "Tabulation complete" mark the start and end of tasks such as "Distribute questionnaire" and "Tabulate responses".</p>
<p><b>Listing tasks:</b> list all tasks, put them in order, add a description, decide which must go first. Durations can be hours, days, or weeks. A complete WBS table has task number, description, duration, and <b>predecessor tasks</b> (Figures 3-10 to 3-12).</p>
<h4>Gantt chart vs PERT/CPM chart</h4>
<div class="two"><div class="card"><h5>Gantt chart</h5><ul><li>Developed by Henry L. Gantt almost 100 years ago</li><li>A horizontal <b>bar chart</b>: time on the horizontal axis, tasks on the vertical axis</li><li>Shows planned and actual progress (Figure 3-6: yellow bars show % complete)</li><li>A clear snapshot, best for <b>simple to moderately complex</b> projects; focused on time management</li></ul></div>
<div class="card"><h5>PERT/CPM chart</h5><ul><li>PERT (Program Evaluation Review Technique) was developed by the <b>U.S. Navy</b>; CPM (Critical Path Method) by <b>private industry</b>. Most analysts call both a PERT chart</li><li>A <b>network diagram</b> of task boxes (nodes) connected by arrows</li><li>A <b>bottom-up</b> technique: a large project analyzed as individual tasks</li><li>Best for <b>complex</b> projects with many interdependencies, where the critical path matters; boxes hold more detail</li></ul></div></div>
<div class="trap"><b>Trap:</b> both charts can show the same project (Figure 3-7). The difference is the view: Gantt = bars over time; PERT = boxes and dependencies. "Bottom-up" describes PERT.</div>`,
      quiz: [
        { id: 'c4l2q1', l: 'c4l2', q: '"User acceptance testing completed" in a WBS is best described as:',
          o: [['A milestone (event): a reference point with no duration', 'Correct. The speaker notes give this exact example.'],
              ['A task, because it requires resources', 'The testing itself is a task; its completion is a milestone.'],
              ['A critical path', 'A path is a series of tasks.'],
              ['A predecessor', 'A predecessor is a task that must finish first.']],
          k: 'Task = work with a start and end. Milestone = a point marking an achievement.' },
        { id: 'c4l2q2', l: 'c4l2', q: 'A large project has many interdependent tasks, and identifying the critical path is crucial. Which chart fits best?',
          o: [['A PERT/CPM chart', 'Correct: complex projects, many interdependencies, critical path.'],
              ['A Gantt chart', 'Best for simple to moderately complex projects.'],
              ['A Pareto chart', 'That ranks causes of a problem (Chapter 2).'],
              ['An XY chart', 'That shows correlation.']],
          k: 'Complex + dependencies → PERT.' },
        { id: 'c4l2q3', l: 'c4l2', fixed: true, q: 'Which statements about the Gantt chart are correct?',
          o: [['Time is displayed on the horizontal axis', 'True.'],
              ['It was developed by the U.S. Navy', 'False; that is PERT. Gantt was developed by Henry L. Gantt.'],
              ['Tasks are shown on the vertical axis', 'True.'],
              ['It is a bottom-up network diagram', 'False; that describes PERT.'],
              ['Both A and C', 'Correct. Time is horizontal and tasks are vertical.'],
              ['None of the above', 'A and C are true.']],
          a: 4, k: 'Gantt: bars, time horizontal, tasks vertical.' }
      ]
    },
    {
      id: 'c4l3',
      t: 'Task Patterns, the Critical Path, and Slack Time',
      src: 'Managing Systems Projects slides 17-33 (Figures 3-13 to 3-27, Gantt example) · Mock exam Q4',
      body: `
<h4>Step 2: task patterns</h4>
<p>Each <b>task box</b> holds: task name, task ID, task duration, start day/date, finish day/date (Figure 3-13).</p>
<div class="tbl"><table><tr><th>Pattern</th><th>Meaning</th><th>Signal words</th></tr>
<tr><td>Dependent task</td><td>Tasks done one after another. In Figure 3-15, Task 1 finishes on day 5, so Task 2 starts on day 6.</td><td>"Do Task 1, <b>then</b> Task 2"</td></tr>
<tr><td>Multiple successor tasks</td><td>Several tasks start at the same time after one task (<b>concurrent</b> tasks). The task before them is the <b>predecessor</b>.</td><td>"<b>When</b> Task 2 is finished, start Tasks 3 and 4"</td></tr>
<tr><td>Multiple predecessor tasks</td><td>A task needs two or more tasks finished first. Its start is the <b>latest (largest) finish</b> of its predecessors. In Figure 3-17, Task 1 ends day 15 and Task 2 day 5, so Task 3 starts day 16.</td><td>"When Tasks 5 <b>and</b> 6 are done, start Task 7"</td></tr></table></div>
<p>Study the facts carefully: if the task patterns are wrong, the schedule is wrong.</p>
<h4>Step 3: the critical path</h4>
<p>The <b>critical path</b> is a series of tasks which, if delayed, would delay the whole project. If any critical task falls behind, the entire project is delayed. It is the <b>longest path</b> through the network.</p>
<figure class="dg"><div class="flow wrap"><div class="bx">1 Obtain authorization<br><small>Day 1-10 · 10d</small></div><div class="ar">→</div><div class="bx">2 Hire analyst<br><small>Day 11-40 · 30d</small></div><div class="ar">→</div><div class="bx hi">4 Arrange logistics<br><small>Day 41-65 · 25d</small></div><div class="ar">→</div><div class="bx">5 Announce training<br><small>Day 66-95 · 30d</small></div></div>
<p class="center small muted">Task 3, Plan training (Day 41-45, 5 days), runs alongside Task 4 but is not critical.</p>
<figcaption>Figure 3-22: critical path 1-2-4-5, total duration 95 days</figcaption></figure>
<h4>Slack time</h4>
<p><b>Slack time</b> is the amount of time a task can be delayed <b>without delaying</b> the early start of the following task(s). Tasks on the critical path have <b>zero slack</b>. In Figure 3-22, Task 3 finishes on day 45 but Task 5 cannot start until day 66, so Task 3 has <b>20 days of slack</b>.</p>
<div class="extra"><b>Source note:</b> slack time is not defined in the slides, but it appears in the lecturer's mock exam (Question 4), so it can be examined.</div>
<h4>The slides' Gantt chart example</h4>
<div class="tbl"><table><tr><th>Activity</th><th>Description</th><th>Predecessors</th><th>Duration</th><th>Start-finish</th></tr>
<tr><td>A</td><td>System request</td><td>-</td><td>2</td><td>0-2</td></tr>
<tr><td>B</td><td>Feasibility study</td><td>-</td><td>4</td><td>0-4</td></tr>
<tr><td>C</td><td>Methodology</td><td>B</td><td>5</td><td>4-9</td></tr>
<tr><td>D</td><td>Time estimation</td><td>A, C</td><td>3</td><td>9-12</td></tr></table></div>
<div class="formula">Paths: A → D = 2 + 3 = 5 · B → C → D = 4 + 5 + 3 = 12<br>Critical path = <b>B → C → D</b>, minimum duration = <b>12</b><br>A finishes at 2 but D starts at 9 → A has <b>7 units of slack</b></div>`,
      quiz: [
        { id: 'c4l3q1', l: 'c4l3', fixed: true, q: 'The amount of time a task can be delayed without delaying the early start of subsequent task(s) is called:',
          o: [['Slack time', 'Correct. Critical tasks have zero slack.'],
              ['Delay time', 'Not a defined term here.'],
              ['Lag time', 'Lag is a forced wait between tasks, not spare time.'],
              ['All of the above', 'Only slack time matches the definition.'],
              ['None of the above', 'Slack time matches.']],
          a: 0, k: 'Critical tasks have zero slack.' },
        { id: 'c4l3q2', l: 'c4l3', q: 'Task 7 cannot start until Task 5 (finishing day 20) and Task 6 (finishing day 32) are both done. When does Task 7 start?',
          o: [['Day 33', 'Correct. A multiple predecessor task starts after the LATEST finish: 32 + 1.'],
              ['Day 21', 'That ignores Task 6, which finishes later.'],
              ['Day 52', 'You added the two finishes.'],
              ['Day 26', 'Not an average.']],
          k: 'Multiple predecessors → latest finish controls.' },
        { id: 'c4l3calc', l: 'c4l3', calc: true, q: 'Activities: A (duration 3, no predecessor), B (4, after A), C (6, after A), D (2, after B), E (5, after C and D). What is the minimum project duration, and how much slack does task B have?',
          fields: [{ t: 'Minimum duration', ans: 14, tol: 0 }, { t: 'Slack of task B', ans: 0, tol: 0 }],
          sol: '<p>Paths: A → B → D → E = 3 + 4 + 2 + 5 = 14. A → C → E = 3 + 6 + 5 = 14. Both paths are 14, so the minimum duration is <b>14</b> and both are critical.</p><p>B: A ends at 3, B runs 3-7, D runs 7-9. E can start only after C (3-9) and D (7-9), so E starts at 9. B and D have no spare time → slack of B = <b>0</b>.</p>' }
      ]
    },
    {
      id: 'c4l4',
      t: 'Monitoring, Reporting, Software, Risk, and Managing for Success',
      src: 'Managing Systems Projects slides 27-50 (Figure 3-30, Figure 3-33) + speaker notes',
      body: `
<h4>Monitoring and control</h4>
<ul><li><b>Structured walkthrough</b>: a review of a team member's work by other team members, a form of <b>peer review</b>.</li><li>Maintaining a schedule: the PM tries to <b>anticipate</b> problems, <b>avoid</b> them, <b>minimize</b> their impact, <b>identify</b> potential solutions, and <b>select</b> the best one.</li><li>Speaker notes: the better the original plan, the easier it is to control the project. Clear, verifiable milestones make problems visible quickly.</li></ul>
<h4>Reporting</h4>
<ul><li><b>Project status meetings</b>: regular meetings on status, issues, and progress; time-consuming but worth it.</li><li><b>Project status reports</b>: can be verbal but usually written; often include a Gantt chart.</li></ul>
<div class="trap"><b>Two reporting mistakes:</b> an <b>overly cautious</b> PM who reports every small delay loses credibility, so management may ignore a serious warning later. A PM who handles everything <b>single-handedly</b> and reports only when a problem is serious leaves little time to react.</div>
<h4>Project management software</h4>
<p><b>Microsoft Project</b> holds the dominant market share. It calculates automatically, detects task patterns, and offers views: <b>Gantt chart</b>, <b>network diagram</b> (like a PERT chart, with more detail in boxes), and <b>calendar view</b> (good for day-to-day management). The critical path is highlighted in <b>red</b>. <b>GanttProject</b> is a free, open-source alternative.</p>
<h4>Risk management</h4>
<p>A <b>risk</b> is an event that could affect the project negatively. <b>Risk management</b> is identifying, analyzing, anticipating, and monitoring risks to minimize their impact.</p>
<div class="tbl"><table><tr><th>Step</th><th>What happens</th></tr>
<tr><td>1. Develop a risk management plan</td><td>Review scope, stakeholders, budget, schedule, internal and external factors. Define roles and responsibilities, methods and procedures, categories of risks, and <b>contingency plans</b>.</td></tr>
<tr><td>2. Identify the risks</td><td>List each risk and its likelihood: description, cause, who responds, potential impact.</td></tr>
<tr><td>3. Analyze the risks</td><td><b>Qualitative</b>: estimate probability and impact (risk matrix, Figure 3-33). <b>Quantitative</b>: the actual impact in dollars, time, scope, or quality.</td></tr></table></div>
<p class="muted small">Speaker notes: methods include brainstorming (identify), a probability and impact matrix (assess), risk transfer (mitigate), and regular status reports (monitor). Categories: technical, financial, schedule, external. Contingency plans are the actions taken if a risk becomes an actual issue.</p>
<h4>Managing for success</h4>
<ul><li><b>Business issues</b>: if the system does not solve the business problem, it is a <b>failure</b>, regardless of positive user reaction, budget, or timely delivery.</li><li><b>Budget issues</b>: unrealistic (too optimistic) estimates, poor monitoring and slow response to warning signs, unforeseen schedule delays, human resource issues (turnover, inadequate training, motivation).</li><li><b>Schedule issues</b>: problems with timetables and milestones, failing to recognize task dependencies, confusing effort with progress, poor monitoring, personality conflicts.</li></ul>
<p><b>The bottom line:</b> PMs must be alert, technically competent, resourceful, and good communicators with strong human resource skills. When problems occur, the PM's ability to handle them is the critical factor.</p>`,
      quiz: [
        { id: 'c4l4q1', l: 'c4l4', q: 'A team member\'s design is reviewed by other members of the team before it moves forward. This is a:',
          o: [['Structured walkthrough (peer review)', 'Correct.'],
              ['Project status meeting', 'That updates the whole team on status.'],
              ['Quantitative risk analysis', 'That measures impact in money, time, scope, or quality.'],
              ['Critical path calculation', 'No.']],
          k: 'Walkthrough = peer review.' },
        { id: 'c4l4q2', l: 'c4l4', q: 'Estimating that a risk would cost about 15,000 JOD and two weeks of delay is an example of:',
          o: [['Quantitative risk analysis', 'Correct: the actual impact in dollars and time.'],
              ['Qualitative risk analysis', 'That estimates probability and impact ratings.'],
              ['A contingency plan', 'That is the response plan.'],
              ['Risk identification', 'Identification lists the risks.']],
          k: 'Qualitative = ratings. Quantitative = money, time, scope, quality.' },
        { id: 'c4l4q3', l: 'c4l4', fixed: true, q: 'A system is delivered on time and within budget, and users like its interface, but it does not solve the business problem it was built for. The project is:',
          o: [['A success, because of the positive user reaction', 'The slides say it is a failure regardless of user reaction.'],
              ['A success, because it was on time and within budget', 'Not if the business problem remains.'],
              ['A failure', 'Correct. Business issues: if a system doesn\'t solve the business problem, it fails regardless of anything else.'],
              ['Both A and B', 'Neither A nor B is correct.'],
              ['None of the above', 'C is correct.']],
          a: 2, k: 'Business purpose comes first.' }
      ]
    }
  ],
  groups: [
    { id: 'c4g1', after: 'c4l2', t: 'Practice: Triangle, Roles, and Charts', qs: [
      { id: 'c4g1q1', l: 'c4l1', q: 'A schedule is fixed by a government deadline (the fixed leg) and the schedule is not the problem, but costs are rising. Which leg is most likely to be adjusted?',
        o: [['Scope', 'Correct. Problem in a non-fixed leg (cost) → adjust the remaining leg (scope).'],
            ['Time', 'Time is the fixed leg.'],
            ['Nothing can be adjusted', 'One of the legs can always move.'],
            ['The critical path', 'Not a triangle leg.']],
        k: 'Fixed leg + problem leg → adjust the remaining leg.' },
      { id: 'c4g1q2', l: 'c4l2', q: 'An analyst wants a quick visual snapshot of a 6-task project for management, showing progress over time. Best choice?',
        o: [['A Gantt chart', 'Correct: a simple, clear snapshot for simple to moderately complex projects.'],
            ['A PERT/CPM chart', 'More detail than needed for a 6-task snapshot.'],
            ['A risk matrix', 'That shows risk probability and impact.'],
            ['A fishbone diagram', 'That shows causes of a problem.']],
        k: 'Simple + progress over time → Gantt.' },
      { id: 'c4g1q3', l: 'c4l1', q: 'Linking Chapter 2 to this chapter: "Will a project manager be appointed?" is a schedule feasibility question. Which PM activity follows directly once one is appointed?',
        o: [['Project planning: identify all tasks and estimate time and cost', 'Correct. Planning is the first PM activity.'],
            ['Project reporting', 'Reporting comes once work is under way.'],
            ['Risk transfer', 'One risk response, not the first PM activity.'],
            ['Decommissioning', 'No.']],
        k: 'Planning → scheduling → monitoring → reporting.' }
    ]},
    { id: 'c4g2', after: 'c4l4', t: 'Practice: Scheduling and Control', qs: [
      { id: 'c4g2calc', l: 'c4l3', calc: true, q: 'Using Figure 3-22 (1: days 1-10, 2: days 11-40, 3: Plan training 5 days, 4: Arrange logistics 25 days, both after 2; 5: Announce training 30 days after 3 and 4): what is the total duration, and how many days of slack does Task 3 have?',
        fields: [{ t: 'Total duration (days)', ans: 95, tol: 0 }, { t: 'Slack of Task 3 (days)', ans: 20, tol: 0 }],
        sol: '<p>Tasks 3 and 4 both start on day 41. Task 3 ends day 45; Task 4 ends day 65. Task 5 starts after the latest predecessor (day 65), so it runs days 66-95: total <b>95 days</b>. Task 3 could finish as late as day 65 without delaying Task 5: slack = 65 − 45 = <b>20 days</b>.</p>' },
      { id: 'c4g2q2', l: 'c4l4', q: 'A PM alerts management about every tiny delay. Months later, management ignores a serious warning. What happened?',
        o: [['The overly cautious PM lost credibility', 'Correct, word for word from the reporting slide.'],
            ['The PM handled everything single-handedly', 'That is the opposite mistake.'],
            ['The critical path changed', 'Not the issue.'],
            ['Survey fatigue', 'That applies to surveys.']],
        k: 'Report what matters, at the right time.' },
      { id: 'c4g2q3', l: 'c4l4', fixed: true, q: 'Which are listed as budget issues in "Managing for Success"?',
        o: [['Unrealistic, overly optimistic estimates', 'Listed.'],
            ['Human resource issues such as turnover and inadequate training', 'Listed.'],
            ['Poor monitoring and slow response to early warning signs', 'Listed.'],
            ['Using Microsoft Project', 'Not an issue.'],
            ['All of A, B, and C', 'Correct. All three are on the budget issues list.'],
            ['None of the above', 'A, B, and C are listed.']],
        a: 4, k: 'Budget issues: estimates, monitoring, unforeseen delays, HR.' }
    ]}
  ],
  exam: [
    { id: 'c4x1', l: 'c4l3', q: 'Activities: A (2 days), B (4 days), C (5 days, after B), D (3 days, after A and C). What is the critical path?',
      o: [['B → C → D, minimum duration 12', 'Correct.'],
          ['A → D, duration 5', 'The shorter path; it has slack.'],
          ['A → B → C → D, duration 14', 'A and B are not in sequence; neither has a predecessor.'],
          ['B → C, duration 9', 'D must follow.']],
      k: 'Critical path = the longest path.' },
    { id: 'c4x2', l: 'c4l2', q: 'PERT was developed by ___, and CPM by ___.',
      o: [['The U.S. Navy; private industry', 'Correct.'],
          ['Henry Gantt; the U.S. Navy', 'Gantt developed the Gantt chart.'],
          ['Private industry; the U.S. Navy', 'Reversed.'],
          ['Microsoft; IBM', 'No.']],
      k: 'PERT = Navy, CPM = industry; most analysts call both PERT.' },
    { id: 'c4x3', l: 'c4l4', q: 'Which Microsoft Project view is described as good for managing day-to-day activity?',
      o: [['Calendar view', 'Correct.'],
          ['Network diagram', 'Similar to PERT, with detailed boxes.'],
          ['Gantt chart', 'Bars over time.'],
          ['Risk matrix', 'Not a Microsoft Project view.']],
      k: 'Calendar → day to day.' },
    { id: 'c4x4', l: 'c4l1', q: '"Usually one of these is fixed" refers to:',
      o: [['One leg of the project triangle (cost, scope, or time)', 'Correct.'],
          ['One task on the critical path', 'No.'],
          ['One milestone', 'No.'],
          ['One risk category', 'No.']],
      k: 'The stuck side.' },
    { id: 'c4x5', l: 'c4l1', open: true, q: 'Explain the project triangle, and describe what a project manager should do if the budget is fixed and the schedule starts slipping.',
      m: '<p>The project triangle has three legs: <b>cost, scope, and time</b>. A change in any leg affects the other two, so the PM must find the best balance. Usually one leg is fixed (a definite budget, an inflexible scope, or a schedule driven by outside factors).</p><p>If the <b>budget is fixed</b> and the problem is in a different leg (the <b>schedule</b> is slipping), the adjustment must come from the <b>remaining leg, the scope</b>: reduce or postpone features so the project can finish on time without exceeding the budget. Explaining this to management is often the hardest part.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 4, f: 'Project management', b: 'Planning, scheduling, monitoring, and reporting on the development of an information system.' },
  { c: 4, f: 'Successful project', b: 'On time, within budget, a quality product that satisfies users and meets requirements. (Industry adds: user adoption.)' },
  { c: 4, f: 'Project triangle', b: 'Cost, scope, time. A change in one leg affects the other two; usually one leg is fixed.' },
  { c: 4, f: 'Stuck side rule', b: 'Problem in the fixed leg → adjust the other two. Problem in another leg → adjust the remaining leg.' },
  { c: 4, f: 'PM activities', b: 'Planning (tasks, time, cost) · scheduling (timetable, team) · monitoring (corrective action) · reporting.' },
  { c: 4, f: 'Three scheduling steps', b: 'Work breakdown structure → task patterns → critical path.' },
  { c: 4, f: 'Task vs milestone', b: 'Task: work with a start and end that uses resources. Milestone (event): a reference point marking an achievement.' },
  { c: 4, f: 'Gantt chart', b: 'Henry L. Gantt; bars, time horizontal, tasks vertical; simple to moderately complex projects.' },
  { c: 4, f: 'PERT/CPM chart', b: 'PERT: U.S. Navy; CPM: private industry. A bottom-up network diagram; best for complex, interdependent projects.' },
  { c: 4, f: 'Task patterns', b: 'Dependent ("then"), multiple successors ("when... start X and Y", concurrent), multiple predecessors ("when X and Y are done").' },
  { c: 4, f: 'Multiple predecessor start', b: 'Starts after the LATEST (largest) finish of its predecessors.' },
  { c: 4, f: 'Critical path', b: 'The series of tasks that, if delayed, delays the whole project. The longest path. Figure 3-22: 1-2-4-5 = 95 days.' },
  { c: 4, f: 'Slack time', b: 'How long a task can be delayed without delaying the early start of the next task(s). Critical tasks have zero slack.' },
  { c: 4, f: 'Structured walkthrough', b: 'A review of a team member\'s work by other team members (peer review).' },
  { c: 4, f: 'Risk management steps', b: 'Develop a plan → identify risks → analyze risks (qualitative: probability and impact; quantitative: money, time, scope, quality).' },
  { c: 4, f: 'Microsoft Project views', b: 'Gantt chart, network diagram (PERT-like), calendar view (day to day). The critical path is shown in red.' },
  { c: 4, f: 'Managing for success', b: 'Business issues (no business solution = failure), budget issues, schedule issues.' },
  { c: 4, f: 'Baseline', b: 'The approved tasks / cost / duration used for comparison (lecture 15).' },
  { c: 4, f: 'Proactive / reactive / corrective', b: 'Proactive: before the problem. Reactive: after it. Corrective: fixes a deviation from the baseline.' }
);
