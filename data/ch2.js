/* Chapter 2: Analyzing a Business Case
   Sources: Ch2 slides, annotated slide screenshots, notebook lectures 5-10. o[0] = correct.
   Distractors: true facts about neighboring concepts or common misreadings, same style and length. */
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

<h4>1. Everything is judged against the mission</h4>
<p>Your notes: "When you get a lot of suggestions, you need to meet the mission and objectives." A company always has more ideas than money and staff, so each idea is measured by how much it serves the mission.</p>
<div class="ex"><b>Real example:</b> a bank whose mission is "simple digital banking for everyone" receives three ideas: a faster mobile login, a new branch decoration, and a staff gym. The mobile login serves the mission directly, so it wins priority, even if the others are cheaper.</div>

<h4>2. Every initiative starts with a request</h4>
<p>Your notes: "Any new initiative, someone should request it." The <b>systems request</b> is the formal start; without it there is nothing to evaluate. It is followed by the <b>preliminary investigation</b>: feasibility study, fact-finding, and reporting to management.</p>
<div class="ex"><b>Real example:</b> the registrar emails IT: "we need online exam scheduling." IT does not start coding. The email becomes a systems request, an analyst investigates, and management decides.</div>

<h4>3. Stakeholders</h4>
<p>A <b>stakeholder</b> is an entity (<b>human or organization</b>) <b>affecting or affected by</b> the system. You don't need to use the system to be a stakeholder.</p>
<div class="ex"><b>Real example, university registration system:</b> students and lecturers (affected); the admissions office (affecting and affected); the Ministry of Higher Education (affecting: it sets credit-hour rules); the cloud hosting company (affecting: an outage stops registration); parents who pay fees (affected).</div>

<div class="note"><b>Exam style (lecture 5):</b> "List ✗ · Describe &amp; Explain ✓". Expect questions that ask you to describe and apply, not to recite lists.</div>`,
      quiz: [
        { id: 'c2l1q1', l: 'c2l1', q: 'The Ministry of Higher Education never logs into the university registration system, but its credit-hour rules shape how the system works. Is the Ministry a stakeholder?',
          o: [['Yes, because a stakeholder is any entity that affects or is affected by the system', 'Correct: affecting is enough.'],
              ['No, because stakeholders are only the people who use the system directly', 'The definition includes those who affect the system without using it.'],
              ['No, because an organization can be an environment factor but not a stakeholder', 'The definition says "human or organization".'],
              ['Only if the Ministry also funds the system or receives reports from it', 'Funding or reports are not conditions.']],
          k: 'Stakeholder = affecting OR affected, human OR organization.' },
        { id: 'c2l1q2', l: 'c2l1', q: 'A cloud provider hosts the registration system. When it has an outage, nobody can register. In stakeholder terms, the provider is:',
          o: [['A stakeholder that affects the system', 'Correct.'],
              ['Not a stakeholder, because it is a supplier', 'Suppliers can be stakeholders when they affect the system.'],
              ['A stakeholder only if it is affected by the system', 'Affecting alone is enough.'],
              ['Part of the system\'s goal, not a stakeholder', 'The goal is registering students; the provider is not a goal.']],
          k: 'Affecting the system is enough.' },
        { id: 'c2l1q3', l: 'c2l1', q: 'The registrar asks IT for online exam scheduling. What should happen FIRST?',
          o: [['The idea is submitted as a systems request, then a preliminary investigation follows', 'Correct: "process starts with a systems request".'],
              ['A preliminary investigation starts immediately, and the request is written afterwards', 'The request comes first; it is what gets investigated.'],
              ['Developers build a prototype so management can see it before deciding', 'Building comes after the investigation and approval.'],
              ['Management decides, then the analyst writes the feasibility study to support it', 'The feasibility study informs the decision; it comes before.']],
          k: 'Request → investigation → decision.' },
        { id: 'c2l1q4', l: 'c2l1', q: 'A bank with the mission "simple digital banking for everyone" has budget for one of three projects. Which should it favor, all else equal?',
          o: [['A faster, simpler mobile login', 'Correct: it serves the mission most directly.'],
              ['A redesign of the branch interiors', 'Possibly useful, but it does not serve a digital mission.'],
              ['A new gym for head-office staff', 'An internal benefit unrelated to the mission.'],
              ['An upgrade of the printed brochure design', 'Printed materials do not serve digital banking.']],
          k: 'Ideas are judged against the mission and objectives.' }
      ]
    },
    {
      id: 'c2l2',
      t: 'Strategic Planning: Mission, Vision, Goals',
      src: 'Ch2 slides 5-6 (Figure 2-3) · Lecture 5 notes',
      body: `
<p><b>Strategic planning</b> is how a company decides where it wants to be in the long term and how to get there. It starts with a <b>mission statement</b>, continues with <b>goals and objectives</b>, and identifies <b>long- and short-term goals</b>.</p>
<figure class="dg"><div class="gears"><div class="row3"><span class="pill">Purpose</span><span class="pill">Vision</span><span class="pill">Values</span></div><div class="ar dn">↓</div><div class="bx hi">Mission statement</div><div class="ar dn">↓ <span class="pill alt">SWOT analysis</span></div><div class="bx">Goals and objectives</div><div class="ar dn">↓</div><div class="bx">Business results</div></div>
<figcaption>Figure 2-3: the mission is shaped by purpose, vision, and values; SWOT helps turn it into goals and objectives, which produce business results.</figcaption></figure>

<h4>Each piece, with one example (a private university)</h4>
<div class="tbl"><table><tr><th>Piece</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Purpose</td><td>Why the organization exists</td><td>To prepare people for technology careers</td></tr>
<tr><td>Vision</td><td>The future it aims for; a direction ("you will never achieve it")</td><td>A leading technology university in the region</td></tr>
<tr><td>Values</td><td>Principles it will not break</td><td>Integrity, excellence, industry relevance</td></tr>
<tr><td>Mission statement</td><td>What it does now, for whom; shaped by the three above</td><td>We graduate engineers and developers ready for the job market</td></tr>
<tr><td>Goal</td><td>A broad result to reach</td><td>Raise graduate employment</td></tr>
<tr><td>Objective</td><td>A specific, measurable step toward a goal</td><td>85% of graduates employed within 6 months, by 2028</td></tr>
<tr><td>Business results</td><td>What actually happens</td><td>Employment rose to 81% in 2027</td></tr></table></div>
<div class="trap"><b>Direction of the arrows:</b> purpose, vision, and values <b>shape</b> the mission (not the reverse). SWOT sits <b>between</b> the mission and the goals: it keeps goals realistic.</div>

<h4>The strategic plan pyramid (from your notes, lecture 5)</h4>
<div class="tbl"><table><tr><th>Level</th><th>Plan horizon</th><th>Example</th></tr><tr><td>Top</td><td>5-10 years</td><td>Become the regional leader in fiber</td></tr><tr><td>Middle</td><td>2-3 years</td><td>Cover Irbid and Zarqa by 2027</td></tr><tr><td>Operations (supervisors)</td><td>Day to day</td><td>Today's 12 installations</td></tr></table></div>
<p>A <b>review committee</b> reviews requests coming from these levels and checks them against the plan.</p>`,
      quiz: [
        { id: 'c2l2q1', l: 'c2l2', q: 'In Figure 2-3, which elements SHAPE the mission statement?',
          o: [['Purpose, vision, and values', 'Correct.'],
              ['Goals, objectives, and business results', 'These come after the mission.'],
              ['SWOT analysis, goals, and values', 'SWOT feeds the goals, not the mission.'],
              ['Vision, SWOT analysis, and business results', 'Only vision shapes the mission here.']],
          k: 'Purpose + vision + values → mission.' },
        { id: 'c2l2q2', l: 'c2l2', q: 'Where does SWOT analysis enter the strategic planning process in Figure 2-3?',
          o: [['Between the mission statement and the goals and objectives', 'Correct: it makes goals realistic.'],
              ['Before purpose, vision, and values are written', 'SWOT is not shown before them.'],
              ['After business results, to explain why they happened', 'SWOT feeds goals, not results.'],
              ['Inside the mission statement, replacing the values', 'It does not replace anything.']],
          k: 'SWOT → realistic goals.' },
        { id: 'c2l2q3', l: 'c2l2', q: '"85% of graduates employed within 6 months, by 2028." This is best described as:',
          o: [['An objective: a specific, measurable step', 'Correct.'],
              ['A vision: the future the university aims for', 'A vision is a broad direction without a number.'],
              ['A mission statement: what the university does now', 'The mission describes what it does, not a target.'],
              ['A value: a principle the university will not break', 'Values are principles, not targets.']],
          k: 'Specific and measurable → objective.' },
        { id: 'c2l2q4', l: 'c2l2', q: '"To be a leading technology university in the region" is best described as:',
          o: [['A vision', 'Correct: a direction for the future.'],
              ['An objective', 'Objectives are specific and measurable.'],
              ['A business result', 'Results are what actually happened.'],
              ['A value', 'Values are principles like integrity.']],
          k: 'Vision = direction, "you will never achieve it".' },
        { id: 'c2l2q5', l: 'c2l2', q: 'A plan to "cover Irbid and Zarqa with fiber by 2027" (about 2-3 years) most likely belongs to which level?',
          o: [['Middle management', 'Correct: 2-3 years.'],
              ['Top management', 'Top plans cover 5-10 years.'],
              ['Supervisors', 'Supervisors plan day to day.'],
              ['The review committee', 'It reviews requests; it is not a planning level.']],
          k: '5-10 years / 2-3 years / day to day.' }
      ]
    },
    {
      id: 'c2l3',
      t: 'SWOT Analysis',
      src: 'Ch2 slides 5, 7 (Figure 2-5) · Lecture 6 notes (PSUT example)',
      body: `
<p><b>SWOT</b> splits everything that matters into four boxes. The split has two questions: <b>inside or outside?</b> and <b>helps or hurts?</b></p>
<figure class="dg"><div class="swot">
<div class="q s"><b>S</b>Internal, helps · maximize<br>Reputation, good connections</div>
<div class="q o"><b>O</b>External, helps<br>Collaboration</div>
<div class="q w"><b>W</b>Internal, hurts<br>Tuition fees</div>
<div class="q t"><b>T</b>External, hurts · minimize<br>Competition, regulations</div>
</div><figcaption>SWOT for PSUT, from your notes (lecture 6)</figcaption></figure>
<p>Your notes: <b>internal</b> = anything you have the <b>power to control</b>; <b>external</b> = anything <b>out of your control</b>.</p>

<h4>Each box, with its question and a real example</h4>
<div class="tbl"><table><tr><th>Box</th><th>Question (slide)</th><th>Example: a car dealership in Amman</th></tr>
<tr><td><b>Strengths</b></td><td>How can we use them to achieve our goals?</td><td>Highly skilled mechanics; a well-known brand</td></tr>
<tr><td><b>Weaknesses</b></td><td>How can we reduce or eliminate them?</td><td>An outdated booking system; a small showroom</td></tr>
<tr><td><b>Opportunities</b></td><td>How do we plan to take advantage of them?</td><td>Rising demand for electric cars; a new government EV incentive</td></tr>
<tr><td><b>Threats</b></td><td>How can we assess, manage, and respond to the risks?</td><td>A new import tax; online sellers with lower prices</td></tr></table></div>
<div class="trap"><b>The trick cases:</b><br>An outdated system is a <b>weakness</b> (inside, you could replace it), not a threat.<br>A government rule is a <b>threat or opportunity</b> (outside), even though it affects you directly.<br><b>Location</b> can be either (your notes): "no parking spaces" is a weakness if the university can build parking, a threat if the area is fully built and owned by others.</div>
<p><b>What are we trying to do?</b> (your notes) Turn a <b>weakness into a strength</b> and a <b>threat into an opportunity</b>. Example: PSUT's high fees (W) become a strength by offering industry-funded scholarships.</p>

