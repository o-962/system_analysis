/* Chapter 3: Financial Analysis
   Sources: Ch3 slides and pptx (incl. speaker notes), annotated slide, notebook lectures 7, 13, 15, whiteboard photo. o[0] = correct. */
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
<div class="tbl"><table><tr><th>Model</th><th>Idea</th><th>Examples</th></tr>
<tr><td><b>Nonnumeric</b></td><td>Necessity; no calculation</td><td>Legal necessity (sacred cow), operating necessity, competitive necessity</td></tr>
<tr><td><b>Numeric (profitability)</b></td><td>Single criterion: the financial impact of using assets to generate operating cash flow</td><td>Payback period (PB), average rate of return, discounted cash flow (NPV), internal rate of return, profitability index, others</td></tr>
<tr><td><b>Scoring</b></td><td>Multiple criteria converted to a normalized scale for a holistic decision</td><td>Management picks relevant factors on a pre-printed form; one or more raters score the project on each factor</td></tr></table></div>
<div class="trap"><b>Link to Chapter 2:</b> nonnumeric models match the <b>nondiscretionary</b> projects in your notes (operational, competitive, legal, sacred cow): "you have to do it; don't calculate benefits". The slide puts sacred cow in brackets next to legal necessity.</div>
<h4>Selection questions (slide 6)</h4>
<ul><li>Is the project potentially <b>profitable</b>?</li><li>Does it have a chance of meeting our return-on-investment <b>hurdle rate</b> (the minimum acceptable return)?</li><li>Does the firm have, or can it easily acquire, the <b>knowledge and skills</b>?</li><li>Does the organization have the <b>capacity</b> to carry it out on its proposed schedule?</li></ul>
<figure class="dg"><div class="sel"><div class="ins"><span>Perceived and real needs</span><span>Existing and available resources</span><span>List of potential and ongoing projects</span><span>Current business conditions</span><span>Evaluation criteria</span></div><div class="ar">→</div><div class="bx hi">Project selection decision</div><div class="ar">→</div><div class="outs"><b>Decision outcome</b><span>Accept project</span><span>Reject project</span><span>Delay project</span><span>Refocus project</span><span>End-user development</span><span>Purchase system</span><span>Modify and resubmit</span></div></div><figcaption>Slide 7: inputs → decision → seven possible outcomes</figcaption></figure>
<div class="ex"><b>Example:</b> a hospital wants an appointment system. After evaluation it might buy a ready-made system (purchase system), let the appointments desk build it in Excel (end-user development), or send it back to be revised (modify and resubmit).</div>`,
      quiz: [
        { id: 'c3l1q1', l: 'c3l1', q: 'A model that converts several criteria (strategic fit, risk, cost) to a normalized scale to support a holistic decision is a:',
          o: [['Scoring model', 'Correct: multiple criteria + a normalized scale.'],
              ['Profitability model', 'A single (financial) criterion.'],
              ['Nonnumeric model', 'No numbers involved.'],
              ['Payback model', 'A type of profitability model.']],
          k: 'Profitability = one criterion. Scoring = several criteria.' },
        { id: 'c3l1q2', l: 'c3l1', q: 'After evaluation, the committee decides the department can build the small tool itself using spreadsheets. Which outcome in the selection diagram is this?',
          o: [['End-user development', 'Correct.'],
              ['Purchase system', 'That is buying something ready-made.'],
              ['Refocus project', 'Changing the project\'s direction.'],
              ['Accept project', 'Accept means IT builds it.']],
          k: 'Seven outcomes.' },
        { id: 'c3l1q3', l: 'c3l1', q: '"Does it have a chance of meeting our return-on-investment hurdle rate?" A hurdle rate is:',
          o: [['The minimum acceptable rate of return a project must reach', 'Correct. It links to the ROI slide: "minimum acceptable rate of return".'],
              ['The maximum budget', 'No.'],
              ['The inflation rate', 'It may influence it, but it is not the same thing.'],
              ['The payback period', 'No.']],
          k: 'Hurdle rate = minimum acceptable return.' }
      ]
    },
    {
      id: 'c3l2',
      t: 'The Business Case and Its Content',
      src: 'Ch3 slides 8-10 · annotated slide 10',
      body: `
