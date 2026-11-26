/* Practice mock parts 2-3, and the lecturer's own mock exam with worked answers.
   `fixed: true` questions keep their original option order; `a` is the correct index. */
window.COURSE = window.COURSE || { chapters: [], cards: [], mock: [] };

window.COURSE.mock.push(
  { id: 'm40', l: 'c3l9', calc: true, q: 'You are a senior business analyst at a retail company. Develop a 4-year cash flow table for a Point-of-Sale (POS) upgrade that will yield an annual 3% increase in sales and a 9% reduction in cashier labor cost. Sales and labor figures are 900,000 JOD and 300,000 JOD. Hardware setup costs 40,000 JOD and software licenses 110,000 JOD. Using an interest rate of 10%, calculate:',
    fields: [{ t: 'Net profit (JOD)', ans: 66000, tol: 1 }, { t: 'Payback period (years)', ans: 2.78, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 44.0, tol: 0.3 }, { t: 'NPV (JOD)', ans: 21169, tol: 40 }],
    sol: '<p>Benefit = 3% × 900,000 + 9% × 300,000 = 27,000 + 27,000 = 54,000 per year. Year 0 = 40,000 + 110,000 = 150,000.</p><p>NP = 4 × 54,000 − 150,000 = 66,000. Accumulated: -150,000, -96,000, -42,000, +12,000 → PBP = 2 + 42,000/54,000 = 2.78 years. ROI = 66,000/150,000 = 44.0%. NPV = 54,000 × 3.1698 − 150,000 = 171,169 − 150,000 = 21,169.</p>' },
  { id: 'm41', l: 'c3l10', open: true, q: 'You are a senior business analyst for a hospital group with a budget of 150,000 JOD. After the preliminary investigation you have: Project 1: investment 150,000, net profit 45,000, ROI 30%, PBP 2.1 years. Project 2: 60,000, 24,000, 40%, 2.5 years. Project 3: 70,000, 21,000, 30%, 1.8 years. Project 4: 85,000, 30,600, 36%, 2.2 years. Recommend which initiative(s) to execute, with justification.',
    m: '<p>Feasible options within 150,000: Project 1 alone (net profit 45,000), Projects 2 + 3 (130,000, 45,000), <b>Projects 2 + 4 (145,000, 54,600)</b>. Projects 3 + 4 cost 155,000, over budget.</p><p>Recommend <b>Projects 2 and 4</b>: the highest total net profit (54,600), a combined ROI of 37.7% (above Project 1\'s 30%), the two highest individual ROIs, and payback within 2.5 years, using 145,000 of the budget. Project 1 would consume the whole budget for a lower profit and return.</p>' }
);