<h4>SWOT of a single asset (Figure 2-5: a patent)</h4>
<div class="tbl"><table><tr><th></th><th>Patent</th></tr>
<tr><td>S</td><td>Covers valuable technology used in popular products</td></tr>
<tr><td>W</td><td>Limited life: when it expires, the technology is no longer protected</td></tr>
<tr><td>O</td><td>Use it in more products, license it to others, seek more patents</td></tr>
<tr><td>T</td><td>A competitor might develop similar technology that does not legally infringe it</td></tr></table></div>`,
      quiz: [
        { id: 'c2l3q1', l: 'c2l3', q: 'For a car dealership, "our online booking system is outdated and customers abandon it" is a:',
          o: [['Weakness, because it is internal and the dealership can replace it', 'Correct.'],
              ['Threat, because it causes the dealership to lose customers', 'Losing customers is the effect; the cause is internal, so a weakness.'],
              ['Opportunity, because replacing it would attract customers', 'The opportunity would be external; this is an internal problem.'],
              ['Threat, because technology is an external factor', 'The dealership owns this system; it is internal.']],
          k: 'Inside + hurts = weakness.' },
        { id: 'c2l3q2', l: 'c2l3', q: 'A new government incentive makes electric cars cheaper for buyers. For the dealership this is:',
          o: [['An opportunity: external and helpful', 'Correct.'],
              ['A strength: it helps the dealership sell more', 'It is outside the dealership\'s control, so not a strength.'],
              ['A threat: government rules are always threats', 'Rules can help as well as hurt.'],
              ['A weakness: the dealership depends on the government', 'Dependence is not described; the incentive helps.']],
          k: 'Outside + helps = opportunity.' },
        { id: 'c2l3q3', l: 'c2l3', q: 'For PSUT, a new regulation limiting how many IT students can be admitted each year is a:',
          o: [['Threat', 'Correct: external and harmful.'],
              ['Weakness', 'The university does not control the regulation.'],
              ['Opportunity', 'It limits growth, so it hurts.'],
              ['Strength', 'No.']],
          k: 'Outside + hurts = threat.' },
        { id: 'c2l3q4', l: 'c2l3', q: 'A university has no parking because the surrounding area is fully built and owned by others. How should this be classified?',
          o: [['External, because the university has no power to control it', 'Correct: location can be either; here there is no control.'],
              ['Internal, because location is always part of the organization', 'Location "can be internal or external".'],
              ['A strength, because students will use public transport', 'Not an advantage.'],
              ['Not part of SWOT, because parking is not strategic', 'It affects students, so it belongs in SWOT.']],
          k: 'The test is the power to control.' },
        { id: 'c2l3q5', l: 'c2l3', q: 'In Figure 2-5, why is "the patent has a limited life" a weakness rather than a threat?',
          o: [['It is a characteristic of the patent itself, so it is internal', 'Correct.'],
              ['It comes from competitors, so it is an external factor', 'Competitors are the threat in the figure.'],
              ['It can be fixed by licensing the patent to other firms', 'Licensing is the opportunity.'],
              ['Patents are always weaknesses because every patent expires', 'The patent also has strengths.']],
          k: 'Inside the asset → S or W.' },
        { id: 'c2l3q6', l: 'c2l3', q: 'PSUT offers industry-funded scholarships so its high fees stop putting students off. What is this an example of?',
          o: [['Turning a weakness into a strength', 'Correct.'],
              ['Turning a threat into an opportunity', 'Fees are internal, so a weakness, not a threat.'],
              ['Minimizing a strength to reduce costs', 'No.'],
              ['Ignoring an internal factor', 'The opposite: it is being addressed.']],
          k: 'SWOT is a plan, not just a list.' }
      ]
    },
    {
      id: 'c2l4',
      t: 'Strategic Planning for IT Projects and Planning Tools',
      src: 'Ch2 slides 8-9',
      body: `
<p>Careful planning helps assure three things. For each, here is what goes wrong without it.</p>
<div class="tbl"><table><tr><th>Planning assures that...</th><th>Without it (real example)</th></tr>
<tr><td>1. The project supports the overall <b>business strategy</b> and operational needs</td><td>A bank builds a beautiful branch-queue system while its strategy is moving customers to mobile banking.</td></tr>
<tr><td>2. The project <b>scope</b> is well defined and clearly stated</td><td>"Build an HR system" grows to include payroll, recruitment, and training, and never finishes.</td></tr>
<tr><td>3. The project goals are <b>realistic and achievable</b>, and tied to specific statements, assumptions, constraints, factors, and other inputs</td><td>"Launch in one month" with a two-person team and no budget for licenses.</td></tr></table></div>
<div class="trap"><b>Constraints are not removed by planning.</b> Goals are <b>tied to</b> constraints (budget, time, laws). A plan that assumes "no constraints" is not realistic.</div>

<h4>Planning tools</h4>
<div class="tbl"><table><tr><th>Approach</th><th>Example</th><th>Slide's verdict</th></tr>
<tr><td>Traditional text-based</td><td>Microsoft Word</td><td>Used by some analysts</td></tr>
<tr><td>Spreadsheet</td><td>Microsoft Excel</td><td>Preferred by some</td></tr>
<tr><td>CASE tool</td><td>Visible Analyst</td><td><b>The most effective approach</b></td></tr></table></div>
<div class="ex"><b>Why CASE is most effective:</b> it keeps the plan, the models, and the requirements connected in one place. If a requirement changes, the tool shows which models and tasks it affects. In Word or Excel these are separate files that drift apart. Visible Analyst is the same CASE tool shown in Chapter 1, Figure 1-24.</div>`,
      quiz: [
        { id: 'c2l4q1', l: 'c2l4', q: 'According to the slides, which planning approach is the MOST effective?',
          o: [['A CASE tool such as Visible Analyst', 'Correct.'],
              ['A spreadsheet such as Microsoft Excel', 'Some analysts prefer it, but it is not called the most effective.'],
              ['A text-based method such as Microsoft Word', 'The traditional approach.'],
              ['A project management app such as Microsoft Project', 'Not named in this slide.']],
          k: 'Most effective = CASE.' },
        { id: 'c2l4q2', l: 'c2l4', q: 'A bank builds an excellent branch-queue system, but its strategy is to move customers to mobile banking. Which planning assurance failed?',
          o: [['The project supports the overall business strategy', 'Correct.'],
              ['The project scope is well defined and clearly stated', 'The scope may be perfectly clear.'],
              ['The goals are realistic and achievable', 'They may be achievable; they just serve the wrong strategy.'],
              ['The goals are tied to constraints and assumptions', 'Constraints are not the problem here.']],
          k: 'An IT project must serve the strategy.' },
        { id: 'c2l4q3', l: 'c2l4', q: '"Build an HR system" keeps growing to include payroll, recruitment, and training. Which planning assurance is missing?',
          o: [['A well-defined, clearly stated scope', 'Correct.'],
              ['Support for the business strategy', 'HR systems may well support the strategy.'],
              ['Goals tied to specific assumptions', 'The core problem is undefined boundaries.'],
              ['The use of a spreadsheet planning tool', 'A tool does not fix an undefined scope.']],
          k: 'Undefined scope → endless growth.' },
        { id: 'c2l4q4', l: 'c2l4', q: 'Careful planning helps assure all of the following EXCEPT:',
          o: [['The project will face no constraints', 'Correct: goals are tied to constraints; planning does not remove them.'],
              ['The project supports the business strategy', 'Listed.'],
              ['The project scope is well defined', 'Listed.'],
              ['The project goals are realistic and achievable', 'Listed.']],
          k: 'Planning acknowledges constraints.' }
      ]
    },
    {
      id: 'c2l5',
      t: 'What Is a Business Case?',
      src: 'Ch2 slides 10-12 · Lecture 7 notes',
      body: `
<p>A <b>business case</b> is the reasons, or justification, for a proposal. It should be <b>comprehensive yet easy to understand</b>, describe the project clearly, justify going ahead, and estimate the <b>financial impact</b>.</p>
<p>In real life (your notes): <b>describe the problem → then the solution → then how much it will cost and how long it will take</b>. The lecturer's example was Greater Amman Municipality.</p>

<h4>The questions a business case must answer</h4>
<div class="tbl"><table><tr><th>Question</th><th>Why it matters (example: an online building-permit system for the municipality)</th></tr>
<tr><td>Why are we doing this project?</td><td>Citizens wait 3 weeks and visit 4 offices for a permit</td></tr>
<tr><td>What is the project about?</td><td>An online portal to apply, upload plans, and track status</td></tr>
<tr><td>How does it address key business issues?</td><td>Cuts waiting time and office crowding</td></tr>
<tr><td>How much will it cost? How long will it take?</td><td>About 49K JOD, 4 months</td></tr>
<tr><td>Will we suffer a productivity loss during the transition?</td><td>Staff need training; the first month may be slower</td></tr>
<tr><td>What is the ROI and payback period?</td><td>Links to Chapter 3's financial tools</td></tr>
<tr><td>Risks of doing it? Risks of <b>not</b> doing it?</td><td>Doing: delays, low adoption. Not doing: complaints keep rising, other cities look better</td></tr>
<tr><td>How will we measure success? What alternatives exist?</td><td>Average permit time below 5 days; alternative: extend office hours</td></tr></table></div>

<h4>The project triangle (your notes)</h4>
<p><b>Scope</b> at the top, <b>time</b> and <b>resources</b> at the base, <b>quality</b> in the middle. <b>Cost = time + resources</b>. Changing one side changes the others: add scope and you need more time or more resources. Phases come from the scope.</p>
<p><b>Risks</b> are known or unknown. Recommended skill: <b>negotiation</b> (between scope, time, and money).</p>