<p><b>Feasibility studies can also act as a "business case"</b>: they justify starting the project, should show that its benefits exceed development, implementation, and operational costs, and must take account of business risks.</p>
<div class="tbl"><table><tr><th>Section</th><th>Content</th></tr>
<tr><td>Introduction / background</td><td>The problem to be solved or the opportunity to be exploited</td></tr>
<tr><td>The proposed project</td><td>A brief outline of the project scope</td></tr>
<tr><td>The market</td><td>For a new product (e.g. a computer game), the likely demand must be assessed</td></tr>
<tr><td>Organizational and operational infrastructure</td><td>How the organization would need to change; important when a new information system is introduced</td></tr>
<tr><td>Benefits</td><td>In financial terms where possible. In the end the client assesses them, because the client pays</td></tr>
<tr><td>Outline implementation plan</td><td>How the project will be implemented, considering the <b>disruption</b> it may cause</td></tr>
<tr><td>Costs</td><td>The implementation plan supplies the information to establish them</td></tr>
<tr><td>Financial analysis</td><td>Combines cost and benefit data to establish the value of the project</td></tr></table></div>
<div class="note"><b>The lecturer's note on "Costs" (slide screenshot):</b><ul><li><b>Variable cost</b>: changes with usage</li><li><b>Fixed cost</b>: stays the same</li><li><b>One-time</b>: paid once (e.g. buying a server)</li><li><b>Ongoing</b>: recurring, of two kinds: <b>operational</b> (for the life of the system) and <b>project life span</b> (during the project)</li></ul></div>
<div class="ex"><b>Example:</b> a clinic booking system. Buying a license = one-time. A monthly cloud subscription = ongoing operational. An SMS fee per message = variable. The project manager's salary for 6 months = ongoing over the project life span.</div>`,
      quiz: [
        { id: 'c3l2q1', l: 'c3l2', q: 'Which section of the business case must consider the disruption a project might cause to the organization?',
          o: [['Outline implementation plan', 'Correct.'],
              ['The market', 'About demand for the product.'],
              ['Benefits', 'About the gains.'],
              ['Introduction', 'About the problem.']],
          k: 'Disruption → implementation plan.' },
        { id: 'c3l2q2', l: 'c3l2', q: 'A monthly cloud hosting fee paid for as long as the system runs is best described as:',
          o: [['An ongoing operational cost', 'Correct.'],
              ['A one-time cost', 'It recurs.'],
              ['A benefit', 'No.'],
              ['A project life span cost only', 'It continues after the project ends.']],
          k: 'One-time vs ongoing (operational / project life span).' },
        { id: 'c3l2q3', l: 'c3l2', q: 'Who ultimately assesses the benefits in a business case?',
          o: [['The client, because they are going to pay for the project', 'Correct, word for word.'],
              ['The developer', 'No.'],
              ['The government', 'No.'],
              ['The competitors', 'No.']],
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
<h4>Product / system life cycle cash flows</h4>
<figure class="dg"><svg class="curve" viewBox="0 0 600 220" preserveAspectRatio="none"><line x1="40" y1="110" x2="590" y2="110" class="ax"/><line x1="40" y1="10" x2="40" y2="210" class="ax"/><path d="M40 110 C 80 200, 150 210, 190 160 S 240 30, 320 30 S 520 90, 540 110 C 548 150, 560 150, 570 110" class="ln"/><text x="46" y="24">Income</text><text x="46" y="204">Expenditure</text><text x="70" y="190">development</text><text x="300" y="22">income pays off costs</text><text x="455" y="150">decommissioning</text><text x="545" y="100">Time</text></svg><figcaption>Slide 13: costs come first (development), then income gradually pays them off, and decommissioning may cost something at the end</figcaption></figure>
<ul><li>The <b>timing</b> of costs and income must be estimated.</li><li>Development incurs costs.</li><li>Once released, income gradually pays off the costs.</li><li>Some costs may relate to <b>decommissioning</b> (retiring the system).</li></ul>
<div class="note"><b>Speaker note on this slide:</b> "inflation". Timing matters because the value of money changes over time, which sets up NPV.</div>
<h4>The four financial analysis tools (slide 14)</h4>
<div class="flow wrap"><div class="bx">Net profit</div><div class="bx">Payback analysis</div><div class="bx">Return on investment (ROI)</div><div class="bx">Net present value (NPV)</div></div>
<div class="note"><b>From your notes (lecture 13):</b> financial analysis helps in <b>deciding</b> which project is <b>more profitable</b>.</div>`,
      quiz: [
        { id: 'c3l3q1', l: 'c3l3', q: 'In the life cycle cash flow curve, why does the line dip below zero at the very end?',
          o: [['Some costs may relate to decommissioning', 'Correct.'],
              ['Development costs start at the end', 'Development is at the start.'],
              ['Income is highest at the end', 'Income declines before the end.'],
              ['Inflation becomes negative', 'No.']],
          k: 'Start: development costs. End: decommissioning.' },
        { id: 'c3l3q2', l: 'c3l3', q: 'Which is the correct order of CBA steps?',
          o: [['Identify costs → identify value of benefits → check benefits exceed costs', 'Correct.'],
              ['Check benefits → identify costs → approve', 'No.'],
              ['Calculate NPV → identify costs', 'No.'],
              ['Identify benefits only', 'Incomplete.']],
          k: 'Costs → benefits → compare.' }
      ]
    },
    {
      id: 'c3l4',
      t: 'Net Profit',
      src: 'Ch3 slide 15 · Lecture 13 notes',
      body: `
<ul><li><b>Year 0</b> represents all the costs before the system is in operation.</li><li><b>Cash flow</b> = income minus outgoings.</li><li><b>Net profit</b> = the sum of all cash flows over the lifetime of the application.</li></ul>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th></tr><tr><td>0</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td></tr><tr><td>2</td><td>10,000</td></tr><tr><td>3</td><td>10,000</td></tr><tr><td>4</td><td>20,000</td></tr><tr><td>5</td><td>100,000</td></tr><tr><th>Net profit</th><th>50,000</th></tr></table></div>
<p>Calculation: -100 + 10 + 10 + 10 + 20 + 100 = <b>50K</b>.</p>
<div class="note"><b>From your notes (lecture 13):</b> expenses 10K → income 14K → <b>net profit 4K</b>.</div>
<div class="trap"><b>The weakness of net profit:</b> it ignores <u>when</u> the money arrives. 50K in year 5 is not the same as 50K today. It also ignores the size of the investment (4K on 10K is very different from 4K on 1 million). That is why the other tools exist.</div>`,
      quiz: [
        { id: 'c3l4q1', l: 'c3l4', q: 'A project has cash flows: year 0 = -60,000; years 1-4 = 20,000, 20,000, 30,000, 30,000. What is the net profit?',
          o: [['40,000', 'Correct. -60 + 20 + 20 + 30 + 30 = 40K.'],
              ['100,000', 'That is total income without subtracting the investment.'],
              ['160,000', 'The investment was added as if it were positive.'],
              ['10,000', 'Arithmetic error.']],
          k: 'Net profit = sum of all cash flows (year 0 is negative).' },
        { id: 'c3l4q2', l: 'c3l4', q: 'What is the main weakness of net profit as a decision tool?',
          o: [['It ignores when the money arrives (time value of money)', 'Correct. 50K in 5 years is not worth 50K today.'],
              ['It cannot be negative', 'It can be.'],
              ['It ignores year 0', 'Year 0 is included.'],
              ['It requires a discount factor', 'That is NPV.']],
          k: 'Net profit ignores time.' }
      ]
    },
    {
      id: 'c3l5',
      t: 'Payback Period (PBP)',
      src: 'Ch3 slide 16 + speaker notes · Lecture 13 notes',
      body: `
<p>The <b>payback period</b> is the time it takes to start generating a <b>surplus</b> of income over outgoings: when do I get my investment back? Your notes: "how long it takes to get my investment back", a duration (estimate) in months, years, or weeks.</p>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Accumulated</th></tr><tr><td>0</td><td>-100,000</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td><td>-90,000</td></tr><tr><td>2</td><td>10,000</td><td>-80,000</td></tr><tr><td>3</td><td>10,000</td><td>-70,000</td></tr><tr><td>4</td><td>20,000</td><td><b>-50,000</b></td></tr><tr><td>5</td><td>100,000</td><td>50,000</td></tr></table></div>
<div class="formula">PBP = last year with a negative accumulated value + ( |accumulated at the end of that year| ÷ cash flow of the next year )<br>= 4 + (50,000 ÷ 100,000) = <b>4.5 years</b></div>
<p class="muted">From the speaker notes: this assumes cash arrives evenly through the year (100,000 ÷ 12 ≈ 8,333 per month in year 5).</p>
<h4>Two cases from your notes</h4>
<div class="two"><div class="card"><h5>Equal (fixed) monthly income</h5><p>Investment 10K, income 1K per month (for 14 months).<br>PBP = 10K ÷ 1K = <b>10 months</b>.</p></div>
<div class="card"><h5>Unequal income</h5><p>Add up month by month until the total covers the investment. Example: investment 3,000, income 0, 500, 1,000, 300, 1,200 → running total 0, 500, 1,500, 1,800, 3,000 → <b>PBP = 5 months</b>.</p></div></div>
<div class="trap"><b>Watch out:</b> the project duration (14 months) is not the PBP (10 months); a question may give you both. Also, PBP ignores what happens <u>after</u> you get your money back, so a shorter PBP is not always more profitable.</div>`,
      quiz: [
        { id: 'c3l5q1', l: 'c3l5', q: 'Investment = 60,000. Cash flows: Y1 20,000; Y2 20,000; Y3 30,000; Y4 30,000. What is the payback period?',
          o: [['About 2.67 years', 'Correct. After year 2 the total is -20K. 2 + 20/30 = 2.67.'],
              ['3 years', 'After 3 years the total is +10K, so payback happened earlier.'],
              ['2 years', 'After 2 years it is still -20K.'],
              ['4 years', 'No.']],
          k: 'Last negative year + (remaining ÷ next year\'s income).' },
        { id: 'c3l5q2', l: 'c3l5', q: 'A 10,000 investment brings a fixed 1,000 per month for 14 months. Which statement is correct?',
          o: [['PBP is 10 months; total income over the project is 14,000', 'Correct.'],
              ['PBP is 14 months', 'That is the project duration.'],
              ['PBP is 4 months', 'That is the profit (4K), not a time.'],
              ['PBP cannot be calculated for monthly income', 'It can.']],
          k: 'PBP ≠ project duration.' },
        { id: 'c3l5q3', l: 'c3l5', q: 'Project A pays back in 2 years then earns nothing. Project B pays back in 3 years then earns heavily for 5 more years. What does this show about PBP?',
          o: [['PBP ignores cash flows after the payback point, so a shorter PBP is not always more profitable', 'Correct.'],
              ['A shorter PBP is always better', 'Exactly the trap.'],
              ['PBP includes all future profits', 'No.'],
              ['Both projects are identical', 'No.']],
          k: 'PBP measures speed of recovery, not profitability.' }
      ]
    },
    {
      id: 'c3l6',
      t: 'Return on Investment (ROI)',
      src: 'Ch3 slide 17 · Lecture 13 notes · whiteboard',
      body: `
<p><b>ROI</b>: income divided by investment. <b>The higher, the better.</b> Many organizations set a <b>required, or minimum acceptable, rate of return</b> (the hurdle rate).</p>
<div class="formula">ROI = (total discounted benefits − total discounted costs) ÷ discounted costs</div>
<h4>The slide's example (average annual)</h4>
<div class="formula">Average annual profit = 50,000 ÷ 5 = 10,000<br>ROI = 10,000 ÷ 100,000 × 100 = <b>10%</b></div>
<div class="note"><b>From your notes (lecture 13):</b><ul><li>10K → 14K: <b>4K net profit</b> → ROI 40%.</li><li>100K invested with 40K profit → also <b>40%</b>. "They are good, because we look at the percentage": ROI lets you compare projects of different sizes.</li><li>"ROI: yearly basis": the slide calculates ROI per year.</li></ul></div>
<h4>Two ROI measures on the whiteboard</h4>
<div class="tbl"><table><tr><th>Measure</th><th>Calculation</th><th>P2 on the whiteboard</th></tr>
<tr><td>ROI (total)</td><td>Net profit ÷ initial investment</td><td>96K ÷ 50K = <b>192%</b></td></tr>
<tr><td>AROI (annual)</td><td>ROI ÷ number of years (or average annual profit ÷ investment)</td><td>192% ÷ 4 = <b>48%</b></td></tr></table></div>
<div class="trap"><b>Which ROI does the exam use?</b> In the lecturer's mock exam and exercise tables, <b>ROI = net profit ÷ initial investment</b> (e.g. 54,000 ÷ 200,000 = 27%), and "average ROI" = ROI ÷ number of years. The slide's worked example gives the average annual version (10%). Example: net profit 50K over 5 years on 100K → ROI = 50%, average ROI = 10%. In an answer, write the formula you used.</div>`,
      quiz: [
        { id: 'c3l6q1', l: 'c3l6', q: 'Using average annual ROI, a project with investment 60,000 and net profit 40,000 over 4 years has an ROI of:',
          o: [['About 16.7%', 'Correct. Average annual profit = 40 ÷ 4 = 10K. 10 ÷ 60 = 16.7%.'],
              ['66.7%', 'That is total ROI (40 ÷ 60), not the slide\'s annual method.'],
              ['10%', 'That is the slide example with different numbers.'],
              ['25%', 'Arithmetic error.']],
          k: 'Slide ROI = (net profit ÷ years) ÷ investment.' },
        { id: 'c3l6q2', l: 'c3l6', q: 'Project X earns 4K on 10K invested; Project Y earns 40K on 100K invested. Which statement is correct?',
          o: [['Both have the same ROI (40%), so ROI lets us compare projects of different sizes', 'Correct.'],
              ['Y is ten times better because its profit is larger', 'The absolute profit is larger, but the rate is the same.'],
              ['X is better because it is cheaper', 'No.'],
              ['ROI cannot compare them', 'The opposite.']],
          k: 'ROI is a rate, not an amount.' },
        { id: 'c3l6q3', l: 'c3l6', q: 'A project has an ROI of 150% over 4 years. Its average ROI (AROI) is:',
          o: [['37.5%', 'Correct. 150 ÷ 4 = 37.5%, as written on the board.'],
              ['150%', 'That is the total.'],
              ['600%', 'You multiplied instead of dividing.'],
              ['48%', 'That is P2\'s AROI.']],
          k: 'AROI = ROI ÷ years.' }
      ]
    },
    {
      id: 'c3l7',
      t: 'Net Present Value (NPV)',
      src: 'Ch3 slide 18 · Lecture 13 notes',
      body: `
<p>The idea behind NPV: <b>a dinar today is worth more than a dinar in 5 years</b>. Your notes: "the future value of money" "depends on the <b>inflation rate</b>", and <b>years ↑ → certainty ↓</b> (the further away the year, the less certain the money).</p>
<div class="formula">Discount factor = 1 / (1 + r)<sup>t</sup> · r = interest rate (10% = 0.10) · t = number of years<br>Discounted cash flow = cash flow × discount factor</div>
<div class="tbl num"><table><tr><th>Year</th><th>Cash flow</th><th>Discount factor (10%)</th><th>Discounted cash flow</th></tr>
<tr><td>0</td><td>-100,000</td><td>1.0000</td><td>-100,000</td></tr><tr><td>1</td><td>10,000</td><td>0.9091</td><td>9,091</td></tr><tr><td>2</td><td>10,000</td><td>0.8264</td><td>8,264</td></tr><tr><td>3</td><td>10,000</td><td>0.7513</td><td>7,513</td></tr><tr><td>4</td><td>20,000</td><td>0.6830</td><td>13,660</td></tr><tr><td>5</td><td>100,000</td><td>0.6209</td><td>62,090</td></tr><tr><th colspan="3">NPV</th><th>618</th></tr></table></div>
<div class="trap"><b>Typo in the slide:</b> the text says "1/(1.10 × 1.10) = 0.8294", but the correct value is <b>0.8264</b> (the table itself shows 0.8264). 1 ÷ 1.21 = 0.8264.</div>
<div class="note"><b>From your notes:</b> the same project has net profit <b>50,000</b> but NPV <b>618</b> (its actual value). "It's not worth it, because it's not futuristic": net profit makes the project look great, but once the future value of money is counted, it barely covers itself.</div>
<div class="note"><b>Inflation (from your notes):</b> Jordan ≈ 2.5% · Turkey ≈ 18% · United States ≈ 4-4.5% → 2%. The same 100K loses far more value over 5 years in Turkey than in Jordan. Example: 100K → 150K is a 50K profit (50%), but over 5 years its real value depends on inflation.</div>
<p><b>Decision rule:</b> a positive NPV means the project returns more than the cost of capital. When comparing, a higher NPV is better.</p>`,
      quiz: [
        { id: 'c3l7q1', l: 'c3l7', q: 'At r = 10%, what is the discount factor for year 3, and the discounted value of 10,000 received in year 3?',
          o: [['0.7513 and 7,513', 'Correct. 1 ÷ 1.1³ = 1 ÷ 1.331 = 0.7513.'],
              ['0.8264 and 8,264', 'That is year 2.'],
              ['0.9091 and 9,091', 'That is year 1.'],
              ['1.331 and 13,310', 'You forgot to invert: that is (1+r)³, not the factor.']],
          k: 'Factor = 1/(1+r)^t; it shrinks as t grows.' },
        { id: 'c3l7q2', l: 'c3l7', q: 'A project has net profit 50,000 but NPV 618. What is the best interpretation?',
          o: [['After discounting future cash flows, the project barely creates value, so it is much less attractive than net profit suggests', 'Correct. Most income arrives in year 5, so its present value is much lower.'],
              ['The NPV calculation is wrong because it should equal net profit', 'NPV is lower whenever r is positive.'],
              ['The project loses 49,382', 'NPV is still positive (618).'],
              ['Net profit is more reliable than NPV', 'The opposite: NPV accounts for time.']],
          k: 'NPV = net profit after accounting for time.' },
        { id: 'c3l7q3', l: 'c3l7', q: 'The same project is evaluated in a country with 18% inflation instead of 2.5%. What happens to its NPV?',
          o: [['It decreases, because higher rates shrink the present value of future cash flows', 'Correct. Higher r → smaller discount factors → lower NPV.'],
              ['It increases', 'The opposite.'],
              ['It stays the same', 'It depends on r.'],
              ['NPV ignores rates', 'r is central to the formula.']],
          k: 'r ↑ → NPV ↓ · years ↑ → certainty ↓.' }
      ]
    },
    {
      id: 'c3l8',
      t: 'The Class Exercise: Choosing One of Four Projects',
      src: 'Exercise_Financial Analysis.pdf · whiteboard solution from class',
      body: `
<p>This is the lecturer's exercise, and the whiteboard photo is its solution. The organization can choose <b>only one</b> project and must justify the choice with financial evidence (payback period, average ROI, NPV). There is no year 0: year 1 holds the first costs.</p>
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
<tr><td>Payback period (recomputed)</td><td>3.65 y</td><td>2.98 y</td><td>2.87 y</td><td>2.42 y</td></tr>
<tr><td>NPV at 10% (years 1-4 discounted)</td><td>3,312</td><td>56,700</td><td>92,064</td><td>48,016</td></tr></table></div>
<p class="muted small">The NPV row matches the whiteboard exactly. The board's payback row reads 3.55, 2.9, 2.87 and 1.8; recomputing from the exercise data gives the values above (for example P4: -45K, then -25K after year 2, so 2 + 25/60 = 2.42 years).</p>
<h4>How each number is calculated (P3)</h4>
<div class="formula">Net flows: -118K, 35K, 95K, 145K → net profit = 157K<br>ROI = 157K ÷ 120K = 130.8% → average ROI = 130.8% ÷ 4 = 32.7%<br>Accumulated: -118K, -83K, +12K → PBP = 2 + 83/95 = 2.87 years<br>NPV = -118K×0.9091 + 35K×0.8264 + 95K×0.7513 + 145K×0.6830 = 92,064</div>
<h4>The decision</h4>
<ul><li><b>P1</b> is out: the lowest NPV, lowest average ROI, and the longest payback. The board marks it "not recommended".</li>
<li><b>P2</b> has the best ROI (192%) and average ROI (48%) because its investment is small.</li>
<li><b>P3</b> has the highest NPV (92,064), the highest net profit (157K), and the shortest recomputed payback. With only one project allowed, <b>P3 is the recommendation</b>, and the board gives P3 by far the largest share (80%).</li></ul>
<div class="trap"><b>The lesson:</b> each measure can point to a different project (ROI → P2, NPV → P3). When you must pick one, justify with several measures and say which one you weigh most. NPV is the strongest single measure because it counts the time value of money.</div>`,
      quiz: [
        { id: 'c3l8q1', l: 'c3l8', q: 'A committee can choose only ONE of four projects. P1: NPV 3,312. P2: ROI 192%, NPV 56,700. P3: net profit 157K, NPV 92,064. P4: NPV 48,016. Which choice is best supported by the financial evidence?',
          o: [['P3, because it has the highest NPV and net profit', 'Correct. NPV 92,064 and net profit 157K are the highest; it is the recommended project.'],
              ['P2, because it has the highest ROI', 'P2 has the best ROI, but a much lower NPV than P3.'],
              ['P1, because it has the largest investment', 'A large investment is not a benefit; P1 is worst on every measure.'],
              ['P4, because its costs are spread out', 'Not a financial justification.']],
          k: 'Pick one project → weigh NPV and net profit, and support with ROI and PBP.' },
        { id: 'c3l8q2', l: 'c3l8', q: 'A project has net profit 96K and a year-1 cost of 50K. What is its ROI (net profit ÷ year-1 cost)?',
          o: [['192%', 'Correct. 96K ÷ 50K = 192%.'],
              ['48%', 'That is the average ROI (192% ÷ 4).'],
              ['96%', 'That is the net profit in thousands, not a rate.'],
              ['120%', 'Arithmetic error.']],
          k: 'ROI = net profit ÷ investment.' },
        { id: 'c3l8q3', l: 'c3l8', q: 'P4\'s net cash flows are -45K, 20K, 60K, 40K. What is its payback period?',
          o: [['About 2.42 years', 'Correct. After year 2 the total is -25K; 2 + 25/60 = 2.42.'],
              ['1.8 years', 'That is what the board shows, but it does not match the exercise data.'],
              ['3 years', 'Payback happens during year 3.'],
              ['2 years', 'After 2 years it is still -25K.']],
          k: 'Accumulate, then add the fraction of the next year.' }
      ]
    },
    {
      id: 'c3l9',
      t: 'Mock Exam Question 2: Building a Cash Flow Table',
      src: 'System Analysis and Design - Mock Exam, Question 2',
      body: `
<p>The lecturer's mock exam gives a short project description and asks you to <b>build the cash flow table yourself</b>, then calculate NP, PBP, ROI and NPV. The skill being tested is turning words into yearly numbers.</p>
<blockquote>A Sales Management System (SMS) will yield a possible annual <b>5% increase in sales</b> and a <b>7% reduction in salesforce (labor) cost</b>. Sales and labor figures are <b>500,000 JOD</b> and <b>350,000 JOD</b>. Hardware setup costs <b>22,000 JOD</b> and software licenses <b>120,000 JOD</b>. Develop a 4-year cash flow table, then (interest rate 10%) calculate NP, PBP, ROI, NPV.</blockquote>
<h4>Step 1: turn the words into numbers</h4>
<ul><li>Extra sales per year = 5% × 500,000 = <b>25,000</b></li><li>Labor saving per year = 7% × 350,000 = <b>24,500</b></li><li>Yearly benefit = 25,000 + 24,500 = <b>49,500</b></li><li>Year 0 investment = 22,000 + 120,000 = <b>142,000</b> (paid before the system runs)</li></ul>
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
ROI = 56,000 ÷ 142,000 = <b>39.4%</b> (average per year: 39.4% ÷ 4 = 9.86%)<br>
NPV = 45,000 + 40,907 + 37,189 + 33,809 − 142,000 = <b>14,905 JOD</b></div>
<div class="trap"><b>Common mistakes:</b> putting the hardware and licenses in year 1 instead of year 0; using the full 500,000 sales as income (only the 5% <u>increase</u> is the benefit); forgetting that the labor <u>saving</u> is a benefit too. Write both ROI values if unsure which one is wanted, and label them.</div>`,
      quiz: [
        { id: 'c3l9q1', l: 'c3l9', q: 'In the mock exam project, what is the yearly benefit used in the cash flow table?',
          o: [['49,500 JOD (25,000 extra sales + 24,500 labor saving)', 'Correct.'],
              ['850,000 JOD (sales + labor)', 'Those are the current figures, not the change the system brings.'],
              ['25,000 JOD (sales increase only)', 'The 7% labor saving is also a benefit.'],
              ['142,000 JOD', 'That is the investment.']],
          k: 'Benefit = the change the system causes, not the base figures.' },
        { id: 'c3l9q2', l: 'c3l9', q: 'Where do the hardware (22,000) and license (120,000) costs go in the table?',
          o: [['Year 0, as the initial investment of 142,000', 'Correct. Year 0 holds all costs before the system operates.'],
              ['Spread equally over years 1-4', 'They are paid up front.'],
              ['Year 4', 'No.'],
              ['They are ignored because they are one-time', 'One-time costs are still costs.']],
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
<p>Notice: ROI here is <b>net profit ÷ initial investment</b> (54,000 ÷ 200,000 = 27%).</p>
<h4>Step 1: list every combination that fits the budget</h4>
<div class="tbl num"><table><tr><th>Option</th><th>Investment</th><th>Total net profit</th><th>Combined ROI</th></tr>
<tr><td>P1 alone</td><td>200,000</td><td>54,000</td><td>27.0%</td></tr>
<tr><td>P2 + P3</td><td>180,000</td><td>59,000</td><td>32.8%</td></tr>
<tr><td>P2 + P4</td><td>170,000</td><td>61,000</td><td>35.9%</td></tr>
<tr><td><b>P3 + P4</b></td><td><b>190,000</b></td><td><b>64,000</b></td><td><b>33.7%</b></td></tr>
<tr><td>P2 + P3 + P4</td><td>270,000</td><td colspan="2">over budget</td></tr></table></div>
<h4>Step 2: recommend and justify</h4>
<div class="ex"><b>Model recommendation:</b> execute <b>Project 3 and Project 4</b>. Together they use 190,000 of the 200,000 budget and give the highest total net profit (64,000), 10,000 more than Project 1 alone, which uses the whole budget at the lowest ROI (27%). Their ROIs (31% and 36.67%) are both above Project 1's, and both pay back within about 2-2.4 years. If management cares most about return per dinar, <b>P2 + P4</b> has the best combined ROI (35.9%) and leaves 30,000 unspent, at a slightly lower total profit (61,000).</div>
<div class="trap"><b>What the lecturer is checking:</b> that you don't just pick the single "best" row. Project 1 has the biggest net profit and the fastest payback, but it uses the whole budget for the lowest ROI. Combinations beat it.</div>`,
      quiz: [
        { id: 'c3l10q1', l: 'c3l10', q: 'With a 200,000 budget and the mock exam table, which combination gives the highest total net profit?',
          o: [['Project 3 + Project 4 (190,000 invested, 64,000 net profit)', 'Correct.'],
              ['Project 1 alone (54,000)', 'It uses the whole budget for less profit.'],
              ['Project 2 + Project 4 (61,000)', 'Best combined ROI, but less total profit.'],
              ['Project 2 + Project 3 + Project 4', '270,000 is over budget.']],
          k: 'List the combinations that fit, then compare totals.' },
        { id: 'c3l10q2', l: 'c3l10', q: 'Why is Project 1 alone a weak choice even though it has the highest single net profit and the shortest payback?',
          o: [['It consumes the entire budget at the lowest ROI (27%), and two smaller projects together earn more', 'Correct.'],
              ['Its payback period is too long', 'It is actually the shortest (1.9 years).'],
              ['Its net profit is negative', 'It is positive (54,000).'],
              ['It exceeds the budget', 'It exactly equals the budget.']],
          k: 'A budget is an opportunity cost.' },
        { id: 'c3l10q3', l: 'c3l10', open: true, q: 'Write the recommendation you would give HyperMax\'s senior management for the mock exam\'s Question 3, with justification.',
          m: '<p>Execute <b>Projects 3 and 4</b>. They fit the 200,000 budget (190,000 total) and give the highest combined net profit (64,000) of all feasible options, compared with 54,000 for Project 1 alone. Both have higher ROIs (31% and 36.67%) than Project 1 (27%), and both pay back within about 2.4 years. Project 1 would consume the whole budget at the lowest return. If maximizing return per dinar is the priority, Projects 2 and 4 (combined ROI 35.9%, net profit 61,000, 30,000 left over) are a close alternative.</p>' }
      ]
    }
  ],
  groups: [
    { id: 'c3g1', after: 'c3l3', t: 'Practice: Selection, Business Case, CBA', qs: [
      { id: 'c3g1q1', l: 'c3l1', q: 'A company must comply with a new data protection law. Which selection model applies, and should it run a full CBA to decide?',
        o: [['Nonnumeric (legal necessity); no, it must be done', 'Correct. Legal necessity = sacred cow: "don\'t calculate benefits".'],
            ['Scoring model; yes', 'There is no choice here.'],
            ['Profitability model; reject if NPV is negative', 'The law is mandatory.'],
            ['Payback model; only if PBP < 1 year', 'No.']],
        k: 'Chapter 2 nondiscretionary = Chapter 3 nonnumeric.' },
      { id: 'c3g1q2', l: 'c3l2', q: 'Which business case section gets its information from another section?',
        o: [['Costs, which use information from the outline implementation plan', 'Correct: "the implementation plan will supply information to establish these".'],
            ['Market, which uses the introduction', 'No.'],
            ['Benefits, which use only the market', 'No.'],
            ['Introduction, which uses financial analysis', 'No.']],
        k: 'Implementation plan → costs → financial analysis.' },
      { id: 'c3g1q3', l: 'c3l3', q: 'Why does the timing of costs and income matter in CBA?',
        o: [['Because money received later is worth less (inflation), which affects tools like NPV', 'Correct, which is why the speaker note says "inflation".'],
            ['Because timing changes the total net profit', 'Net profit is a simple sum; timing doesn\'t change it.'],
            ['It does not matter', 'No.'],
            ['Only for decommissioning', 'No.']],
        k: 'Timing → time value of money.' }
    ]},
    { id: 'c3g2', after: 'c3l7', t: 'Practice: The Four Financial Tools', qs: [
      { id: 'c3g2q1', l: 'c3l5', q: 'Investment 100,000; cash flows Y1-Y5: 10K, 10K, 10K, 20K, 100K (r = 10%). Match each tool to its value.',
        o: [['Net profit 50,000 · PBP 4.5 years · ROI 10% · NPV 618', 'Correct; all from the slide example.'],
            ['Net profit 150,000 · PBP 5 years · ROI 50% · NPV 50,000', 'Income was added without the investment, and the measures are mixed up.'],
            ['Net profit 50,000 · PBP 4 years · ROI 50% · NPV 618', 'PBP is 4.5, and the slide\'s ROI is 10% per year.'],
            ['Net profit 618 · PBP 4.5 · ROI 10% · NPV 50,000', 'Net profit and NPV are swapped.']],
        k: 'Same numbers, four different questions.' },
      { id: 'c3g2q2', l: 'c3l7', q: 'Which tool is the ONLY one of the four that accounts for the time value of money?',
        o: [['NPV', 'Correct. It is the only one using a discount factor.'],
            ['Net profit', 'A simple sum.'],
            ['Payback period', 'It measures time, but not the value of money.'],
            ['ROI', 'It uses undiscounted profit.']],
        k: 'Discounting = NPV.' },
      { id: 'c3g2q3', l: 'c3l6', q: 'A manager says: "Project A makes 400K profit and Project B only 40K, so A is better." What is missing?',
        o: [['The size of each investment; ROI may show B is more efficient', 'Correct. If A invested 4 million and B invested 50K, ROI reverses the picture.'],
            ['Nothing; bigger profit is always better', 'That is the trap.'],
            ['The payback period is always enough', 'No.'],
            ['Net profit already includes investment size', 'It subtracts the investment but doesn\'t compare rates.']],
        k: 'Absolute profit vs percentage.' }
    ]},
    { id: 'c3g3', after: 'c3l10', t: 'Practice: Exam-Style Calculations', qs: [
      { id: 'c3g3calc1', l: 'c3l9', calc: true, q: 'A CRM system will bring an annual 4% increase in sales and a 10% reduction in labor cost. Sales and labor figures are 600,000 JOD and 200,000 JOD. Hardware costs 30,000 JOD and licenses 90,000 JOD. Build a 4-year cash flow table and calculate (r = 10%):',
        fields: [{ t: 'Yearly benefit (JOD)', ans: 44000, tol: 1 }, { t: 'Net profit (JOD)', ans: 56000, tol: 1 }, { t: 'Payback period (years)', ans: 2.73, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 46.7, tol: 0.3 }, { t: 'NPV (JOD)', ans: 19471, tol: 40 }],
        sol: '<p>Benefit = 4% × 600,000 + 10% × 200,000 = 24,000 + 20,000 = 44,000 per year. Investment (year 0) = 30,000 + 90,000 = 120,000.</p><p>NP = 4 × 44,000 − 120,000 = 56,000. Accumulated: -120,000, -76,000, -32,000, +12,000 → PBP = 2 + 32,000/44,000 = 2.73 years. ROI = 56,000/120,000 = 46.7%. NPV = 44,000 × 3.1698 − 120,000 = 139,471 − 120,000 = 19,471.</p>' },
      { id: 'c3g3calc2', l: 'c3l8', calc: true, q: 'A project has costs (Y1-Y4) of 50K, 20K, 5K, 5K and revenue of 0, 6K, 70K, 100K. There is no year 0. Calculate (r = 10%, discount from year 1):',
        fields: [{ t: 'Net profit (JOD)', ans: 96000, tol: 1 }, { t: 'Payback period (years)', ans: 2.98, tol: 0.02 }, { t: 'NPV (JOD)', ans: 56695, tol: 60 }],
        sol: '<p>Net flows: -50K, -14K, 65K, 95K → NP = 96K. Accumulated: -50K, -64K, +1K → PBP = 2 + 64/65 = 2.98 years.</p><p>NPV = -50K×0.9091 − 14K×0.8264 + 65K×0.7513 + 95K×0.6830 = -45,455 − 11,570 + 48,835 + 64,885 = 56,695 (the board rounds to 56,700).</p>' },
      { id: 'c3g3q3', l: 'c3l10', q: 'Budget 150,000. P1: 150,000 / NP 45,000. P2: 60,000 / NP 24,000. P3: 70,000 / NP 21,000. P4: 85,000 / NP 30,600. Which choice maximizes total net profit?',
        o: [['P2 + P4 (145,000, net profit 54,600)', 'Correct.'],
            ['P1 alone (45,000)', 'Uses the whole budget for less.'],
            ['P2 + P3 (45,000)', 'Lower total.'],
            ['P3 + P4', '155,000 is over budget.']],
        k: 'Same method as mock Question 3.' }
    ]}
  ],
  exam: [
    { id: 'c3x1', l: 'c3l5', q: 'Compute the payback period: investment 80,000; Y1 30,000; Y2 30,000; Y3 40,000.',
      o: [['2.5 years', 'Correct. After 2 years: -20K. 2 + 20/40 = 2.5.'],
          ['3 years', 'Payback happens before the end of year 3.'],
          ['2 years', 'Still -20K.'],
          ['2.67 years', 'You divided by 30 instead of 40.']],
      k: 'Remaining ÷ next year\'s income.' },
    { id: 'c3x2', l: 'c3l7', q: 'At 10%, the discount factor for year 2 is:',
      o: [['0.8264', 'Correct: 1 ÷ 1.21. (The slide\'s text line says 0.8294 by mistake.)'],
          ['0.8294', 'That is the typo in the slide.'],
          ['0.9091', 'Year 1.'],
          ['1.21', 'That is (1+r)², not the factor.']],
      k: 'Watch for the typo.' },
    { id: 'c3x3', l: 'c3l1', q: 'Which is a NUMERIC (profitability) model?',
      o: [['Internal rate of return', 'Correct.'],
          ['Competitive necessity', 'Nonnumeric.'],
          ['Operating necessity', 'Nonnumeric.'],
          ['Legal necessity (sacred cow)', 'Nonnumeric.']],
      k: 'Numeric: PB, ARR, NPV, IRR, PI.' },
    { id: 'c3x4', l: 'c3l6', q: 'Which statement about ROI is TRUE?',
      o: [['The higher the ROI, the better, and many organizations set a minimum acceptable rate', 'Correct.'],
          ['The lower the ROI, the better', 'The opposite.'],
          ['ROI ignores the investment', 'ROI = income ÷ investment.'],
          ['ROI is the same as the payback period', 'No.']],
      k: 'Higher ROI is better.' },
    { id: 'c3x5', l: 'c3l2', q: 'For a project to develop a new computer game, which business case section assesses likely demand?',
      o: [['The market', 'Correct, the slide\'s own example.'],
          ['Organizational infrastructure', 'No.'],
          ['Introduction', 'No.'],
          ['Costs', 'No.']],
      k: 'Market = demand.' },
    { id: 'c3x6', l: 'c3l4', q: '"Year 0" in a cash flow table represents:',
      o: [['All the costs before the system is in operation', 'Correct.'],
          ['The first year of income', 'That is year 1.'],
          ['The decommissioning year', 'No.'],
          ['The average annual profit', 'No.']],
      k: 'Year 0 = the initial investment.' },
    { id: 'c3x7', l: 'c3l7', q: 'Two projects have equal net profit. Project A earns most of its income in year 1, Project B in year 5. Which has the higher NPV (r > 0)?',
      o: [['Project A', 'Correct. Early income is discounted less.'],
          ['Project B', 'The opposite.'],
          ['They are equal', 'Net profit is equal, but the timing differs.'],
          ['They cannot be compared', 'They can.']],
      k: 'Earlier money → higher present value.' },
    { id: 'c3x8', l: 'c3l9', calc: true, q: 'An inventory system will bring an annual 6% increase in sales and an 8% reduction in labor cost. Sales and labor are 400,000 JOD and 250,000 JOD. Hardware costs 15,000 JOD and licenses 100,000 JOD. Build a 4-year cash flow table and calculate (r = 10%):',
      fields: [{ t: 'Net profit (JOD)', ans: 61000, tol: 1 }, { t: 'Payback period (years)', ans: 2.61, tol: 0.02 }, { t: 'ROI, net profit ÷ investment (%)', ans: 53.0, tol: 0.3 }, { t: 'NPV (JOD)', ans: 24471, tol: 40 }],
      sol: '<p>Benefit = 6% × 400,000 + 8% × 250,000 = 24,000 + 20,000 = 44,000 per year. Investment = 115,000 at year 0.</p><p>NP = 176,000 − 115,000 = 61,000. Accumulated: -115,000, -71,000, -27,000, +17,000 → PBP = 2 + 27,000/44,000 = 2.61. ROI = 61,000/115,000 = 53.0%. NPV = 44,000 × 3.1698 − 115,000 = 139,471 − 115,000 = 24,471.</p>' },
    { id: 'c3x9', l: 'c3l7', open: true, q: 'A project has net profit 50,000 but NPV 618. Explain why NPV can lead to a different decision than net profit.',
      m: '<p>Net profit adds cash flows without considering <b>when</b> they occur. NPV multiplies each year\'s cash flow by a discount factor 1/(1+r)^t, so money received later (most of this project\'s income is in year 5) is worth less today. After discounting at 10%, the project only creates 618 of value, so it is barely worth it even though net profit looks large. Higher rates (inflation) and longer horizons (less certainty) reduce NPV further.</p>' }
  ]
});