window.COURSE.official = [
  { id: 'o1', l: 'c1l2', fixed: true, q: 'Which of the following is an example of wisdom?',
    o: [['Detailed analysis of employee performance trends', 'Analyzing trends produces information (or knowledge), not action.'],
        ['Recognizing that offering flexible work hours improves employee productivity', 'Recognizing a cause and effect from experience is knowledge: an understanding, not yet an action.'],
        ['Implementing a work policy based on the understanding that it boosts productivity', 'Correct. Wisdom is taking action based on knowledge, "taking actions to improve".'],
        ['Collecting attendance records for all employees', 'Raw records are data.'],
        ['Both B and C', 'Tempting, but B is knowledge (understanding); only C acts on it.'],
        ['None of the above', 'C is wisdom.']],
    a: 2, k: 'Knowledge = understanding from experience. Wisdom = acting on it. "Both B and C" is the trap.' },
  { id: 'o2', l: 'c1l8', fixed: true, q: 'We usually conduct the feasibility study during which SDLC phase?',
    o: [['System planning phase', 'Correct. Planning → preliminary investigation, whose key part is the feasibility study.'],
        ['System analysis phase', 'Analysis builds the logical model and the requirements document.'],
        ['System design phase', 'Design builds the physical model.'],
        ['System implementation phase', 'Implementation builds and installs the system.'],
        ['All of the above', 'It belongs to planning only.'],
        ['None of the above', 'A is correct.']],
    a: 0, k: 'Chapter 1, slide 23.' },
  { id: 'o3', l: 'c2l8', fixed: true, q: 'In terms of feasibility analysis, the training of employees on new technology is considered:',
    o: [['Operational feasibility', 'Correct. "Will the new system require training for users?" is an operational feasibility question (Chapter 2, slide 21): it is about people being able to use the system.'],
        ['Technical feasibility', 'Technical asks whether the company has the hardware, software, and expertise to build and run it.'],
        ['Economic feasibility', 'Training appears as a cost line under economic feasibility, but the question is about preparing employees to use the system, which the slides list under operational.'],
        ['Schedule feasibility', 'Not about timing.'],
        ['Both B and C', 'Technical is not involved, so this pair is wrong.'],
        ['None of the above', 'A is correct.']],
    a: 0, k: 'People using the system → operational. Option E pairs two wrong answers.' },
  { id: 'o4', l: 'c4l3', fixed: true, q: 'The amount of time a task can be delayed without delaying the early start of subsequent task(s) is called:',
    o: [['Slack time', 'Correct. Tasks on the critical path have zero slack.'],
        ['Delay time', 'Not the defined term.'],
        ['Lag time', 'Lag is a required wait between tasks, not spare time.'],
        ['All of the above', 'Only A fits.'],
        ['None of the above', 'A is correct.']],
    a: 0, k: 'Not defined in the slides, but asked here. See Chapter 3: Managing System Projects, lesson 3.' },
  { id: 'o5', l: 'c2l9', fixed: true, q: 'A company plans to launch a new e-commerce platform before the "Back to School" shopping season. In terms of feasibility analysis, the evaluation of this initiative is mainly considered:',
    o: [['Operational feasibility', 'Not about users accepting the system.'],
        ['Technical feasibility', 'Not about resources or expertise.'],
        ['Economic feasibility', 'Not about costs and benefits.'],
        ['Schedule feasibility', 'Correct. A fixed outside deadline (before the season) makes timing the main question.'],
        ['Both B and C', 'Neither is the main concern.'],
        ['None of the above', 'D is correct.']],
    a: 3, k: 'A deadline in the question → schedule.' },
  { id: 'o6', l: 'c3l9', calc: true, q: 'You were just hired as a senior business analyst. Develop a four-year cash flow table for this project: a Sales Management System (SMS) that will yield a possible annual 5% increase in sales and a 7% reduction in salesforce (labor) cost. Sales and labor figures are 500,000 JOD and 350,000 JOD. Hardware setup is estimated at 22,000 JOD and software licenses at 120,000 JOD. Considering an interest rate of 10%, calculate:',
    fields: [{ t: 'Net profit (JOD)', ans: 56000, tol: 1 }, { t: 'Payback period (years)', ans: 2.87, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 39.4, tol: 0.3 }, { t: 'NPV (JOD)', ans: 14905, tol: 40 }],
    sol: '<p>Yearly benefit = 5% × 500,000 + 7% × 350,000 = 25,000 + 24,500 = 49,500. Year 0 investment = 22,000 + 120,000 = 142,000.</p><div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Accumulated</th><th>Discounted (10%)</th></tr><tr><td>0</td><td>-142,000</td><td>-142,000</td><td>-142,000</td></tr><tr><td>1</td><td>49,500</td><td>-92,500</td><td>45,000</td></tr><tr><td>2</td><td>49,500</td><td>-43,000</td><td>40,907</td></tr><tr><td>3</td><td>49,500</td><td>6,500</td><td>37,189</td></tr><tr><td>4</td><td>49,500</td><td>56,000</td><td>33,809</td></tr></table></div><p>NP = 56,000. PBP = 2 + 43,000/49,500 = 2.87 years. ROI = 56,000/142,000 = 39.4% (average per year 9.86%). NPV = 156,905 − 142,000 = 14,905.</p>' },
  { id: 'o7', l: 'c3l10', open: true, q: 'You were just hired as a senior business analyst for HyperMax stores, with a budget of 200,000 JOD. Initial investment / net profit / ROI / payback: Project 1: 200,000 / 54,000 / 27% / 1.9 years. Project 2: 80,000 / 28,000 / 35% / 2.3 years. Project 3: 100,000 / 31,000 / 31% / 2 years. Project 4: 90,000 / 33,000 / 36.67% / 2.4 years. Provide recommendations to senior management on which initiative(s) to execute, with justification.',
    m: '<p>Feasible options: Project 1 alone (200,000 → 54,000), 2 + 3 (180,000 → 59,000), 2 + 4 (170,000 → 61,000), <b>3 + 4 (190,000 → 64,000)</b>. 2 + 3 + 4 costs 270,000, over budget.</p><p>Recommend <b>Projects 3 and 4</b>: the highest total net profit (64,000), both ROIs (31%, 36.67%) above Project 1\'s 27%, payback within about 2.4 years, and 190,000 of the budget used. Project 1 uses the whole budget at the lowest ROI. If return per dinar matters most, Projects 2 and 4 (combined ROI 35.9%) are a close alternative.</p>' }
];