<h4>The lecture's numeric example</h4>
<div class="tbl"><table><tr><th>Item</th><th>Value</th></tr>
<tr><td>In-kind contribution: 4 FTE × 4 months (internal staff time)</td><td>24K</td></tr>
<tr><td>Cash costs</td><td>10,000 JOD + 15,000 JOD</td></tr>
<tr><td><b>Total investment</b></td><td><b>49K JOD</b></td></tr>
<tr><td>Annual benefit (savings minus maintenance)</td><td>17K</td></tr>
<tr><td>Return 17 / 49, over 8 years</td><td>≈ <b>35% per year</b> → "a good business"</td></tr></table></div>
<div class="trap"><b>FTE</b> = full-time equivalent. An <b>in-kind contribution</b> is not cash, but staff time has a real value and must be counted. Leaving out the 24K would make the return look like 68% instead of 35%.</div>`,
      quiz: [
        { id: 'c2l5q1', l: 'c2l5', q: 'Four internal employees (FTE) spend 4 months on the project, paid from existing salaries. How is their time treated in the business case?',
          o: [['As an in-kind contribution with a monetary value, included in the investment', 'Correct: 24K in the lecture example.'],
              ['Ignored, because no new cash is paid out for their salaries', 'Leaving it out understates the investment.'],
              ['Counted as a benefit, because the staff gain valuable project experience', 'Their time is a cost, not a benefit.'],
              ['Counted as maintenance, because internal staff will maintain the system', 'Maintenance is a separate yearly cost.']],
          k: 'In-kind = a real cost, even without cash.' },
        { id: 'c2l5q2', l: 'c2l5', q: 'In the project triangle, how is cost described?',
          o: [['Cost = time + resources', 'Correct.'],
              ['Cost = scope + quality', 'Scope and quality are the other parts of the triangle.'],
              ['Cost = resources − benefits', 'Benefits are not part of the triangle.'],
              ['Cost = scope × time', 'No.']],
          k: 'Scope · time · resources, quality in the middle.' },
        { id: 'c2l5q3', l: 'c2l5', q: 'The client asks to add three new features but keep the same deadline. According to the triangle, what must happen?',
          o: [['More resources (and therefore more cost), or the quality will suffer', 'Correct: more scope with fixed time needs more resources.'],
              ['Nothing, because scope and time are independent', 'Changing one side affects the others.'],
              ['The deadline must move earlier to make room for the features', 'More scope needs more time, not less.'],
              ['The cost will fall because the features reuse existing work', 'Adding scope does not reduce cost.']],
          k: 'Change one side, the others move.' },
        { id: 'c2l5q4', l: 'c2l5', q: 'Which business case question considers the option of doing nothing?',
          o: [['What are the risks of NOT doing the project?', 'Correct.'],
              ['What alternatives exist to this project?', 'Alternatives are other solutions; this asks about doing nothing.'],
              ['Will we suffer a productivity loss during the transition?', 'That is about doing the project.'],
              ['How will we measure success?', 'That assumes the project goes ahead.']],
          k: 'Not acting has risks too.' },
        { id: 'c2l5q5', l: 'c2l5', q: 'In the lecture example, the total investment is 49K and the annual benefit is 17K over 8 years. What is the conclusion and why?',
          o: [['A good business: about 35% return per year, recovered in about 3 years of an 8-year life', 'Correct: 17/49 ≈ 35%; 49/17 ≈ 2.9 years.'],
              ['A bad business: one year of benefit (17K) is less than the investment (49K)', 'You must compare across the whole life, not one year.'],
              ['A good business: the return is 288%, because 49 ÷ 17 = 2.88 times the benefit', 'Divided the wrong way round.'],
              ['Undecidable: a business case cannot conclude anything without first computing NPV', 'The rate of return already supports a decision here.']],
          k: 'Return = yearly benefit ÷ investment.' }
      ]
    },
    {
      id: 'c2l6',
      t: 'Reasons for Systems Requests and Factors That Affect Projects',
      src: 'Ch2 slides 13-15 (Figure 2-10)',
      body: `
<h4>Main reasons for systems requests</h4>
<div class="tbl"><table><tr><th>Reason</th><th>Meaning</th><th>Real example</th></tr>
<tr><td><b>Improved service</b></td><td>Better service to customers or to users inside the company</td><td>A bank lets customers open an account from the app instead of visiting a branch</td></tr>
<tr><td><b>Support for new products and services</b></td><td>A new product needs new types or levels of IT support</td><td>A telecom company launches home fiber and needs an installation-booking system</td></tr>
<tr><td><b>Better performance</b></td><td>The current system cannot meet performance requirements</td><td>The registration website crashes on the first day every semester</td></tr></table></div>
<div class="trap"><b>Telling them apart:</b> something <b>new</b> being launched → new products. The <b>current</b> system is too slow or crashes → better performance. Same system, but a <b>nicer or easier</b> experience → improved service.</div>

<h4>Factors that affect systems projects (Figure 2-10)</h4>
<div class="two"><div class="card"><h5>Internal</h5><ul><li><b>Strategic plan</b>: sets the direction projects must follow</li><li><b>Top managers</b>: can push or stop projects</li><li><b>User requests</b>: where many projects start</li><li><b>IT department</b>: its skills and capacity</li><li><b>Existing systems and data</b>: what the new system must work with</li></ul></div><div class="card"><h5>External</h5><ul><li><b>Technology</b>: new possibilities (cloud, AI)</li><li><b>Suppliers</b>: e.g. electronic ordering with suppliers</li><li><b>Customers</b>: their expectations</li><li><b>Competitors</b>: forcing a response</li><li><b>The economy</b>: booms and recessions</li><li><b>Government</b>: laws and regulations</li></ul></div></div>
<div class="trap"><b>Classic traps:</b> customers and suppliers are <b>external</b> even though you deal with them daily. "Technology" is external, but the "IT department" is internal. Existing systems and data are internal.</div>`,
      quiz: [
        { id: 'c2l6q1', l: 'c2l6', q: 'Which is an EXTERNAL factor affecting systems projects?',
          o: [['Suppliers', 'Correct.'],
              ['Existing systems and data', 'Internal.'],
              ['The information technology department', 'Internal.'],
              ['User requests', 'Internal.']],
          k: 'External: technology, suppliers, customers, competitors, economy, government.' },
        { id: 'c2l6q2', l: 'c2l6', q: 'The registration website crashes on the first day of every semester. The main reason for a new systems request is:',
          o: [['Better performance', 'Correct: the current system cannot meet performance requirements.'],
              ['Improved service', 'Service will improve, but the direct cause is performance.'],
              ['Support for new products and services', 'Nothing new is being launched.'],
              ['A government regulation', 'That is a factor, not one of the three reasons.']],
          k: 'Current system too slow → better performance.' },
        { id: 'c2l6q3', l: 'c2l6', q: 'A telecom company launches home fiber and needs a new system to book installation appointments. The main reason is:',
          o: [['Support for new products and services', 'Correct.'],
              ['Better performance of systems', 'No existing system is failing.'],
              ['Improved service', 'Related, but the trigger is a new product.'],
              ['Pressure from competitors', 'That is an external factor, not a request reason.']],
          k: 'New product → new support.' },
        { id: 'c2l6q4', l: 'c2l6', q: 'A bank lets customers open accounts from the app instead of visiting a branch. The existing systems work fine. The main reason is:',
          o: [['Improved service', 'Correct.'],
              ['Better performance', 'Nothing is too slow or failing.'],
              ['Support for new products and services', 'Accounts are not a new product.'],
              ['Existing systems and data', 'That is a factor, not a reason.']],
          k: 'Same service, easier → improved service.' },
        { id: 'c2l6q5', l: 'c2l6', q: 'Which pair contains one internal and one external factor?',
          o: [['Top managers and the economy', 'Correct.'],
              ['Customers and competitors', 'Both external.'],
              ['The strategic plan and user requests', 'Both internal.'],
              ['Technology and government', 'Both external.']],
          k: 'Know which side each factor sits on.' }
      ]
    },
    {
      id: 'c2l7',
      t: 'Systems Requests, Review Committee, ITIL and the Change Flow',
      src: 'Ch2 slides 16-18 (Figure 2-13) · Lecture 5 and 8 notes',
      body: `
<h4>Systems request forms</h4>
<p>They <b>streamline</b> the process, ensure <b>consistency</b>, are easy to understand, include clear instructions, indicate which supporting documents are needed, and are submitted <b>electronically</b>.</p>
<div class="note"><b>Figure 2-13 (the form):</b> <b>Request for:</b> correction of system issue / system enhancement / new system. <b>Urgency:</b> immediate attention / normal priority sequence / defer until new system is developed. The IT section: approved, modified, rejected; assigned contact; urgency code 1-5.</div>
<div class="ex"><b>Real example:</b> "The fee report shows the wrong total" → correction, immediate attention. "Add a column for scholarship type" → enhancement, normal priority. "Add online exams to the old system" when a new system is coming next year → defer.</div>

<h4>Systems review committee</h4>
<div class="two"><div class="card"><h5>Advantages</h5><ul><li>Broader viewpoint: sets priorities better than one person</li><li>One person's <b>bias</b> is less likely to affect decisions</li></ul></div><div class="card"><h5>Disadvantages</h5><ul><li>Action must <b>wait until the committee meets</b></li><li>Members might <b>favor their own departments</b></li><li>Internal <b>political differences</b> could delay decisions</li></ul></div></div>
<div class="note"><b>From your notes (lecture 8):</b> the committee reviews initiatives. <b>Politics</b>: discussions drag on, and politics can force or block a project for reasons that are not logical.</div>

<h4>Service request vs request for service (RFS)</h4>
<div class="tbl"><table><tr><th></th><th>Service request</th><th>Request for service (RFS)</th></tr>
<tr><td>Example</td><td>Reset my password</td><td>A new report with statistics on GPA</td></tr>
<tr><td>Nature</td><td>For something that <b>already exists</b></td><td>Something <b>new</b></td></tr>
<tr><td>Who is affected</td><td>An <b>individual</b></td><td>A <b>group of people</b></td></tr>
<tr><td>Duration</td><td><b>Hours</b></td><td><b>Weeks / months / years</b></td></tr></table></div>

<h4>ITIL, ITSM, and the change flow</h4>
<p><b>ITIL</b> (Information Technology Infrastructure Library): a framework, with a certificate, to better manage IT. <b>ITSM</b>: IT Service Management (certification). Changes go through bodies such as the <b>CAB</b> (Change Advisory Board) and <b>PRB</b>.</p>
<figure class="dg"><div class="flow wrap"><div class="bx">1. Request</div><div class="ar">→</div><div class="bx hi">2. Change manager<br><small>cancel · send back · on hold · prioritize · history</small></div><div class="ar">→</div><div class="bx">3. Top manager approves</div><div class="ar">→</div><div class="bx">4. Change</div></div><figcaption>From your notes: "the understanding is right, but it doesn't always work like this"</figcaption></figure>`,
      quiz: [
        { id: 'c2l7q1', l: 'c2l7', q: 'A student asks IT to reset a forgotten password; the registrar asks for a new GPA-statistics report for all departments. Which classification is correct?',
          o: [['The first is a service request; the second is a request for service', 'Correct: existing/individual/hours vs new/group/weeks.'],
              ['The first is a request for service; the second is a service request', 'Reversed.'],
              ['Both are service requests, because both are handled by IT', 'The report is new and affects a group.'],
              ['Both are requests for service, because both need approval', 'A password reset needs no committee approval.']],
          k: 'Existing + individual + hours = service request.' },
        { id: 'c2l7q2', l: 'c2l7', q: 'The IT manager approves only projects from the finance department he used to lead. Which advantage of a systems review committee addresses this?',
          o: [['One person\'s bias is less likely to affect the decisions', 'Correct.'],
              ['Requests are acted on faster than by one person', 'Committees are slower: that is a disadvantage.'],
              ['Members can favor projects from their own departments', 'That is a disadvantage.'],
              ['Political differences between departments disappear', 'Politics can actually delay committees.']],
          k: 'A committee reduces individual bias.' },
        { id: 'c2l7q3', l: 'c2l7', q: 'An urgent fix waits two weeks because the committee meets only twice a month. Which disadvantage is this?',
          o: [['Action on requests must wait until the committee meets', 'Correct.'],
              ['Members might favor projects from their own departments', 'Favoritism is not described.'],
              ['Internal political differences could delay decisions', 'The delay comes from the meeting schedule, not politics.'],
              ['One person\'s bias affects the decision', 'That is what a committee prevents.']],
          k: 'Three disadvantages: waiting, favoritism, politics.' },
        { id: 'c2l7q4', l: 'c2l7', q: 'A request to add online exams to the old student system arrives, but a new system will replace it next year. Which urgency option fits on the form?',
          o: [['Defer until new system is developed', 'Correct.'],
              ['Handle in normal priority sequence', 'That would waste effort on a system about to be replaced.'],
              ['Immediate attention required', 'Nothing is urgent here.'],
              ['System enhancement', 'That is a "request for" type, not an urgency option.']],
          k: '"Request for" (type) ≠ urgency.' },
        { id: 'c2l7q5', l: 'c2l7', q: 'In the change flow from your notes, who may cancel, send back, put on hold, or prioritize a request before top management approves it?',
          o: [['The change manager', 'Correct.'],
              ['The person who submitted the request', 'They submit; they do not prioritize.'],
              ['The top manager', 'The top manager approves after the change manager.'],
              ['The developer assigned to the change', 'Developers implement approved changes.']],
          k: 'Request → change manager → top manager → change.' },
        { id: 'c2l7q6', l: 'c2l7', q: 'What does ITIL stand for, and what is it?',
          o: [['Information Technology Infrastructure Library: a framework to better manage IT', 'Correct.'],
              ['Information Technology Investment Ledger: a method for budgeting IT projects', 'Not the right expansion.'],
              ['Integrated Technology for Internal Logistics: a supply-chain system', 'Not the right expansion.'],
              ['IT Service Management: a certificate for systems analysts', 'That is ITSM, a related but different term.']],
          k: 'ITIL = framework; ITSM = service management.' }
      ]
    },
    {
      id: 'c2l8',
      t: 'Feasibility: Operational and Technical',
      src: 'Ch2 slides 19-24 (Figure 2-14) · Lecture 8 notes',
      body: `
