/* Chapter 2: Analyzing a Business Case
   Sources: Ch2 slides, annotated slide screenshots, notebook lectures 5-10. o[0] = correct. */
window.COURSE = window.COURSE || { chapters: [], cards: [], mock: [] };
window.COURSE.chapters.push({
  id: 'ch2',
  n: 2,
  label: 'Chapter 2',
  short: 'Chapter 2',
  title: 'Analyzing a Business Case',
  lessons: [
    {
      id: 'c2l1',
      t: 'The Big Picture: From Request to Decision',
      src: 'Ch2 slides 2-4 · Lecture 5 notes',
      body: `
<p>This chapter answers one question: <b>how does a company decide whether an IT project is worth doing?</b></p>
<figure class="dg"><div class="flow wrap"><div class="bx">Mission, objectives, IT needs</div><div class="ar">→</div><div class="bx hi">Systems request</div><div class="ar">→</div><div class="bx">Preliminary investigation<br><small>feasibility study · fact-finding · reporting to management</small></div><div class="ar">→</div><div class="bx">Decision</div></div><figcaption>Slide 4: Introduction</figcaption></figure>
<div class="note"><b>From your notes (lecture 5):</b><ul>
<li>"When you get a lot of suggestions, you need to meet the mission and objectives." Every suggestion must serve the mission.</li>
<li>"Any new initiative: someone should request it." Then come the feasibility study, fact-finding, and reporting.</li>
<li><b>Stakeholder</b>: an entity (human or organization) <b>affecting or affected by</b> the system.</li>
<li>Exam style: <b>"List ✗ · Describe &amp; Explain ✓"</b>. The lecturer asks you to describe and explain, not to list.</li></ul></div>
<p>Chapter objectives (slides 2-3): the business case and its effect on IT projects, strategic planning, the mission statement, SWOT, the SDLC as a framework, reasons for projects and the factors that affect them, systems requests and the review committee, the four types of feasibility, and the steps of a preliminary investigation.</p>
<div class="ex"><b>Stakeholders of a university registration system:</b> students (affected), lecturers (affected), the admissions office (affecting and affected), the Ministry of Higher Education (affecting: it sets the rules), the hosting provider (affecting).</div>`,
      quiz: [
        { id: 'c2l1q1', l: 'c2l1', q: 'The Ministry of Higher Education never uses the university registration system, but its regulations shape it. Is the Ministry a stakeholder?',
          o: [['Yes, because a stakeholder is any entity that affects or is affected by the system', 'Correct. The definition includes "affecting"; it doesn\'t need to use the system.'],
              ['No, because only users are stakeholders', 'The definition is wider than users.'],
              ['No, because stakeholders must be humans', '"Human or organization".'],
              ['Only if it pays for the system', 'Paying is not a condition.']],
          k: 'Stakeholder = affecting OR affected.' },
        { id: 'c2l1q2', l: 'c2l1', q: 'Which sequence is correct?',
          o: [['Systems request, then preliminary investigation (feasibility, fact-finding, reporting)', 'Correct.'],
              ['Preliminary investigation, then systems request', 'Reversed: "the process starts with a systems request".'],
              ['Reporting to management, then systems request', 'Reporting comes last.'],
              ['Implementation, then feasibility study', 'Feasibility comes before implementation.']],
          k: 'Everything starts with a request.' }
      ]
    },
    {
      id: 'c2l2',
      t: 'Strategic Planning: Mission, Vision, Goals',
      src: 'Ch2 slides 5-6 (Figure 2-3) · Lecture 5 notes',
      body: `
<p><b>Strategic planning</b> is how a company decides where it wants to be in the long term and how to get there. The slide: it starts with a <b>mission statement</b> → continues with <b>goals and objectives</b> → long- and short-term goals are identified.</p>
<figure class="dg"><div class="gears"><div class="row3"><span class="pill">Purpose</span><span class="pill">Vision</span><span class="pill">Values</span></div><div class="ar dn">↓</div><div class="bx hi">Mission statement</div><div class="ar dn">↓ <span class="pill alt">SWOT analysis</span></div><div class="bx">Goals and objectives</div><div class="ar dn">↓</div><div class="bx">Business results</div></div>
<figcaption>Figure 2-3: strategic planning is a dynamic process. The mission is shaped by purpose, vision, and values; it generates goals and objectives that produce business results.</figcaption></figure>
<div class="note"><b>From your notes (lecture 5): the strategic plan pyramid</b>
<div class="tbl"><table><tr><th>Level</th><th>Plan horizon</th></tr><tr><td>Top</td><td>5-10 years</td></tr><tr><td>Middle</td><td>2-3 years</td></tr><tr><td>Operations (supervisors)</td><td>Day to day</td></tr></table></div>
A <b>review committee</b> reviews requests coming from these levels and connects them to the plan.</div>
<div class="trap"><b>Trap:</b> in Figure 2-3, SWOT feeds in between the mission and the goals; it helps set realistic goals. Purpose, vision, and values <b>shape</b> the mission, not the other way around.</div>
<div class="ex"><b>PSUT example:</b> Vision: a leading technology university in the region. Mission: graduate engineers and developers ready for the job market. Goal (SMARTER): raise graduate employment to 85% within 3 years. Objective: training partnerships with 30 companies this year.</div>`,
      quiz: [
        { id: 'c2l2q1', l: 'c2l2', q: 'In Figure 2-3, which elements SHAPE the mission statement?',
          o: [['Purpose, vision, and values', 'Correct. All three sit above the mission and shape it.'],
              ['Goals and objectives', 'These come <u>from</u> the mission.'],
              ['Business results', 'This is the final outcome.'],
              ['The systems review committee', 'Not part of the figure.']],
          k: 'Purpose + vision + values → mission → goals → results.' },
        { id: 'c2l2q2', l: 'c2l2', q: 'Where does SWOT analysis feed into the strategic planning process in Figure 2-3?',
          o: [['Between the mission statement and the goals and objectives', 'Correct. It helps set goals grounded in reality.'],
              ['Before purpose and vision', 'Not according to the figure.'],
              ['After business results only', 'No.'],
              ['It replaces the mission statement', 'It does not.']],
          k: 'SWOT → realistic goals.' },
        { id: 'c2l2q3', l: 'c2l2', q: 'A plan covering the next 2-3 years most likely belongs to which level of the strategic plan?',
          o: [['Middle management', 'Correct. Top 5-10, middle 2-3, operations day to day.'],
              ['Top management', 'Top plans cover 5-10 years.'],
              ['Operational staff', 'Day to day.'],
              ['The review committee', 'It reviews; it is not a planning level.']],
          k: '5-10 / 2-3 / day to day.' }
      ]
    },
    {
      id: 'c2l3',
      t: 'SWOT Analysis',
      src: 'Ch2 slides 5, 7 (Figure 2-5) · Lecture 6 notes (PSUT example)',
      body: `
<p><b>SWOT</b> = Strengths, Weaknesses, Opportunities, Threats. The questions from the slide:</p>
<ul><li><b>Strengths</b>: how can we use them to achieve our business goals?</li><li><b>Weaknesses</b>: how can we reduce or eliminate them?</li><li><b>Opportunities</b>: how do we plan to take advantage of them?</li><li><b>Threats</b>: how can we assess, manage, and respond to the possible risks?</li></ul>
<figure class="dg"><div class="swot">
<div class="q s"><b>S</b>Internal · maximize<br>Reputation, good connections</div>
<div class="q o"><b>O</b>External<br>Collaboration</div>
<div class="q w"><b>W</b>Internal<br>Tuition fees</div>
<div class="q t"><b>T</b>External · minimize<br>Competition, regulations</div>
</div><figcaption>SWOT for PSUT</figcaption></figure>
<div class="note"><b>From your notes (lecture 6):</b><ul>
<li><b>Internal</b> = anything you have the <b>power to control</b> (S, W).</li>
<li><b>External</b> = anything <b>out of your control</b> (O, T).</li>
<li><b>Location</b> can be internal <u>or</u> external. Example: no parking spaces. If the university can build parking, it is an internal weakness. If the problem is the surrounding area and nothing can be done, it is an external threat.</li>
<li>75% acceptance rate ↑ (an example of a figure to analyze).</li>
<li><b>What are we trying to do?</b> Turn a <b>weakness into a strength</b> and a <b>threat into an opportunity</b>.</li></ul></div>
<h4>Figure 2-5: SWOT of a corporate patent</h4>
<div class="tbl"><table><tr><th></th><th>Patent</th></tr>
<tr><td>Strengths</td><td>Our patent covers valuable technology that we can use in popular products</td></tr>
<tr><td>Weaknesses</td><td>Our patent has a limited life. When it expires, the technology will no longer be protected</td></tr>
<tr><td>Opportunities</td><td>We can use the technology in more products, license it to others, or seek more patents</td></tr>
<tr><td>Threats</td><td>A competitor might develop similar technology that does not legally infringe our patent</td></tr></table></div>
<div class="trap"><b>Trap:</b> a SWOT can cover a whole enterprise or a <b>specific asset</b> such as a patent. To separate W from T: a weakness is inside (you control it); a threat comes from outside.</div>`,
      quiz: [
        { id: 'c2l3q1', l: 'c2l3', q: 'For PSUT, a new government regulation limiting the number of IT students admitted each year is a:',
          o: [['Threat', 'Correct. It is external (out of control) and harmful.'],
              ['Weakness', 'Weaknesses are internal, and the university doesn\'t control the law.'],
              ['Opportunity', 'It harms rather than helps.'],
              ['Strength', 'No.']],
          k: 'External + harmful = threat.' },
        { id: 'c2l3q2', l: 'c2l3', q: 'In Figure 2-5, "the patent has a limited life" is classified as a weakness rather than a threat because:',
          o: [['It is an internal characteristic of the asset itself', 'Correct. It is a property of the patent itself (internal).'],
              ['It comes from a competitor', 'That is the threat in the figure.'],
              ['It can be licensed to others', 'That is an opportunity.'],
              ['It is valuable technology', 'That is a strength.']],
          k: 'Internal → S/W. External → O/T.' },
        { id: 'c2l3q3', l: 'c2l3', q: 'A university has no parking because the surrounding area is fully built and owned by others. In SWOT terms this is best treated as:',
          o: [['External, because it is out of the university\'s control', 'Correct. Location can be internal or external; here there is no control.'],
              ['Always internal, because location is part of the university', 'Location "can be internal or external".'],
              ['A strength', 'It is not an advantage.'],
              ['Not part of SWOT', 'It is.']],
          k: 'The test: do you have the power to control it?' }
      ]
    },
    {
      id: 'c2l4',
      t: 'Strategic Planning for IT Projects and Planning Tools',
      src: 'Ch2 slides 8-9',
      body: `
<p>Careful planning helps assure three things:</p>
<ol><li>The project supports the overall <b>business strategy</b> and operational needs.</li><li>The project <b>scope</b> is well defined and clearly stated.</li><li>The project goals are <b>realistic and achievable</b>, and tied to specific statements, assumptions, constraints, factors, and other inputs.</li></ol>
<h4>Planning tools</h4>
<div class="tbl"><table><tr><th>Approach</th><th>Example</th><th>Slide's verdict</th></tr>
<tr><td>Traditional text-based</td><td>Microsoft Word</td><td>Used by some analysts</td></tr>
<tr><td>Spreadsheet</td><td>Microsoft Excel</td><td>Preferred by some</td></tr>
<tr><td>CASE tool</td><td>Visible Analyst</td><td><b>The most effective approach</b></td></tr></table></div>
<div class="ex"><b>Why is CASE better?</b> It keeps the plan, the models, and the requirements in one place. Change a requirement and you see what it affects. In Word everything is separate text.</div>
<div class="trap"><b>Link to Chapter 1:</b> Visible Analyst is the same CASE tool shown in Figure 1-24.</div>`,
      quiz: [
        { id: 'c2l4q1', l: 'c2l4', q: 'The MOST effective planning approach for IT projects is:',
          o: [['A CASE tool such as Visible Analyst', 'Correct.'],
              ['A spreadsheet such as Excel', 'Some analysts prefer it, but it is not the most effective.'],
              ['A text-based tool such as Word', 'Traditional.'],
              ['Sketching only', 'Useful, but not named as most effective.']],
          k: 'Most effective = CASE.' },
        { id: 'c2l4q2', l: 'c2l4', q: 'Careful planning helps assure all of the following EXCEPT:',
          o: [['The project will have no constraints', 'Correct that this is wrong. Goals must be <u>tied to</u> constraints, not free of them.'],
              ['The project supports overall business strategy', 'Listed.'],
              ['The scope is well defined', 'Listed.'],
              ['Goals are realistic and achievable', 'Listed.']],
          k: 'Planning acknowledges constraints; it doesn\'t remove them.' }
      ]
    },
    {
      id: 'c2l5',
      t: 'What Is a Business Case?',
      src: 'Ch2 slides 10-12 · Lecture 7 notes',
      body: `
<p>A <b>business case</b> is the reasons, or justification, for a proposal. It should be <b>comprehensive yet easy to understand</b>, describe the project clearly, justify going ahead, and estimate the <b>financial impact</b>.</p>
<div class="two"><div class="card"><h5>Questions it must answer (1)</h5><ul><li>Why are we doing this project?</li><li>What is the project about?</li><li>How does this solution address key business issues?</li><li>How much will it cost?</li><li>How long will it take?</li><li>Will we suffer a productivity loss during the transition?</li></ul></div>
<div class="card"><h5>Questions it must answer (2)</h5><ul><li>What is the return on investment and payback period?</li><li>What are the risks of doing the project?</li><li>What are the risks of <b>not</b> doing the project?</li><li>How will we measure success?</li><li>What alternatives exist?</li></ul></div></div>
<div class="note"><b>From your notes (lecture 7):</b><ul>
<li>In real life: <b>describe the problem → then the solution → then how much it will cost and how long it will take</b>. Example: Greater Amman Municipality.</li>
<li>The triangle: <b>scope</b> at the top, <b>time</b> and <b>resources</b> at the base, <b>quality</b> in the middle. <b>Cost = time + resources</b>. Changing one side affects the others. Phases come from the scope.</li>
<li><b>Risk</b>: known and unknown.</li>
<li>Recommended skill: <b>negotiation</b>.</li></ul></div>
<h4>The numeric example from the lecture</h4>
<div class="tbl"><table><tr><th>Item</th><th>Value</th></tr>
<tr><td>In-kind contribution: 4 FTE × 4 months (internal staff salaries)</td><td>24K</td></tr>
<tr><td>Cash cost</td><td>10,000 JOD + 15,000 JOD</td></tr>
<tr><td><b>Total investment</b></td><td><b>49K JOD</b> (24 + 10 + 15)</td></tr>
<tr><td>Annual benefit (savings minus maintenance)</td><td>17K</td></tr>
<tr><td>Return: 17 / 49</td><td>≈ <b>35%</b> per year; the project runs for 8 years</td></tr>
</table></div>
<p>Conclusion in your notes: <b>"so it's a good business"</b>. The lecturer crossed out "depends on the payback" because the decision here comes from the rate of return.</p>
<div class="trap"><b>FTE</b> = full-time equivalent (one full-time employee). An <b>in-kind contribution</b> is not cash (it is staff time), but it has a monetary value and counts toward the investment.</div>`,
      quiz: [
        { id: 'c2l5q1', l: 'c2l5', q: 'Four internal employees (FTE) work 4 months on a project. How is their time treated in the business case?',
          o: [['As an in-kind contribution with a monetary value (24K) included in the total investment', 'Correct. No new cash was paid, but their time has value and is part of the 49K.'],
              ['Ignored, because no new cash is paid', 'Ignoring it understates the real investment.'],
              ['Counted as a benefit', 'It is a cost, not a benefit.'],
              ['Counted as maintenance', 'Maintenance is a separate item.']],
          k: 'In-kind = a real cost, even if not cash.' },
        { id: 'c2l5q2', l: 'c2l5', q: 'In the project triangle of scope, time, and resources, cost is described as:',
          o: [['Time + resources', 'Correct: "cost = time + resources".'],
              ['Scope + quality', 'No.'],
              ['Only the price of hardware', 'Far too narrow.'],
              ['Benefits minus risks', 'Unrelated.']],
          k: 'Scope · time · resources, with quality in the middle.' },
        { id: 'c2l5q3', l: 'c2l5', q: 'Which question shows that a business case must also consider the option of doing nothing?',
          o: [['What are the risks of NOT doing the project?', 'Correct. It compares doing the project with not doing it.'],
              ['How much will it cost?', 'About cost.'],
              ['How long will it take?', 'About duration.'],
              ['What is the project about?', 'A description.']],
          k: 'A business case compares alternatives, including doing nothing.' }
      ]
    },
    {
      id: 'c2l6',
      t: 'Reasons for Systems Requests and Factors That Affect Projects',
      src: 'Ch2 slides 13-15 (Figure 2-10)',
      body: `
<h4>Main reasons for systems requests</h4>
<div class="tbl"><table><tr><th>Reason</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Improved service</td><td>Better service to customers or to users inside the company</td><td>A banking app makes transfers take one minute instead of a branch visit</td></tr>
<tr><td>Support for new products and services</td><td>New products often need new types or levels of IT support</td><td>A telecom company launches fiber and needs an installation booking system</td></tr>
<tr><td>Better performance</td><td>The current system cannot meet performance requirements</td><td>The registration website crashes on the first day of registration</td></tr></table></div>
<h4>Factors that affect systems projects</h4>
<figure class="dg"><div class="two"><div class="card"><h5>Internal factors</h5><ul><li>Strategic plan</li><li>Top managers</li><li>User requests</li><li>Information technology department</li><li>Existing systems and data</li></ul></div><div class="card"><h5>External factors</h5><ul><li>Technology</li><li>Suppliers</li><li>Customers</li><li>Competitors</li><li>The economy</li><li>Government</li></ul></div></div><figcaption>Figure 2-10: internal factors in the inner ring, external factors around them (the figure also shows company finances as internal)</figcaption></figure>
<div class="trap"><b>Trap:</b> customers and suppliers are <b>external</b>, even though you deal with them daily. Existing systems and data are <b>internal</b>. A question may give four factors and ask which one is external.</div>`,
      quiz: [
        { id: 'c2l6q1', l: 'c2l6', q: 'Which is an EXTERNAL factor affecting systems projects?',
          o: [['Suppliers', 'Correct. They are outside the company.'],
              ['Existing systems and data', 'Internal.'],
              ['User requests', 'Internal.'],
              ['The strategic plan', 'Internal.']],
          k: 'External: technology, suppliers, customers, competitors, economy, government.' },
        { id: 'c2l6q2', l: 'c2l6', q: 'A university\'s registration website crashes every registration day because it cannot handle the load. The main reason for a new systems request is:',
          o: [['Better performance', 'Correct. The current system cannot meet performance requirements.'],
              ['Support for new products', 'There is no new product.'],
              ['Improved service only', 'Close, but the direct cause is system performance.'],
              ['Government regulation', 'That is a factor, not a reason.']],
          k: 'Current system can\'t meet performance → better performance.' }
      ]
    },
    {
      id: 'c2l7',
      t: 'Systems Requests, Review Committee, ITIL and the Change Flow',
      src: 'Ch2 slides 16-18 (Figure 2-13) · Lecture 5 and 8 notes',
      body: `
<h4>Systems request forms</h4>
<p>They streamline the request process, ensure consistency, are easy to understand, include clear instructions, indicate which supporting documents are needed, and are submitted electronically.</p>
<div class="note"><b>Figure 2-13 (the form):</b> Request for: <b>correction of system issue / system enhancement / new system</b>. Urgency: <b>immediate attention / normal priority sequence / defer until new system is developed</b>. The IT section: approved, modified, rejected, assigned IT contact person, urgency code (1 low to 5 high).</div>
<h4>Systems review committee</h4>
<div class="two"><div class="card"><h5>Advantages</h5><ul><li>A broader viewpoint: sets priorities better than one person</li><li>One person's <b>bias</b> is less likely to affect decisions</li></ul></div><div class="card"><h5>Disadvantages</h5><ul><li>Action must <b>wait until the committee meets</b></li><li>Members might <b>favor their own departments</b></li><li>Internal <b>political differences</b> could delay decisions</li></ul></div></div>
<div class="note"><b>From your notes (lecture 8):</b> the systems review committee exists to review initiatives. <b>Politics</b>: discussions drag on, and politics can force or delay a project for reasons that are not logical.</div>
<h4>Service request vs request for service (RFS)</h4>
<div class="tbl"><table><tr><th></th><th>Service request</th><th>Request for service (RFS)</th></tr>
<tr><td>Example</td><td>Reset my password</td><td>A new report with statistics on GPA</td></tr>
<tr><td>Nature</td><td>For something that <b>already exists</b></td><td>Something <b>new</b></td></tr>
<tr><td>Who is affected</td><td>An <b>individual</b></td><td>A <b>group of people</b></td></tr>
<tr><td>Duration</td><td><b>Hours</b></td><td><b>Weeks / months / years</b></td></tr></table></div>
<h4>ITIL and ITSM</h4>
<p><b>ITIL</b> = Information Technology Infrastructure Library: a framework (with a certificate) to better manage IT. <b>ITSM</b> = IT Service Management (certification). The lecturer connected them to the <b>CAB</b> (Change Advisory Board) and the <b>PRB</b>, bodies that review requests.</p>
<figure class="dg"><div class="flow wrap"><div class="bx">1. Request</div><div class="ar">→</div><div class="bx hi">2. Change manager<br><small>cancel · send back · on hold · prioritize · history</small></div><div class="ar">→</div><div class="bx">3. Top manager approves</div><div class="ar">→</div><div class="bx">4. Change</div></div><figcaption>From your notes: "the understanding is right, but it doesn't always work like this"</figcaption></figure>`,
      quiz: [
        { id: 'c2l7q1', l: 'c2l7', q: 'A student asks IT to reset a forgotten password; the registrar asks IT for a new report of GPA statistics for all departments. Which classification is correct?',
          o: [['The first is a service request (hours, individual); the second is a request for service (new, group, weeks or more)', 'Correct.'],
              ['Both are service requests', 'The second is new and affects a group.'],
              ['Both need committee approval', 'A password reset doesn\'t need a committee.'],
              ['The first is the new initiative', 'Reversed.']],
          k: 'Existing / individual / hours vs new / group / weeks+.' },
        { id: 'c2l7q2', l: 'c2l7', q: 'The IT manager only approves projects from the finance department he used to lead. Which advantage of a systems review committee addresses this problem?',
          o: [['One person\'s bias is less likely to affect the decisions', 'Correct.'],
              ['Action on requests is faster', 'The opposite: committees are slower (a disadvantage).'],
              ['Members favor their own departments', 'That is a disadvantage.'],
              ['Political differences are eliminated', 'The opposite; politics may delay decisions.']],
          k: 'A committee reduces individual bias but can add politics.' },
        { id: 'c2l7q3', l: 'c2l7', q: 'On the systems request form (Figure 2-13), which urgency option fits a request that can wait for the planned replacement system?',
          o: [['Defer until new system is developed', 'Correct.'],
              ['Immediate attention required', 'For emergencies.'],
              ['Handle in normal priority sequence', 'For normal requests; this one is waiting for the new system.'],
              ['Correction of system issue', 'That is a "request for" type, not urgency.']],
          k: 'Request type ≠ urgency.' }
      ]
    },
    {
      id: 'c2l8',
      t: 'Feasibility: Operational and Technical',
      src: 'Ch2 slides 19-24 (Figure 2-14) · Lecture 8 notes',
      body: `
<p>A <b>feasibility study</b> examines a project from four directions. The lecturer added a fifth question: <b>necessity</b> (is the project needed at all?).</p>
<figure class="dg"><div class="feas"><span class="n">Operational</span><span class="e">Technical</span><span class="c">Feasible?</span><span class="w">Economic</span><span class="s">Schedule</span></div><figcaption>Figure 2-14 + your notes: "overview of feasibility for the request... necessity"</figcaption></figure>
<h4>The first questions (slide 19)</h4>
<ul><li>Is the proposal desirable in an <b>operational</b> sense (a practical approach that solves a problem)?</li><li>Is it <b>technically</b> feasible (necessary resources and people)?</li><li>Is it <b>economically</b> desirable (projected savings and costs)?</li><li>Are intangible factors involved (customer satisfaction, company image)?</li><li>Can it be done in an acceptable <b>time frame</b> (schedule)?</li></ul>
<h4>Operational feasibility: will the system be used properly?</h4>
<ul><li>Does management support it? Do users? Is the current system well liked? Do users see the need for change?</li><li>Will it reduce the workforce? What happens to affected employees?</li><li>Is training required? Is the company prepared to provide the resources?</li><li>Will users be involved from the start?</li><li>New demands on users or operating changes? Less accessible information? Performance decline (does the overall gain outweigh individual losses)?</li><li>Adverse effects on customers? Risk to company image or goodwill?</li><li>Conflict with other company priorities? <b>Legal or ethical issues</b>?</li></ul>
<h4>Technical feasibility: can we build it?</h4>
<ul><li>Necessary <b>hardware, software, and network</b> resources? If not, can they be acquired?</li><li>Needed <b>technical expertise</b>? If not, can it be acquired?</li><li>Sufficient capacity for future needs? Can it be expanded?</li><li>Is a prototype required? Is the environment reliable? Will it integrate with other systems and interface with customers' and suppliers' systems?</li><li>Adequate performance? Clear expectations and performance specifications? Can it handle future <b>transaction volume</b> and growth?</li></ul>
<div class="note"><b>From your notes (lecture 15):</b> questions about <b>employees</b> → operational. About <b>team members</b> (the development team's skills) → technical. About <b>cost</b> → economic. About the <b>schedule</b> → "before year end".</div>
<div class="trap"><b>Big trap:</b> "Do users support the project?" is operational, not technical. "Do we have staff with the expertise?" is technical, not operational. The test: is the question about <b>people accepting and using it</b> (operational) or about <b>the ability to build it</b> (technical)? Note that legal and ethical issues are listed under operational.</div>`,
      quiz: [
        { id: 'c2l8q1', l: 'c2l8', q: '"Will the new system result in a workforce reduction, and what will happen to the affected employees?" This question belongs to:',
          o: [['Operational feasibility', 'Correct. It is about the system\'s effect on people and their acceptance.'],
              ['Technical feasibility', 'It is not about technical capability.'],
              ['Economic feasibility', 'It may affect cost, but the slide lists it under operational.'],
              ['Schedule feasibility', 'It is not about time.']],
          k: 'People and usage → operational.' },
        { id: 'c2l8q2', l: 'c2l8', q: '"Will the system be able to handle future transaction volume and company growth?" belongs to:',
          o: [['Technical feasibility', 'Correct. Capacity and performance are technical.'],
              ['Operational feasibility', 'It is not about user acceptance.'],
              ['Economic feasibility', 'It is not about cost.'],
              ['Schedule feasibility', 'It is not about duration.']],
          k: 'Capacity / performance / integration → technical.' },
        { id: 'c2l8q3', l: 'c2l8', q: 'A system would technically work, but it would collect customer data in a way that may break privacy law. This concern belongs to:',
          o: [['Operational feasibility (legal or ethical issues)', 'Correct. Slide 22 lists "Do legal or ethical issues need to be considered?" under operational.'],
              ['Technical feasibility', 'The system works technically.'],
              ['Schedule feasibility', 'No.'],
              ['It is not a feasibility issue', 'It clearly is.']],
          k: 'Legal / ethical → operational (per the slides).' }
      ]
    },
    {
      id: 'c2l9',
      t: 'Feasibility: Economic and Schedule',
      src: 'Ch2 slides 25-27 · annotated slide · Lecture 8 notes',
      body: `
<h4>Economic feasibility: the costs</h4>
<ul><li>People (IT staff and users)</li><li>Hardware and equipment</li><li>Software: in-house development and purchases from vendors</li><li>Formal and informal training, including <b>peer-to-peer support</b></li><li>Licenses and fees</li><li>Consulting expenses</li><li>Facility costs</li><li><b>The estimated cost of NOT developing the system, or of postponing the project</b></li></ul>
<h4>Tangible vs intangible benefits</h4>
<div class="two"><div class="card"><h5>Tangible (measurable in money)</h5><ul><li>A scheduling system that <b>reduces overtime</b></li><li>A package tracking system that improves service and <b>reduces the need for clerical staff</b></li><li>An inventory control system that <b>cuts excess inventory</b> and eliminates production delays</li></ul></div><div class="card"><h5>Intangible (hard to measure in money)</h5><ul><li>A user-friendly system that improves <b>employee job satisfaction</b></li><li>A sales tracking system that supplies <b>better information</b> for marketing decisions</li><li>A new website that <b>enhances the company's image</b></li></ul></div></div>
<h4>Schedule feasibility</h4>
<ul><li>Can the company or IT team <b>control the factors</b> that affect the schedule?</li><li>Has management set a <b>firm timetable</b>?</li><li>What conditions must be satisfied during development?</li><li>Will an <b>accelerated schedule</b> pose risks? If so, are they acceptable?</li><li>Will project management techniques be available to coordinate and control the project?</li><li><b>Will a project manager be appointed?</b></li></ul>
<div class="trap"><b>A point with two sources:</b> in the slide, "Will a project manager be appointed?" sits under <b>schedule</b>, and your notes (lecture 8) say "project manager before the project starts → schedule". But on the slide screenshot the lecturer wrote "→ Technical" next to it in red, and "Skills → Technical" at the top. Read it this way: <b>appointing a PM in time = schedule</b> (the slide), while <b>that person's skills = technical</b>. If the exam quotes the slide, answer schedule.</div>
<div class="note"><b>From your notes (lecture 8):</b> "20K cost &gt; 5K benefits → don't do it" (for discretionary projects).</div>`,
      quiz: [
        { id: 'c2l9q1', l: 'c2l9', q: 'A new website is expected to "enhance the company\'s image". This benefit is:',
          o: [['Intangible', 'Correct. It is hard to put a money value on it; it is a word-for-word example from the slide.'],
              ['Tangible', 'Tangible benefits are directly measurable in money, like reduced overtime.'],
              ['A cost', 'It is a benefit.'],
              ['A schedule factor', 'No.']],
          k: 'Image, satisfaction, better information → intangible.' },
        { id: 'c2l9q2', l: 'c2l9', q: 'Which item is an economic feasibility cost that students often forget?',
          o: [['The estimated cost of not developing the system or postponing the project', 'Correct, listed on slide 25.'],
              ['Company image', 'An intangible benefit.'],
              ['Users\' support for the project', 'Operational.'],
              ['A firm timetable', 'Schedule.']],
          k: 'Doing nothing has a cost too.' },
        { id: 'c2l9q3', l: 'c2l9', q: 'A package tracking system "decreases the need for clerical staff". Why is this TANGIBLE?',
          o: [['Fewer staff means a measurable saving in salaries', 'Correct. You can calculate it in money.'],
              ['Because it improves employee satisfaction', 'That would be intangible.'],
              ['Because it is a technical requirement', 'No.'],
              ['Because it happens in the future', 'Timing doesn\'t decide tangibility.']],
          k: 'Tangible = measurable in money.' }
      ]
    },
    {
      id: 'c2l10',
      t: 'Evaluating Feasibility, Status, and Setting Priorities',
      src: 'Ch2 slides 28-30 · annotated slide · Lecture 8 notes',
      body: `
<h4>Evaluating feasibility</h4>
<ul><li>Identify and <b>weed out</b> requests that are not feasible.</li><li>Even if a request is feasible, it <b>might not be necessary</b>.</li><li>Requests that are not currently feasible can be <b>resubmitted</b> as new hardware, software, or expertise becomes available.</li></ul>
<figure class="dg"><div class="tl"><span>Submitted</span><span>Approved</span><span>Rejected</span><span>On hold</span><span>Resubmitted</span><span>Cancelled</span></div><figcaption>Well-known request statuses (slide + your notes)</figcaption></figure>
<div class="note"><b>From your notes:</b> <b>Rejected</b> = "we didn't start it": turned down before any work began. <b>Cancelled</b> applies to a project that was stopped after it had started.</div>
<h4>Factors that affect priority</h4>
<ul><li>Will it reduce costs? Increase revenue? (Where? When? How? How much?)</li><li>Will it produce more information or better results? Are they measurable?</li><li>Will it serve customers better? The organization?</li><li>Can it be implemented in a reasonable time? How long will the results last?</li><li>Are the necessary financial, human, and technical resources available?</li></ul>
<h4>Discretionary vs nondiscretionary</h4>
<div class="two"><div class="card"><h5>Discretionary</h5><p>Management <b>has a choice</b>. Example: creating a new report for a user.</p></div><div class="card"><h5>Nondiscretionary</h5><p>Management <b>must</b> implement it. Example: a report required by federal law. Most are <b>predictable</b>: annual payroll updates, tax percentages, quarterly changes.</p></div></div>
<div class="note"><b>From your notes (lecture 8):</b> nondiscretionary projects: <b>operational, competitive, legal, sacred cow</b>. "You have to do it; <b>don't calculate benefits or anything</b>."</div>
<h4>MoSCoW: priority for projects (from your notes)</h4>
<div class="tbl"><table><tr><th>Letter</th><th>Meaning</th></tr>
<tr><td><b>M</b>ust</td><td>Most important; non-discretionary; the basics, so take responsibility</td></tr>
<tr><td><b>S</b>hould</td><td>Important but not critical</td></tr>
<tr><td><b>C</b>ould</td><td>Probably, if time allows</td></tr>
<tr><td><b>W</b>on't (would)</td><td>Nice to have, cosmetic (like a car's screen theme); can happen later</td></tr></table></div>`,
      quiz: [
        { id: 'c2l10q1', l: 'c2l10', q: 'A new tax law requires changes to the payroll system by January. Management should:',
          o: [['Implement it as a nondiscretionary project without needing a cost-benefit justification', 'Correct: "you have to do it; don\'t calculate benefits".'],
              ['Reject it if costs exceed benefits', 'That is discretionary logic.'],
              ['Put it on hold until next year', 'The law has a deadline.'],
              ['Treat it as "won\'t have"', 'It is a must.']],
          k: 'Legal → nondiscretionary → must.' },
        { id: 'c2l10q2', l: 'c2l10', q: 'A request was evaluated and turned down before any work began. Its status is:',
          o: [['Rejected', 'Correct: "rejected (we didn\'t start it)".'],
              ['Cancelled', 'Cancelled is for a project that started and was stopped.'],
              ['On hold', 'That is postponement, not refusal.'],
              ['Resubmitted', 'That is when it is submitted again.']],
          k: 'Rejected before starting. Cancelled after.' },
        { id: 'c2l10q3', l: 'c2l10', q: 'A request is technically impossible today, but a new technology will be available next year. The best handling is:',
          o: [['It can be resubmitted when the new hardware, software, or expertise becomes available', 'Correct, word for word from slide 28.'],
              ['It must be cancelled permanently', 'The slide allows resubmission.'],
              ['It should be approved anyway', 'It is not feasible yet.'],
              ['It becomes nondiscretionary', 'Unrelated.']],
          k: 'Not feasible now ≠ never.' }
      ]
    },
    {
      id: 'c2l11',
      t: 'Preliminary Investigation: Overview and Step 1',
      src: 'Ch2 slides 31-34 (Figures 2-15, 2-16, 2-17) · Lecture 9 notes',
      body: `
<p>The analyst conducts a <b>preliminary investigation</b> to study the request and recommend action. After getting authorization, the analyst works with managers, users, and other stakeholders.</p>
<ul><li>Before starting, let people know about the investigation and explain the analyst's role.</li><li>Meet key managers, users, and IT staff: describe the project, explain responsibilities, answer questions, invite comments.</li><li><b>Focus on new features, improvements, and enhancements, NOT problems.</b> This builds a positive relationship with users.</li></ul>
<figure class="dg"><div class="two"><div class="ff"><span>Problem or opportunity</span><span>Benefits</span><b>Fact-finding</b><span>Project scope and constraints</span><span>Costs</span><em>→ Report to management</em></div>
<ol class="steps"><li>Understand the problem or opportunity</li><li>Define the project scope and constraints</li><li>Perform fact-finding</li><li>Study usability, cost, benefit, and schedule data</li><li>Evaluate feasibility</li><li>Present recommendations to management</li></ol></div>
<figcaption>Figure 2-15 (fact-finding at the center of four areas) · Figure 2-16 (<b>six</b> main steps)</figcaption></figure>
<h4>Step 1: understand the problem or opportunity</h4>
<ul><li><b>Business profile</b>: an overview of the company's mission, functions, products, services, suppliers, competitors, customers, constraints, and future direction.</li><li><b>Business process</b>: a set of <b>transactions, events, and results</b> that can be described and documented.</li><li>Understand how changes will affect operations and other systems; determine which departments, users, and processes are involved.</li><li>Consider a <b>fishbone diagram</b>: it shows the possible causes of a problem as a graphical outline.</li></ul>
<div class="note"><b>From your notes (lecture 9): process vs transaction vs event</b><ul><li><b>Process</b>: it <b>has an end goal</b>.</li><li><b>Transaction</b>: e.g. inserting a credit card. Transactions <b>trigger other transactions</b>, and a transaction alone <b>has no end goal</b>.</li><li><b>Event</b>: something that happens.</li><li>Fishbone → one of the techniques to reach the <b>root problem</b>: why, why, why.</li></ul></div>
<figure class="dg"><div class="fish"><div class="bone top"><b>Environment</b><span>Temperature too hot or cold</span><span>Faulty thermostat</span></div><div class="bone top"><b>People</b><span>Not enough training</span><span>Managers do not keep them informed</span></div><div class="spine">→ <b>Low morale</b></div><div class="bone"><b>Management</b><span>Not enough time on the shop floor</span><span>Lack of clear direction from the top</span><span>Too many meetings</span></div><div class="bone"><b>Machines</b><span>Need more maintenance</span><span>Many are obsolete</span></div></div><figcaption>Figure 2-17: dig deeper to identify actual <b>causes</b> rather than just <b>symptoms</b></figcaption></figure>`,
      quiz: [
        { id: 'c2l11q1', l: 'c2l11', q: 'In Figure 2-17, "faulty thermostat" is placed under which category?',
          o: [['Environment', 'Correct. It causes "temperature too hot or cold" under environment.'],
              ['Machines', 'Machines: need more maintenance, many are obsolete.'],
              ['People', 'People: training, managers not informing.'],
              ['Management', 'Management: shop-floor time, direction, meetings.']],
          k: 'Fishbone: categories → causes → effect (low morale).' },
        { id: 'c2l11q2', l: 'c2l11', q: 'When meeting users at the start of a preliminary investigation, the analyst should focus on:',
          o: [['New features, improvements, and enhancements rather than problems', 'Correct; it builds a positive relationship.'],
              ['Listing every problem in the current system', 'The slide says NOT problems.'],
              ['Technical code details', 'Too early.'],
              ['Cost reductions only', 'Too narrow.']],
          k: 'Stay positive with users.' },
        { id: 'c2l11q3', l: 'c2l11', q: 'Which statement distinguishes a process from a transaction?',
          o: [['A process has an end goal, while a transaction alone has no end goal but can trigger other transactions', 'Correct.'],
              ['A transaction always has an end goal', 'Reversed.'],
              ['They are the same thing', 'They are different.'],
              ['A process is a single credit-card insert', 'That is an example of a transaction.']],
          k: 'Business process = transactions + events + results.' }
      ]
    },
    {
      id: 'c2l12',
      t: 'Steps 2-3: Scope, Constraints, and Fact-Finding',
      src: 'Ch2 slides 35-40 (Figures 2-18, 2-20, 2-21, 2-22) · Lecture 9-10 notes',
      body: `
<h4>Step 2: define the project scope and constraints</h4>
<ul><li>Scope = the specific <b>boundaries, or extent</b>, of the project. Your notes: "project scope → the actual work".</li><li>Create a list with sections: <b>Must Do, Should Do, Could Do, Won't Do</b> (the same idea as MoSCoW).</li><li>Define the scope clearly to avoid <b>project creep</b> (the project slowly growing out of control).</li><li>A <b>constraint</b> is a requirement or condition the system <b>must satisfy</b>, or an outcome it must achieve.</li></ul>
<div class="tbl"><table><tr><th>Figure 2-18 example</th><th>Timing</th><th>Type</th><th>Urgency</th></tr>
<tr><td>A: New IRS data must be used in the payroll system as soon as possible</td><td>Present</td><td>External</td><td>Mandatory</td></tr>
<tr><td>B: Next year, our largest customer will require a security code for all online transactions</td><td>Future</td><td>External</td><td>Mandatory</td></tr>
<tr><td>C: Management prefers that the project be completed now rather than next quarter</td><td>Present</td><td>Internal</td><td>Desirable</td></tr>
<tr><td>D: Starting next week, the marketing system must track all repeat visits to the website</td><td>Present</td><td>Internal</td><td>Mandatory</td></tr>
<tr><td>E: To reduce raw material costs, we should build supply chain management into the next version</td><td>Future</td><td>Internal</td><td>Desirable</td></tr></table></div>
<div class="trap"><b>How to classify:</b> "must / required" → mandatory. "prefers / should" → desirable. From the government or a customer → external. From management or the company → internal.</div>
<h4>Step 3: perform fact-finding</h4>
<div class="two"><div class="card"><h5>Conduct interviews (7 steps)</h5><ol><li>Determine the people to interview</li><li>Establish objectives</li><li>Develop questions</li><li>Prepare</li><li>Conduct</li><li>Document</li><li>Evaluate</li></ol></div>
<div class="card"><h5>Other techniques</h5><ul><li><b>Review documentation</b> of the current system</li><li><b>Observe operations</b>: see how workers carry out tasks; sample inputs and outputs (Figure 2-20)</li><li><b>User survey</b>: less flexible than interviews, but cheaper, faster, and reaches a broad cross-section of people</li></ul></div></div>
<div class="note"><b>From your notes (lectures 9-10):</b><ul><li>Surveys and interviews both collect data, but a survey <b>has no follow-up questions</b>.</li><li>A <b>trick question</b> is included in surveys: if a user answers it wrongly, you can spot it and exclude that survey. The reason is <b>survey fatigue</b> (people get bored and answer randomly).</li></ul></div>
<h4>Analyze the data</h4>
<div class="two"><div class="card"><h5>Pareto chart → discrete data</h5><p>Shows the causes of a problem <b>in priority order</b> (bars from largest to smallest). Figure 2-21 (inventory errors): improper part number (largest) → invalid codes → out-of-date codes → address correction needed → exceeds maximum level → inactive supplier. <b>Part numbers are the starting point.</b></p></div>
<div class="card"><h5>XY chart → continuous data</h5><p>Shows <b>correlation</b> between variables. Figure 2-22: response time vs number of users. First chart: scattered points = <b>no correlation</b> (the variables are independent; look for the cause elsewhere). Second chart: points along a rising line = <b>correlation</b>.</p></div></div>`,
      quiz: [
        { id: 'c2l12q1', l: 'c2l12', q: '"Next year, our largest customer will require a security code for all online transactions." Classify this constraint.',
          o: [['Future, external, mandatory', 'Correct (example B). Next year = future, customer = external, require = mandatory.'],
              ['Present, internal, desirable', 'All reversed.'],
              ['Future, internal, mandatory', 'The customer is outside the company.'],
              ['Present, external, desirable', '"Will require" is not "prefers".']],
          k: 'Timing · type · urgency.' },
        { id: 'c2l12q2', l: 'c2l12', q: 'An analyst wants to know whether slow response time is related to the number of users. Which tool is most appropriate?',
          o: [['An XY chart, to check correlation between two continuous variables', 'Correct.'],
              ['A Pareto chart', 'A Pareto chart ranks causes (discrete); it doesn\'t test a relationship between two variables.'],
              ['A fishbone diagram', 'It lists possible causes, not a numeric relationship.'],
              ['A systems request form', 'No.']],
          k: 'Correlation → XY. Priority of causes → Pareto.' },
        { id: 'c2l12q3', l: 'c2l12', q: 'Why might an analyst include a trick question in a user survey?',
          o: [['To detect respondents who answer carelessly (survey fatigue) and exclude their surveys', 'Correct.'],
              ['To replace follow-up questions', 'Surveys have no follow-ups, and the trick question isn\'t a substitute.'],
              ['To make the survey longer', 'That would increase fatigue.'],
              ['To test the analyst', 'No.']],
          k: 'Trick question = a quality filter.' }
      ]
    },
    {
      id: 'c2l13',
      t: 'Steps 4-6: Analyze, Evaluate, Present',
      src: 'Ch2 slides 41-45 · Lecture 10 notes',
      body: `
<h4>Step 4: analyze project usability, cost, benefit, and schedule data</h4>
<div class="two"><div class="card"><h5>Before fact-finding</h5><ul><li>Interviews? How many people, and how much time to meet them and summarize their answers?</li><li>A survey? Who is involved? How long will people take to complete it? How long to tabulate the results?</li></ul></div><div class="card"><h5>During fact-finding</h5><ul><li>Data is gathered on predicted costs, anticipated benefits, and schedule issues; it must be analyzed before feasibility can be evaluated.</li><li>How much will it cost to analyze the information and prepare the report?</li></ul></div></div>
<h4>Step 5: evaluate feasibility</h4>
<div class="tbl"><table><tr><th>Type</th><th>What you do in step 5</th></tr>
<tr><td>Operational</td><td>Review user needs, requirements, and expectations. Look for areas that might cause problems for users.</td></tr>
<tr><td>Technical</td><td>Identify hardware, software, and network resources. Develop a <b>checklist</b> of technical costs and concerns.</td></tr>
<tr><td>Economic</td><td>Apply the <b>financial analysis tools</b> (Chapter 3). Cost-benefit data is important.</td></tr>
<tr><td>Schedule</td><td>Include <b>stakeholder expectations</b> about acceptable timing and completion dates.</td></tr></table></div>
<h4>Step 6: present results and recommendations to management</h4>
<ul><li><b>Introduction</b>: brief description and who performed the investigation</li><li><b>Systems request summary</b>: the basis of the request</li><li><b>Findings</b>: scope, constraints, feasibility</li><li><b>Project roles</b>: people and their roles</li><li><b>Time and cost estimates</b>: intangible costs should be noted</li><li><b>Expected benefits</b>: tangible and intangible, with a timetable</li><li><b>Appendix</b>: interviews, surveys, other sources</li></ul>
<div class="note"><b>From your notes (lecture 10):</b> "Slide 43 for the project": this report structure is what you use for the course project (introduction, references, risks...).</div>
<div class="ex"><b>Link:</b> step 5's economic feasibility is the bridge to Chapter 3, where you learn the tools: net profit, payback period, ROI, NPV.</div>`,
      quiz: [
        { id: 'c2l13q1', l: 'c2l13', q: 'In which section of the preliminary investigation report would you put the survey questionnaires and interview notes?',
          o: [['Appendix', 'Correct.'],
              ['Findings', 'Findings = scope, constraints, feasibility.'],
              ['Introduction', 'Description and who ran the investigation.'],
              ['Systems request summary', 'The basis of the request.']],
          k: 'Raw sources → appendix.' },
        { id: 'c2l13q2', l: 'c2l13', q: 'During step 5, "develop a checklist that will highlight technical costs and concerns" is part of evaluating:',
          o: [['Technical feasibility', 'Correct.'],
              ['Economic feasibility', 'Economic = financial analysis tools.'],
              ['Operational feasibility', 'Operational = user needs.'],
              ['Schedule feasibility', 'Schedule = stakeholder timing expectations.']],
          k: 'Checklist → technical.' },
        { id: 'c2l13q3', l: 'c2l13', q: 'Before fact-finding, which question should the analyst consider?',
          o: [['How much time will it take to tabulate the survey results?', 'Correct, from the "before fact-finding" list.'],
              ['What are the actual predicted costs gathered?', 'That is during fact-finding.'],
              ['Who performed the investigation?', 'That goes in the report (step 6).'],
              ['Which expected benefits are intangible?', 'Step 6.']],
          k: 'Before = planning the effort. During = gathering and analyzing.' }
      ]
    }
  ],
  groups: [
    { id: 'c2g1', after: 'c2l4', t: 'Practice: Strategy, SWOT, Planning', qs: [
      { id: 'c2g1q1', l: 'c2l3', q: 'PSUT turns its weakness "high tuition fees" into a strength by offering scholarships funded by industry partners. Which SWOT goal is this?',
        o: [['Turning a weakness into a strength', 'Correct: "what are we trying to do? Make a weakness a strength".'],
            ['Turning a threat into an opportunity', 'Fees are an internal weakness, not a threat.'],
            ['Minimizing strengths', 'No.'],
            ['Ignoring internal factors', 'No.']],
        k: 'SWOT is a plan, not just a classification.' },
      { id: 'c2g1q2', l: 'c2l2', q: 'A competitor opens a cheaper campus nearby (a threat). In Figure 2-3, how should this influence planning?',
        o: [['SWOT findings shape realistic goals and objectives under the mission', 'Correct. SWOT feeds the goals.'],
            ['It changes the company\'s values automatically', 'Values are relatively stable.'],
            ['It should be ignored because it is external', 'You can\'t control it, but you must plan for it.'],
            ['It becomes the new mission', 'No.']],
        k: 'The mission is stable; goals adapt to the SWOT.' },
      { id: 'c2g1q3', l: 'c2l4', q: 'An IT project is technically excellent but does not support the company\'s business strategy. Which planning assurance failed?',
        o: [['The project supports overall business strategy and operational needs', 'Correct, the first item on slide 8.'],
            ['The scope is well defined', 'A clear scope can still miss the strategy.'],
            ['Goals are achievable', 'They may be achievable.'],
            ['The use of a CASE tool', 'A tool, not an assurance.']],
        k: 'An IT project must serve the strategy.' },
      { id: 'c2g1q4', l: 'c2l3', q: 'Which pair is correctly classified for a car dealer?',
        o: [['Skilled mechanics: strength · new import tax: threat', 'Correct. Mechanics are internal (S); the tax comes from the government (T).'],
            ['Skilled mechanics: opportunity · new import tax: weakness', 'Reversed.'],
            ['Both are weaknesses', 'No.'],
            ['Both are opportunities', 'No.']],
        k: 'Internal S/W. External O/T.' }
    ]},
    { id: 'c2g2', after: 'c2l7', t: 'Practice: Business Case and Requests', qs: [
      { id: 'c2g2q1', l: 'c2l5', q: 'A project costs 49K (including 24K of in-kind staff time) and returns 17K per year. A manager says "no new cash is spent on staff, so the investment is only 25K". What is wrong?',
        o: [['In-kind staff time has real value and must be included in the investment', 'Correct. Leaving it out makes the return look like 68% instead of 35%, which is misleading.'],
            ['Nothing; in-kind contributions are always excluded', 'Wrong.'],
            ['The benefit should be reduced by 24K', 'The 24K is a cost, not a reduction in benefit.'],
            ['Salaries belong to schedule feasibility', 'No.']],
        k: 'True cost = cash + in-kind.' },
      { id: 'c2g2q2', l: 'c2l7', q: 'A department submits a request for a new data dashboard. Which flow is correct?',
        o: [['Request → change manager (can cancel, send back, hold, prioritize) → top manager approves → change', 'Correct.'],
            ['Request → immediate change → approval later', 'The change comes after approval.'],
            ['Change manager → request → change', 'The request comes first.'],
            ['Top manager → user → request', 'No.']],
        k: 'The ITIL change flow.' },
      { id: 'c2g2q3', l: 'c2l6', q: 'A government regulation forces a bank to add two-factor login. This is a factor of type ___ and the project is ___.',
        o: [['External; nondiscretionary', 'Correct. Government = external, and a law = must.'],
            ['Internal; discretionary', 'Reversed.'],
            ['External; discretionary', 'The law leaves no choice.'],
            ['Internal; nondiscretionary', 'The government is outside the company.']],
        k: 'Connect factors with priorities.' },
      { id: 'c2g2q4', l: 'c2l5', q: 'Which business case question relates directly to the Chapter 3 financial tools?',
        o: [['What is the return on investment and payback period?', 'Correct. ROI and payback period are Chapter 3 tools.'],
            ['What is the project about?', 'A description.'],
            ['How will we measure success?', 'General.'],
            ['What alternatives exist?', 'Alternatives.']],
        k: 'Business case ↔ financial analysis.' }
    ]},
    { id: 'c2g3', after: 'c2l10', t: 'Practice: Feasibility and Priority', qs: [
      { id: 'c2g3q1', l: 'c2l8', q: 'Users dislike the current system and want change, the company has the servers and staff, costs are below benefits, but management needs it in 2 months while the realistic estimate is 6. Which feasibility fails?',
        o: [['Schedule', 'Correct. Everything is fine except time.'],
            ['Operational', 'Users want the change.'],
            ['Technical', 'The resources exist.'],
            ['Economic', 'Costs are below benefits.']],
        k: 'Check each dimension separately.' },
      { id: 'c2g3q2', l: 'c2l10', q: 'A discretionary project costs 20K and brings 5K in benefits. The decision is:',
        o: [['Don\'t do it', 'Correct: "20K cost > 5K benefits → don\'t do it".'],
            ['Do it because all projects are mandatory', 'It is discretionary.'],
            ['Do it as a must', 'No.'],
            ['Resubmit it as nondiscretionary', 'Its nature doesn\'t change.']],
        k: 'Discretionary → compare cost and benefit.' },
      { id: 'c2g3q3', l: 'c2l10', q: 'For which project would you NOT run a cost-benefit calculation?',
        o: [['A legally required change (sacred cow / legal / competitive / operational necessity)', 'Correct: "you have to do it; don\'t calculate benefits".'],
            ['A new report requested by a manager', 'Discretionary.'],
            ['A nicer color theme', 'Won\'t / nice to have.'],
            ['A dashboard to improve marketing', 'Discretionary.']],
        k: 'Nondiscretionary = no feasibility math.' },
      { id: 'c2g3q4', l: 'c2l10', q: 'Changing the color theme of a car\'s dashboard screen, in MoSCoW terms, and its benefit type, are:',
        o: [['Won\'t / nice to have (cosmetic); intangible', 'Correct. It is cosmetic, can happen later, and its benefit is hard to measure.'],
            ['Must; tangible', 'It is not essential.'],
            ['Should; tangible', 'It is not important.'],
            ['Must; nondiscretionary', 'No.']],
        k: 'Cosmetic → W.' }
    ]},
    { id: 'c2g4', after: 'c2l13', t: 'Practice: The Preliminary Investigation', qs: [
      { id: 'c2g4q1', l: 'c2l11', q: 'Order these correctly: (a) evaluate feasibility (b) define scope and constraints (c) perform fact-finding (d) present to management.',
        o: [['b → c → a → d', 'Correct: step 2 → 3 → 5 → 6.'],
            ['c → b → a → d', 'Scope comes before fact-finding.'],
            ['a → b → c → d', 'Feasibility comes after gathering facts.'],
            ['b → a → c → d', 'You need the facts before evaluating.']],
        k: 'The six steps, in order.' },
      { id: 'c2g4q2', l: 'c2l12', q: 'An analyst used a Pareto chart and found "improper part number" causes most inventory errors. What should happen next?',
        o: [['Tackle part numbers first, as the most important cause', 'Correct: "the part number issue would be the obvious starting point".'],
            ['Fix the inactive supplier issue first', 'That is the smallest cause.'],
            ['Draw an XY chart to rank causes', 'The Pareto chart already ranks them.'],
            ['Ignore it because it is discrete data', 'Pareto charts are for discrete data.']],
        k: 'Pareto → start with the biggest cause.' },
      { id: 'c2g4q3', l: 'c2l12', q: 'A team keeps adding "small" features during development until the project is months late. Which step was weak, and what is the problem called?',
        o: [['Step 2 (scope and constraints); project creep', 'Correct: "define the scope as clearly as possible to avoid project creep".'],
            ['Step 6; survey fatigue', 'Fatigue applies to surveys.'],
            ['Step 3; correlation', 'No.'],
            ['Step 5; intangible benefits', 'No.']],
        k: 'Clear scope = no creep.' },
      { id: 'c2g4q4', l: 'c2l11', q: 'Morale is low in a factory. The analyst draws a fishbone diagram and keeps asking "why?" for each cause. The purpose is to:',
        o: [['Reach the root causes rather than symptoms', 'Correct: "dig deeper to identify actual causes rather than just symptoms" and "why, why, why".'],
            ['Rank causes by frequency', 'That is a Pareto chart.'],
            ['Show correlation between variables', 'That is an XY chart.'],
            ['Calculate the cost of low morale', 'No.']],
        k: 'Fishbone + "why" = root cause.' }
    ]}
  ],
  exam: [
    { id: 'c2x1', l: 'c2l12', q: 'Which statement comparing surveys and interviews is TRUE?',
      o: [['A survey is less flexible but less expensive and can reach a broad cross-section of people', 'Correct.'],
          ['A survey allows unlimited follow-up questions', 'The opposite.'],
          ['Interviews are always cheaper', 'No.'],
          ['Surveys cannot collect data', 'Both collect data.']],
      k: 'Survey: cheap and broad, but inflexible.' },
    { id: 'c2x2', l: 'c2l12', q: '"Management prefers that the project be completed now rather than next quarter" is which constraint?',
      o: [['Present, internal, desirable', 'Correct (example C).'],
          ['Future, external, mandatory', 'No.'],
          ['Present, external, mandatory', 'Management is internal and "prefers" is desirable.'],
          ['Future, internal, desirable', '"Now" = present.']],
      k: 'Prefers → desirable.' },
    { id: 'c2x3', l: 'c2l7', q: 'Which is a DISADVANTAGE of a systems review committee?',
      o: [['Members might favor projects requested by their own departments', 'Correct.'],
          ['It reduces one person\'s bias', 'An advantage.'],
          ['It has a broader viewpoint', 'An advantage.'],
          ['It sets priorities more effectively', 'An advantage.']],
      k: 'Three disadvantages: waiting, favoritism, politics.' },
    { id: 'c2x4', l: 'c2l8', q: '"Will it interface properly with external systems operated by customers and suppliers?" is part of:',
      o: [['Technical feasibility', 'Correct.'],
          ['Operational feasibility', 'No.'],
          ['Economic feasibility', 'No.'],
          ['Schedule feasibility', 'No.']],
      k: 'Integration → technical.' },
    { id: 'c2x5', l: 'c2l11', q: 'A business profile includes all of the following EXCEPT:',
      o: [['Source code of current applications', 'Correct; it is not part of it.'],
          ['Suppliers and competitors', 'Included.'],
          ['Constraints and future direction', 'Included.'],
          ['Products and services', 'Included.']],
      k: 'Business profile = a picture of the business.' },
    { id: 'c2x6', l: 'c2l9', q: 'Which question belongs to schedule feasibility?',
      o: [['Will an accelerated schedule pose any risks?', 'Correct.'],
          ['Does management support the project?', 'Operational.'],
          ['Does the company have the needed technical expertise?', 'Technical.'],
          ['What is the cost of licenses?', 'Economic.']],
      k: 'Schedule: timetable, acceleration, PM appointed.' },
    { id: 'c2x7', l: 'c2l10', q: 'Annual updates to payroll, tax percentages, and quarterly changes are examples of projects that are:',
      o: [['Nondiscretionary and mostly predictable', 'Correct, from slide 30.'],
          ['Discretionary and unpredictable', 'Reversed.'],
          ['Always rejected', 'No.'],
          ['Cosmetic', 'No.']],
      k: 'Nondiscretionary is usually predictable.' },
    { id: 'c2x8', l: 'c2l6', q: 'Which is an INTERNAL factor in Figure 2-10?',
      o: [['Existing systems and data', 'Correct.'],
          ['The economy', 'External.'],
          ['Competitors', 'External.'],
          ['Technology', 'External.']],
      k: 'Technology is external; the IT department is internal.' },
    { id: 'c2x9', l: 'c2l3', q: 'Which SWOT question corresponds to threats?',
      o: [['How can we assess, manage, and respond to the possible risks?', 'Correct.'],
          ['How can we reduce or eliminate them?', 'Weaknesses.'],
          ['How do we plan to take advantage of them?', 'Opportunities.'],
          ['How can we use them to achieve our business goals?', 'Strengths.']],
      k: 'Each letter has its own question.' },
    { id: 'c2x10', l: 'c2l2', open: true, q: 'Describe the strategic planning process shown in Figure 2-3, and explain where SWOT fits in it.',
      m: '<p>Strategic planning is a dynamic process that starts with a <b>mission statement</b>, which is shaped by the firm\'s <b>purpose, vision, and values</b>. The mission generates <b>goals and objectives</b> (long and short term) that produce <b>business results</b>.</p><p><b>SWOT</b> (strengths, weaknesses, opportunities, threats) feeds into setting the goals and objectives, so they are realistic: they use strengths and opportunities while reducing weaknesses and responding to threats.</p>' },
    { id: 'c2x11', l: 'c2l8', open: true, q: 'Explain the four types of feasibility and give one example question for each.',
      m: '<ul><li><b>Operational</b>: will the system be used and accepted? e.g. Do users support the project?</li><li><b>Technical</b>: do we have the resources and expertise? e.g. Does the company have the necessary hardware, software, and network resources?</li><li><b>Economic</b>: do benefits justify costs? e.g. What are the projected savings and costs?</li><li><b>Schedule</b>: can it be done in an acceptable time? e.g. Has management established a firm timetable?</li></ul>' },
    { id: 'c2x12', l: 'c2l7', open: true, q: 'Describe the difference between a service request and a request for service (RFS), with an example of each.',
      m: '<p>A <b>service request</b> concerns something that already exists, affects an individual, and is solved in hours. Example: reset my password.</p><p>A <b>request for service</b> is a new initiative that affects a group of people and takes weeks, months, or years, so it goes through review and approval (change manager, top management). Example: a new report providing GPA statistics.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 2, f: 'Stakeholder', b: 'An entity (human or organization) affecting OR affected by the system.' },
  { c: 2, f: 'Business case', b: 'The reasons or justification for a project: comprehensive yet easy to understand; describes the project, justifies it, and estimates the financial impact.' },
  { c: 2, f: 'Strategic planning (Fig. 2-3)', b: 'Purpose + vision + values → mission → (SWOT) → goals and objectives → business results.' },
  { c: 2, f: 'Strategic plan horizons', b: 'Top 5-10 years · middle 2-3 years · operations day to day.' },
  { c: 2, f: 'SWOT: internal vs external', b: 'Internal (S, W) = you can control it. External (O, T) = out of your control. Location can be either.' },
  { c: 2, f: 'Most effective planning tool', b: 'A CASE tool such as Visible Analyst (better than Word or Excel).' },
  { c: 2, f: 'Reasons for systems requests', b: 'Improved service · support for new products and services · better performance.' },
  { c: 2, f: 'Internal factors', b: 'Strategic plan, top managers, user requests, IT department, existing systems and data.' },
  { c: 2, f: 'External factors', b: 'Technology, suppliers, customers, competitors, the economy, government.' },
  { c: 2, f: 'Review committee: pros and cons', b: 'Pros: broader viewpoint, less individual bias. Cons: waiting for meetings, departmental favoritism, politics.' },
  { c: 2, f: 'Service request vs RFS', b: 'Service request: existing, individual, hours (reset password). RFS: new, group, weeks or more (GPA report).' },
  { c: 2, f: 'ITIL / ITSM', b: 'ITIL: IT Infrastructure Library, a framework for managing IT. ITSM: IT Service Management.' },
  { c: 2, f: 'Operational feasibility', b: 'Will people support and use it? Management and user support, training, workforce reduction, legal and ethical issues.' },
  { c: 2, f: 'Technical feasibility', b: 'Hardware, software, network, expertise, capacity, integration, performance, transaction volume.' },
  { c: 2, f: 'Economic feasibility costs', b: 'People, hardware, software, training (incl. peer-to-peer), licenses, consulting, facilities, and the <b>cost of not developing</b>.' },
  { c: 2, f: 'Schedule feasibility', b: 'Control of factors, firm timetable, conditions, risks of acceleration, PM techniques, PM appointed.' },
  { c: 2, f: 'Tangible vs intangible', b: 'Tangible: measurable in money (overtime, clerical staff). Intangible: satisfaction, better information, image.' },
  { c: 2, f: 'Discretionary vs nondiscretionary', b: 'Discretionary: management has a choice. Nondiscretionary: must be done (legal, operational, competitive, sacred cow), no benefit calculation.' },
  { c: 2, f: 'MoSCoW', b: 'Must, Should, Could, Won\'t. Must = the basics. Won\'t = nice to have / cosmetic.' },
  { c: 2, f: 'Request statuses', b: 'Submitted, approved, rejected (before starting), on hold, resubmitted, cancelled.' },
  { c: 2, f: 'Six steps of the preliminary investigation', b: '1 Understand the problem · 2 Scope and constraints · 3 Fact-finding · 4 Analyze usability, cost, benefit, schedule · 5 Evaluate feasibility · 6 Present to management.' },
  { c: 2, f: 'Business process', b: 'A set of transactions, events, and results. A process has an end goal; a transaction alone does not.' },
  { c: 2, f: 'Fishbone diagram', b: 'The causes of a problem as a graphical outline. Ask "why?" repeatedly to reach root causes, not symptoms.' },
  { c: 2, f: 'Constraint', b: 'A requirement or condition the system must satisfy. Classified as present/future, internal/external, mandatory/desirable.' },
  { c: 2, f: 'Project creep', b: 'A project growing out of control. Prevented by a clear scope (Must / Should / Could / Won\'t Do).' },
  { c: 2, f: 'Interview steps (7)', b: 'Determine people → objectives → questions → prepare → conduct → document → evaluate.' },
  { c: 2, f: 'Pareto vs XY chart', b: 'Pareto: discrete data, causes ranked. XY: continuous data, correlation.' },
  { c: 2, f: 'Survey fatigue and trick questions', b: 'People get bored and answer randomly. A trick question catches them so the survey can be excluded.' },
  { c: 2, f: 'Report sections (step 6)', b: 'Introduction, systems request summary, findings, project roles, time and cost estimates, expected benefits, appendix.' }
);
