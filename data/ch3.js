/* Chapter 3: Financial Analysis
   Sources: Ch3 slides and pptx (incl. speaker notes), annotated slide, notebook lecture 13, whiteboard photo,
   Exercise_Financial Analysis.pdf, and the lecturer's mock exam. o[0] = correct unless fixed. */
window.COURSE = window.COURSE || { chapters: [], cards: [], mock: [] };
window.COURSE.chapters.push({
  id: 'ch3',
  n: 3,
  label: 'Chapter 3',
  short: 'Ch 3 · Financial',
  title: 'Financial Analysis',
  lessons: [
    {
      id: 'c3l1',
      t: 'Selecting the Appropriate Project',
      src: 'Ch3 slides 4-7',
      body: `
<p>Organizations have <b>more opportunities than capacity to execute them</b>, so they must choose. <b>Project selection models</b> evaluate how well a project's execution will contribute to the overall business strategy.</p>

<h4>Three families of selection models</h4>
<div class="tbl"><table><tr><th>Model</th><th>Idea</th><th>Examples</th><th>Real situation</th></tr>
<tr><td><b>Nonnumeric</b></td><td>The project is a necessity; no calculation decides it</td><td>Legal necessity (sacred cow), operating necessity, competitive necessity</td><td>A new data-protection law forces changes to the customer database</td></tr>
<tr><td><b>Numeric (profitability)</b></td><td><b>Single criterion</b>: the financial impact of using assets to generate operating cash flow</td><td>Payback period, average rate of return, discounted cash flow (NPV), internal rate of return, profitability index</td><td>Two CRM systems compared only by NPV</td></tr>
<tr><td><b>Scoring</b></td><td><b>Multiple criteria</b> converted to a normalized scale for a holistic decision; factors on a pre-printed form, scored by one or more raters</td><td>Strategic fit, risk, cost, staff skills each scored 1-5</td><td>A committee scores five proposals on four weighted criteria</td></tr></table></div>
<div class="trap"><b>Link to Chapter 2:</b> nonnumeric models match the <b>nondiscretionary</b> projects in your notes (operational, competitive, legal, sacred cow): "you have to do it; don't calculate benefits".</div>

<h4>The selection questions (slide 6)</h4>
<p>Is the project potentially profitable? · Does it have a chance of meeting our return-on-investment hurdle rate (the minimum acceptable return)? · Does the firm have, or can it easily acquire, the knowledge and skills? · Does the organization have the capacity to carry it out on its proposed schedule?</p>

<h4>The selection decision (slide 7)</h4>
<figure class="dg"><div class="sel"><div class="ins"><span>Perceived and real needs</span><span>Existing and available resources</span><span>List of potential and ongoing projects</span><span>Current business conditions</span><span>Evaluation criteria</span></div><div class="ar">→</div><div class="bx hi">Project selection decision</div><div class="ar">→</div><div class="outs"><b>Decision outcome</b><span>Accept project</span><span>Reject project</span><span>Delay project</span><span>Refocus project</span><span>End-user development</span><span>Purchase system</span><span>Modify and resubmit</span></div></div><figcaption>Five inputs → one decision → seven possible outcomes</figcaption></figure>
<div class="ex"><b>Real example, a hospital asks for an appointment system:</b> accept (IT builds it), reject (not worth it), delay (wait for next year's budget), refocus (start with outpatients only), end-user development (the appointments desk builds it in Excel), purchase system (buy a ready-made product), modify and resubmit (send it back to be rewritten with clearer requirements).</div>`,
      quiz: [
        { id: 'c3l1q1', l: 'c3l1', q: 'A committee rates five proposals on strategic fit, risk, cost, and staff skills, converting each to a 1-5 scale before deciding. Which model is this?',
          o: [['A scoring model', 'Correct: multiple criteria on a normalized scale.'],
              ['A profitability model', 'Profitability models use a single financial criterion.'],
              ['A nonnumeric model', 'Nonnumeric models involve no scoring; the project is a necessity.'],
              ['A payback period model', 'Payback is one profitability criterion.']],
          k: 'One criterion → profitability. Several criteria → scoring.' },
        { id: 'c3l1q2', l: 'c3l1', q: 'Two CRM systems are compared only by their NPV. Which kind of selection model is this?',
          o: [['A numeric (profitability) model', 'Correct: a single financial criterion.'],
              ['A scoring model, because NPV is a score', 'Scoring models combine several criteria.'],
              ['A nonnumeric model, because no form is used', 'Nonnumeric means no calculation at all.'],
              ['A competitive necessity model', 'Nothing forces either project.']],
          k: 'NPV, payback, IRR → profitability.' },
        { id: 'c3l1q3', l: 'c3l1', q: 'A new data-protection law forces changes to the customer database. Which selection model applies?',
          o: [['Nonnumeric: legal necessity (sacred cow)', 'Correct: no calculation decides it.'],
              ['Numeric: approve it only if its NPV is positive', 'The law must be followed whatever the NPV.'],
              ['Scoring: rate it against the other proposals', 'There is no choice to score.'],
              ['Numeric: approve it only if it pays back within a year', 'Payback does not apply to a legal necessity.']],
          k: 'Necessity → nonnumeric.' },
        { id: 'c3l1q4', l: 'c3l1', q: 'After evaluation, the committee lets the appointments desk build the small tool itself in a spreadsheet. Which outcome is this?',
          o: [['End-user development', 'Correct.'],
              ['Purchase a ready-made system', 'That means buying a ready-made product.'],
              ['Refocus the project', 'That means narrowing or changing its direction.'],
              ['Accept the project', 'Accept means IT builds it.']],
          k: 'Seven outcomes.' },
        { id: 'c3l1q5', l: 'c3l1', q: '"Does it have a chance of meeting our return-on-investment hurdle rate?" What is a hurdle rate?',
          o: [['The minimum acceptable rate of return a project must reach', 'Correct.'],
              ['The maximum budget the committee can approve this year', 'Not a rate of return.'],
              ['The inflation rate used to discount future cash flows', 'That is the discount rate.'],
              ['The time a project takes to recover its investment', 'That is the payback period.']],
          k: 'Hurdle rate = minimum acceptable return.' },
        { id: 'c3l1q6', l: 'c3l1', q: 'Which item is an INPUT to the project selection decision rather than an outcome?',
          o: [['Current business conditions', 'Correct.'],
              ['Refocus the project scope', 'An outcome.'],
              ['Purchase a packaged system', 'An outcome.'],
              ['Modify and resubmit the request', 'An outcome.']],
          k: 'Five inputs, seven outcomes.' }
      ]
    },
    {
      id: 'c3l2',
      t: 'The Business Case and Its Content',
      src: 'Ch3 slides 8-10 · annotated slide 10',
      body: `
<p><b>Feasibility studies can also act as a "business case"</b>: they justify starting the project, should show that its benefits exceed development, implementation, and operational costs, and must take account of business risks.</p>
<div class="tbl"><table><tr><th>Section</th><th>Content</th><th>Example: a clinic booking app</th></tr>
<tr><td>Introduction / background</td><td>The problem to solve or the opportunity to exploit</td><td>Patients wait on the phone for 20 minutes to book</td></tr>
<tr><td>The proposed project</td><td>A brief outline of the scope</td><td>Online booking, reminders, cancellations</td></tr>
<tr><td>The market</td><td>For a new product (e.g. a computer game), assess likely demand</td><td>How many patients would book online?</td></tr>
<tr><td>Organizational and operational infrastructure</td><td>How the organization must change; important when a new IS is introduced</td><td>Receptionists move from phone booking to handling walk-ins</td></tr>
<tr><td>Benefits</td><td>In financial terms where possible; the client assesses them because the client pays</td><td>Saves two receptionist shifts per day</td></tr>
<tr><td>Outline implementation plan</td><td>How it will be implemented, considering the <b>disruption</b> it may cause</td><td>Launch in a quiet month; run phone booking in parallel for 2 weeks</td></tr>
<tr><td>Costs</td><td>The implementation plan supplies the information to establish them</td><td>Development, licenses, training</td></tr>
<tr><td>Financial analysis</td><td>Combines cost and benefit data to establish the project's value</td><td>Net profit, PBP, ROI, NPV</td></tr></table></div>

<h4>Types of cost (the lecturer's note on slide 10)</h4>
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Variable</td><td>Changes with usage</td><td>An SMS fee for each reminder sent</td></tr>
<tr><td>Fixed</td><td>Stays the same whatever the usage</td><td>A yearly support contract</td></tr>
<tr><td>One-time</td><td>Paid once</td><td>Buying a server or a perpetual license</td></tr>
<tr><td>Ongoing: operational</td><td>Recurs for the life of the system</td><td>Monthly cloud hosting</td></tr>
<tr><td>Ongoing: project life span</td><td>Recurs only during the project</td><td>The project manager's salary for 6 months</td></tr></table></div>`,
      quiz: [
        { id: 'c3l2q1', l: 'c3l2', q: 'Which business case section must consider the disruption a project might cause to the organization?',
          o: [['Outline implementation plan', 'Correct.'],
              ['Organizational and operational infrastructure', 'That covers how the organization must change, not the disruption of implementing it.'],
              ['Benefits', 'Benefits are the gains.'],
              ['Introduction and background', 'That states the problem.']],
          k: 'Disruption → implementation plan.' },
        { id: 'c3l2q2', l: 'c3l2', q: 'Receptionists will move from phone booking to handling walk-in patients. Which business case section describes this?',
          o: [['Organizational and operational infrastructure', 'Correct: how the organization would need to change.'],
              ['Outline implementation plan, because it is a change', 'That covers how and when it is rolled out.'],
              ['The market, because patients will book differently', 'That assesses demand for a product.'],
              ['Financial analysis, because staff costs will change', 'That combines costs and benefits.']],
          k: 'How the organization changes → infrastructure.' },
        { id: 'c3l2q3', l: 'c3l2', q: 'A company plans a new mobile game. Which section assesses how many people will buy it?',
          o: [['The market', 'Correct: the slide\'s own example.'],
              ['Benefits', 'Benefits are expressed financially, but demand is assessed in the market section.'],
              ['The proposed project', 'That outlines the scope.'],
              ['Introduction and background', 'That states the opportunity.']],
          k: 'Market = demand.' },
        { id: 'c3l2q4', l: 'c3l2', q: 'An SMS fee is charged for every appointment reminder sent. This cost is:',
          o: [['Variable', 'Correct: it changes with usage.'],
              ['Fixed', 'It is not the same whatever the usage.'],
              ['One-time', 'It recurs with every message.'],
              ['Project life span', 'It continues after the project ends.']],
          k: 'Changes with usage → variable.' },
        { id: 'c3l2q5', l: 'c3l2', q: 'Monthly cloud hosting, paid for as long as the system runs, is best described as:',
          o: [['An ongoing operational cost', 'Correct.'],
              ['A one-time cost', 'It recurs every month.'],
              ['An ongoing project life span cost', 'It continues after the project ends.'],
              ['A benefit', 'It is a cost.']],
          k: 'For the life of the system → operational.' },
        { id: 'c3l2q6', l: 'c3l2', q: 'Who ultimately assesses the benefits in a business case, and why?',
          o: [['The client, because they are going to pay for the project', 'Correct.'],
              ['The developer, because they know what the system can do', 'The slide says the client.'],
              ['The analyst, because they wrote the business case', 'The slide says the client.'],
              ['The finance department, because benefits are financial', 'The slide says the client.']],
          k: 'Whoever pays, assesses.' }
      ]
    },
    {
      id: 'c3l3',
      t: 'Cost-Benefit Analysis and Life Cycle Cash Flows',
      src: 'Ch3 slides 12-14 · speaker notes',
      body: `
<h4>CBA in three steps</h4>
<ol><li><b>Identify all the costs</b>: development costs, software licenses, infrastructure cost, set-up and operational costs.</li><li><b>Identify the value of the benefits</b>.</li><li><b>Check that benefits are greater than costs</b>.</li></ol>
<div class="ex"><b>Real example:</b> a delivery company's routing system. Costs: development 60K, licenses 10K/year, servers 15K, training and setup 5K. Benefits: fuel savings 30K/year, 2 fewer dispatchers 24K/year. Benefits exceed costs within the second year, so CBA supports it.</div>

<h4>Product / system life cycle cash flows</h4>
<figure class="dg"><svg class="curve" viewBox="0 0 600 220" preserveAspectRatio="none"><line x1="40" y1="110" x2="590" y2="110" class="ax"/><line x1="40" y1="10" x2="40" y2="210" class="ax"/><path d="M40 110 C 80 200, 150 210, 190 160 S 240 30, 320 30 S 520 90, 540 110 C 548 150, 560 150, 570 110" class="ln"/><text x="46" y="24">Income</text><text x="46" y="204">Expenditure</text><text x="70" y="190">development</text><text x="300" y="22">income pays off costs</text><text x="455" y="150">decommissioning</text><text x="545" y="100">Time</text></svg><figcaption>Slide 13</figcaption></figure>
<div class="tbl"><table><tr><th>Part of the curve</th><th>What happens</th><th>Same example</th></tr>
<tr><td>Dip below zero at the start</td><td>Development incurs costs</td><td>Building the routing system</td></tr>
<tr><td>Rise above zero</td><td>Once released, income gradually pays off the costs</td><td>Fuel and staff savings accumulate</td></tr>
<tr><td>Slow decline</td><td>The system ages; benefits shrink</td><td>Newer tools appear</td></tr>
<tr><td>Small dip at the end</td><td>Some costs relate to <b>decommissioning</b></td><td>Migrating data out, shutting servers down</td></tr></table></div>
<div class="note"><b>Speaker note on this slide:</b> "inflation". The <b>timing</b> of costs and income must be estimated, because money received later is worth less. This sets up NPV.</div>

<h4>The four tools (slide 14)</h4>
<p>Net profit · Payback analysis · Return on investment (ROI) · Net present value (NPV)</p>
<div class="note"><b>From your notes (lecture 13):</b> financial analysis helps in <b>deciding</b> which project is <b>more profitable</b>.</div>`,
      quiz: [
        { id: 'c3l3q1', l: 'c3l3', q: 'In the life cycle cash flow curve, why does the line dip below zero again at the very end?',
          o: [['Some costs relate to decommissioning the system', 'Correct.'],
              ['Development costs are paid at the end of the life cycle', 'Development is at the start.'],
              ['Income is highest at the end, so the line flips', 'Income declines before the end.'],
              ['Inflation turns the remaining income negative', 'Inflation reduces value but does not make income negative.']],
          k: 'Start: development. End: decommissioning.' },
        { id: 'c3l3q2', l: 'c3l3', q: 'Which order of CBA steps is correct?',
          o: [['Identify costs → identify the value of benefits → check benefits exceed costs', 'Correct.'],
              ['Identify benefits → calculate NPV → identify costs', 'NPV is a separate tool; CBA starts with costs.'],
              ['Check benefits exceed costs → identify the costs → identify the benefits', 'You cannot check before identifying.'],
              ['Identify costs → calculate the payback period → approve the project', 'CBA compares benefits with costs.']],
          k: 'Costs → benefits → compare.' },
        { id: 'c3l3q3', l: 'c3l3', q: 'Why must the TIMING of costs and income be estimated, not just their totals?',
          o: [['Money received later is worth less because of inflation, which affects tools like NPV', 'Correct: the speaker note says "inflation".'],
              ['Timing changes the total net profit, so the totals alone would be misleading', 'Net profit is a simple sum; timing does not change it.'],
              ['Income that arrives late cannot be counted in a cost-benefit analysis at all', 'It is counted, just worth less today.'],
              ['Each cost can only be recorded in the accounting year in which it was paid', 'True of accounting, but not why timing matters here.']],
          k: 'Timing → time value of money.' },
        { id: 'c3l3q4', l: 'c3l3', q: 'Which list contains exactly the four financial analysis tools on slide 14?',
          o: [['Net profit, payback analysis, ROI, NPV', 'Correct.'],
              ['Net profit, payback analysis, IRR, profitability index', 'IRR and profitability index are selection models, not the four tools.'],
              ['Payback analysis, ROI, NPV, scoring model', 'Scoring is a selection model.'],
              ['Net profit, ROI, NPV, hurdle rate', 'The hurdle rate is a threshold, not a tool.']],
          k: 'NP · PBP · ROI · NPV.' }
      ]
    },
    {
      id: 'c3l4',
      t: 'Net Profit',
      src: 'Ch3 slide 15 · Lecture 13 notes',
      body: `
<ul><li><b>Year 0</b> represents all the costs before the system is in operation.</li><li><b>Cash flow</b> = income minus outgoings for that year.</li><li><b>Net profit</b> = the sum of all cash flows over the application's lifetime.</li></ul>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th></tr><tr><td>0</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td></tr><tr><td>2</td><td>10,000</td></tr><tr><td>3</td><td>10,000</td></tr><tr><td>4</td><td>20,000</td></tr><tr><td>5</td><td>100,000</td></tr><tr><th>Net profit</th><th>50,000</th></tr></table></div>
<div class="formula">-100 + 10 + 10 + 10 + 20 + 100 = <b>50K</b></div>
<div class="note"><b>From your notes (lecture 13):</b> expenses 10K → income 14K → <b>net profit 4K</b>.</div>
<div class="trap"><b>Two blind spots of net profit:</b><br>1. <b>Timing.</b> Project A earns its 50K in year 1; project B earns 50K in year 5. Net profit calls them equal, but A's money is worth more (it arrives sooner).<br>2. <b>Size.</b> 4K profit on a 10K investment and 4K profit on a 1-million investment have the same net profit, but very different returns. That is why ROI and NPV exist.</div>`,
      quiz: [
        { id: 'c3l4q1', l: 'c3l4', q: 'Cash flows: year 0 = -60,000; years 1-4 = 20,000, 20,000, 30,000, 30,000. What is the net profit?',
          o: [['40,000', 'Correct: -60 + 20 + 20 + 30 + 30.'],
              ['100,000', 'That is total income without subtracting the investment.'],
              ['160,000', 'The investment was added as if positive.'],
              ['70,000', 'Arithmetic error.']],
          k: 'Sum of all cash flows; year 0 is negative.' },
        { id: 'c3l4q2', l: 'c3l4', q: 'What does "year 0" represent in a cash flow table?',
          o: [['All the costs before the system is in operation', 'Correct.'],
              ['The first year in which the system earns income', 'That is year 1.'],
              ['The year the system is decommissioned', 'That is the last year.'],
              ['The average yearly profit over the system\'s life', 'That is used for ROI.']],
          k: 'Year 0 = the initial investment.' },
        { id: 'c3l4q3', l: 'c3l4', q: 'Projects A and B both have a net profit of 50K. A earns most of it in year 1; B earns most in year 5. What does net profit fail to show?',
          o: [['That A\'s money arrives sooner and is worth more today', 'Correct: net profit ignores timing.'],
              ['That B is more profitable because it lasts longer', 'Both have the same total profit.'],
              ['That A has a larger initial investment than B', 'Nothing is said about investment.'],
              ['That B\'s income is more certain than A\'s', 'Later income is less certain, not more.']],
          k: 'Net profit ignores time.' },
        { id: 'c3l4q4', l: 'c3l4', q: 'A project costs 10K and returns 14K in income. What is its net profit?',
          o: [['4K', 'Correct: 14K - 10K.'],
              ['14K', 'That is income, before subtracting the cost.'],
              ['24K', 'Cost and income were added.'],
              ['40%', 'That is the ROI, not the net profit.']],
          k: 'Net profit = income - expenses.' }
      ]
    },
    {
      id: 'c3l5',
      t: 'Payback Period (PBP)',
      src: 'Ch3 slide 16 + speaker notes · Lecture 13 notes',
      body: `
<p>The <b>payback period</b> is the time it takes to start generating a <b>surplus</b> of income over outgoings: when do I get my money back? It is an estimate, in months, years, or weeks.</p>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Accumulated</th></tr><tr><td>0</td><td>-100,000</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td><td>-90,000</td></tr><tr><td>2</td><td>10,000</td><td>-80,000</td></tr><tr><td>3</td><td>10,000</td><td>-70,000</td></tr><tr><td>4</td><td>20,000</td><td><b>-50,000</b></td></tr><tr><td>5</td><td>100,000</td><td>50,000</td></tr></table></div>
<div class="formula">PBP = last year with a negative accumulated value + ( |accumulated at the end of that year| ÷ cash flow of the next year )<br>= 4 + (50,000 ÷ 100,000) = <b>4.5 years</b></div>
<p class="muted small">Speaker notes: this assumes cash arrives evenly through the year (100,000 ÷ 12 ≈ 8,333 per month in year 5).</p>

<h4>Three cases you must handle</h4>
<div class="tbl"><table><tr><th>Case</th><th>Method</th><th>Example</th></tr>
<tr><td>Equal income</td><td>Investment ÷ income per period</td><td>10K invested, 1K per month → <b>10 months</b> (even if the project runs 14 months)</td></tr>
<tr><td>Unequal income</td><td>Accumulate period by period until the total covers the investment</td><td>3,000 invested; 0, 500, 1,000, 300, 1,200 → totals 0, 500, 1,500, 1,800, 3,000 → <b>5 months</b></td></tr>
<tr><td>Payback inside a year</td><td>Whole years + fraction of the next year</td><td>60K invested; 20K, 20K, 30K → after 2 years -20K → 2 + 20/30 = <b>2.67 years</b></td></tr></table></div>
<div class="trap"><b>Two traps:</b> the project's duration (14 months) is not the PBP (10 months). And PBP ignores everything after payback: project A pays back in 2 years then earns nothing; project B pays back in 3 years then earns a lot for 5 more. A shorter PBP is not automatically more profitable.</div>`,
      quiz: [
        { id: 'c3l5q1', l: 'c3l5', q: 'Investment 60,000. Cash flows: year 1 20,000; year 2 20,000; year 3 30,000; year 4 30,000. What is the payback period?',
          o: [['About 2.67 years', 'Correct: -20K after year 2; 2 + 20/30.'],
              ['About 3.00 years', 'After 3 years the total is already +10K.'],
              ['About 2.00 years', 'After 2 years it is still -20K.'],
              ['About 2.50 years', 'Divided by the wrong year\'s income.']],
          k: 'Last negative year + remaining ÷ next year\'s cash flow.' },
        { id: 'c3l5q2', l: 'c3l5', q: 'A 10,000 investment brings a fixed 1,000 per month for 14 months. Which statement is correct?',
          o: [['PBP is 10 months; total income over the project is 14,000', 'Correct.'],
              ['PBP is 14 months, the full length of the project', 'That is the project duration.'],
              ['PBP is 4 months, the profit divided by monthly income', 'The 4K is profit, not time.'],
              ['PBP is 1.4 years, the duration in years', 'That is still the project duration.']],
          k: 'PBP ≠ project duration.' },
        { id: 'c3l5q3', l: 'c3l5', q: 'Investment 3,000. Monthly income: 0, 500, 1,000, 300, 1,200. What is the payback period?',
          o: [['5 months', 'Correct: the running total reaches 3,000 in month 5.'],
              ['3 months', 'After 3 months the total is only 1,500.'],
              ['4 months', 'After 4 months the total is 1,800.'],
              ['6 months', 'It pays back exactly in month 5.']],
          k: 'Unequal income → accumulate.' },
        { id: 'c3l5q4', l: 'c3l5', q: 'Project A pays back in 2 years and then earns nothing. Project B pays back in 3 years and then earns heavily for 5 more years. What does this show?',
          o: [['PBP ignores cash flows after payback, so a shorter PBP is not always more profitable', 'Correct.'],
              ['A shorter payback period always identifies the more profitable of two projects', 'Exactly the trap.'],
              ['PBP already includes all the profits that arrive after the investment is recovered', 'It stops at the payback point.'],
              ['The two projects are equally attractive, because both eventually pay back', 'B earns far more overall.']],
          k: 'PBP = speed of recovery, not profitability.' },
        { id: 'c3l5q5', l: 'c3l5', q: 'In the slide example the PBP is 4.5 years. What assumption does that fraction rely on?',
          o: [['Cash arrives evenly through year 5', 'Correct, from the speaker notes.'],
              ['All year 5 income arrives on the first day', 'Then payback would be exactly 4 years.'],
              ['Inflation is zero during year 5', 'The PBP fraction ignores inflation either way.'],
              ['The project ends halfway through year 5', 'The project continues.']],
          k: 'Even cash flow within the year.' }
      ]
    },
    {
      id: 'c3l6',
      t: 'Return on Investment (ROI)',
      src: 'Ch3 slide 17 · Lecture 13 notes · whiteboard · mock exam',
      body: `
<p><b>ROI</b> compares what a project returns with what it costs. <b>The higher, the better.</b> Many organizations set a <b>minimum acceptable rate of return</b> (the hurdle rate).</p>
<div class="formula">General formula (slide): ROI = (total discounted benefits − total discounted costs) ÷ discounted costs</div>

<h4>Two ways you will see it calculated</h4>
<div class="tbl"><table><tr><th>Version</th><th>Formula</th><th>Example (net profit 50K over 5 years, investment 100K)</th><th>Where it appears</th></tr>
<tr><td><b>ROI</b></td><td>Net profit ÷ initial investment</td><td>50,000 ÷ 100,000 = <b>50%</b></td><td>The lecturer's mock exam table (54,000 ÷ 200,000 = 27%) and the whiteboard</td></tr>
<tr><td><b>Average (annual) ROI</b></td><td>(Net profit ÷ years) ÷ investment, or ROI ÷ years</td><td>10,000 ÷ 100,000 = <b>10%</b></td><td>The slide's worked example; "average ROI" in the exercise</td></tr></table></div>
<div class="trap"><b>Read the question:</b> "ROI" in the lecturer's tables = net profit ÷ investment. "Average ROI" or "annual ROI" = divided by the number of years. In a written answer, show the formula you used.</div>

<h4>Why ROI matters: it compares projects of different sizes</h4>
<div class="note"><b>From your notes (lecture 13):</b> 10K invested → 4K net profit = <b>40%</b>. 100K invested → 40K net profit = <b>40%</b>. "They are good, because we look at the percentage." The second project makes ten times more money, but both use their investment equally well.</div>
<div class="ex"><b>Real example:</b> a manager says "Project A makes 400K and B only 40K, so A is better." If A invested 4 million (ROI 10%) and B invested 50K (ROI 80%), B is far more efficient. Absolute profit hides this.</div>`,
      quiz: [
        { id: 'c3l6q1', l: 'c3l6', q: 'A project has net profit 40,000 over 4 years on an investment of 60,000. What is its AVERAGE (annual) ROI?',
          o: [['About 16.7%', 'Correct: 40,000 ÷ 4 = 10,000; 10,000 ÷ 60,000.'],
              ['About 66.7%', 'That is the total ROI (40 ÷ 60).'],
              ['10%', 'That is the slide example with different numbers.'],
              ['25%', 'That is 1 ÷ 4 years, not a return.']],
          k: 'Average ROI = (net profit ÷ years) ÷ investment.' },
        { id: 'c3l6q2', l: 'c3l6', q: 'In the lecturer\'s mock exam table, Project 1 has net profit 54,000 on an investment of 200,000. What ROI does the table show?',
          o: [['27%', 'Correct: 54,000 ÷ 200,000.'],
              ['6.75%', 'That would be the average ROI over 4 years.'],
              ['37%', 'Arithmetic error.'],
              ['270%', 'Wrong placement of the decimal point.']],
          k: 'Table ROI = net profit ÷ investment.' },
        { id: 'c3l6q3', l: 'c3l6', q: 'Project X earns 4K on 10K invested; Project Y earns 40K on 100K invested. Which statement is correct?',
          o: [['Both have the same ROI (40%), so they use their investment equally well', 'Correct.'],
              ['Y is ten times better, because its profit is ten times larger', 'Its profit is larger, but its ROI is the same.'],
              ['X is better, because a smaller investment is always the less risky one', 'Risk is not measured by ROI.'],
              ['They cannot be compared, because their investment amounts are different', 'ROI exists precisely to compare them.']],
          k: 'ROI is a rate, not an amount.' },
        { id: 'c3l6q4', l: 'c3l6', q: 'A project has an ROI of 150% over 4 years. What is its average ROI?',
          o: [['37.5%', 'Correct: 150 ÷ 4.'],
              ['150%', 'That is the total.'],
              ['600%', 'Multiplied instead of divided.'],
              ['48%', 'That is a different project\'s value.']],
          k: 'Average ROI = ROI ÷ years.' },
        { id: 'c3l6q5', l: 'c3l6', q: 'Company policy requires every project to return at least 15% per year. A project\'s average ROI is 12%. What is the decision on financial grounds?',
          o: [['Reject it: it does not meet the minimum acceptable rate of return', 'Correct.'],
              ['Accept it: any positive ROI means the project is profitable', 'Positive is not enough if a hurdle rate is set.'],
              ['Accept it: average ROI is always lower than total ROI', 'Comparing different measures does not change the rule.'],
              ['Delay it until its ROI can be recalculated with NPV', 'The policy is about ROI.']],
          k: 'Compare with the hurdle rate.' }
      ]
    },
    {
      id: 'c3l7',
      t: 'Net Present Value (NPV)',
      src: 'Ch3 slide 18 · Lecture 13 notes',
      body: `
<p>The idea: <b>a dinar today is worth more than a dinar in 5 years</b>. Prices rise (inflation), and money today can be invested. Your notes: the "future value of money" "depends on the <b>inflation rate</b>", and <b>years ↑ → certainty ↓</b>.</p>
<div class="formula">Discount factor = 1 / (1 + r)<sup>t</sup> · r = interest rate (10% = 0.10) · t = years from now<br>Discounted cash flow = cash flow × discount factor · NPV = sum of discounted cash flows</div>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Discount factor (10%)</th><th>Discounted cash flow</th></tr>
<tr><td>0</td><td>-100,000</td><td>1.0000</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td><td>0.9091</td><td>9,091</td></tr><tr><td>2</td><td>10,000</td><td>0.8264</td><td>8,264</td></tr><tr><td>3</td><td>10,000</td><td>0.7513</td><td>7,513</td></tr><tr><td>4</td><td>20,000</td><td>0.6830</td><td>13,660</td></tr><tr><td>5</td><td>100,000</td><td>0.6209</td><td>62,090</td></tr><tr><th colspan="3">NPV</th><th>618</th></tr></table></div>
<div class="trap"><b>Typo in the slide:</b> the text says "1/(1.10 × 1.10) = 0.8294"; the correct value is <b>0.8264</b>, as in the table.</div>

<h4>Reading the result</h4>
<div class="note"><b>From your notes:</b> net profit <b>50,000</b> but NPV <b>618</b>. "It's not worth it, because it's not futuristic": most of the income arrives in year 5, so in today's money the project barely covers itself.</div>
<p><b>Decision rule:</b> NPV &gt; 0 means the project returns more than the cost of money; when comparing, the higher NPV wins. NPV is the only one of the four tools that counts the time value of money.</p>

<h4>What moves NPV</h4>
<div class="tbl"><table><tr><th>Change</th><th>Effect on NPV</th><th>Why</th></tr>
<tr><td>Higher interest or inflation rate</td><td>Down</td><td>Discount factors get smaller</td></tr>
<tr><td>Income arrives later</td><td>Down</td><td>Later years are discounted more</td></tr>
<tr><td>Income arrives earlier</td><td>Up</td><td>Less discounting</td></tr>
<tr><td>Longer horizon</td><td>Less certain</td><td>"Years ↑, certainty ↓"</td></tr></table></div>
<div class="note"><b>Inflation (from your notes):</b> Jordan ≈ 2.5% · Turkey ≈ 18% · United States ≈ 4-4.5% → 2%. The same project has a much lower NPV in a high-inflation economy.</div>`,
      quiz: [
        { id: 'c3l7q1', l: 'c3l7', q: 'At r = 10%, what is the discount factor for year 3, and the present value of 10,000 received in year 3?',
          o: [['0.7513 and 7,513', 'Correct: 1 ÷ 1.331.'],
              ['0.8264 and 8,264', 'That is year 2.'],
              ['0.9091 and 9,091', 'That is year 1.'],
              ['1.3310 and 13,310', 'That is (1+r)³, not its inverse.']],
          k: 'Factor = 1 / (1+r)^t.' },
        { id: 'c3l7q2', l: 'c3l7', q: 'A project has net profit 50,000 but NPV 618. What is the best interpretation?',
          o: [['After discounting, it barely creates value, so it is much weaker than net profit suggests', 'Correct.'],
              ['The NPV is wrong, because NPV should always come out equal to the net profit', 'NPV is lower whenever r is positive.'],
              ['The project loses 49,382 in today\'s money once the cash flows are discounted', 'NPV is still positive.'],
              ['Net profit is more reliable here, because it uses the real cash amounts received', 'NPV is more reliable because it counts timing.']],
          k: 'NPV = value after counting time.' },
        { id: 'c3l7q3', l: 'c3l7', q: 'The same project is evaluated in an economy with 18% inflation instead of 2.5%. What happens to its NPV?',
          o: [['It decreases, because higher rates shrink the present value of future income', 'Correct.'],
              ['It increases, because the project\'s income grows along with inflation', 'The cash flows are fixed; their present value falls.'],
              ['It stays the same, because the project\'s cash flows have not changed', 'NPV depends on the rate.'],
              ['It cannot be calculated, since NPV only works with rates below 10%', 'Any rate can be used.']],
          k: 'Rate ↑ → NPV ↓.' },
        { id: 'c3l7q4', l: 'c3l7', q: 'Which change would INCREASE a project\'s NPV, all else equal?',
          o: [['Receiving the same cash flows one year earlier', 'Correct.'],
              ['Using a higher discount rate for the analysis', 'That lowers NPV.'],
              ['Delaying the same cash flows by one more year', 'That lowers NPV.'],
              ['Extending the horizon with no extra income', 'That adds nothing.']],
          k: 'Earlier money → higher NPV.' },
        { id: 'c3l7q5', l: 'c3l7', q: 'What does the discount factor for year 2 at 10% equal?',
          o: [['0.8264', 'Correct: 1 ÷ 1.21.'],
              ['0.8294', 'That is the typo printed in the slide\'s text.'],
              ['0.9091', 'That is year 1.'],
              ['1.2100', 'That is (1.1)², not its inverse.']],
          k: 'Watch for the slide\'s typo.' },
        { id: 'c3l7q6', l: 'c3l7', q: 'Which of the four financial tools is the ONLY one that accounts for the time value of money?',
          o: [['Net present value (NPV)', 'Correct.'],
              ['Payback period, because it measures time', 'It measures time, but not the value of money over time.'],
              ['Return on investment', 'It uses undiscounted profit in this course.'],
              ['Net profit', 'A simple sum.']],
          k: 'Discounting = NPV.' }
      ]
    },
    {
      id: 'c3l8',
      t: 'The Class Exercise: Choosing One of Four Projects',
      src: 'Exercise_Financial Analysis.pdf · whiteboard solution from class',
      body: `
<p>This is the lecturer's exercise; the whiteboard photo is its solution. The organization can choose <b>only one</b> project and must justify the choice with financial evidence (payback period, average ROI, NPV). There is no year 0: year 1 holds the first costs.</p>
<div class="tbl num"><table><tr><th>Project</th><th>Costs Y1-Y4</th><th>Revenue Y1-Y4</th><th>Net cash flow Y1-Y4</th></tr>
<tr><td>P1</td><td>100K, 10K, 10K, 10K</td><td>0, 5K, 50K, 110K</td><td>-100K, -5K, 40K, 100K</td></tr>
<tr><td>P2</td><td>50K, 20K, 5K, 5K</td><td>0, 6K, 70K, 100K</td><td>-50K, -14K, 65K, 95K</td></tr>
<tr><td>P3</td><td>120K, 15K, 5K, 5K</td><td>2K, 50K, 100K, 150K</td><td>-118K, 35K, 95K, 145K</td></tr>
<tr><td>P4</td><td>50K, 50K, 10K, 10K</td><td>5K, 70K, 70K, 50K</td><td>-45K, 20K, 60K, 40K</td></tr></table></div>
<h4>The results</h4>
<div class="tbl num"><table><tr><th></th><th>P1</th><th>P2</th><th>P3</th><th>P4</th></tr>
<tr><td>Net profit (sum of net flows)</td><td>35K</td><td>96K</td><td>157K</td><td>75K</td></tr>
<tr><td>ROI = net profit ÷ year-1 cost</td><td>35%</td><td>192%</td><td>130.8%</td><td>150%</td></tr>
<tr><td>Average ROI = ROI ÷ 4 years</td><td>8.75%</td><td>48%</td><td>32.7%</td><td>37.5%</td></tr>
<tr><td>Payback period</td><td>3.65 y</td><td>2.98 y</td><td>2.87 y</td><td>2.42 y</td></tr>
<tr><td>NPV at 10% (years 1-4 discounted)</td><td>3,312</td><td>56,700</td><td>92,064</td><td>48,016</td></tr></table></div>
<p class="muted small">The NPV row matches the whiteboard exactly. The board's payback row reads 3.55, 2.9, 2.87 and 1.8; recomputing from the exercise data gives the values above.</p>
<h4>How each number is calculated (P3)</h4>
<div class="formula">Net flows: -118K, 35K, 95K, 145K → net profit = 157K<br>ROI = 157K ÷ 120K = 130.8% → average ROI = 130.8% ÷ 4 = 32.7%<br>Accumulated: -118K, -83K, +12K → PBP = 2 + 83/95 = 2.87 years<br>NPV = -118K×0.9091 + 35K×0.8264 + 95K×0.7513 + 145K×0.6830 = 92,064</div>
<h4>The decision</h4>
<p><b>P1</b> is out: lowest NPV, lowest average ROI, longest payback · <b>P2</b> has the best ROI (192%) because its investment is small · <b>P3</b> has the highest NPV (92,064) and net profit (157K): with only one project allowed, <b>P3 is the recommendation</b>, and the board gives P3 the largest share (80%)</p>
<div class="trap"><b>The lesson:</b> each measure can point to a different project (ROI → P2, NPV → P3, shortest PBP → P4). When you must pick one, justify with several measures and say which you weigh most. NPV is the strongest single measure because it counts the time value of money.</div>`,
      quiz: [
        { id: 'c3l8q1', l: 'c3l8', q: 'A committee can choose only ONE of four projects. P1: NPV 3,312. P2: ROI 192%, NPV 56,700. P3: net profit 157K, NPV 92,064. P4: NPV 48,016. Which choice is best supported?',
          o: [['P3, because it has the highest NPV and net profit', 'Correct.'],
              ['P2, because it has the highest ROI of the four', 'P2 is the most efficient, but P3 creates far more value.'],
              ['P4, because it has the shortest payback period', 'Shortest payback does not mean most value.'],
              ['P1, because it has the largest initial investment', 'A large investment is not a benefit.']],
          k: 'One project → weigh NPV and net profit, support with ROI and PBP.' },
        { id: 'c3l8q2', l: 'c3l8', q: 'A project has net profit 96K and a year-1 cost of 50K. What is its ROI (net profit ÷ year-1 cost)?',
          o: [['192%', 'Correct.'],
              ['48%', 'That is the average ROI over 4 years.'],
              ['52%', '50 ÷ 96, inverted.'],
              ['146%', 'Arithmetic error.']],
          k: 'ROI = net profit ÷ investment.' },
        { id: 'c3l8q3', l: 'c3l8', q: 'P4\'s net cash flows are -45K, 20K, 60K, 40K. What is its payback period?',
          o: [['About 2.42 years', 'Correct: -25K after year 2; 2 + 25/60.'],
              ['About 1.80 years', 'That is what the board shows, but it does not match the data.'],
              ['About 3.00 years', 'Payback happens during year 3.'],
              ['About 2.25 years', 'Divided by the wrong year.']],
          k: 'Accumulate, then add the fraction.' },
        { id: 'c3l8q4', l: 'c3l8', q: 'Why does P2 have the highest ROI but not the highest NPV?',
          o: [['Its investment is small, so its return per dinar is high, but its total value created is lower', 'Correct.'],
              ['Its cash flows arrive later than P3\'s, which inflates its ROI compared with its NPV', 'ROI here ignores timing; the difference is size.'],
              ['NPV ignores the size of the investment, while ROI is calculated from the investment', 'Both include the investment.'],
              ['Its NPV is calculated with a higher discount rate than the other three projects use', 'All four use 10%.']],
          k: 'Rate (ROI) vs amount (NPV).' }
      ]
    },
    {
      id: 'c3l9',
      t: 'Mock Exam Question 2: Building a Cash Flow Table',
      src: 'System Analysis and Design - Mock Exam, Question 2',
      body: `
<p>The mock exam gives a short description and asks you to <b>build the cash flow table yourself</b>, then calculate NP, PBP, ROI, and NPV. The skill tested is turning words into yearly numbers.</p>
<blockquote>A Sales Management System (SMS) will yield a possible annual <b>5% increase in sales</b> and a <b>7% reduction in salesforce (labor) cost</b>. Sales and labor figures are <b>500,000 JOD</b> and <b>350,000 JOD</b>. Hardware setup costs <b>22,000 JOD</b> and software licenses <b>120,000 JOD</b>. Develop a 4-year cash flow table, then (interest rate 10%) calculate NP, PBP, ROI, NPV.</blockquote>
<h4>Step 1: turn the words into numbers</h4>
<p>Extra sales per year = 5% × 500,000 = <b>25,000</b> · Labor saving per year = 7% × 350,000 = <b>24,500</b> · Yearly benefit = 25,000 + 24,500 = <b>49,500</b> · Year 0 investment = 22,000 + 120,000 = <b>142,000</b></p>
<h4>Step 2: the cash flow table</h4>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Accumulated</th><th>Discount factor (10%)</th><th>Discounted</th></tr>
<tr><td>0</td><td>-142,000</td><td>-142,000</td><td>1.0000</td><td>-142,000</td></tr>
<tr><td>1</td><td>49,500</td><td>-92,500</td><td>0.9091</td><td>45,000</td></tr>
<tr><td>2</td><td>49,500</td><td>-43,000</td><td>0.8264</td><td>40,907</td></tr>
<tr><td>3</td><td>49,500</td><td>6,500</td><td>0.7513</td><td>37,189</td></tr>
<tr><td>4</td><td>49,500</td><td>56,000</td><td>0.6830</td><td>33,809</td></tr></table></div>
<h4>Step 3: the four metrics</h4>
<div class="formula">Net profit = 4 × 49,500 − 142,000 = <b>56,000 JOD</b><br>
PBP = 2 + 43,000 ÷ 49,500 = <b>2.87 years</b><br>
ROI = 56,000 ÷ 142,000 = <b>39.4%</b> (average per year: 9.86%)<br>
NPV = 45,000 + 40,907 + 37,189 + 33,809 − 142,000 = <b>14,905 JOD</b></div>
<div class="trap"><b>Common mistakes:</b> putting hardware and licenses in year 1 instead of year 0; using the full 500,000 sales as income (only the 5% <u>increase</u> is the benefit); forgetting that the labor <u>saving</u> is a benefit too.</div>`,
      quiz: [
        { id: 'c3l9q1', l: 'c3l9', q: 'In the mock exam project, what is the yearly benefit used in the cash flow table?',
          o: [['49,500 JOD: 25,000 extra sales plus 24,500 labor saving', 'Correct.'],
              ['850,000 JOD: current sales plus current labor cost', 'Those are the base figures, not the change.'],
              ['25,000 JOD: the sales increase alone', 'The labor saving is a benefit too.'],
              ['75,500 JOD: 5% of 500,000 plus 7% of 720,000', 'Wrong labor figure.']],
          k: 'Benefit = the change the system causes.' },
        { id: 'c3l9q2', l: 'c3l9', q: 'Where do the hardware (22,000) and license (120,000) costs go in the table?',
          o: [['Year 0, as the initial investment of 142,000', 'Correct.'],
              ['Spread equally over years 1-4 as 35,500 per year', 'They are paid before the system runs.'],
              ['Year 1, since that is the first year of the project', 'Year 0 holds all costs before operation.'],
              ['Ignored, since they are one-time costs', 'One-time costs are still costs.']],
          k: 'Up-front costs → year 0.' },
        { id: 'c3l9calc', l: 'c3l9', calc: true, q: 'Calculate the four metrics for the mock exam project (interest rate 10%, 4 years). Round PBP to 2 decimals and ROI to 1 decimal.',
          fields: [{ t: 'Net profit (JOD)', ans: 56000, tol: 1 }, { t: 'Payback period (years)', ans: 2.87, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 39.4, tol: 0.3 }, { t: 'NPV (JOD)', ans: 14905, tol: 40 }],
          sol: '<p>Benefit 49,500 per year; investment 142,000 at year 0.</p><p>NP = 198,000 − 142,000 = 56,000. PBP = 2 + 43,000/49,500 = 2.87. ROI = 56,000/142,000 = 39.4%. NPV = 49,500 × (0.9091 + 0.8264 + 0.7513 + 0.6830) − 142,000 = 156,905 − 142,000 = 14,905.</p>' }
      ]
    },
    {
      id: 'c3l10',
      t: 'Mock Exam Question 3: Recommending Projects Within a Budget',
      src: 'System Analysis and Design - Mock Exam, Question 3',
      body: `
<p>The mock exam's last question gives a budget and a table of initiatives and asks for a <b>recommendation with justification</b>. Unlike the class exercise, you may pick <b>more than one</b> project, as long as the total investment fits the budget.</p>
<div class="tbl num"><table><tr><th>Budget 200,000 JOD</th><th>Project 1</th><th>Project 2</th><th>Project 3</th><th>Project 4</th></tr>
<tr><td>Initial investment</td><td>200,000</td><td>80,000</td><td>100,000</td><td>90,000</td></tr>
<tr><td>Net profit</td><td>54,000</td><td>28,000</td><td>31,000</td><td>33,000</td></tr>
<tr><td>ROI</td><td>27%</td><td>35%</td><td>31%</td><td>36.67%</td></tr>
<tr><td>Payback period</td><td>1.9 years</td><td>2.3 years</td><td>2 years</td><td>2.4 years</td></tr></table></div>
<h4>Step 1: list every combination that fits the budget</h4>
<div class="tbl num"><table><tr><th>Option</th><th>Investment</th><th>Total net profit</th><th>Combined ROI</th></tr>
<tr><td>P1 alone</td><td>200,000</td><td>54,000</td><td>27.0%</td></tr>
<tr><td>P2 + P3</td><td>180,000</td><td>59,000</td><td>32.8%</td></tr>
<tr><td>P2 + P4</td><td>170,000</td><td>61,000</td><td>35.9%</td></tr>
<tr><td><b>P3 + P4</b></td><td><b>190,000</b></td><td><b>64,000</b></td><td><b>33.7%</b></td></tr>
<tr><td>P2 + P3 + P4</td><td>270,000</td><td colspan="2">over budget</td></tr></table></div>
<h4>Step 2: recommend and justify</h4>
<div class="ex"><b>Model recommendation:</b> execute <b>Projects 3 and 4</b>. Together they use 190,000 of the 200,000 budget and give the highest total net profit (64,000), 10,000 more than Project 1 alone, which uses the whole budget at the lowest ROI (27%). Both ROIs (31% and 36.67%) beat Project 1's, and both pay back within about 2-2.4 years. If return per dinar matters most, <b>P2 + P4</b> has the best combined ROI (35.9%) and leaves 30,000 unspent, at a slightly lower total profit (61,000).</div>
<div class="trap"><b>What is being checked:</b> that you don't just pick the single "best" row. Project 1 has the biggest single net profit and the fastest payback, but it consumes the whole budget for the lowest ROI.</div>`,
      quiz: [
        { id: 'c3l10q1', l: 'c3l10', q: 'With a 200,000 budget and the mock exam table, which combination gives the highest total net profit?',
          o: [['Project 3 + Project 4: 190,000 invested, 64,000 net profit', 'Correct.'],
              ['Project 1 alone: 200,000 invested, 54,000 net profit', 'It uses the whole budget for less.'],
              ['Project 2 + Project 4: 170,000 invested, 61,000 net profit', 'Best combined ROI, but less total profit.'],
              ['Projects 2, 3, and 4: 270,000 invested, 92,000 net profit', 'Over budget.']],
          k: 'List the combinations that fit, then compare.' },
        { id: 'c3l10q2', l: 'c3l10', q: 'Why is Project 1 alone a weak choice even though it has the largest single net profit and the shortest payback?',
          o: [['It consumes the whole budget at the lowest ROI, and two smaller projects earn more together', 'Correct.'],
              ['Its payback period is the longest of the four projects, so it recovers money last', 'It is actually the shortest (1.9 years).'],
              ['Its net profit becomes negative once its 200,000 investment is subtracted from it', 'Net profit is already after the investment.'],
              ['It exceeds the 200,000 budget, so senior management is not allowed to choose it', 'It exactly equals the budget.']],
          k: 'A budget has an opportunity cost.' },
        { id: 'c3l10q3', l: 'c3l10', open: true, q: 'Write the recommendation you would give HyperMax\'s senior management for the mock exam\'s Question 3, with justification.',
          m: '<p>Execute <b>Projects 3 and 4</b>. They fit the 200,000 budget (190,000 total) and give the highest combined net profit (64,000) of all feasible options, compared with 54,000 for Project 1 alone. Both have higher ROIs (31% and 36.67%) than Project 1 (27%), and both pay back within about 2.4 years. Project 1 would consume the whole budget at the lowest return. If maximizing return per dinar is the priority, Projects 2 and 4 (combined ROI 35.9%, net profit 61,000, 30,000 left over) are a close alternative.</p>' }
      ]
    }
  ],
  groups: [
    { id: 'c3g1', after: 'c3l3', t: 'Practice: Selection, Business Case, CBA', qs: [
      { id: 'c3g1q1', l: 'c3l1', q: 'A company must comply with a new data-protection law. Which selection model applies, and should it run a full CBA to decide?',
        o: [['Nonnumeric (legal necessity); no, it must be done regardless', 'Correct.'],
            ['Scoring model; yes, to rank it against other proposals', 'There is no choice to rank.'],
            ['Profitability model; reject it if its NPV is negative', 'The law is mandatory.'],
            ['Payback model; approve it only if it pays back in a year', 'Payback does not apply to necessities.']],
        k: 'Chapter 2 nondiscretionary = Chapter 3 nonnumeric.' },
      { id: 'c3g1q2', l: 'c3l2', q: 'Which business case section gets its information from another section?',
        o: [['Costs, which use information from the outline implementation plan', 'Correct.'],
            ['The market, which uses information from the introduction', 'No such dependency is stated.'],
            ['Benefits, which use information from the market section', 'No such dependency is stated.'],
            ['Introduction, which uses information from the financial analysis', 'The introduction comes first.']],
        k: 'Implementation plan → costs → financial analysis.' },
      { id: 'c3g1q3', l: 'c3l3', q: 'A routing system costs 60K to build and saves 54K a year. Which step of CBA confirms it is worth doing?',
        o: [['Checking that the benefits are greater than the costs', 'Correct: the third step.'],
            ['Identifying all the costs of the project', 'The first step; it does not decide.'],
            ['Identifying the value of all the benefits', 'The second step; it does not decide.'],
            ['Estimating the system\'s decommissioning costs', 'Part of costs, not the decision.']],
        k: 'Identify costs → value benefits → compare.' }
    ]},
    { id: 'c3g2', after: 'c3l7', t: 'Practice: The Four Financial Tools', qs: [
      { id: 'c3g2q1', l: 'c3l5', q: 'Investment 100,000; cash flows years 1-5: 10K, 10K, 10K, 20K, 100K (r = 10%). Match each tool to its value.',
        o: [['NP 50,000 · PBP 4.5 years · average ROI 10% · NPV 618', 'Correct, all from the slide example.'],
            ['NP 150,000 · PBP 5 years · average ROI 50% · NPV 50,000', 'Income added without the investment, and measures mixed up.'],
            ['NP 50,000 · PBP 4 years · average ROI 50% · NPV 618', 'PBP is 4.5 and the average ROI is 10%.'],
            ['NP 618 · PBP 4.5 years · average ROI 10% · NPV 50,000', 'Net profit and NPV are swapped.']],
        k: 'Same numbers, four questions.' },
      { id: 'c3g2q2', l: 'c3l6', q: 'A manager says: "Project A makes 400K profit and B only 40K, so A is better." What is missing?',
        o: [['The size of each investment: ROI may show that B is more efficient', 'Correct.'],
            ['Nothing: a larger profit always makes a better project', 'That is the trap.'],
            ['The payback period, which is always the deciding measure', 'PBP is not always decisive.'],
            ['The decommissioning cost, which reverses most comparisons', 'Not the main issue here.']],
        k: 'Amount vs rate.' },
      { id: 'c3g2q3', l: 'c3l7', q: 'Two projects have equal net profit and equal investment. A earns most of its income in year 1, B in year 5. Which has the higher NPV (r > 0)?',
        o: [['Project A', 'Correct: earlier income is discounted less.'],
            ['Project B', 'The opposite.'],
            ['They are equal, because net profit and investment are equal', 'Timing differs.'],
            ['It depends on which one has the shorter payback period', 'NPV answers this directly.']],
        k: 'Earlier money → higher NPV.' }
    ]},
    { id: 'c3g3', after: 'c3l10', t: 'Practice: Exam-Style Calculations', qs: [
      { id: 'c3g3calc1', l: 'c3l9', calc: true, q: 'A CRM system will bring an annual 4% increase in sales and a 10% reduction in labor cost. Sales and labor figures are 600,000 JOD and 200,000 JOD. Hardware costs 30,000 JOD and licenses 90,000 JOD. Build a 4-year cash flow table and calculate (r = 10%):',
        fields: [{ t: 'Yearly benefit (JOD)', ans: 44000, tol: 1 }, { t: 'Net profit (JOD)', ans: 56000, tol: 1 }, { t: 'Payback period (years)', ans: 2.73, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 46.7, tol: 0.3 }, { t: 'NPV (JOD)', ans: 19471, tol: 40 }],
        sol: '<p>Benefit = 4% × 600,000 + 10% × 200,000 = 24,000 + 20,000 = 44,000 per year. Investment (year 0) = 30,000 + 90,000 = 120,000.</p><p>NP = 4 × 44,000 − 120,000 = 56,000. Accumulated: -120,000, -76,000, -32,000, +12,000 → PBP = 2 + 32,000/44,000 = 2.73 years. ROI = 56,000/120,000 = 46.7%. NPV = 44,000 × 3.1698 − 120,000 = 139,471 − 120,000 = 19,471.</p>' },
      { id: 'c3g3calc2', l: 'c3l8', calc: true, q: 'A project has costs (years 1-4) of 50K, 20K, 5K, 5K and revenue of 0, 6K, 70K, 100K. There is no year 0. Calculate (r = 10%, discount from year 1):',
        fields: [{ t: 'Net profit (JOD)', ans: 96000, tol: 1 }, { t: 'Payback period (years)', ans: 2.98, tol: 0.02 }, { t: 'NPV (JOD)', ans: 56695, tol: 60 }],
        sol: '<p>Net flows: -50K, -14K, 65K, 95K → NP = 96K. Accumulated: -50K, -64K, +1K → PBP = 2 + 64/65 = 2.98 years.</p><p>NPV = -50K×0.9091 − 14K×0.8264 + 65K×0.7513 + 95K×0.6830 = -45,455 − 11,570 + 48,835 + 64,885 = 56,695 (the board rounds to 56,700).</p>' },
      { id: 'c3g3q3', l: 'c3l10', q: 'Budget 150,000. P1: 150,000 / NP 45,000. P2: 60,000 / NP 24,000. P3: 70,000 / NP 21,000. P4: 85,000 / NP 30,600. Which choice maximizes total net profit?',
        o: [['P2 + P4: 145,000 invested, net profit 54,600', 'Correct.'],
            ['P1 alone: 150,000 invested, net profit 45,000', 'Uses the whole budget for less.'],
            ['P2 + P3: 130,000 invested, net profit 45,000', 'Lower total.'],
            ['P3 + P4: 155,000 invested, net profit 51,600', 'Over budget.']],
        k: 'Same method as mock Question 3.' }
    ]}
  ],
  exam: [
    { id: 'c3x1', l: 'c3l5', q: 'Compute the payback period: investment 80,000; year 1 30,000; year 2 30,000; year 3 40,000.',
      o: [['2.5 years', 'Correct: -20K after year 2; 2 + 20/40.'],
          ['3 years', 'Payback happens before the end of year 3.'],
          ['2 years', 'Still -20K.'],
          ['2.67 years', 'Divided by 30 instead of 40.']],
      k: 'Remaining ÷ next year\'s cash flow.' },
    { id: 'c3x2', l: 'c3l7', q: 'At 10%, what is the discount factor for year 4?',
      o: [['0.6830', 'Correct: 1 ÷ 1.4641.'],
          ['0.7513', 'That is year 3.'],
          ['0.6209', 'That is year 5.'],
          ['1.4641', 'That is (1.1)⁴, not its inverse.']],
      k: '1 / (1+r)^t.' },
    { id: 'c3x3', l: 'c3l1', q: 'Which is a NUMERIC (profitability) model?',
      o: [['Internal rate of return', 'Correct.'],
          ['Competitive necessity', 'Nonnumeric.'],
          ['Operating necessity', 'Nonnumeric.'],
          ['Legal necessity (sacred cow)', 'Nonnumeric.']],
      k: 'Numeric: PB, ARR, NPV, IRR, PI.' },
    { id: 'c3x4', l: 'c3l6', q: 'Which statement about ROI is TRUE?',
      o: [['The higher the ROI, the better, and organizations often set a minimum acceptable rate', 'Correct.'],
          ['The lower the ROI, the safer the project, and so the better it is for the company', 'The opposite.'],
          ['ROI ignores the size of the investment, which is why net profit is used alongside it', 'ROI is based on the investment.'],
          ['ROI and the payback period always rank a set of projects in exactly the same order', 'They can disagree.']],
      k: 'Higher ROI is better.' },
    { id: 'c3x5', l: 'c3l2', q: 'A yearly support contract that costs the same no matter how much the system is used is a:',
      o: [['Fixed cost', 'Correct.'],
          ['Variable cost', 'It does not change with usage.'],
          ['One-time cost', 'It recurs each year.'],
          ['Project life span cost', 'It continues after the project.']],
      k: 'Same regardless of usage → fixed.' },
    { id: 'c3x6', l: 'c3l4', q: 'Which statement about net profit is TRUE?',
      o: [['It is the sum of all cash flows over the system\'s life, ignoring when they occur', 'Correct.'],
          ['It discounts each year\'s cash flow at the interest rate before adding them up', 'That is NPV.'],
          ['It divides the total profit by the investment so projects of any size compare', 'That is ROI.'],
          ['It measures how many years the project takes to recover its initial investment', 'That is the payback period.']],
      k: 'Net profit = simple sum.' },
    { id: 'c3x7', l: 'c3l9', calc: true, q: 'An inventory system will bring an annual 6% increase in sales and an 8% reduction in labor cost. Sales and labor are 400,000 JOD and 250,000 JOD. Hardware costs 15,000 JOD and licenses 100,000 JOD. Build a 4-year cash flow table and calculate (r = 10%):',
      fields: [{ t: 'Net profit (JOD)', ans: 61000, tol: 1 }, { t: 'Payback period (years)', ans: 2.61, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 53.0, tol: 0.3 }, { t: 'NPV (JOD)', ans: 24471, tol: 40 }],
      sol: '<p>Benefit = 6% × 400,000 + 8% × 250,000 = 24,000 + 20,000 = 44,000 per year. Investment = 115,000 at year 0.</p><p>NP = 176,000 − 115,000 = 61,000. Accumulated: -115,000, -71,000, -27,000, +17,000 → PBP = 2 + 27,000/44,000 = 2.61. ROI = 61,000/115,000 = 53.0%. NPV = 44,000 × 3.1698 − 115,000 = 139,471 − 115,000 = 24,471.</p>' },
    { id: 'c3x8', l: 'c3l7', open: true, q: 'A project has net profit 50,000 but NPV 618. Explain why NPV can lead to a different decision than net profit.',
      m: '<p>Net profit adds cash flows without considering <b>when</b> they occur. NPV multiplies each year\'s cash flow by a discount factor 1/(1+r)^t, so money received later (most of this project\'s income is in year 5) is worth less today. After discounting at 10%, the project only creates 618 of value, so it is barely worth it even though net profit looks large. Higher rates (inflation) and longer horizons (less certainty) reduce NPV further.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 3, f: 'Project selection models', b: 'Nonnumeric (legal / sacred cow, operating, competitive) · Numeric profitability (PB, ARR, NPV, IRR, PI) · Scoring (multiple criteria, normalized scale)' },
  { c: 3, f: 'Selection decision outcomes', b: 'Accept · Reject · Delay · Refocus · End-user development · Purchase system · Modify and resubmit' },
  { c: 3, f: 'Hurdle rate', b: 'The minimum acceptable rate of return.' },
  { c: 3, f: 'Business case content', b: 'Introduction · Proposed project · Market · Organizational and operational infrastructure · Benefits · Outline implementation plan · Costs · Financial analysis' },
  { c: 3, f: 'Cost types', b: 'Variable (changes with usage) · Fixed (same regardless) · One-time · Ongoing: operational (system life) or project life span' },
  { c: 3, f: 'CBA steps', b: 'Identify costs · Identify the value of benefits · Check benefits > costs' },
  { c: 3, f: 'Net profit', b: 'Sum of all cash flows (year 0 negative); ignores timing and investment size. Slide example = 50,000.' },
  { c: 3, f: 'Payback period', b: 'Last negative year + |remaining| ÷ next year\'s cash flow. Slide example = 4.5 years. Ignores flows after payback.' },
  { c: 3, f: 'ROI vs average ROI', b: 'ROI = net profit ÷ investment (lecturer tables). Average ROI = ROI ÷ years (slide example: 10%).' },
  { c: 3, f: 'Discount factor', b: '1 / (1 + r)^t. At 10%: 0.9091 · 0.8264 · 0.7513 · 0.6830 · 0.6209' },
  { c: 3, f: 'NPV', b: 'Sum of cash flow × discount factor. Only tool with the time value of money. Slide example = 618 vs net profit 50,000.' },
  { c: 3, f: 'Slide typo', b: 'The slide text says 0.8294; the correct factor is 0.8264.' },
  { c: 3, f: 'What lowers NPV', b: 'Higher rate or inflation · Later income · Longer, less certain horizon' },
  { c: 3, f: 'Class exercise answer', b: 'Only one project allowed → P3: highest NPV (92,064) and net profit (157K). P2 has the best ROI (192%).' },
  { c: 3, f: 'Building a cash flow table (mock Q2)', b: 'Benefit = % increase × sales + % reduction × labor cost, every year. Hardware + licenses = year 0 investment.' },
  { c: 3, f: 'Budget recommendation (mock Q3)', b: 'List every combination that fits · Compare total net profit and ROI · Recommend and justify (P3 + P4 = 64,000 on 190,000)' }
);