<p>A <b>feasibility study</b> checks a request from four directions; the lecturer added a fifth question: <b>necessity</b> (is it needed at all?).</p>
<figure class="dg"><div class="feas"><span class="n">Operational</span><span class="e">Technical</span><span class="c">Feasible?</span><span class="w">Economic</span><span class="s">Schedule</span></div><figcaption>Figure 2-14 + your notes</figcaption></figure>
<div class="trap"><b>One question to sort them:</b> operational = <b>will people accept and use it?</b> · technical = <b>can we build and run it?</b> · economic = <b>do benefits justify costs?</b> · schedule = <b>can it be done in time?</b></div>

<h4>Operational feasibility: will the system be used properly?</h4>
<div class="tbl"><table><tr><th>Question (slides 21-22)</th><th>Real example: a new hospital records system</th></tr>
<tr><td>Does management support it? Do users? Do they see the need for change? Is the current system well liked?</td><td>Senior doctors like the paper files and resist</td></tr>
<tr><td>Will it reduce the workforce? What happens to affected employees?</td><td>Three filing clerks' jobs disappear</td></tr>
<tr><td>Will it require training? Is the company prepared to provide it?</td><td>400 nurses must be trained on shifts</td></tr>
<tr><td>Will users be involved from the start?</td><td>Nurses help design the screens</td></tr>
<tr><td>New demands on users, less accessible information, performance decline?</td><td>Doctors must type notes they used to dictate</td></tr>
<tr><td>Adverse effects on customers, risk to image or goodwill?</td><td>Patients wait longer during the switch</td></tr>
<tr><td>Conflict with other company priorities?</td><td>It clashes with the hospital's accreditation audit</td></tr>
<tr><td>Legal or ethical issues?</td><td>Patient privacy rules</td></tr></table></div>
<div class="note"><b>From your notes (lecture 15):</b> questions about <b>employees</b> → operational; about <b>team members</b> (the builders' skills) → technical.</div>

<h4>Technical feasibility: can we build and run it?</h4>
<div class="tbl"><table><tr><th>Question (slides 23-24)</th><th>Same example</th></tr>
<tr><td>Necessary hardware, software, network? If not, can they be acquired?</td><td>Tablets for every ward, secure Wi-Fi</td></tr>
<tr><td>Needed technical expertise? If not, can it be acquired?</td><td>Nobody in IT knows HL7 medical data standards</td></tr>
<tr><td>Capacity for future needs? Can it be expanded?</td><td>Will storage hold 10 years of scans?</td></tr>
<tr><td>Prototype required? Reliable environment?</td><td>Must work 24/7 in the ICU</td></tr>
<tr><td>Integrate with other company systems? Interface with customers' and suppliers' systems?</td><td>Link to the lab system and insurance companies</td></tr>
<tr><td>Adequate performance? Clear expectations and specifications? Future transaction volume and growth?</td><td>5,000 record updates per hour at peak</td></tr></table></div>
<div class="trap"><b>Training</b> appears under operational ("will users need training?"). The <b>cost</b> of training appears under economic. If a question asks about preparing employees to use the system, answer operational.</div>`,
      quiz: [
        { id: 'c2l8q1', l: 'c2l8', q: '"Will the new system result in a workforce reduction, and what will happen to the affected employees?" This belongs to:',
          o: [['Operational feasibility', 'Correct: the system\'s effect on people.'],
              ['Economic feasibility, because fewer employees means lower salary costs', 'The salary saving would be economic, but this question is about the people affected.'],
              ['Technical feasibility, because automation replaces manual work', 'Not about the ability to build it.'],
              ['Schedule feasibility, because layoffs take time to arrange', 'Not about the project timeline.']],
          k: 'People and acceptance → operational.' },
        { id: 'c2l8q2', l: 'c2l8', q: 'In terms of feasibility, training employees to use the new technology is considered:',
          o: [['Operational feasibility', 'Correct: slide 21 asks "Will the new system require training for users?"'],
              ['Technical feasibility, because the training is about technology', 'Technical asks whether the company can build and run the system.'],
              ['Schedule feasibility, because training takes time before launch', 'Timing is not what the question asks.'],
              ['Economic feasibility, because training has a cost', 'The training cost is economic, but preparing users to use the system is operational.']],
          k: 'This is mock exam Question 3.' },
        { id: 'c2l8q3', l: 'c2l8', q: '"Will the system handle 5,000 record updates per hour at peak, and more as the hospital grows?" This belongs to:',
          o: [['Technical feasibility', 'Correct: capacity, performance, and future transaction volume.'],
              ['Operational feasibility', 'Not about whether people accept or use it.'],
              ['Economic feasibility', 'Not about costs and benefits.'],
              ['Schedule feasibility', 'Not about time to deliver.']],
          k: 'Capacity and performance → technical.' },
        { id: 'c2l8q4', l: 'c2l8', q: 'Nobody in the IT department knows the medical data standard the new system requires. Which feasibility question is raised?',
          o: [['Technical: does the company have the needed expertise, or can it acquire it?', 'Correct.'],
              ['Operational: will the users accept the new standard in their work?', 'The issue is the builders\' skills, not the users\' acceptance.'],
              ['Economic: how much will it cost to hire outside experts in the standard?', 'Cost may follow, but the question raised is expertise.'],
              ['Schedule: will learning the new standard delay the system\'s launch?', 'Delay may follow, but the question raised is expertise.']],
          k: 'Team skills → technical.' },
        { id: 'c2l8q5', l: 'c2l8', q: 'A system would work technically, but it would store patient data in a way that may break privacy law. In the slides, this concern is listed under:',
          o: [['Operational feasibility (legal or ethical issues)', 'Correct: slide 22.'],
              ['Technical feasibility, because it is about how data is stored', 'The system can be built; the concern is legal.'],
              ['Economic feasibility, because fines would cost money', 'The slide lists legal and ethical issues under operational.'],
              ['It is not a feasibility issue at all', 'It clearly is.']],
          k: 'Legal and ethical → operational.' },
        { id: 'c2l8q6', l: 'c2l8', q: 'The new system must exchange data with insurance companies\' systems. Which feasibility type covers this?',
          o: [['Technical: will it interface properly with external systems?', 'Correct.'],
              ['Operational: will insurance companies accept the new process?', 'The question is about systems talking to each other.'],
              ['Economic: will insurance payments cover the system\'s cost?', 'Not about costs.'],
              ['Schedule: will the insurance companies be ready in time?', 'Not about timing.']],
          k: 'Integration and interfaces → technical.' }
      ]
    },
    {
      id: 'c2l9',
      t: 'Feasibility: Economic and Schedule',
      src: 'Ch2 slides 25-27 · annotated slide · Lecture 8 notes',
      body: `
<h4>Economic feasibility: do the benefits justify the costs?</h4>
<p>The costs to estimate (slide 25), with a real example for a new e-commerce system:</p>
<div class="tbl"><table><tr><th>Cost</th><th>Example</th></tr>
<tr><td>People (IT staff and users)</td><td>Developers' salaries; staff time spent testing</td></tr>
<tr><td>Hardware and equipment</td><td>Servers, barcode printers</td></tr>
<tr><td>Software: in-house development and purchases</td><td>Building the shop; buying a payment module</td></tr>
<tr><td>Formal and informal training, incl. <b>peer-to-peer support</b></td><td>Courses; colleagues helping each other in the first weeks</td></tr>
<tr><td>Licenses and fees</td><td>Yearly cloud and software licenses</td></tr>
<tr><td>Consulting expenses</td><td>An outside security audit</td></tr>
<tr><td>Facility costs</td><td>A new server room, air conditioning</td></tr>
<tr><td><b>The cost of NOT developing the system, or of postponing it</b></td><td>Sales lost to competitors who already sell online</td></tr></table></div>

<h4>Tangible vs intangible benefits</h4>
<div class="two"><div class="card"><h5>Tangible: measurable in money</h5><ul><li>A scheduling system that <b>reduces overtime</b></li><li>Package tracking that improves service and <b>decreases the need for clerical staff</b></li><li>Inventory control that <b>cuts excess inventory</b> and eliminates production delays</li></ul></div><div class="card"><h5>Intangible: hard to measure in money</h5><ul><li>A user-friendly system that improves <b>employee job satisfaction</b></li><li>A sales system that supplies <b>better information for marketing decisions</b></li><li>A new website that <b>enhances the company's image</b></li></ul></div></div>
<div class="trap"><b>Test:</b> can you write it as "saves X JOD a month"? Then it is tangible. "Better information" sounds valuable, but the slide classifies it as intangible: its money value is hard to pin down.</div>

<h4>Schedule feasibility: can it be done in time?</h4>
<ul><li>Can the company or IT team <b>control the factors</b> that affect the schedule?</li><li>Has management set a <b>firm timetable</b>?</li><li>What conditions must be satisfied during development?</li><li>Will an <b>accelerated schedule</b> pose risks? If so, are they acceptable?</li><li>Will project management techniques be available to coordinate and control?</li><li><b>Will a project manager be appointed?</b></li></ul>
<div class="ex"><b>Real example:</b> a store wants its online shop live before the "Back to School" season. The deadline is set by the market, not by the team, so timing is the main feasibility question. This is the lecturer's mock exam Question 5.</div>
<div class="trap"><b>Project manager:</b> the slide and your notes (lecture 8) put "Will a project manager be appointed?" under <b>schedule</b>. The lecturer also wrote "→ Technical" and "Skills → Technical" beside it: the PM's <b>skills</b> are a technical question. Appointing a PM in time = schedule.</div>
<div class="note"><b>From your notes (lecture 8):</b> "20K cost &gt; 5K benefits → don't do it" (for discretionary projects).</div>`,
      quiz: [
        { id: 'c2l9q1', l: 'c2l9', q: 'A new website is expected to "enhance the company\'s image". This benefit is:',
          o: [['Intangible: valuable, but hard to measure in money', 'Correct, an example from the slide.'],
              ['Tangible: it will attract customers who spend money', 'Possibly, but the benefit as stated cannot be measured in money.'],
              ['A cost: the website has to be paid for', 'The question is about the benefit.'],
              ['A schedule factor: the website must launch on time', 'Not about time.']],
          k: 'Image, satisfaction, better information → intangible.' },
        { id: 'c2l9q2', l: 'c2l9', q: 'A package-tracking system "decreases the need for clerical staff". Why is this a TANGIBLE benefit?',
          o: [['Fewer clerks means a salary saving that can be measured in money', 'Correct.'],
              ['Because the remaining staff will be more satisfied with their work', 'That would be intangible.'],
              ['Because customers will see a better company image', 'That would be intangible.'],
              ['Because it happens immediately after the system launches', 'Timing does not decide tangibility.']],
          k: 'Measurable in money → tangible.' },
        { id: 'c2l9q3', l: 'c2l9', q: 'A sales-tracking system "supplies better information for marketing decisions". According to the slides, this benefit is:',
          o: [['Intangible', 'Correct: the slide lists it as intangible.'],
              ['Tangible, because better decisions increase sales', 'Its money value is hard to pin down, so the slide calls it intangible.'],
              ['A technical feasibility factor', 'It is a benefit.'],
              ['Not a benefit, because information is not money', 'It is a benefit; just intangible.']],
          k: '"Better information" is intangible.' },
        { id: 'c2l9q4', l: 'c2l9', q: 'Which item is an economic feasibility cost that is easy to forget?',
          o: [['The estimated cost of not developing the system or postponing it', 'Correct, listed on slide 25.'],
              ['The improvement in the company\'s image after the launch', 'That is an intangible benefit.'],
              ['Whether users support the project and see the need for it', 'Operational.'],
              ['Whether management has set a firm timetable for the project', 'Schedule.']],
          k: 'Doing nothing has a cost too.' },
        { id: 'c2l9q5', l: 'c2l9', q: 'A company must launch its new e-commerce platform before the "Back to School" season. The evaluation is mainly a question of:',
          o: [['Schedule feasibility', 'Correct: a fixed external deadline.'],
              ['Economic feasibility, because the season brings most of the revenue', 'Revenue matters, but the defining constraint is the deadline.'],
              ['Technical feasibility, because e-commerce platforms are complex', 'Nothing about capability is stated.'],
              ['Operational feasibility, because shoppers must accept the platform', 'Nothing about acceptance is stated.']],
          k: 'This is mock exam Question 5.' },
        { id: 'c2l9q6', l: 'c2l9', q: 'Colleagues spend time helping each other learn a new system in its first month. In economic feasibility, this is:',
          o: [['A training cost: informal, peer-to-peer support', 'Correct.'],
              ['A tangible benefit, because staff learn new skills', 'It costs staff time.'],
              ['Not a cost, because no money is paid', 'Staff time has a value.'],
              ['A consulting expense', 'Consulting means paying outside experts.']],
          k: 'Training includes peer-to-peer support.' }
      ]
    },
    {
      id: 'c2l10',
      t: 'Evaluating Feasibility, Status, and Setting Priorities',
      src: 'Ch2 slides 28-30 · annotated slide · Lecture 8 notes',
      body: `
<h4>Evaluating feasibility</h4>
<ul><li>Identify and <b>weed out</b> requests that are not feasible.</li><li>Even if feasible, a request <b>might not be necessary</b>.</li><li>Not feasible <b>now</b> → can be <b>resubmitted</b> when new hardware, software, or expertise becomes available.</li></ul>
<figure class="dg"><div class="tl"><span>Submitted</span><span>Approved</span><span>Rejected</span><span>On hold</span><span>Resubmitted</span><span>Cancelled</span></div><figcaption>Well-known request statuses</figcaption></figure>
<div class="trap"><b>Rejected vs cancelled:</b> rejected = turned down <b>before</b> work started ("we didn't start it"). Cancelled = stopped <b>after</b> it had started. On hold = paused, may continue.</div>

<h4>Factors that affect priority</h4>
<p><b>Ask:</b> Will it reduce costs? (where, when, how, how much) · Will it increase revenue? (where, when, how, how much) · Will it produce more information or better results, and are they measurable? · Will it serve customers better? · Will it serve the organization better? · Can it be implemented in a reasonable time, and how long will the results last? · Are the financial, human, and technical resources available?</p>

<h4>Discretionary vs nondiscretionary</h4>
<div class="two"><div class="card"><h5>Discretionary</h5><p>Management <b>has a choice</b>. Example: a new report a manager would like. Judge it by costs and benefits: "20K cost &gt; 5K benefit → don't do it".</p></div><div class="card"><h5>Nondiscretionary</h5><p>Management <b>must</b> do it. Example: a report required by law. Mostly <b>predictable</b>: annual payroll updates, tax percentages, quarterly changes. Your notes: operational, competitive, legal, sacred cow, "you have to do it, <b>don't calculate benefits</b>".</p></div></div>
<div class="ex"><b>Real example:</b> the government raises sales tax from 16% to 17% on 1 January. The billing system must change: nondiscretionary. A manager wants a nicer dashboard: discretionary.</div>

<h4>MoSCoW: priority for requirements (from your notes)</h4>
<div class="tbl"><table><tr><th>Letter</th><th>Meaning</th><th>Example: a student portal</th></tr>
<tr><td><b>M</b>ust</td><td>The basics; non-discretionary; take responsibility</td><td>Log in, see grades, register courses</td></tr>
<tr><td><b>S</b>hould</td><td>Important but not critical</td><td>Notifications when grades are posted</td></tr>
<tr><td><b>C</b>ould</td><td>If time allows</td><td>Export the timetable to Google Calendar</td></tr>
<tr><td><b>W</b>on't (would)</td><td>Nice to have, cosmetic; later</td><td>Dark mode, custom themes (like a car's screen theme)</td></tr></table></div>`,
      quiz: [
        { id: 'c2l10q1', l: 'c2l10', q: 'A new tax law requires changes to the payroll system by January. How should management handle it?',
          o: [['Implement it as nondiscretionary, without needing a cost-benefit justification', 'Correct.'],
              ['Implement it only if the expected benefits are greater than its costs', 'That is how discretionary projects are judged.'],
              ['Put it on hold until the next budget year, when funds are available', 'The law has a deadline.'],
              ['Treat it as a "could have" requirement and schedule it if time allows', 'It is a must.']],
          k: 'Legal → nondiscretionary → must.' },
        { id: 'c2l10q2', l: 'c2l10', q: 'A request was evaluated and turned down before any work began. Its status is:',
          o: [['Rejected', 'Correct.'],
              ['Cancelled', 'Cancelled applies after work has started.'],
              ['On hold', 'On hold is a pause, not a refusal.'],
              ['Resubmitted', 'That happens when it is submitted again.']],
          k: 'Rejected before starting; cancelled after.' },
        { id: 'c2l10q3', l: 'c2l10', q: 'A project was approved, ran for two months, then was stopped because of a merger. Its status is:',
          o: [['Cancelled', 'Correct: stopped after it started.'],
              ['Rejected', 'Rejected means it never started.'],
              ['On hold', 'On hold expects it to continue.'],
              ['Submitted', 'It passed that stage long ago.']],
          k: 'Rejected vs cancelled.' },
        { id: 'c2l10q4', l: 'c2l10', q: 'A request is technically impossible today, but the needed technology will be available next year. What should happen?',
          o: [['It can be resubmitted when the new technology becomes available', 'Correct.'],
              ['It must be cancelled permanently because it failed feasibility', 'The slide allows resubmission.'],
              ['It should be approved now so it is ready when the technology arrives', 'It is not feasible yet.'],
              ['It becomes nondiscretionary because it was delayed', 'Delay does not change its nature.']],
          k: 'Not feasible now ≠ never.' },
        { id: 'c2l10q5', l: 'c2l10', q: 'A discretionary project costs 20K and brings 5K in benefits. What is the decision?',
          o: [['Don\'t do it: costs are greater than benefits', 'Correct.'],
              ['Do it: all approved requests must be implemented', 'Discretionary means there is a choice.'],
              ['Do it as a "must have" requirement', 'Nothing makes it essential.'],
              ['Treat it as nondiscretionary to avoid the calculation', 'Its nature does not change.']],
          k: 'Discretionary → compare cost and benefit.' },
        { id: 'c2l10q6', l: 'c2l10', q: 'In a student portal, "export the timetable to Google Calendar if time allows" is which MoSCoW category?',
          o: [['Could have', 'Correct: done if time allows.'],
              ['Must have', 'The portal works without it.'],
              ['Should have', 'Should is important; this is optional.'],
              ['Won\'t have', 'Won\'t is cosmetic and postponed; this one is planned if time allows.']],
          k: 'Must · Should · Could · Won\'t.' }
      ]
    },
    {
      id: 'c2l11',
      t: 'Preliminary Investigation: Overview and Step 1',
      src: 'Ch2 slides 31-34 (Figures 2-15, 2-16, 2-17) · Lecture 9 notes',
      body: `