window.COURSE.cards.push(
  { c: 3, f: 'Project selection models', b: 'Nonnumeric (legal / sacred cow, operating, competitive) · numeric profitability (PB, ARR, NPV, IRR, PI) · scoring (multiple criteria, normalized).' },
  { c: 3, f: 'Selection decision outcomes', b: 'Accept, reject, delay, refocus, end-user development, purchase system, modify and resubmit.' },
  { c: 3, f: 'Hurdle rate', b: 'The minimum acceptable rate of return.' },
  { c: 3, f: 'Business case content', b: 'Introduction, proposed project, market, organizational and operational infrastructure, benefits, outline implementation plan, costs, financial analysis.' },
  { c: 3, f: 'Cost types (lecturer\'s note)', b: 'Variable, fixed, one-time, ongoing (operational / project life span).' },
  { c: 3, f: 'CBA steps', b: 'Identify costs → identify the value of benefits → check benefits > costs.' },
  { c: 3, f: 'Net profit', b: 'The sum of all cash flows (year 0 negative). Slide example = 50,000.' },
  { c: 3, f: 'Payback period', b: 'Time to recover the investment. Last negative year + |remaining| ÷ next year\'s cash flow. Example = 4.5 years.' },
  { c: 3, f: 'ROI (slide method)', b: '(Net profit ÷ years) ÷ investment × 100. Example = 10,000 ÷ 100,000 = 10%.' },
  { c: 3, f: 'ROI formula (discounted)', b: '(Total discounted benefits − total discounted costs) ÷ discounted costs.' },
  { c: 3, f: 'AROI', b: 'ROI ÷ number of years. P2: 192% ÷ 4 = 48%.' },
  { c: 3, f: 'Discount factor', b: '1 / (1 + r)^t. At 10%: 0.9091, 0.8264, 0.7513, 0.6830, 0.6209.' },
  { c: 3, f: 'NPV', b: 'Sum of cash flow × discount factor. Example = 618, vs net profit 50,000.' },
  { c: 3, f: 'Slide typo', b: 'The slide says 0.8294; the correct value is 0.8264.' },
  { c: 3, f: 'Inflation examples', b: 'Jordan ≈ 2.5%, Turkey ≈ 18%, United States 4-4.5% → 2%. Years ↑ → certainty ↓.' },
  { c: 3, f: 'Class exercise answer', b: 'Only one project allowed → P3: highest NPV (92,064) and net profit (157K). P2 has the best ROI (192%).' },
  { c: 3, f: 'Building a cash flow table (mock Q2)', b: 'Benefit = % increase × sales + % reduction × labor cost, every year. Hardware + licenses = year 0 investment.' },
  { c: 3, f: 'Budget recommendation (mock Q3)', b: 'List every combination that fits the budget, compare total net profit and ROI, recommend and justify (P3 + P4 = 64,000 on 190,000).' },
  { c: 3, f: 'ROI in the lecturer tables', b: 'Net profit ÷ initial investment (e.g. 54,000 ÷ 200,000 = 27%). Average ROI = ROI ÷ years.' }
);