<p>The analyst runs a <b>preliminary investigation</b> to study the request and recommend action. After authorization, the analyst works with managers, users, and other stakeholders.</p>
<ul><li>Before starting, tell people about the investigation and explain the analyst's role.</li><li>Meet key managers, users, and IT staff: describe the project, explain responsibilities, answer questions, invite comments.</li><li><b>Focus on new features, improvements, and enhancements, NOT problems.</b> Users who feel blamed become defensive; users who hear "let's make your work easier" cooperate.</li></ul>
<figure class="dg"><div class="two"><div class="ff"><span>Problem or opportunity</span><span>Benefits</span><b>Fact-finding</b><span>Project scope and constraints</span><span>Costs</span><em>→ Report to management</em></div>
<ol class="steps"><li>Understand the problem or opportunity</li><li>Define the project scope and constraints</li><li>Perform fact-finding</li><li>Study usability, cost, benefit, and schedule data</li><li>Evaluate feasibility</li><li>Present recommendations to management</li></ol></div>
<figcaption>Figure 2-15 (fact-finding at the center of <b>four areas</b>) · Figure 2-16 (<b>six</b> main steps)</figcaption></figure>

<h4>Step 1: understand the problem or opportunity</h4>
<p><b>Business profile:</b> an overview of the company. It covers:</p>
<p>Mission · Functions · Products and services · Suppliers · Competitors · Customers · Constraints · Future direction</p>
<p><b>Business process</b>: a set of <b>transactions, events, and results</b> that can be described and documented. Your notes (lecture 9):</p>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th><th>Example: buying from a vending machine</th></tr>
<tr><td>Process</td><td>Has an <b>end goal</b></td><td>"Sell a snack to a customer"</td></tr>
<tr><td>Transaction</td><td>A single exchange; <b>has no end goal on its own</b>, and <b>triggers other transactions</b></td><td>Inserting a credit card → triggers a payment request → triggers dispensing</td></tr>
<tr><td>Event</td><td>Something that happens and starts or marks a step</td><td>The customer presses a button</td></tr>
<tr><td>Result</td><td>The outcome</td><td>The snack drops; a receipt is stored</td></tr></table></div>
<p>Also: understand how changes affect operations and other systems, and determine which departments, users, and processes are involved.</p>

<h4>The fishbone diagram</h4>
<p>Shows the <b>possible causes</b> of a problem as a graphical outline. Your notes: a technique to reach the <b>root problem</b> by asking <b>why, why, why</b>.</p>
<figure class="dg"><div class="fish"><div class="bone top"><b>Environment</b><span>Temperature too hot or cold</span><span>Faulty thermostat</span></div><div class="bone top"><b>People</b><span>Not enough training</span><span>Managers do not keep them informed</span></div><div class="spine">→ <b>Low morale</b></div><div class="bone"><b>Management</b><span>Not enough time on the shop floor</span><span>Lack of clear direction from the top</span><span>Too many meetings</span></div><div class="bone"><b>Machines</b><span>Need more maintenance</span><span>Many are obsolete</span></div></div><figcaption>Figure 2-17: dig deeper to find actual <b>causes</b>, not just <b>symptoms</b></figcaption></figure>
<div class="ex"><b>Asking "why" repeatedly:</b> morale is low → why? It's too hot → why? The temperature is wrong → why? The thermostat is faulty. Fixing the thermostat fixes a root cause; buying fans only treats a symptom.</div>`,
      quiz: [
        { id: 'c2l11q1', l: 'c2l11', q: 'In Figure 2-17, "faulty thermostat" is a cause under which category?',
          o: [['Environment', 'Correct: it causes the wrong temperature.'],
              ['Machines', 'Machines lists maintenance and obsolete equipment.'],
              ['Management', 'Management lists time on the floor, direction, and meetings.'],
              ['People', 'People lists training and being informed.']],
          k: 'Categories → causes → effect.' },
        { id: 'c2l11q2', l: 'c2l11', q: 'Morale is low. The analyst asks "why?" repeatedly and finds a faulty thermostat. Why is fixing the thermostat better than buying fans?',
          o: [['It fixes a root cause instead of treating a symptom', 'Correct.'],
              ['It is cheaper, and cost is the main goal of fishbone analysis', 'Cost is not what the diagram is for.'],
              ['Fans belong to the Machines category, which is out of scope', 'Categories are not a reason to avoid a fix.'],
              ['The thermostat appears first in the diagram', 'Order in the diagram means nothing.']],
          k: 'Fishbone + "why" = root cause.' },
        { id: 'c2l11q3', l: 'c2l11', q: 'At a vending machine, inserting a credit card triggers a payment request, which triggers dispensing. The card insertion is best described as:',
          o: [['A transaction: it has no end goal on its own and triggers other transactions', 'Correct.'],
              ['A process: it has the end goal of selling a snack to the customer', 'The whole sale is the process; the insertion is one transaction.'],
              ['A result: it is the outcome the customer wanted from the machine', 'The result is the snack and the receipt.'],
              ['A business profile: it describes how the vending company operates', 'A business profile describes the whole company.']],
          k: 'Process = end goal. Transaction = no end goal, triggers others.' },
        { id: 'c2l11q4', l: 'c2l11', q: 'When the analyst first meets users, what should the conversation focus on?',
          o: [['New features, improvements, and enhancements rather than problems', 'Correct.'],
              ['A complete list of every problem in the current system', 'The slide says NOT problems.'],
              ['The technical design the analyst has already chosen', 'Too early.'],
              ['How many jobs the new system is expected to remove', 'That creates fear, not cooperation.']],
          k: 'Positive framing builds cooperation.' },
        { id: 'c2l11q5', l: 'c2l11', q: 'Which is part of a business profile?',
          o: [['The company\'s competitors and future direction', 'Correct.'],
              ['The source code of the current applications', 'Not part of a business profile.'],
              ['The interview schedule for fact-finding', 'That is part of step 3.'],
              ['The final recommendation to management', 'That is step 6.']],
          k: 'A business profile = a picture of the business.' },
        { id: 'c2l11q6', l: 'c2l11', q: 'How many main steps does the preliminary investigation have (Figure 2-16), and how many areas surround fact-finding (Figure 2-15)?',
          o: [['Six steps; four areas', 'Correct.'],
              ['Four steps; six areas', 'Reversed.'],
              ['Six steps; six areas', 'Figure 2-15 has four areas.'],
              ['Five steps; four areas', 'There are six steps.']],
          k: 'Six steps, four areas.' }
      ]
    },
    {
      id: 'c2l12',
      t: 'Steps 2-3: Scope, Constraints, and Fact-Finding',
      src: 'Ch2 slides 35-40 (Figures 2-18, 2-20, 2-21, 2-22) · Lecture 9-10 notes',
      body: `
<h4>Step 2: define the project scope and constraints</h4>
<p>The <b>scope</b> is the boundaries of the project: what is in and what is out (your notes: "project scope → the actual work"). Write it as a list: <b>Must Do, Should Do, Could Do, Won't Do</b>. A clear scope prevents <b>project creep</b>: the project slowly growing beyond its original plan.</p>
<div class="ex"><b>Project creep, real example:</b> a "simple booking page" gains payments, then loyalty points, then a chat feature. Each request seemed small; together they delay launch by months.</div>
<p>A <b>constraint</b> is a requirement or condition the system <b>must satisfy</b>, or an outcome it must achieve. Classify each by three questions:</p>
<div class="tbl"><table><tr><th>Figure 2-18 example</th><th>Timing</th><th>Type</th><th>Urgency</th></tr>
<tr><td>A: New IRS data must be used in the payroll system as soon as possible</td><td>Present</td><td>External</td><td>Mandatory</td></tr>
<tr><td>B: Next year, our largest customer will require a security code for all online transactions</td><td>Future</td><td>External</td><td>Mandatory</td></tr>
<tr><td>C: Management prefers the project be completed now rather than next quarter</td><td>Present</td><td>Internal</td><td>Desirable</td></tr>
<tr><td>D: Starting next week, the marketing system must track all repeat visits to the website</td><td>Present</td><td>Internal</td><td>Mandatory</td></tr>
<tr><td>E: To reduce raw material costs, we should build supply chain management into the next version</td><td>Future</td><td>Internal</td><td>Desirable</td></tr></table></div>
<div class="trap"><b>Keywords:</b> "must / required" → mandatory; "prefers / should" → desirable. Government or customer → external; management or the company → internal. "Next week" counts as present; "next year" as future.</div>

<h4>Step 3: perform fact-finding</h4>
<div class="tbl"><table><tr><th>Technique</th><th>Strength</th><th>Weakness</th><th>Use it when...</th></tr>
<tr><td><b>Interviews</b> (7 steps: determine people → objectives → questions → prepare → conduct → document → evaluate)</td><td>Flexible; follow-up questions</td><td>Slow, expensive per person</td><td>You need depth from a few key people</td></tr>
<tr><td><b>Review documentation</b></td><td>Shows the official process</td><td>Documents may be out of date</td><td>You need to know how it is supposed to work</td></tr>
<tr><td><b>Observe operations</b> (Figure 2-20)</td><td>Shows what people really do; sample inputs and outputs</td><td>Time-consuming; people may act differently when watched</td><td>You suspect practice differs from the documents</td></tr>
<tr><td><b>User survey</b></td><td>Cheaper, faster, reaches a broad cross-section</td><td>Less flexible; <b>no follow-up questions</b></td><td>You need data from many people</td></tr></table></div>
<div class="note"><b>From your notes (lecture 10):</b> surveys include a <b>trick question</b>. If a respondent answers it wrongly, the survey is excluded, because of <b>survey fatigue</b>: bored people answer randomly.</div>

<h4>Analyze the data</h4>
<div class="two"><div class="card"><h5>Pareto chart → discrete data</h5><p>Causes ranked <b>from largest to smallest</b>, so you tackle the biggest first. Figure 2-21 (inventory errors): improper part number → invalid codes → out-of-date codes → address correction needed → exceeds maximum level → inactive supplier. <b>Start with part numbers.</b></p></div>
<div class="card"><h5>XY chart → continuous data</h5><p>Shows <b>correlation</b> between two variables. Figure 2-22: response time vs number of users. Scattered points = <b>no correlation</b> (the variables are independent; look elsewhere for the cause). Points along a rising line = <b>correlation</b>.</p></div></div>`,
      quiz: [
        { id: 'c2l12q1', l: 'c2l12', q: '"Next year, our largest customer will require a security code for all online transactions." Classify this constraint.',
          o: [['Future, external, mandatory', 'Correct (example B).'],
              ['Present, external, mandatory', '"Next year" is future.'],
              ['Future, internal, mandatory', 'The customer is outside the company.'],
              ['Future, external, desirable', '"Will require" is mandatory.']],
          k: 'Timing · type · urgency.' },
        { id: 'c2l12q2', l: 'c2l12', q: '"Management prefers that the project be completed now rather than next quarter." Classify this constraint.',
          o: [['Present, internal, desirable', 'Correct (example C).'],
              ['Present, internal, mandatory', '"Prefers" is desirable.'],
              ['Future, internal, desirable', '"Now" is present.'],
              ['Present, external, desirable', 'Management is internal.']],
          k: '"Prefers" → desirable.' },
        { id: 'c2l12q3', l: 'c2l12', q: 'A "simple booking page" keeps gaining features (payments, loyalty points, chat) until it is months late. Which step was weak, and what is the problem called?',
          o: [['Step 2, defining scope; the problem is project creep', 'Correct.'],
              ['Step 3, fact-finding; the problem is survey fatigue', 'Survey fatigue is about bored survey respondents.'],
              ['Step 5, evaluating feasibility; the problem is a schedule failure', 'The delay is a symptom; the cause is an undefined scope.'],
              ['Step 6, the report; the problem is missing intangible costs', 'Not related.']],
          k: 'Clear scope prevents creep.' },
        { id: 'c2l12q4', l: 'c2l12', q: 'An analyst needs input from 2,000 employees across five branches, quickly and cheaply, and accepts that there will be no follow-up questions. Which technique fits best?',
          o: [['A user survey', 'Correct: broad cross-section, cheaper, faster.'],
              ['Interviews, because they collect the most detailed data', 'Far too slow and costly for 2,000 people.'],
              ['Observing operations, because it shows what people really do', 'You cannot observe 2,000 people quickly.'],
              ['Reviewing documentation, because it covers every branch', 'Documents do not give employees\' input.']],
          k: 'Many people, low cost → survey.' },
        { id: 'c2l12q5', l: 'c2l12', q: 'Why include a trick question in a user survey?',
          o: [['To spot respondents answering carelessly because of survey fatigue, and exclude them', 'Correct.'],
              ['To replace the follow-up questions that a survey cannot ask its respondents', 'Surveys have no follow-ups; the trick question is a quality check.'],
              ['To test whether respondents really understand how the current system works', 'It checks attention, not understanding.'],
              ['To make the survey longer so that respondents take it more seriously', 'Longer surveys increase fatigue.']],
          k: 'Trick question = a quality filter.' },
        { id: 'c2l12q6', l: 'c2l12', q: 'The documents say orders are checked by two people, but the analyst suspects only one person checks them in practice. Which technique best confirms this?',
          o: [['Observing operations', 'Correct: it shows what people actually do.'],
              ['Reviewing documentation', 'The documents show the official version, which is in doubt.'],
              ['A user survey', 'People may report the official version.'],
              ['A Pareto chart', 'That analyzes data; it does not collect it.']],
          k: 'Practice vs documents → observe.' },
        { id: 'c2l12q7', l: 'c2l12', q: 'An analyst wants to know whether slow response time is related to the number of users. Which chart fits?',
          o: [['An XY chart, to check correlation between two continuous variables', 'Correct.'],
              ['A Pareto chart, to rank the causes of slow response time', 'Pareto ranks discrete causes; it does not test a relationship.'],
              ['A fishbone diagram, to list the possible causes by category', 'It lists causes but does not measure a relationship.'],
              ['A Gantt chart, to show at what times the slowdowns happen', 'Gantt charts schedule tasks.']],
          k: 'Correlation → XY. Ranking causes → Pareto.' }
      ]
    },
    {
      id: 'c2l13',
      t: 'Steps 4-6: Analyze, Evaluate, Present',
      src: 'Ch2 slides 41-45 · Lecture 10 notes',
      body: `
<h4>Step 4: analyze project usability, cost, benefit, and schedule data</h4>
<div class="two"><div class="card"><h5>Before fact-finding: plan the effort</h5><ul><li>Interviews? How many people, and how much time to meet them and summarize?</li><li>A survey? Who? How long to complete it? How long to tabulate the results?</li></ul></div><div class="card"><h5>During fact-finding: gather and analyze</h5><ul><li>Data on predicted costs, anticipated benefits, and schedule issues; it must be analyzed before feasibility can be evaluated.</li><li>How much will analyzing it and writing the report cost?</li></ul></div></div>
<div class="ex"><b>Real example:</b> before starting, the analyst estimates 12 interviews × 1 hour + 6 hours to summarize, and a 300-person survey taking 2 days to tabulate. During fact-finding, the analyst learns licenses cost 8,000 JOD a year and that peak season blocks any launch in December.</div>

<h4>Step 5: evaluate feasibility</h4>
<div class="tbl"><table><tr><th>Type</th><th>What you do</th><th>Example output</th></tr>
<tr><td>Operational</td><td>Review user needs, requirements, expectations; look for areas that might cause problems for users</td><td>"Nurses on night shift have no time for training; plan short videos"</td></tr>
<tr><td>Technical</td><td>Identify hardware, software, network resources; develop a <b>checklist</b> of technical costs and concerns</td><td>A checklist: tablets, Wi-Fi coverage, HL7 expertise, backup</td></tr>
<tr><td>Economic</td><td>Apply the <b>financial analysis tools</b> (Chapter 3); cost-benefit data is key</td><td>NPV, payback period, ROI</td></tr>
<tr><td>Schedule</td><td>Include <b>stakeholder expectations</b> about acceptable timing and completion dates</td><td>"The dean expects it before the fall semester"</td></tr></table></div>

<h4>Step 6: present results and recommendations to management</h4>
<div class="tbl"><table><tr><th>Section</th><th>Contents</th></tr>
<tr><td>Introduction</td><td>Brief description of the system; who performed the investigation</td></tr>
<tr><td>Systems request summary</td><td>The basis of the request</td></tr>
<tr><td>Findings</td><td>Scope, constraints, feasibility</td></tr>
<tr><td>Project roles</td><td>Who will participate and their roles</td></tr>
<tr><td>Time and cost estimates</td><td>Costs of acquiring and installing; <b>intangible costs should be noted</b></td></tr>
<tr><td>Expected benefits</td><td>Tangible and intangible, with a timetable</td></tr>
<tr><td>Appendix</td><td>Interviews, surveys, other sources</td></tr></table></div>
<div class="note"><b>From your notes (lecture 10):</b> "Slide 43 for the project": this report structure is what you use for the course project.</div>`,
      quiz: [
        { id: 'c2l13q1', l: 'c2l13', q: 'In the preliminary investigation report, where do the interview notes and survey questionnaires go?',
          o: [['Appendix', 'Correct.'],
              ['Findings', 'Findings summarize scope, constraints, and feasibility.'],
              ['Systems request summary', 'That explains the basis of the request.'],
              ['Introduction', 'That describes the system and who investigated.']],
          k: 'Raw sources → appendix.' },
        { id: 'c2l13q2', l: 'c2l13', q: 'During step 5, the analyst produces a checklist of technical costs and concerns. Which feasibility is being evaluated?',
          o: [['Technical', 'Correct.'],
              ['Economic, because the checklist includes costs', 'Economic uses the financial analysis tools.'],
              ['Operational, because the checklist will be shared with users', 'Operational reviews user needs and problems.'],
              ['Schedule, because the checklist sets deadlines', 'Schedule uses stakeholders\' timing expectations.']],
          k: 'Checklist → technical.' },
        { id: 'c2l13q3', l: 'c2l13', q: 'Which question belongs to step 4 BEFORE fact-finding starts?',
          o: [['How long will it take to tabulate the survey results?', 'Correct: planning the effort.'],
              ['What do the licenses actually cost per year?', 'That is data gathered during fact-finding.'],
              ['Which of the expected benefits are intangible?', 'That goes in the step 6 report.'],
              ['Who performed the preliminary investigation?', 'That goes in the introduction of the report.']],
          k: 'Before = plan the effort. During = gather and analyze.' },
        { id: 'c2l13q4', l: 'c2l13', q: 'In step 5, which feasibility type is evaluated by applying the financial analysis tools?',
          o: [['Economic', 'Correct: NPV, PBP, ROI (Chapter 3).'],
              ['Schedule, because time affects money', 'Schedule uses stakeholder timing expectations.'],
              ['Technical, because tools are technical', '"Tools" here means financial calculations.'],
              ['Operational, because users bear the cost', 'Operational is about users\' needs.']],
          k: 'Economic → financial tools.' },
        { id: 'c2l13q5', l: 'c2l13', q: 'In which report section should intangible costs be noted?',
          o: [['Time and cost estimates', 'Correct.'],
              ['Expected benefits', 'That lists tangible and intangible benefits.'],
              ['Findings', 'Findings cover scope, constraints, feasibility.'],
              ['Project roles', 'That lists people and roles.']],
          k: 'Intangible costs → time and cost estimates.' }
      ]
    }
  ],
  groups: [
    { id: 'c2g1', after: 'c2l4', t: 'Practice: Strategy, SWOT, Planning', qs: [
      { id: 'c2g1q1', l: 'c2l3', q: 'Which pair is correctly classified for a car dealership?',
        o: [['Skilled mechanics: strength · a new import tax: threat', 'Correct.'],
            ['Skilled mechanics: opportunity · a new import tax: weakness', 'Reversed: mechanics are internal, the tax is external.'],
            ['Skilled mechanics: strength · a new import tax: weakness', 'The tax comes from outside.'],
            ['Skilled mechanics: opportunity · a new import tax: threat', 'The mechanics are internal.']],
        k: 'Internal S/W, external O/T.' },
      { id: 'c2g1q2', l: 'c2l2', q: 'A competitor opens a cheaper campus nearby. In Figure 2-3, how should this affect planning?',
        o: [['It enters through SWOT and shapes more realistic goals and objectives', 'Correct.'],
            ['It changes the university\'s values, which then change the mission', 'Values are stable principles.'],
            ['It should be ignored, because external factors cannot be controlled', 'You cannot control it, but you must plan for it.'],
            ['It replaces the mission statement with a competitive strategy', 'The mission stays.']],
        k: 'Mission stays; goals adapt.' },
      { id: 'c2g1q3', l: 'c2l4', q: 'A project has a clear scope and achievable goals, but it supports a strategy the company abandoned last year. What failed?',
        o: [['Support for the overall business strategy', 'Correct.'],
            ['A well-defined, clearly stated scope', 'The scope is clear.'],
            ['Realistic, achievable goals', 'The goals are achievable.'],
            ['The use of a CASE planning tool', 'A tool would not fix the wrong strategy.']],
        k: 'IT projects must serve the current strategy.' },
      { id: 'c2g1q4', l: 'c2l3', q: 'A competitor might develop similar technology that does not legally infringe a company\'s patent. In Figure 2-5 this is a:',
        o: [['Threat', 'Correct: external and harmful.'],
            ['Weakness', 'The patent\'s limited life is the weakness.'],
            ['Opportunity', 'It hurts the company.'],
            ['Strength', 'No.']],
        k: 'Outside + hurts = threat.' }
    ]},
    { id: 'c2g2', after: 'c2l7', t: 'Practice: Business Case and Requests', qs: [
      { id: 'c2g2q1', l: 'c2l5', q: 'A project costs 49K (including 24K of in-kind staff time) and returns 17K per year. A manager says "no new cash is spent on staff, so the investment is only 25K". What is wrong?',
        o: [['In-kind staff time has real value and must be counted in the investment', 'Correct: otherwise the return looks like 68% instead of 35%.'],
            ['Nothing: in-kind contributions are always excluded from investment', 'They are included.'],
            ['The 24K should be subtracted from the yearly benefit instead', 'It is an investment cost, not a reduction in benefit.'],
            ['Staff costs belong in schedule feasibility, not the business case', 'They are a cost in the business case.']],
        k: 'True cost = cash + in-kind.' },
      { id: 'c2g2q2', l: 'c2l6', q: 'A government regulation forces a bank to add two-factor login. This is a factor of type ___, and the project is ___.',
        o: [['External; nondiscretionary', 'Correct.'],
            ['Internal; discretionary', 'The government is external, and a law leaves no choice.'],
            ['External; discretionary', 'A law leaves no choice.'],
            ['Internal; nondiscretionary', 'The government is external.']],
        k: 'Factors and priorities together.' },
      { id: 'c2g2q3', l: 'c2l7', q: 'A department submits a request for a new data dashboard. Which flow is correct?',
        o: [['Request → change manager (may hold or prioritize) → top manager approves → change', 'Correct.'],
            ['Request → change implemented → top manager approves it afterwards', 'Approval comes before the change.'],
            ['Change manager → request → top manager approves → change', 'The request comes first.'],
            ['Request → top manager approves → change manager sets priority later', 'The change manager comes first.']],
        k: 'The change flow from your notes.' },
      { id: 'c2g2q4', l: 'c2l5', q: 'Which business case question connects directly to Chapter 3\'s financial tools?',
        o: [['What is the return on investment and payback period?', 'Correct.'],
            ['How does this solution address key business issues?', 'Not a financial calculation.'],
            ['What alternatives exist?', 'Not a financial calculation.'],
            ['Will we suffer a productivity loss during the transition?', 'Not a financial calculation.']],
        k: 'Business case ↔ financial analysis.' }
    ]},
    { id: 'c2g3', after: 'c2l10', t: 'Practice: Feasibility and Priority', qs: [
      { id: 'c2g3q1', l: 'c2l8', q: 'Users want the change, the company has the servers and staff, and benefits exceed costs, but management needs it in 2 months while the realistic estimate is 6. Which feasibility fails?',
        o: [['Schedule', 'Correct.'],
            ['Operational', 'Users want it.'],
            ['Technical', 'The resources exist.'],
            ['Economic', 'Benefits exceed costs.']],
        k: 'Check each dimension.' },
      { id: 'c2g3q2', l: 'c2l10', q: 'For which project would you NOT run a cost-benefit calculation?',
        o: [['A change required by a new data-protection law', 'Correct: nondiscretionary.'],
            ['A new dashboard requested by the sales manager', 'Discretionary.'],
            ['A redesign of the internal staff portal', 'Discretionary.'],
            ['An optional export feature for reports', 'Discretionary.']],
        k: 'Nondiscretionary → no benefit calculation.' },
      { id: 'c2g3q3', l: 'c2l9', q: 'A scheduling system will cut overtime by 3,000 JOD per month and make staff happier. Classify the two benefits.',
        o: [['Tangible; intangible', 'Correct.'],
            ['Intangible; tangible', 'Reversed.'],
            ['Both tangible, since happier staff work harder', 'Happiness is hard to measure in money.'],
            ['Both intangible, since overtime is an estimate', 'The overtime saving is measurable.']],
        k: 'Measurable in money → tangible.' },
      { id: 'c2g3q4', l: 'c2l10', q: 'Changing the color theme of a car\'s dashboard screen: which MoSCoW category, and what kind of benefit?',
        o: [['Won\'t have (cosmetic); intangible', 'Correct.'],
            ['Must have; tangible benefit', 'It is not essential.'],
            ['Should have; tangible benefit', 'Its benefit is hard to measure in money.'],
            ['Could have; tangible benefit', 'Its benefit is hard to measure in money.']],
        k: 'Cosmetic → won\'t.' }
    ]},
    { id: 'c2g4', after: 'c2l13', t: 'Practice: The Preliminary Investigation', qs: [
      { id: 'c2g4q1', l: 'c2l11', q: 'Put in order: (a) evaluate feasibility (b) define scope and constraints (c) perform fact-finding (d) present to management.',
        o: [['b → c → a → d', 'Correct: step 2 → 3 → 5 → 6.'],
            ['c → b → a → d', 'Scope comes before fact-finding.'],
            ['b → a → c → d', 'You need facts before evaluating feasibility.'],
            ['a → b → c → d', 'Feasibility comes after gathering facts.']],
        k: 'The six steps in order.' },
      { id: 'c2g4q2', l: 'c2l12', q: 'A Pareto chart shows "improper part number" causes most inventory errors. What should happen next?',
        o: [['Tackle part numbers first, as the largest cause', 'Correct.'],
            ['Fix "inactive supplier" first, since it is the easiest', 'It is the smallest cause.'],
            ['Draw an XY chart to rank the causes properly', 'The Pareto chart already ranks them.'],
            ['Ignore it, since Pareto charts only show discrete data', 'Discrete data is what Pareto is for.']],
        k: 'Pareto → start with the biggest.' },
      { id: 'c2g4q3', l: 'c2l12', q: 'An XY chart of response time against the number of users shows scattered points with no pattern. What should the analyst conclude?',
        o: [['The variables appear independent, so look elsewhere for the cause', 'Correct, from Figure 2-22.'],
            ['More users clearly slow the system down, so add servers', 'There is no correlation.'],
            ['The data is discrete, so a Pareto chart should be used', 'Response time is continuous.'],
            ['The chart is wrong, because users always affect speed', 'The data says otherwise.']],
        k: 'No pattern → no correlation.' },
      { id: 'c2g4q4', l: 'c2l13', q: 'The dean expects the system before the fall semester. In step 5, this is input to which feasibility type?',
        o: [['Schedule: stakeholder expectations about timing', 'Correct.'],
            ['Operational: the dean is one of the users', 'The point is timing, not acceptance.'],
            ['Economic: a late launch costs the university money', 'Not stated.'],
            ['Technical: the system must be ready and working', 'Not about capability.']],
        k: 'Stakeholder timing → schedule.' }
    ]}
  ],
  exam: [
    { id: 'c2x1', l: 'c2l12', q: 'Which statement comparing surveys and interviews is TRUE?',
      o: [['A survey is less flexible, but cheaper and able to reach a broad cross-section of people', 'Correct.'],
          ['A survey allows follow-up questions, while an interview does not allow them', 'Reversed.'],
          ['An interview is cheaper per person than a survey, and it reaches more people', 'Interviews cost more per person.'],
          ['Only interviews collect data; surveys are used only to confirm interview results', 'Both collect data.']],
      k: 'Survey: cheap and broad, but inflexible.' },
    { id: 'c2x2', l: 'c2l12', q: '"Starting next week, the marketing system must track all repeat visits to the website." Classify it.',
      o: [['Present, internal, mandatory', 'Correct (example D).'],
          ['Future, internal, mandatory', '"Next week" counts as present.'],
          ['Present, external, mandatory', 'The marketing department is internal.'],
          ['Present, internal, desirable', '"Must" is mandatory.']],
      k: 'Next week = present; must = mandatory.' },
    { id: 'c2x3', l: 'c2l7', q: 'Which is a DISADVANTAGE of a systems review committee?',
      o: [['Members might favor projects requested by their own departments', 'Correct.'],
          ['It reduces the effect of any one person\'s bias on the decisions', 'An advantage.'],
          ['It brings a broader viewpoint to setting project priorities', 'An advantage.'],
          ['It sets priorities more effectively than one person would', 'An advantage.']],
      k: 'Waiting, favoritism, politics.' },
    { id: 'c2x4', l: 'c2l8', q: '"Will it interface properly with external systems operated by customers and suppliers?" belongs to:',
      o: [['Technical feasibility', 'Correct.'],
          ['Operational feasibility', 'Not about acceptance.'],
          ['Economic feasibility', 'Not about costs.'],
          ['Schedule feasibility', 'Not about time.']],
      k: 'Integration → technical.' },
    { id: 'c2x5', l: 'c2l11', q: 'A business process is a set of:',
      o: [['Transactions, events, and results that can be described and documented', 'Correct.'],
          ['Departments, users, and systems involved in a project', 'That is what step 1 determines, not the definition.'],
          ['Strengths, weaknesses, opportunities, and threats of a firm', 'That is SWOT.'],
          ['Inputs, outputs, and user interfaces examined in a prototype', 'That is prototyping.']],
      k: 'Transactions + events + results.' },
    { id: 'c2x6', l: 'c2l9', q: 'Which question belongs to schedule feasibility?',
      o: [['Will an accelerated schedule pose any risks?', 'Correct.'],
          ['Does management support the project?', 'Operational.'],
          ['Does the company have the needed technical expertise?', 'Technical.'],
          ['What is the estimated cost of postponing the project?', 'Economic.']],
      k: 'Timetable, acceleration, PM appointed.' },
    { id: 'c2x7', l: 'c2l10', q: 'Annual payroll updates, tax percentages, and quarterly changes are examples of projects that are:',
      o: [['Nondiscretionary and mostly predictable', 'Correct.'],
          ['Discretionary and mostly predictable', 'Management has no choice.'],
          ['Nondiscretionary and unpredictable', 'They are predictable.'],
          ['Discretionary and unpredictable', 'Both wrong.']],
      k: 'Nondiscretionary is usually predictable.' },
    { id: 'c2x8', l: 'c2l6', q: 'Which is an INTERNAL factor in Figure 2-10?',
      o: [['Existing systems and data', 'Correct.'],
          ['Technology trends', 'External: the IT department is internal, technology in general is external.'],
          ['Customers', 'External.'],
          ['The economy', 'External.']],
      k: 'IT department internal; technology external.' },
    { id: 'c2x9', l: 'c2l3', q: 'Which SWOT question corresponds to threats?',
      o: [['How can we assess, manage, and respond to the possible risks?', 'Correct.'],
          ['How can we reduce or eliminate them in the future?', 'Weaknesses.'],
          ['How do we plan to take advantage of them?', 'Opportunities.'],
          ['How can we use them to achieve our business goals?', 'Strengths.']],
      k: 'Each letter has its own question.' },
    { id: 'c2x10', l: 'c2l2', open: true, q: 'Describe the strategic planning process shown in Figure 2-3, and explain where SWOT fits in it, using an example.',
      m: '<p>Strategic planning is a dynamic process that starts with a <b>mission statement</b>, shaped by the organization\'s <b>purpose, vision, and values</b>. The mission generates <b>goals and objectives</b> (long and short term) that produce <b>business results</b>.</p><p><b>SWOT</b> feeds into setting the goals and objectives so they are realistic: use strengths and opportunities, reduce weaknesses, respond to threats. Example: a university with the vision "a leading technology university" and the mission "graduate job-ready engineers" uses SWOT (strength: industry connections; threat: a cheaper competitor) to set the objective "85% graduate employment within 6 months by 2028".</p>' },
    { id: 'c2x11', l: 'c2l8', open: true, q: 'Explain the four types of feasibility and give one example question for each.',
      m: '<ul><li><b>Operational</b>: will people accept and use it? e.g. Will users need training, and is the company ready to provide it?</li><li><b>Technical</b>: can we build and run it? e.g. Does the company have the hardware, software, network, and expertise?</li><li><b>Economic</b>: do benefits justify costs? e.g. What are the projected savings and costs, including the cost of not doing it?</li><li><b>Schedule</b>: can it be done in an acceptable time? e.g. Has management set a firm timetable, and will an accelerated schedule pose risks?</li></ul>' },
    { id: 'c2x12', l: 'c2l7', open: true, q: 'Describe the difference between a service request and a request for service (RFS), with an example of each.',
      m: '<p>A <b>service request</b> concerns something that already exists, affects an individual, and is solved in hours. Example: reset my password.</p><p>A <b>request for service</b> is a new initiative that affects a group of people and takes weeks, months, or years, so it goes through review and approval (change manager, top management). Example: a new report providing GPA statistics.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 2, f: 'Stakeholder', b: 'An entity (human or organization) affecting OR affected by the system. Using the system is not required.' },
  { c: 2, f: 'Business case', b: 'The justification for a project: comprehensive yet easy to understand; describes the project, justifies it, estimates the financial impact.' },
  { c: 2, f: 'Strategic planning (Fig. 2-3)', b: 'Purpose + vision + values → mission → (SWOT) → goals and objectives → business results.' },
  { c: 2, f: 'Vision vs mission vs objective', b: 'Vision: future direction. Mission: what we do now, for whom. Objective: a specific, measurable step.' },
  { c: 2, f: 'Strategic plan horizons', b: 'Top 5-10 years · middle 2-3 years · operations day to day.' },
  { c: 2, f: 'SWOT', b: 'Internal (control) → S/W. External (no control) → O/T. Location can be either. Goal: weakness → strength, threat → opportunity.' },
  { c: 2, f: 'Most effective planning tool', b: 'A CASE tool such as Visible Analyst.' },
  { c: 2, f: 'Project triangle', b: 'Scope, time, resources; quality in the middle; cost = time + resources.' },
  { c: 2, f: 'In-kind contribution', b: 'Non-cash value such as staff time (FTE); counts in the investment.' },
  { c: 2, f: 'Reasons for systems requests', b: 'Improved service · support for new products and services · better performance.' },
  { c: 2, f: 'Internal / external factors', b: 'Internal: strategic plan, top managers, user requests, IT dept, existing systems and data. External: technology, suppliers, customers, competitors, economy, government.' },
  { c: 2, f: 'Review committee', b: 'Pros: broader view, less bias. Cons: waiting for meetings, departmental favoritism, politics.' },
  { c: 2, f: 'Service request vs RFS', b: 'Service request: existing, individual, hours. RFS: new, group, weeks or more.' },
  { c: 2, f: 'ITIL / ITSM', b: 'ITIL: IT Infrastructure Library, a framework. ITSM: IT Service Management.' },
  { c: 2, f: 'Feasibility in one line each', b: 'Operational: will people accept and use it? Technical: can we build and run it? Economic: do benefits justify costs? Schedule: in time?' },
  { c: 2, f: 'Training in feasibility', b: 'Preparing users → operational. The cost of training (incl. peer-to-peer) → economic.' },
  { c: 2, f: 'Tangible vs intangible', b: 'Tangible: measurable in money (overtime, clerical staff, inventory). Intangible: satisfaction, better information, image.' },
  { c: 2, f: 'Discretionary vs nondiscretionary', b: 'Discretionary: management chooses; compare cost and benefit. Nondiscretionary: must do (legal, operational, competitive, sacred cow), no benefit calculation.' },
  { c: 2, f: 'Request statuses', b: 'Submitted, approved, rejected (before starting), on hold, resubmitted, cancelled (after starting).' },
  { c: 2, f: 'MoSCoW', b: 'Must (basics), Should (important), Could (if time allows), Won\'t (cosmetic, later).' },
  { c: 2, f: 'Six steps of the preliminary investigation', b: '1 Understand the problem · 2 Scope and constraints · 3 Fact-finding · 4 Analyze data · 5 Evaluate feasibility · 6 Present to management.' },
  { c: 2, f: 'Process vs transaction', b: 'Process: has an end goal. Transaction: no end goal on its own; triggers other transactions.' },
  { c: 2, f: 'Fishbone diagram', b: 'Possible causes by category; ask "why" repeatedly to reach root causes, not symptoms.' },
  { c: 2, f: 'Constraint classification', b: 'Present/future · internal/external · mandatory ("must") / desirable ("prefers").' },
  { c: 2, f: 'Project creep', b: 'A project growing beyond its plan. Prevented by a clear scope.' },
  { c: 2, f: 'Fact-finding techniques', b: 'Interviews (deep, slow), documentation (official process), observation (real practice), survey (broad, cheap, no follow-ups).' },
  { c: 2, f: 'Pareto vs XY chart', b: 'Pareto: discrete data, causes ranked largest first. XY: continuous data, correlation.' },
  { c: 2, f: 'Report sections (step 6)', b: 'Introduction, request summary, findings, project roles, time and cost estimates (incl. intangible costs), expected benefits, appendix.' }
);
