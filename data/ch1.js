/* Chapter 1: Introduction to Information Systems
   Sources: Ch1 slides, annotated slide screenshots, notebook lectures 2-4.
   Question format: o[0] is always the correct option (the app shuffles it into the exam format).
   Distractors are written to be plausible: true facts about a neighboring concept, or common misreadings. */
window.COURSE = window.COURSE || { chapters: [], cards: [], mock: [] };
window.COURSE.chapters.push({
  id: 'ch1',
  n: 1,
  label: 'Chapter 1',
  short: 'Chapter 1',
  title: 'Introduction to Information Systems',
  lessons: [
    {
      id: 'c1l1',
      t: 'What is a System?',
      src: 'Ch1 slides 2-3 · Lecture 2 notes',
      body: `
<p>The slide defines a <b>system</b> precisely:</p>
<blockquote>A collection of <b>Elements</b> in an <b>Environment</b> such that there is an <b>Interaction</b> among the elements and between the elements and the environment to reach the predefined <b>Goals</b>.</blockquote>
<p>Every word matters. A pile of parts is not a system; parts that interact without a goal are not a system; a goal with no parts is just a wish. All four <b>system properties</b> must be present.</p>

<h4>1. Elements</h4>
<p>The parts <b>inside</b> the system that you can design, change, or replace: people, hardware, software, data, procedures.</p>
<div class="ex"><b>Real example: Talabat-style food delivery.</b> Elements: the customer app, the restaurant tablet, the drivers and their app, the order database, the payment service the company runs, the support team.</div>

<h4>2. Environment</h4>
<p>Everything <b>outside</b> the system that affects it but that the system does not control: laws, weather, competitors, customers' habits, the internet provider.</p>
<div class="ex"><b>Same example:</b> traffic in Amman, rain, the Ministry's rules on delivery licenses, a competitor's discount campaign, a Ramadan rush. The company cannot switch these off; it must react to them.</div>
<div class="trap"><b>How to tell elements from environment:</b> ask "can the system's owner change it directly?" Drivers' app = yes (element). City traffic laws = no (environment). The same thing can be an element for one system and environment for another: the bank's card network is environment for the delivery app, but an element of the bank's own system.</div>

<h4>3. Interaction (two directions)</h4>
<ul><li><b>Among elements:</b> the customer app sends an order → the restaurant tablet accepts it → the driver app gets a pickup.</li>
<li><b>Between elements and environment:</b> rain (environment) → the app raises the delivery fee and shows longer times (elements react). A new law (environment) → the company updates its terms.</li></ul>
<p>A definition that mentions only interaction among elements is <b>incomplete</b>, and the exam can test exactly that.</p>

<h4>4. Predefined goals</h4>
<p>The goal is set <b>before</b> the system runs and gives every interaction its purpose: "deliver every order hot within 35 minutes". Without a goal you cannot say whether the system is working.</p>

<h4>Input → Process → Output</h4>
<figure class="dg"><div class="flow"><div class="bx">Input<br><small>data</small></div><div class="ar">→</div><div class="bx hi">System<br><small>process</small></div><div class="ar">→</div><div class="bx">Output<br><small>information</small></div></div><figcaption>From your notes, lecture 2</figcaption></figure>
<div class="ex"><b>Real example: payroll.</b> Input: hours worked, overtime, leave days (raw data). Process: apply salary rules, taxes, social security. Output: payslips and a salary report (information people act on).</div>

<div class="note"><b>From your notes (lecture 2):</b> "System: group of components working together to achieve a goal" and "Technology is useless without a system".</div>
<div class="ex"><b>Why technology alone fails:</b> a hospital buys the best MRI scanner, but there is no booking procedure, no staff schedule, and no way to send results to doctors. The scanner sits idle while patients wait. The missing piece is not technology; it is the <b>organized interaction</b> toward a goal.</div>`,
      quiz: [
        { id: 'c1l1q1', l: 'c1l1', q: 'A hospital installs a new MRI scanner. There is no booking procedure and no way to send results to doctors, so the scanner sits idle while patients wait. Which idea best explains the failure?',
          o: [['Technology is useless without a system that organizes interaction toward a goal', 'Correct. The scanner (an element) exists, but nothing organizes the interaction between elements toward the goal of treating patients.'],
              ['The system has no environment, so the scanner cannot receive any inputs from patients', 'The environment is there (patients, doctors, regulations). The problem is inside: no organized interaction.'],
              ['The scanner is the system\'s output, so it cannot be one of the elements that process data', 'The scanner is an element; the scan results would be the output.'],
              ['The system has no predefined goal, because a scanner on its own has no purpose', 'The hospital\'s goal (treat patients) exists. What is missing is the process connecting the elements to it.']],
          k: 'An element on its own is not a system.' },
        { id: 'c1l1q2', l: 'c1l1', q: 'Which statement is the COMPLETE definition of a system?',
          o: [['Elements in an environment that interact among themselves and with the environment to reach predefined goals', 'Correct: elements, environment, interaction in both directions, and predefined goals.'],
              ['Elements in an environment that interact among themselves, step by step, to reach the predefined goals', 'Missing the interaction between the elements and the environment.'],
              ['Elements that interact with their environment to transform input data into output information', 'Describes input-process-output, but has no predefined goal and no interaction among elements.'],
              ['Elements that interact among themselves and with the environment to produce useful outputs for users', 'Replaces "predefined goals" with "useful outputs"; a goal is set before the system runs.']],
          k: 'All four properties, with interaction in BOTH directions.' },
        { id: 'c1l1q3', l: 'c1l1', q: 'In a food-delivery system, which item is an ELEMENT rather than part of the environment?',
          o: [['The routing algorithm that assigns orders to drivers', 'Correct. The company built it and can change it directly.'],
              ['The city\'s traffic regulations for motorbikes', 'Environment: the company must follow them but cannot change them.'],
              ['Customers\' habit of ordering more during Ramadan', 'Environment: it affects demand but the company does not control it.'],
              ['A competitor\'s free-delivery campaign', 'Environment: it affects the system from outside.']],
          k: 'Element = inside and changeable by the system\'s owner.' },
        { id: 'c1l1q4', l: 'c1l1', q: 'When it rains, a delivery app automatically increases the delivery fee and shows longer delivery times. This is an example of:',
          o: [['Interaction between the elements and the environment', 'Correct. Rain (environment) triggers a change in the app (elements).'],
              ['Interaction among the system\'s elements only, inside it', 'Rain is not an element; it comes from outside.'],
              ['A change in the system\'s predefined goal because of rain', 'The goal (deliver orders) stays the same; only the behavior adapts.'],
              ['The system\'s output being fed back in as a new input', 'That would be feedback, which the slide does not describe here.']],
          k: 'Interaction runs in two directions.' },
        { id: 'c1l1q5', l: 'c1l1', q: 'In a payroll system, the hours employees worked this month are ___, and the payslips sent to them are ___.',
          o: [['input data; output information', 'Correct. Raw hours go in; processed payslips come out.'],
              ['input information; output knowledge', 'Raw hours are data, and payslips support current decisions, so they are information.'],
              ['process; output data', 'Hours are not the process (the salary rules are), and payslips are processed, so information.'],
              ['output data; input information', 'Reversed.']],
          k: 'Data → process → information.' },
        { id: 'c1l1q6', l: 'c1l1', q: 'A company\'s card-payment network is an ELEMENT of the bank\'s system but part of the ENVIRONMENT of a delivery app that accepts cards. What does this show?',
          o: [['Whether something is an element or environment depends on which system you are describing', 'Correct. It is inside (changeable) for the bank, outside (not changeable) for the delivery app.'],
              ['Payment networks are always environment because they are shared by many systems', 'Being shared does not make it environment for its owner.'],
              ['A system cannot interact with the elements of another system, only with its environment', 'Systems interact with other systems all the time.'],
              ['The delivery app and the bank must therefore be treated as one single system', 'They are separate systems that interact.']],
          k: 'Draw the system boundary first, then classify.' }
      ]
    },
    {
      id: 'c1l2',
      t: 'Levels of Meaning: Data, Information, Knowledge, Wisdom',
      src: 'Ch1 slide 4 · annotated slide · Lecture 2 notes',
      body: `
<figure class="dg"><div class="stair">
<div class="st s1"><b>Data</b><span>Raw facts · no meaning · not useful in decision making</span></div>
<div class="st s2"><b>Information</b><span>Processed data · useful in <u>current</u> decision making</span></div>
<div class="st s3"><b>Knowledge</b><span>Based on experience · useful in <u>future</u> decision making (prediction)</span></div>
<div class="st s4"><b>Wisdom</b><span>Based on knowledge · the highest meaning · taking action</span></div>
</div><figcaption>The slide, with the lecturer's corrections</figcaption></figure>
<div class="trap"><b>Most important point:</b> the original slide says Knowledge is "the highest meaning". The lecturer <u>crossed that out</u>, wrote "based on experience", and added <b>Wisdom</b> above it ("based on knowledge"). Your notes confirm: "Wisdom (highest meaning)". <b>Wisdom is the highest level.</b></div>

<h4>Data: raw facts</h4>
<p>Numbers, words, or readings with no context. You cannot decide anything from them yet.</p>
<div class="ex"><b>Example:</b> <code>2024832</code> on its own. Is it a student number, a phone number, a price? Without context it means nothing. Your notes use exactly this example.</div>
<div class="trap"><b>Watch out:</b> sorting or listing data does not automatically make it information. A sorted column of unlabeled numbers is still data. Information needs <b>meaning that supports a decision</b>.</div>

<h4>Information: processed data for current decisions</h4>
<p>Data that has been organized, labeled, calculated, or compared so it answers a question <b>now</b>.</p>
<div class="ex"><b>Examples:</b> "Alex 65, Sara 95" (your notes): now you can decide today that Sara gets the top-student award. "Section 2 has 45 students; the room seats 40": the head of department moves the section today.</div>

<h4>Knowledge: experience for future decisions</h4>
<p>Patterns and understanding learned from experience, used to <b>predict</b>. Your notes: "based on what you know"; "once you're using experience".</p>
<div class="ex"><b>Examples:</b> "Students who miss more than 4 classes usually fail the midterm." "Sales always drop in February because people spent during the holidays." "Offering flexible hours improves productivity." Each is an understanding, not an action.</div>

<h4>Wisdom: acting on knowledge</h4>
<p>Your notes: "making decisions based on what you know" and "take actions to improve them". Wisdom is when knowledge becomes a <b>decision or action</b>.</p>
<div class="ex"><b>Examples:</b> the advisor <u>schedules</u> review sessions for students with many absences. The store <u>runs</u> a February promotion and orders less stock. HR <u>implements</u> a flexible-hours policy because it knows it boosts productivity.</div>
<div class="trap"><b>The lecturer's mock exam uses this exact trap:</b> "Recognizing that flexible hours improve productivity" (knowledge) vs "Implementing a policy based on that understanding" (wisdom). Recognizing = knowledge. Implementing = wisdom. "Both" is wrong.</div>
<div class="note"><b>From your notes:</b> "In industry: decision based on data and information. Once you're using experience" you are at knowledge.</div>`,
      quiz: [
        { id: 'c1l2q1', l: 'c1l2', q: 'Which level of meaning is the highest?',
          o: [['Wisdom, because it is based on knowledge and leads to action', 'Correct.'],
              ['Knowledge, because it is useful in future decision making', 'Knowledge is useful for prediction, but wisdom sits above it.'],
              ['Information, because it supports the decisions being made now', 'Information is the second level.'],
              ['Knowledge, because it is built from experience rather than data', 'Being built from experience makes it knowledge, not the top level.']],
          k: 'Data < Information < Knowledge < Wisdom.' },
        { id: 'c1l2q2', l: 'c1l2', q: 'An exported file contains a column of numbers sorted from smallest to largest: 2024801, 2024832, 2024840. There is no heading. What level is this?',
          o: [['Data, because the numbers still have no meaning that supports a decision', 'Correct. Sorting alone does not give meaning.'],
              ['Information, because the numbers have been processed by sorting', 'Sorting is processing, but without context the numbers still support no decision.'],
              ['Information, because a computer system produced the file', 'Who produced it does not matter; meaning does.'],
              ['Knowledge, because the order reveals a pattern', 'A sorted list is not a learned pattern from experience.']],
          k: 'Information needs meaning, not just processing.' },
        { id: 'c1l2q3', l: 'c1l2', q: 'The registrar\'s report says "Section 2 has 45 registered students and its room seats 40", and the head of department moves the section to a bigger room today. The REPORT itself is:',
          o: [['Information, because it is processed data used in a current decision', 'Correct. The action that follows is a separate step.'],
              ['Wisdom, because it led to a decision being taken', 'The decision is the head\'s action; the report is the information behind it.'],
              ['Knowledge, because the head understands what the numbers mean', 'Understanding a report today is using information, not experience-based prediction.'],
              ['Data, because it consists only of counts and room sizes', 'The counts are labeled and compared, so they have become information.']],
          k: 'Classify the thing the question points at, not what happens next.' },
        { id: 'c1l2q4', l: 'c1l2', q: 'An advisor has noticed over five years that students who take three lab courses together usually fail one of them. This understanding is:',
          o: [['Knowledge', 'Correct: a pattern learned from experience that predicts the future.'],
              ['Wisdom', 'It would become wisdom when the advisor acts on it, for example by changing the study plan.'],
              ['Information', 'Information supports a decision now; this is a long-term pattern.'],
              ['Data', 'It is far beyond raw facts.']],
          k: 'Understanding from experience = knowledge.' },
        { id: 'c1l2q5', l: 'c1l2', q: 'Using that understanding, the advisor changes the study plan so no student can register three lab courses in one semester. This action is:',
          o: [['Wisdom', 'Correct: action based on knowledge.'],
              ['Knowledge', 'The knowledge was the pattern; the action taken on it is wisdom.'],
              ['Information', 'The new plan is not processed data for a current decision; it is an action.'],
              ['Data', 'No.']],
          k: 'Acting on knowledge = wisdom.' },
        { id: 'c1l2q6', l: 'c1l2', q: 'Which pairing of level and usefulness is correct?',
          o: [['Information: current decisions · Knowledge: future decisions (prediction)', 'Correct, word for word from the slide.'],
              ['Information: future decisions · Knowledge: current decisions', 'Reversed.'],
              ['Data: current decisions · Information: future decisions', 'Data is not useful in decision making.'],
              ['Knowledge: current decisions · Wisdom: future decisions (prediction)', 'Prediction belongs to knowledge.']],
          k: 'Current → information. Future → knowledge.' }
      ]
    },
    {
      id: 'c1l3',
      t: 'Information Technology vs Information System, and the Characteristics of an IS',
      src: 'Ch1 slides 5-6 · Lecture 2 notes',
      body: `
<div class="two">
<div class="card"><h5>Information Technology (IT)</h5><p>The combination of <b>hardware, software, and services</b> that people use to manage, communicate, and share information.</p><p><b>The tools.</b></p></div>
<div class="card"><h5>Information System (IS)</h5><p>A system that <b>uses information technology</b> to support <b>business functions</b> (HR, accounting, marketing...). It can handle <b>day-to-day tasks</b> or help managers make <b>better decisions</b>.</p><p><b>The organized use of the tools for the business.</b></p></div>
</div>
<div class="ex"><b>Real example: a supermarket chain.</b> IT: barcode scanners, the point-of-sale software, the cloud database, the internet line. IS: the sales and inventory system that uses all of these so cashiers record sales all day (day-to-day task) and the purchasing manager sees which products to reorder (better decision).</div>
<div class="trap"><b>What makes an IS different from any system:</b> every system has elements, an environment, interaction, and a goal. What is special about an IS is that it <b>uses IT to produce information that supports business functions and decisions</b>. "Hardware alone" is IT, not an IS (your notes: "distinguish between information system and system").</div>

<h4>The four characteristics of a good IS</h4>
<p>These describe how you judge whether an IS is <b>good</b>. Each one answers a different question.</p>

<h5>1. Effective processing: does it handle the data well?</h5>
<p>Fast, accurate, reliable processing of transactions and data.</p>
<div class="ex"><b>Example:</b> after a new payroll system, salaries for 2,000 employees are calculated in 2 hours instead of 2 days, with no calculation errors.</div>

<h5>2. Effective management: does it help managers plan and control?</h5>
<p>Gives managers the information they need to monitor, plan, and control the business.</p>
<div class="ex"><b>Example:</b> branch managers see today's sales and stock for every branch on one dashboard and fix shortages the same day.</div>

<h5>3. Flexibility: can it adapt to change?</h5>
<p>It can be adjusted when rules, volumes, or needs change, without rebuilding it.</p>
<div class="ex"><b>Example:</b> when the sales-tax rate changed, the IT team updated one setting in an hour instead of reprogramming the system.</div>

<h5>4. User satisfaction: do people actually want to use it?</h5>
<p>Users find it useful and easy, and they rely on it.</p>
<div class="ex"><b>Example:</b> six months after launch, staff rate the system 4.6/5 and stop keeping paper copies "just in case".</div>
<div class="trap"><b>Telling them apart in a scenario:</b> speed and accuracy of handling data → processing. Managers monitoring and controlling → management. Adapting to new rules or growth → flexibility. How users feel and whether they rely on it → satisfaction.</div>`,
      quiz: [
        { id: 'c1l3q1', l: 'c1l3', q: 'An information system differs from a general system mainly because it:',
          o: [['Uses IT to produce information that supports business functions and decisions', 'Correct. This is what is specific to an IS.'],
              ['Has elements that interact with an environment to reach a predefined goal', 'True of every system, not specific to an IS.'],
              ['Is made of hardware, software, and services used to share information', 'That is the definition of IT, which an IS uses.'],
              ['Transforms input data into outputs according to a goal set in advance', 'Input-process-output applies to any system.']],
          k: 'IS = system + IT + information for the business.' },
        { id: 'c1l3q2', l: 'c1l3', q: 'A company buys laptops, a database license, and a fiber internet line. Nothing has been set up to support any business function yet. What does the company have?',
          o: [['Information technology', 'Correct: hardware, software, and services.'],
              ['An information system, because it has hardware and software', 'An IS is the organized use of IT to support business functions; that is not in place yet.'],
              ['A business function, because the tools serve the company', 'Business functions are areas like HR or sales, not tools.'],
              ['A system, because the parts can interact', 'Without organized interaction toward a goal, they are just tools.']],
          k: 'Tools alone = IT.' },
        { id: 'c1l3q3', l: 'c1l3', q: 'After a new payroll system goes live, salaries for 2,000 employees are calculated in 2 hours instead of 2 days, with no errors. Which characteristic does this show?',
          o: [['Effective processing', 'Correct: fast, accurate handling of data.'],
              ['Effective management', 'Management is about helping managers plan and control.'],
              ['Flexibility', 'Flexibility is about adapting to change.'],
              ['User satisfaction', 'Satisfaction is about how users feel about and rely on the system.']],
          k: 'Speed and accuracy → processing.' },
        { id: 'c1l3q4', l: 'c1l3', q: 'Branch managers can now see each branch\'s daily sales and stock on one dashboard and fix shortages the same day. Which characteristic is this?',
          o: [['Effective management', 'Correct: it helps managers monitor and control.'],
              ['Effective processing', 'Processing is how well data is handled; here the point is what managers can do with it.'],
              ['User satisfaction', 'Nothing is said about how managers feel about the system.'],
              ['Flexibility', 'Nothing changed in the rules or volume.']],
          k: 'Managers monitoring and controlling → management.' },
        { id: 'c1l3q5', l: 'c1l3', q: 'When the sales-tax rate changed, the IT team updated the system by changing one setting in an hour, without reprogramming. Which characteristic does this show?',
          o: [['Flexibility', 'Correct: adapting to a change in the rules.'],
              ['Effective processing', 'The speed of the change is not about processing transactions.'],
              ['Effective management', 'This is about the system adapting, not managers controlling.'],
              ['User satisfaction', 'Users\' feelings are not described.']],
          k: 'Adapting to new rules → flexibility.' },
        { id: 'c1l3q6', l: 'c1l3', q: 'Six months after launch, employees rate the system 4.6 out of 5 and stop keeping paper backups. Which characteristic is this?',
          o: [['User satisfaction', 'Correct: users like it and rely on it.'],
              ['Effective processing', 'Nothing is said about speed or accuracy.'],
              ['Effective management', 'The point is ordinary users relying on it, not managers controlling.'],
              ['Flexibility', 'Nothing changed in the rules or needs.']],
          k: 'How users feel and rely on it → satisfaction.' },
        { id: 'c1l3q7', l: 'c1l3', q: 'A supermarket\'s IS records every sale at the checkout and also gives the purchasing manager a weekly reorder list. This shows that an IS can:',
          o: [['Handle day-to-day tasks and help managers make better decisions', 'Correct: both roles from the definition.'],
              ['Replace the purchasing function with automated ordering', 'An IS supports business functions; it does not replace them.'],
              ['Produce knowledge directly from raw sales data', 'A reorder list is information for a current decision.'],
              ['Work without IT, as long as there are procedures', 'An IS uses IT by definition.']],
          k: 'Two roles: day-to-day tasks + better decisions.' }
      ]
    },
    {
      id: 'c1l4',
      t: 'Organizational Levels and Business Functions',
      src: 'Ch1 slides 7-9 (Figure 1-20) · annotated slides · Lecture 2 notes',
      body: `
<p><b>What information do users need?</b> Your notes: <b>it depends on the level of the user</b>. The lower the level, the <b>more detailed</b> the information; the higher, the more <b>summarized</b>.</p>
<figure class="dg"><div class="pyr">
<div class="pl p1"><b>Top managers</b><span>long-range strategic plans · 5-10 years</span></div>
<div class="pl p2"><b>Middle managers and knowledge workers</b><span>short-term plans · 2-3 years</span></div>
<div class="pl p3"><b>Supervisors and team leaders</b><span>oversee operational employees</span></div>
<div class="pl p4"><b>Operational employees</b><span>day-to-day · transaction processing systems</span></div>
</div><p class="side">The lower the level, the <b>more detailed</b> information users need.</p>
<figcaption>Figure 1-20 + the lecturer's note</figcaption></figure>

<h4>Top managers</h4>
<p>Develop <b>long-range strategic plans</b> that define the company's mission and goals. They need information on <b>economic forecasts, technology trends, competitive threats, and governmental issues</b>, mostly from outside the company and summarized.</p>
<div class="ex"><b>Real example: Orange Jordan.</b> The CEO and board decide "provide fiber to most homes within 5 years". They read market forecasts and competitor moves, not individual installation tickets. A <b>vision</b> like "for a better tomorrow" is a direction; your notes say "you will never achieve it". Goals must be <b>SMARTER</b>: Specific, Measurable, Achievable (doable), Realistic (within your own limitations), Time-bound (+ Evaluate, Review).</div>

<h4>Middle managers and knowledge workers</h4>
<p>Provide <b>direction, necessary resources, and performance feedback</b> to supervisors and team leaders. They need <b>more detailed</b> information than top managers. Your notes: "take the roadmap and divide it" into short-term plans.</p>
<div class="ex"><b>Same example:</b> the regional manager splits the fiber roadmap into yearly plans per city, budgets the crews, and reviews each team's monthly installation numbers. Knowledge workers (network engineers, analysts) design the rollout.</div>

<h4>Supervisors and team leaders</h4>
<p><b>Oversee operational employees</b> and carry out day-to-day functions.</p>
<div class="ex"><b>Same example:</b> a crew leader assigns today's 12 installations to technicians and checks each one is completed.</div>

<h4>Operational employees</h4>
<p>Rely on <b>transaction processing systems (TPS)</b> to enter and receive the data they need to do their jobs.</p>
<div class="ex"><b>Same example:</b> a technician marks each installation "done" in the field app and scans the router's serial number. Your notes: when an employee "sees a rock" (a problem) that affects <b>time, quality, or money</b>, they escalate it.</div>

<h4>Business functions</h4>
<p>The wheel in Figure 1-20: <b>IT, Human Resources, Accounting, Sales, Marketing, Production</b>. The lecturer labeled them <b>support functions</b>. Every function exists at every level: there is a top-level HR director and an operational HR clerk.</p>
<div class="note"><b>From your notes:</b> the <b>core domain</b>. "When working with a system like healthcare you need to know the basics about the domain." An analyst building a hospital system must understand admissions, wards, and prescriptions, not only databases.</div>`,
      quiz: [
        { id: 'c1l4q1', l: 'c1l4', q: 'Orange decides to "provide fiber to most homes within 5 years". A manager then turns this into yearly city-by-city installation plans with budgets. Who most likely did the second step?',
          o: [['Middle managers and knowledge workers', 'Correct: "take the roadmap and divide it" into short-term plans.'],
              ['Top managers, because they own the strategic plan', 'Top managers set the long-range roadmap; dividing it is middle management\'s job.'],
              ['Supervisors and team leaders, because they manage installations', 'Supervisors run day-to-day work, not yearly plans and budgets.'],
              ['Operational employees, because they do the installations', 'They record transactions, not plans.']],
          k: 'Top = long-range. Middle = divide into short-term plans.' },
        { id: 'c1l4q2', l: 'c1l4', q: 'Which information need belongs to TOP managers?',
          o: [['Forecasts of competitors\' pricing and new government telecom regulations', 'Correct: competitive threats and governmental issues.'],
              ['Monthly installation numbers for each team, to give performance feedback', 'That is middle management: performance feedback to supervisors.'],
              ['Today\'s list of installations assigned to each technician', 'That is the supervisor\'s day-to-day work.'],
              ['The serial number of each router installed today', 'Transaction data for operational staff.']],
          k: 'Top managers look outward and long-term.' },
        { id: 'c1l4q3', l: 'c1l4', q: 'Based on Figure 1-20, which statement is TRUE?',
          o: [['The lower the organizational level, the more detailed the information users need', 'Correct.'],
              ['The higher the organizational level, the more detailed the information users need', 'Reversed: top managers want summaries.'],
              ['Middle managers need less detailed information than top managers', 'The slide says middle managers need MORE detail.'],
              ['Every level needs the same information, filtered by department', 'Information needs depend on the level.']],
          k: 'Detail increases as you go down.' },
        { id: 'c1l4q4', l: 'c1l4', q: 'A supervisor gives each technician today\'s list of installations and checks they are completed. What is the supervisor\'s role in Figure 1-20?',
          o: [['Overseeing operational employees and carrying out day-to-day functions', 'Correct.'],
              ['Providing direction and resources to supervisors and team leaders', 'That is middle management.'],
              ['Entering transactions into a transaction processing system', 'That is the operational employees\' role.'],
              ['Developing long-range strategic plans', 'That is top management.']],
          k: 'Supervisors oversee day-to-day work.' },
        { id: 'c1l4q5', l: 'c1l4', q: 'A technician notices that a supplier\'s routers keep failing, delaying installations and adding repair costs. What should happen?',
          o: [['Escalate it, because it affects time and money', 'Correct: a "rock" that affects time, quality, or money is raised.'],
              ['Record it in the transaction system and continue, since operational staff do not decide', 'Recording alone is not enough when it affects time and money.'],
              ['Wait for the next strategic plan, since suppliers are a top-management issue', 'The problem affects work now; it must be raised now.'],
              ['Change the installation procedure without telling anyone', 'Escalating, not acting alone, is the point.']],
          k: 'Problems affecting time, quality, or money go up.' },
        { id: 'c1l4q6', l: 'c1l4', q: 'Which goal is SMARTER?',
          o: [['Raise the share of homes with fiber in Irbid from 20% to 45% by the end of 2027', 'Correct: specific, measurable, achievable, realistic, time-bound.'],
              ['Become the best telecom company in the region, serving every customer well', 'That is a vision: a direction with no measure or deadline.'],
              ['Install as much fiber as possible, as fast as possible, across the whole country', 'Not measurable and not time-bound.'],
              ['Provide fiber to every single home in Jordan by the end of next month', 'Time-bound and measurable, but not achievable or realistic.']],
          k: 'Specific, Measurable, Achievable, Realistic, Time-bound.' },
        { id: 'c1l4q7', l: 'c1l4', q: 'An analyst with strong programming skills is hired to build a hospital admissions system. What else must the analyst understand?',
          o: [['The basics of the healthcare domain, such as admissions, wards, and prescriptions', 'Correct: the core domain.'],
              ['Only the hospital\'s IT infrastructure, since the doctors handle the medicine', 'The analyst must understand the business area too.'],
              ['Only the top managers\' strategic plans and the hospital\'s annual budget', 'Operational processes matter as much.'],
              ['Nothing else, since the requirements will come from the doctors and nurses', 'Without domain basics the analyst cannot understand those requirements.']],
          k: 'Core domain knowledge.' }
      ]
    },
    {
      id: 'c1l5',
      t: 'The IT Department',
      src: 'Ch1 slides 10-12 (Figure 1-29) · Lecture 2 notes',
      body: `
<figure class="dg"><div class="org"><div class="bx hi">Director, Information Technology</div><div class="org-row">
<div class="bx">Application Development</div><div class="bx">Systems Support &amp; Security</div><div class="bx">User Support</div><div class="bx">Database Administration</div><div class="bx">Network Administration</div><div class="bx">Web Support</div><div class="bx">Quality Assurance</div></div></div>
<figcaption>Figure 1-29: depending on its size, an IT department may have separate units for these functions, or combine them into fewer teams</figcaption></figure>
<p>For each unit: what it does, and a real situation where you would call it.</p>
<div class="tbl"><table>
<tr><th>Unit</th><th>Responsibility (slides)</th><th>Real situation</th></tr>
<tr><td>Application Development</td><td>Systems are developed by <b>teams</b> of users, managers, and IT staff</td><td>Building a new student portal with input from students and the registrar</td></tr>
<tr><td>Systems Support &amp; Security</td><td>Vital <b>protection and maintenance</b> services</td><td>Patching servers after a security alert; renewing antivirus; restoring a crashed server</td></tr>
<tr><td>User Support</td><td>Technical information, <b>training</b>, and any needed support</td><td>Training 300 staff on the new system; the help desk that answers "how do I...?"</td></tr>
<tr><td>Database Administration</td><td>Data design, management, security, <b>backup</b>, and access</td><td>Nightly backups; deciding who can read salary data; designing the student table</td></tr>
<tr><td>Network Administration</td><td>Hardware and software maintenance, support, and security <b>for the network</b></td><td>The campus Wi-Fi is down; adding a new branch to the company network</td></tr>
<tr><td>Web Support</td><td>Design and build <b>web pages</b>, monitor <b>traffic</b>, manage hardware and software, link web apps to company systems</td><td>The website slows down during registration; connecting the online form to the admissions database</td></tr>
<tr><td>Quality Assurance</td><td>Reviews and <b>tests</b> all applications and system changes against specifications and quality standards</td><td>Testing a payroll update before it goes live</td></tr>
</table></div>
<div class="trap"><b>Close pairs that questions mix up:</b><br>Security of the <b>data</b> (who can access it, backups) → Database Administration. Security of the <b>systems and servers</b> → Systems Support &amp; Security. Security of the <b>network</b> → Network Administration.<br><b>Building</b> a change → Application Development. <b>Testing</b> it against standards → QA.<br><b>Training</b> users → User Support, not HR.</div>
<div class="note"><b>From your notes:</b> "Some organizations have one IT employee, others don't have. <b>It depends.</b>" A small accounting office may have one person covering several units; a bank has a team per unit.</div>`,
      quiz: [
        { id: 'c1l5q1', l: 'c1l5', q: 'Before a payroll update goes live, a team checks that it meets the specifications and software quality standards. Which unit is this?',
          o: [['Quality Assurance', 'Correct: reviews and tests all applications and system changes.'],
              ['Application Development', 'They build the update; QA verifies it against standards.'],
              ['Systems Support and Security', 'They protect and maintain systems in operation.'],
              ['Database Administration', 'They manage the data, not test application changes.']],
          k: 'Verify against specifications → QA.' },
        { id: 'c1l5q2', l: 'c1l5', q: 'The university decides that only the finance office may view salary records, and every night the student and salary data are copied to a backup site. Which unit is responsible?',
          o: [['Database Administration', 'Correct: data security, backup, and access.'],
              ['Systems Support and Security', 'They protect the systems and servers; controlling access to the data itself is the DBA\'s job.'],
              ['Network Administration', 'They secure the network, not decide who reads which data.'],
              ['User Support', 'They train and help users.']],
          k: 'Data access and backup → DBA.' },
        { id: 'c1l5q3', l: 'c1l5', q: 'During registration week, the university website becomes very slow, and someone must monitor visitor traffic and the web servers. Which unit is this?',
          o: [['Web Support', 'Correct: monitor traffic and manage web hardware and software.'],
              ['Network Administration', 'They maintain the network itself; web traffic and web servers are Web Support.'],
              ['Application Development', 'They build systems, not monitor live traffic.'],
              ['Quality Assurance', 'QA tests changes before release.']],
          k: 'Web pages and traffic → Web Support.' },
        { id: 'c1l5q4', l: 'c1l5', q: 'After deployment, 300 employees need training sessions and a help desk for questions. Which unit provides this?',
          o: [['User Support', 'Correct: technical information, training, and support for users.'],
              ['Human Resources', 'HR is a business function, not an IT unit; IT training is User Support.'],
              ['Application Development', 'They build the system, not run ongoing training.'],
              ['Systems Support and Security', 'They protect and maintain systems.']],
          k: 'Training users → User Support.' },
        { id: 'c1l5q5', l: 'c1l5', q: 'A small accounting office has a single IT employee who handles the network, backups, and staff training. According to Figure 1-29, this is:',
          o: [['Acceptable: depending on size, functions can be combined into fewer teams', 'Correct. It depends on the size of the company.'],
              ['A problem: each function must have its own unit for security reasons', 'The figure explicitly allows combining functions.'],
              ['Acceptable only if Quality Assurance is outsourced', 'No such condition.'],
              ['A problem: user training must be done by HR', 'Training is part of IT User Support.']],
          k: 'Department size depends on company size.' }
      ]
    },
    {
      id: 'c1l6',
      t: 'The Systems Analyst',
      src: 'Ch1 slides 13-15 · Lecture 2-3 notes',
      body: `
<p>A <b>systems analyst</b> investigates a business problem, designs an IS solution, and connects users and developers. Think of the analyst as a translator: users speak business, developers speak technology.</p>

<h4>Role</h4>
<ul><li>Builds <b>models, diagrams, decision tables</b>, and other descriptive tools.</li>
<li>The <b>most valuable skill is the ability to listen</b>.</li>
<li>An effective analyst <b>involves users in every step</b> of development.</li></ul>
<div class="ex"><b>Real example:</b> the registrar says "the system is slow". A poor analyst buys a faster server. A good analyst listens and discovers the real issue: staff re-type the same data into three screens. The fix is a redesigned form, not hardware.</div>

<h4>Knowledge, skills, and education</h4>
<div class="tbl"><table><tr><th>Area</th><th>What it means in practice</th></tr>
<tr><td>Technical knowledge</td><td>Understanding databases, networks, programming, and tools</td></tr>
<tr><td>Communication skills</td><td>Interviewing users, writing clear documents, presenting to managers</td></tr>
<tr><td>Business skills</td><td>Understanding how the business makes money and its core domain</td></tr>
<tr><td>Critical thinking skills</td><td>Finding the real cause of a problem, comparing options</td></tr>
<tr><td>Education</td><td>A degree in IS, CS, or business</td></tr>
<tr><td>Certification</td><td>Vendor or professional certificates (e.g. ITIL, cloud, business analysis)</td></tr></table></div>

<h4>Characteristics (slide 14)</h4>
<p>Develop a project plan · involve users and listen carefully · use project management tools to identify tasks and milestones · develop accurate cost and benefit information · <b>remain flexible</b>.</p>

<h4>Career opportunities (slide 15)</h4>
<p>Companies need analysts to apply new IT, and e-commerce keeps raising demand. <b>What's important?</b> Job titles, company organization, company size, salary/location/future growth, corporate culture. Your notes: <b>"job title isn't so important"</b>; what you actually do matters more. AI was mentioned as a change in the job market.</p>

<h4>From your notes</h4>
<ul><li><b>"Sketching on paper is a tool."</b> A quick sketch in a meeting clarifies a screen faster than a long description.</li>
<li><b>"Get sign-off (try to keep everything documented)."</b> Written approval of requirements prevents later disputes ("I said weekly, not monthly").</li>
<li><b>Types of employee motivation:</b> <b>financial</b> (salary, bonuses), <b>self-actualization</b> (growth, reaching your potential), <b>job-oriented</b> (the work itself: interesting tasks, responsibility).</li></ul>`,
      quiz: [
        { id: 'c1l6q1', l: 'c1l6', q: 'Staff complain that the registration system is "slow". The analyst interviews them and finds they re-type the same data into three screens. Which analyst quality led to the right diagnosis?',
          o: [['The ability to listen, the most valuable analyst skill', 'Correct: listening revealed the real problem.'],
              ['Technical knowledge of servers and performance tuning', 'Technical knowledge would have pointed to hardware, the wrong fix here.'],
              ['Remaining flexible about the project plan', 'Flexibility matters, but the diagnosis came from listening.'],
              ['Holding a recognized certification', 'Certification does not reveal what users actually do.']],
          k: 'Listen first; the stated problem is not always the real one.' },
        { id: 'c1l6q2', l: 'c1l6', q: 'After a requirements meeting, the analyst writes up the agreed requirements and asks the client to approve them in writing. Which practice is this?',
          o: [['Getting sign-off and keeping everything documented', 'Correct.'],
              ['Developing a project plan with tasks and milestones', 'A plan schedules work; this is about approving requirements.'],
              ['Developing accurate cost and benefit information', 'Costs and benefits are not mentioned.'],
              ['Involving users in every step through prototyping', 'Nothing was built to try.']],
          k: 'Sign-off = documented approval.' },
        { id: 'c1l6q3', l: 'c1l6', q: 'An analyst explains a complex database design to the finance director in a short presentation without technical terms. Which skill area is this?',
          o: [['Communication skills', 'Correct: presenting clearly to a non-technical audience.'],
              ['Technical knowledge', 'The design itself needs technical knowledge, but explaining it is communication.'],
              ['Business skills', 'Business skills mean understanding the business, not presenting to it.'],
              ['Critical thinking skills', 'Critical thinking is analyzing problems and options.']],
          k: 'Explaining to others → communication.' },
        { id: 'c1l6q4', l: 'c1l6', q: 'Two job offers: one titled "Senior Business Systems Consultant", one titled "Junior Analyst" with more responsibility and better growth. Which factor did the lecturer say is NOT so important?',
          o: [['The job title', 'Correct: "job title isn\'t so important".'],
              ['Future growth', 'Listed as important.'],
              ['Corporate culture', 'Listed as important.'],
              ['Company size', 'Listed as important.']],
          k: 'What you do matters more than the title.' },
        { id: 'c1l6q5', l: 'c1l6', q: 'An employee stays in a lower-paid job because it lets them learn, grow, and reach their full potential. Which type of motivation is this?',
          o: [['Self-actualization', 'Correct: growth and reaching potential.'],
              ['Job-oriented', 'Job-oriented means the tasks themselves are interesting; here the focus is personal growth.'],
              ['Financial', 'They accepted lower pay.'],
              ['Corporate culture', 'A career factor, not a motivation type.']],
          k: 'Financial · self-actualization · job-oriented.' },
        { id: 'c1l6q6', l: 'c1l6', q: 'Halfway through a project, the client changes a priority. The analyst updates the plan instead of refusing. Which characteristic from slide 14 is this?',
          o: [['Remaining flexible', 'Correct.'],
              ['Involving users and listening to them', 'Close, but the key action is adapting the plan.'],
              ['Using project management tools to identify milestones', 'Tools help, but the characteristic shown is flexibility.'],
              ['Developing accurate cost and benefit information', 'Not about costs.']],
          k: 'Adapting to change → flexible.' }
      ]
    },
    {
      id: 'c1l7',
      t: 'Development Tools: Modeling, Prototyping, CASE',
      src: 'Ch1 slides 16-19 · annotated prototyping slide · Lecture 3 notes',
      body: `
<p>Analysts use these tools <b>in a team</b>: users, managers, and IT staff all contribute to the design.</p>

<h4>1. Modeling</h4>
<p>Produces a <b>graphical representation</b> of a concept or process that developers can analyze, test, and modify. Model types: business, data, object, network, process. A popular tool: <b>Microsoft Visio</b>. Your notes: "text → visual".</p>
<div class="ex"><b>Real example:</b> instead of a 5-page description of how a student registers, the analyst draws a diagram: student → choose courses → check prerequisites → check seats → confirm. Everyone spots the missing "payment" step in seconds.</div>

<h4>2. Prototyping</h4>
<p>An early <b>working version</b> of a system. It lets users examine <b>input, output, and user interfaces</b> before final decisions. It is built, tested, and reworked until acceptable, and <b>works best when requirements are not known in detail</b>. It speeds up development and is iterative trial and error between developer and client.</p>
<figure class="dg"><div class="split"><div class="bx hi">Prototype</div><div class="arms">
<div class="arm"><b>Throwaway</b><br>Built only to <u>understand requirements</u>. Show it, learn, then discard it and build the real system properly.</div>
<div class="arm"><b>Evolutionary</b><br>Refined step by step until it <u>becomes the final product</u>. You understand most requirements; the unclear points are fixed through edits.</div>
</div></div><figcaption>The lecturer's note on the slide + your notes, lecture 3</figcaption></figure>
<div class="ex"><b>Real example:</b> a bank wants a mobile app but cannot describe the screens. The team builds clickable screens in Figma in two days, users try them, and the bank realizes it needs a "split bill" feature. The Figma screens are thrown away (throwaway). Later, the first coded version of the app keeps being improved until it ships (evolutionary).</div>
<div class="trap"><b>Disadvantage:</b> important decisions might be made <b>too early</b>, before business or IT issues are thoroughly understood. Example: users love the prototype's design, so the team commits to it, then discovers it cannot handle the bank's security rules.</div>

<h4>3. CASE tools</h4>
<p><b>Computer-Aided Systems Engineering</b>: powerful software that helps analysts develop and maintain systems.</p>
<ul><li>Provides an overall framework and <b>can generate program code</b>, which speeds up implementation.</li><li>Helps ensure high-quality, defect-free software.</li><li>Supports <b>both structured and object-oriented</b> methodologies.</li><li>Example: <b>Visible Analyst</b>.</li></ul>
<div class="trap"><b>Modeling vs CASE:</b> modeling only draws. A CASE tool draws <u>and</u> keeps models consistent <u>and</u> can generate code.</div>`,
      quiz: [
        { id: 'c1l7q1', l: 'c1l7', q: 'A client cannot describe what they want. The team quickly builds clickable screens only to discover the real requirements, then discards them and builds the system from scratch. This is:',
          o: [['Throwaway prototyping', 'Correct: built to understand requirements, then discarded.'],
              ['Evolutionary prototyping', 'In evolutionary prototyping, the same version is refined into the final product.'],
              ['Modeling', 'Modeling produces diagrams, not working screens.'],
              ['Using a CASE tool to generate code', 'No code generation is described.']],
          k: 'Discarded → throwaway.' },
        { id: 'c1l7q2', l: 'c1l7', q: 'The team understands most requirements. It releases a first working version and keeps improving that same version with user feedback until it is the final product. This is:',
          o: [['Evolutionary prototyping', 'Correct.'],
              ['Throwaway prototyping', 'Nothing is discarded here.'],
              ['A modified waterfall', 'Waterfall delivers in sequential phases, not by refining one working version.'],
              ['Structured analysis', 'Structured analysis is a phase-based method, not a prototype type.']],
          k: 'Becomes the final product → evolutionary.' },
        { id: 'c1l7q3', l: 'c1l7', q: 'Users love a prototype\'s design, so the team commits to it, and later finds it cannot meet the company\'s security rules. Which disadvantage of prototyping is this?',
          o: [['Important decisions may be made too early, before issues are fully understood', 'Correct.'],
              ['Prototyping slows down development because every version must be rebuilt', 'The slide says it speeds development up.'],
              ['Prototyping only works when the requirements are already fully documented', 'It works best when they are NOT known in detail.'],
              ['Prototypes cannot show the user interface until the system is complete', 'Prototypes are exactly for examining the interface.']],
          k: 'Fast feedback, but the risk of early decisions.' },
        { id: 'c1l7q4', l: 'c1l7', q: 'When does prototyping work BEST?',
          o: [['When the project\'s requirements are not known in detail', 'Correct.'],
              ['When the requirements are fully documented and signed off', 'Then there is less to discover.'],
              ['When the system has no user interface', 'Prototypes are mainly for examining inputs, outputs, and interfaces.'],
              ['When important decisions must be made as early as possible', 'Early decisions are the risk, not the goal.']],
          k: 'Unclear requirements → prototype.' },
        { id: 'c1l7q5', l: 'c1l7', q: 'An analyst replaces a 5-page written description of course registration with a diagram that everyone can review and correct. What is the analyst using?',
          o: [['Modeling: a graphical representation of a process', 'Correct: "text → visual".'],
              ['Prototyping: an early working version of the system', 'A diagram is not a working version.'],
              ['A CASE tool generating program code from text', 'Nothing is generated.'],
              ['A decision table listing conditions and actions', 'A decision table lists conditions and actions, not a process flow.']],
          k: 'Text → visual = modeling.' },
        { id: 'c1l7q6', l: 'c1l7', q: 'Which capability belongs to CASE tools but not to modeling alone?',
          o: [['Generating program code from the design', 'Correct.'],
              ['Producing graphical representations of processes', 'Modeling does this too.'],
              ['Describing data, process, and network models', 'These are model types; modeling covers them.'],
              ['Being used in a team with users and managers', 'True of all the tools.']],
          k: 'CASE = framework + code generation + quality.' }
      ]
    },
    {
      id: 'c1l8',
      t: 'Development Methods: Structured (SDLC) vs Object-Oriented',
      src: 'Ch1 slides 20-27 (Figures 1-24, 1-25, 1-26) · Lecture 4 notes',
      body: `
<div class="two">
<div class="card"><h5>Structured analysis</h5><ul><li><b>Traditional</b>, time-tested, easy to understand</li><li>Organized into <b>phases</b> (the SDLC)</li><li>Uses <b>process models</b> to describe the system graphically</li><li>Data and processes are modeled <b>separately</b></li></ul></div>
<div class="card"><h5>Object-oriented analysis</h5><ul><li><b>More recent</b> method</li><li><b>Objects</b> represent actual people, things, or events</li><li>Combines <b>data and processes</b> into objects; built-in processes are <b>methods</b></li><li>Easy transition to O-O languages such as Java</li></ul></div>
</div>
<h4>The SDLC: five phases and their deliverables</h4>
<figure class="dg"><div class="cycle">
<div class="ph"><b>1. Systems planning</b><span>Preliminary investigation report</span></div>
<div class="ph"><b>2. Systems analysis</b><span>System requirements document</span></div>
<div class="ph"><b>3. Systems design</b><span>System design specification</span></div>
<div class="ph"><b>4. Systems implementation</b><span>Functioning system</span></div>
<div class="ph"><b>5. Systems security and support</b><span>Fully operational system</span></div>
</div><figcaption>Figure 1-25: the circular symbols indicate interaction among the phases</figcaption></figure>
<div class="tbl"><table>
<tr><th>Phase</th><th>What happens</th><th>Real example: a library loan system</th></tr>
<tr><td>Planning</td><td>Starts with a <b>systems request</b>; a <b>preliminary investigation</b> whose key part is a <b>feasibility study</b></td><td>The librarian requests a system; the analyst checks if it is worth doing and possible</td></tr>
<tr><td>Analysis</td><td>Build a <b>logical model</b> (data and process models) = <b>what</b> the system must do</td><td>"A member can borrow up to 5 books for 14 days; late returns are fined"</td></tr>
<tr><td>Design</td><td>Create a <b>physical model</b> = <b>how</b> it will be built; design the UI, outputs, inputs, processes</td><td>Database tables, the barcode scanner screen, the overdue-fine report layout</td></tr>
<tr><td>Implementation</td><td>Build, write and test programs, install</td><td>Code the system, test it, install it at the desk</td></tr>
<tr><td>Security and support</td><td>Keep it <b>secure, reliable, maintainable, scalable</b>; most systems need major updates or replacement after several years</td><td>Patches, backups, adding e-books support later</td></tr>
</table></div>
<div class="trap"><b>Logical (what) → analysis. Physical (how) → design.</b> "The system must calculate fines" is logical. "Fines are stored in a FINES table and shown on screen 4" is physical.</div>

<h4>From your notes (lecture 4): modified waterfall</h4>
<figure class="dg"><div class="wf"><span>Requirements</span><span>Analysis</span><span>Design</span><span>Implementation</span><span>Test</span><span>Deployment</span></div><figcaption>Each phase flows into the next; "modified" means arrows allow going back to an earlier phase when a problem is found. A typical project takes 9-12 months.</figcaption></figure>
<div class="note"><b>From your notes:</b> planning ends in a <b>business case</b> and a meeting; the <b>specification</b> describes the solution and how it fulfils the requirements; "an object can be anything".</div>

<h4>The figures</h4>
<ul><li><b>Figure 1-24</b> (Visible Analyst): a <b>process model</b> for school registration. The process REGISTER STUDENTS takes input from two sources (STUDENTS, COURSES) and produces CLASS ROSTERS. This is structured analysis.</li>
<li><b>Figure 1-26</b>: the class PERSON (Name, Address, Date of Birth). INSTRUCTOR and STUDENT <b>inherit</b> these and add their own: INSTRUCTOR (Office Location, Office Phone, E-mail), STUDENT (GPA, Advisor). This is O-O.</li></ul>`,
      quiz: [
        { id: 'c1l8q1', l: 'c1l8', q: 'At the end of which SDLC phase is the "system requirements document" delivered?',
          o: [['Systems analysis', 'Correct: the logical model is documented as the requirements.'],
              ['Systems planning', 'Planning delivers the preliminary investigation report.'],
              ['Systems design', 'Design delivers the system design specification.'],
              ['Systems implementation', 'Implementation delivers a functioning system.']],
          k: 'Learn each phase with its deliverable.' },
        { id: 'c1l8q2', l: 'c1l8', q: '"A member can borrow up to 5 books for 14 days, and late returns are fined." In which phase is this statement written?',
          o: [['Systems analysis, as part of the logical model', 'Correct: it says WHAT the system must do.'],
              ['Systems design, as part of the physical model', 'It says nothing about HOW (tables, screens).'],
              ['Systems planning, in the feasibility study', 'Planning decides whether to do the project, not the detailed rules.'],
              ['Systems implementation, in the program code', 'The rule is defined before it is coded.']],
          k: 'What → analysis. How → design.' },
        { id: 'c1l8q3', l: 'c1l8', q: 'The analyst decides fines are stored in a FINES table and shown on the librarian\'s screen with a red badge. Which phase is this?',
          o: [['Systems design', 'Correct: a physical decision about how the system is built.'],
              ['Systems analysis', 'Analysis defines that fines exist, not how they are stored or shown.'],
              ['Systems implementation', 'Implementation codes the design; the decision comes first.'],
              ['Systems security and support', 'That phase keeps the running system healthy.']],
          k: 'Tables and screens → physical → design.' },
        { id: 'c1l8q4', l: 'c1l8', q: 'In Figure 1-26, which property does STUDENT have that is NOT inherited from PERSON?',
          o: [['GPA', 'Correct: GPA belongs only to STUDENT.'],
              ['Date of Birth', 'Inherited from PERSON.'],
              ['Address', 'Inherited from PERSON.'],
              ['Name', 'Inherited from PERSON.']],
          k: 'Inherited = from the parent class.' },
        { id: 'c1l8q5', l: 'c1l8', q: 'Which feature describes object-oriented analysis rather than structured analysis?',
          o: [['Data and the processes that act on it are combined into objects with methods', 'Correct.'],
              ['The system is described graphically with process models such as Figure 1-24', 'That is structured analysis (Figure 1-24).'],
              ['The work is organized into the five sequential phases of the SDLC', 'That is structured analysis.'],
              ['It is the traditional, time-tested method that is easy to understand', 'Structured is traditional; O-O is more recent.']],
          k: 'O-O = objects combining data and processes.' },
        { id: 'c1l8q6', l: 'c1l8', q: 'Testing reveals a design flaw, and the team goes back to the design phase to fix it before continuing. Which model allows this?',
          o: [['A modified waterfall, because it allows returning to earlier phases', 'Correct: "modified" means arrows back to earlier phases.'],
              ['A pure waterfall, because each phase must be completed before testing', 'A pure waterfall does not go back.'],
              ['Object-oriented analysis, because objects can be reused across phases', 'Not about returning to a phase.'],
              ['Throwaway prototyping, because the flawed design is simply discarded', 'Nothing is discarded; the design is fixed.']],
          k: 'Modified = you can go back.' },
        { id: 'c1l8q7', l: 'c1l8', q: 'A system works today but cannot handle twice as many users next year. Which requirement of the security and support phase does it fail?',
          o: [['Scalable', 'Correct: it must handle growth.'],
              ['Reliable', 'Reliability is about working correctly; it works now.'],
              ['Secure', 'Nothing is said about attacks or access.'],
              ['Maintainable', 'Maintainability is about how easily it can be changed.']],
          k: 'Secure, reliable, maintainable, scalable.' }
      ]
    },
    {
      id: 'c1l9',
      t: 'Other Methods: Agile, JAD, RAD',
      src: 'Ch1 slide 28 · Lecture 4-5 notes',
      body: `
<p>The slide lists three "other development methods". The explanation is added so the idea makes sense.</p>
<div class="tbl"><table><tr><th>Method</th><th>Idea</th><th>Real example</th></tr>
<tr><td><b>Agile</b></td><td>Build in short iterations (sprints); each one delivers something working, and the client gives feedback continuously. Requirements are written as <b>user stories</b>.</td><td>A university app: sprint 1 delivers login, sprint 2 the timetable, sprint 3 adding a course. After each sprint, students try it.</td></tr>
<tr><td><b>JAD</b> (Joint Application Development)</td><td>Users, managers, and IT staff work <b>together in workshops</b> to define requirements quickly and accurately, instead of many separate interviews.</td><td>A two-day workshop where students, registration staff, and developers agree on the registration screens.</td></tr>
<tr><td><b>RAD</b> (Rapid Application Development)</td><td>Compresses development time by combining JAD-style user sessions with prototyping and fast iterations.</td><td>The same workshop, plus a working prototype refined every few days, delivers the full system in weeks.</td></tr></table></div>
<div class="note"><b>From your notes (lecture 5):</b> "JAD and RAD: they are connected (details: midterm question about it)". RAD uses JAD's intensive user participation to speed development up.</div>
<h4>User stories (from your notes, lecture 4)</h4>
<p>Format: <b>"As a [user], I want [ability], so that [benefit]"</b>, often with a measurable condition.</p>
<div class="ex"><b>Your notes' example:</b> "As a student, I want the ability to add a course to my schedule quickly" with the condition <b>3 seconds</b>. And "exceeds your expectations": you asked for a working phone and got one with a Snapdragon processor.</div>`,
      quiz: [
        { id: 'c1l9q1', l: 'c1l9', q: '"As a student, I want to add a course to my schedule within 3 seconds." This requirement is written as:',
          o: [['A user story, typical of Agile methods', 'Correct.'],
              ['A system design specification for developers', 'A specification describes how the system is built, in detail.'],
              ['The output of a JAD requirements workshop', 'JAD is a way of gathering requirements, not a sentence format.'],
              ['A logical process model of registration', 'A process model is a diagram.']],
          k: '"As a..., I want..." = user story.' },
        { id: 'c1l9q2', l: 'c1l9', q: 'Instead of interviewing 20 people separately, the analyst brings students, registration staff, and developers into a two-day workshop to agree on requirements. Which method is this?',
          o: [['Joint application development (JAD)', 'Correct.'],
              ['Rapid application development (RAD)', 'RAD uses such workshops but adds prototyping and fast iterations to build the system quickly.'],
              ['Agile sprints', 'Sprints deliver working increments; this is a requirements workshop.'],
              ['Structured analysis', 'Structured analysis is phase-based, not workshop-based.']],
          k: 'JAD = users + IT together in workshops.' },
        { id: 'c1l9q3', l: 'c1l9', q: 'How are JAD and RAD connected?',
          o: [['RAD speeds up development by using JAD-style user sessions together with prototyping', 'Correct.'],
              ['JAD is the coding phase of RAD, where developers build the screens users requested', 'JAD is about requirements, not coding.'],
              ['RAD replaces user involvement with automated tools so the system is built faster', 'The opposite: users are heavily involved.'],
              ['They are two names for the same Agile sprint, used by different textbooks', 'They are distinct methods.']],
          k: 'JAD (participation) is a building block of RAD (speed).' },
        { id: 'c1l9q4', l: 'c1l9', q: 'A team delivers a small working part of an app every two weeks, and the client reviews each part before the next one starts. Which method is this?',
          o: [['Agile', 'Correct: short iterations with continuous feedback.'],
              ['A modified waterfall', 'Waterfall delivers the whole system after sequential phases.'],
              ['JAD', 'JAD is a requirements workshop, not iterative delivery.'],
              ['Throwaway prototyping', 'Here the parts are kept and built on.']],
          k: 'Iterations + feedback = Agile.' }
      ]
    }
  ],
  groups: [
    { id: 'c1g1', after: 'c1l3', t: 'Practice: System, Meaning, IS', qs: [
      { id: 'c1g1q1', l: 'c1l3', q: 'A registration system takes student numbers and course codes and produces a timetable that advisors use today to approve schedules. Which mapping is correct?',
        o: [['Input = data · process = system · output = information for current decisions', 'Correct.'],
            ['Input = information · output = knowledge that advisors use for prediction', 'The numbers are raw (data), and the timetable supports current decisions (information).'],
            ['Input = data · output = knowledge, because the advisors understand the timetable', 'Using a timetable today is using information.'],
            ['Input = data · output = wisdom, because a decision is taken using it', 'The timetable is information; the approval is a separate action.']],
        k: 'Data → process → information.' },
      { id: 'c1g1q2', l: 'c1l2', q: 'Which option correctly classifies: (1) "sales dropped 20% in February" (2) "sales drop every February after the holidays" (3) "run a promotion every February"?',
        o: [['(1) information · (2) knowledge · (3) wisdom', 'Correct.'],
            ['(1) data · (2) information · (3) knowledge', 'Each is one level too low.'],
            ['(1) information · (2) wisdom · (3) knowledge', '(2) is an understanding; (3) is the action.'],
            ['(1) knowledge · (2) knowledge · (3) wisdom', '(1) is a current fact, so information.']],
        k: 'Current fact → pattern → action.' },
      { id: 'c1g1q3', l: 'c1l3', q: 'A clinic\'s new IS lets nurses record vital signs in seconds and later added a COVID screening field in one day without reprogramming. Which TWO characteristics are shown?',
        o: [['Effective processing and flexibility', 'Correct.'],
            ['Effective management and user satisfaction', 'Neither managers nor user feelings are described.'],
            ['Effective processing and effective management', 'Adding a field quickly is flexibility.'],
            ['Flexibility and user satisfaction', 'Recording quickly is processing.']],
        k: 'Speed → processing. Adapting → flexibility.' },
      { id: 'c1g1q4', l: 'c1l1', q: 'A university buys a powerful registration server but keeps manual paper registration, so the queues remain. Which explanation combines lessons 1 and 3?',
        o: [['The server is IT, not an information system; technology is useless without a system', 'Correct.'],
            ['The server is an information system, but its environment is too large to handle', 'A server alone is IT.'],
            ['The server is the system\'s goal, so it cannot also be one of the system\'s elements', 'The goal is fast registration; the server is an element.'],
            ['The server produces knowledge, but registration staff only need information', 'The server produces nothing on its own.']],
        k: 'IT ≠ IS.' }
    ]},
    { id: 'c1g2', after: 'c1l6', t: 'Practice: Organization, IT Department, Analyst', qs: [
      { id: 'c1g2q1', l: 'c1l4', q: 'An analyst designs reports for a bank. Which design fits the organizational model?',
        o: [['Summary dashboards for top managers and detailed transaction lists for operational staff', 'Correct.'],
            ['Detailed transaction lists for top managers so they can verify every branch', 'Top managers need summaries, not details.'],
            ['The same detailed report for every level, so that everyone sees identical numbers', 'Needs depend on the level.'],
            ['Summary dashboards for operational staff and detailed transaction lists for supervisors', 'Operational staff need the most detail.']],
        k: 'Detail grows as you go down.' },
      { id: 'c1g2q2', l: 'c1l5', q: 'A hospital system is about to launch. Which unit tests it against the specifications, and which unit then trains the nurses?',
        o: [['Quality Assurance; User Support', 'Correct.'],
            ['Application Development; Human Resources', 'Developers build; HR is not an IT unit.'],
            ['Systems Support and Security; User Support', 'QA, not systems support, tests against specifications.'],
            ['Quality Assurance; Application Development', 'Training is User Support.']],
        k: 'Test → QA. Train → User Support.' },
      { id: 'c1g2q3', l: 'c1l6', q: 'An analyst for a pharmacy chain understands databases well but keeps misunderstanding how prescriptions are approved. Which skill area is weak?',
        o: [['Business skills, including knowledge of the core domain', 'Correct.'],
            ['Technical knowledge of databases and data modeling', 'That is the strong area here.'],
            ['Communication skills for interviewing pharmacists', 'The issue is understanding the domain, not explaining.'],
            ['Certification in business analysis or ITIL', 'A certificate would not fix domain understanding.']],
        k: 'Domain understanding = business skills.' },
      { id: 'c1g2q4', l: 'c1l4', q: 'An operational employee notices a recurring fault that delays orders and raises costs. What should happen, and why?',
        o: [['Escalate it, because it affects time and money', 'Correct.'],
            ['Wait for the yearly strategic plan, because only top managers decide', 'The problem affects work now.'],
            ['Record it only in the TPS, because operational staff enter transactions', 'Recording is not enough when it affects time and money.'],
            ['Ignore it, because supervisors monitor faults', 'Escalating is part of the employee\'s responsibility.']],
        k: 'Time, quality, or money → escalate.' }
    ]},
    { id: 'c1g3', after: 'c1l9', t: 'Practice: Tools and Methods', qs: [
      { id: 'c1g3q1', l: 'c1l7', q: 'Requirements are vague, the client wants to see something early, and the plan is to keep improving the same version until it ships. Best choice?',
        o: [['Evolutionary prototyping', 'Correct.'],
            ['Throwaway prototyping', 'The version is kept, not discarded.'],
            ['A modified waterfall', 'Waterfall needs clear requirements up front.'],
            ['Modeling with diagrams', 'The client wants something working.']],
        k: 'Vague + keep improving → evolutionary.' },
      { id: 'c1g3q2', l: 'c1l8', q: 'Which pairing is correct?',
        o: [['Figure 1-24 shows structured analysis; Figure 1-26 shows object-oriented analysis', 'Correct: a process model vs classes and inheritance.'],
            ['Figure 1-24 shows object-oriented analysis; Figure 1-26 shows structured analysis', 'Reversed.'],
            ['Both figures show structured analysis', 'Figure 1-26 shows classes and inheritance.'],
            ['Both figures show object-oriented analysis', 'Figure 1-24 is a process model.']],
        k: 'Process model → structured. Classes → O-O.' },
      { id: 'c1g3q3', l: 'c1l9', q: 'A project must be delivered in 8 weeks. The team runs requirement workshops with users and refines a working prototype every few days. Which method is this?',
        o: [['Rapid application development (RAD)', 'Correct: JAD-style sessions + prototyping to go fast.'],
            ['Joint application development (JAD) alone', 'JAD covers the workshops, not the rapid prototyping and delivery.'],
            ['Structured analysis with a modified waterfall', 'Waterfall is sequential.'],
            ['Throwaway prototyping', 'The prototype is refined, not discarded.']],
        k: 'Workshops + prototypes + speed = RAD.' },
      { id: 'c1g3q4', l: 'c1l7', q: 'Which methodologies does a CASE tool such as Visible Analyst support?',
        o: [['Both structured analysis and object-oriented analysis', 'Correct.'],
            ['Only structured analysis, because it draws process models', 'It supports both.'],
            ['Only object-oriented analysis, because it generates code', 'It supports both.'],
            ['Only Agile methods', 'Not stated.']],
        k: 'CASE supports both.' }
    ]}
  ],
  exam: [
    { id: 'c1x1', l: 'c1l2', q: 'Which ordering goes from LOWEST to HIGHEST meaning?',
      o: [['Data, Information, Knowledge, Wisdom', 'Correct.'],
          ['Data, Knowledge, Information, Wisdom', 'Information comes before knowledge.'],
          ['Information, Data, Knowledge, Wisdom', 'Data comes first.'],
          ['Data, Information, Wisdom, Knowledge', 'Wisdom is above knowledge.']],
      k: 'D < I < K < W.' },
    { id: 'c1x2', l: 'c1l8', q: 'Which deliverable belongs to systems implementation?',
      o: [['A completely functioning and documented information system', 'Correct.'],
          ['A system design specification approved by users', 'Design.'],
          ['A preliminary investigation report with feasibility', 'Planning.'],
          ['A system requirements document with the logical model', 'Analysis.']],
      k: 'Implementation → functioning system.' },
    { id: 'c1x3', l: 'c1l8', q: 'In which SDLC phase is the feasibility study usually conducted?',
      o: [['Systems planning, as the key part of the preliminary investigation', 'Correct.'],
          ['Systems analysis, while building the logical data and process model', 'Feasibility is decided before analysis begins.'],
          ['Systems design, while choosing between physical model options', 'Too late to decide whether to do the project.'],
          ['Systems implementation, while writing and testing the programs', 'Far too late.']],
      k: 'Planning → preliminary investigation → feasibility.' },
    { id: 'c1x4', l: 'c1l8', q: 'A well-designed system must be all of the following EXCEPT:',
      o: [['Inexpensive', 'Correct: not on the list. The list is secure, reliable, maintainable, scalable.'],
          ['Secure', 'On the list.'],
          ['Maintainable', 'On the list.'],
          ['Scalable', 'On the list.']],
      k: 'Secure, reliable, maintainable, scalable.' },
    { id: 'c1x5', l: 'c1l4', q: 'Which information need belongs to middle managers rather than top managers?',
      o: [['Detailed monthly performance figures to give feedback to supervisors', 'Correct.'],
          ['Economic forecasts for the region over the next five to ten years', 'Top managers.'],
          ['Competitive threats from new companies entering the telecom market', 'Top managers.'],
          ['Upcoming government regulations that will affect the whole industry', 'Top managers.']],
      k: 'Middle = more detail + feedback to supervisors.' },
    { id: 'c1x6', l: 'c1l7', q: 'Which statement about prototyping is TRUE?',
      o: [['It speeds up development and works best when requirements are not known in detail', 'Correct.'],
          ['It slows development down, but it guarantees decisions are made later', 'It speeds development, and the risk is decisions made too early.'],
          ['It works best when requirements are fully documented and signed off', 'The opposite.'],
          ['It is used only after the system is implemented, to test the interface', 'It is used early.']],
      k: 'Fast, for unclear requirements; risk of early decisions.' },
    { id: 'c1x7', l: 'c1l5', q: 'Which responsibility belongs to Web Support rather than Network Administration?',
      o: [['Monitoring website traffic and linking web applications to company systems', 'Correct.'],
          ['Maintaining and securing the company\'s internal network and its equipment', 'Network Administration.'],
          ['Supporting the network hardware and software used across the company', 'Network Administration.'],
          ['Repairing the campus Wi-Fi when students cannot connect to it', 'Network Administration.']],
      k: 'Web pages and traffic → Web Support.' },
    { id: 'c1x8', l: 'c1l1', q: '"Elements interacting with each other to reach goals." Which property is missing from this definition?',
      o: [['The environment, and the interaction with it', 'Correct.'],
          ['The elements that make up the system', 'Present.'],
          ['The predefined goals of the system', 'Present.'],
          ['The interaction among the elements themselves', 'Present.']],
      k: 'Four properties.' },
    { id: 'c1x9', l: 'c1l9', q: 'Which method is listed under "Other Development Methods"?',
      o: [['Rapid application development (RAD)', 'Correct.'],
          ['Structured analysis using the SDLC', 'A main method.'],
          ['Object-oriented analysis with classes', 'A main method.'],
          ['Modeling with Microsoft Visio', 'A tool.']],
      k: 'Other: Agile, JAD, RAD.' },
    { id: 'c1x10', l: 'c1l6', q: 'Which career factor is the least important when choosing a systems analyst job?',
      o: [['The job title', 'Correct.'],
          ['Future growth', 'Important.'],
          ['Corporate culture', 'Important.'],
          ['Company size', 'Important.']],
      k: 'Job title is the least important.' },
    { id: 'c1x11', l: 'c1l8', open: true, q: 'Describe the difference between structured analysis and object-oriented analysis, and give one example of each from the figures.',
      m: '<p><b>Structured analysis</b>: a traditional, time-tested method organized into SDLC phases, using process models to describe the system graphically; data and processes are modeled separately. Example: Figure 1-24, the REGISTER STUDENTS process taking STUDENTS and COURSES as input and producing CLASS ROSTERS.</p><p><b>Object-oriented analysis</b>: a newer method that combines data and processes into objects (people, things, events), with built-in processes called methods and an easy transition to O-O languages such as Java. Example: Figure 1-26, the PERSON class with INSTRUCTOR and STUDENT inheriting Name, Address, and Date of Birth.</p>' },
    { id: 'c1x12', l: 'c1l7', open: true, q: 'Explain the two types of prototyping, and state one disadvantage of prototyping, with an example.',
      m: '<p><b>Throwaway</b>: built only to understand requirements with the customer, then discarded. <b>Evolutionary</b>: refined step by step until it becomes the final product.</p><p><b>Disadvantage</b>: important decisions might be made too early, before business or IT issues are thoroughly understood. Example: users approve a prototype\'s design, and the team later finds it cannot meet the company\'s security rules.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 1, f: 'System', b: 'Elements in an environment that interact with each other and with the environment to reach predefined goals.' },
  { c: 1, f: 'Element vs environment', b: 'Element: inside, changeable by the owner (the app, the staff). Environment: outside, affects the system, not controlled (laws, weather, competitors).' },
  { c: 1, f: 'Data', b: 'Raw facts with no meaning; not useful in decision making. Sorting alone does not make it information.' },
  { c: 1, f: 'Information', b: 'Processed data; useful in <b>current</b> decision making.' },
  { c: 1, f: 'Knowledge', b: 'Based on experience; useful in <b>future</b> decision making (prediction). An understanding, not an action.' },
  { c: 1, f: 'Wisdom', b: 'Based on knowledge; the <b>highest meaning</b>; taking action.' },
  { c: 1, f: 'Information technology', b: 'Hardware + software + services used to manage, communicate, and share information.' },
  { c: 1, f: 'Information system', b: 'A system that uses IT to support business functions: day-to-day tasks and better decisions.' },
  { c: 1, f: 'Characteristics of an IS', b: 'Effective processing (speed, accuracy) · effective management (helps managers control) · flexibility (adapts to change) · user satisfaction (users rely on it).' },
  { c: 1, f: 'Top managers', b: 'Long-range strategic plans, mission and goals, 5-10 years; forecasts, trends, threats, government issues.' },
  { c: 1, f: 'Middle managers and knowledge workers', b: 'Short-term plans (divide the roadmap); direction, resources, feedback to supervisors; more detail than top.' },
  { c: 1, f: 'Operational employees', b: 'Day-to-day work; rely on transaction processing systems; escalate problems affecting time, quality, money.' },
  { c: 1, f: 'SMARTER goals', b: 'Specific, Measurable, Achievable, Realistic, Time-bound (+ Evaluate, Review). A vision is a direction, not a goal.' },
  { c: 1, f: 'IT department units', b: 'Application development, systems support & security, user support (training), database administration (backup, access), network administration, web support (traffic), QA (testing).' },
  { c: 1, f: 'Most valuable analyst skill', b: 'The ability to listen.' },
  { c: 1, f: 'Types of employee motivation', b: 'Financial (pay), self-actualization (growth, potential), job-oriented (the work itself).' },
  { c: 1, f: 'Throwaway vs evolutionary prototype', b: 'Throwaway: to understand requirements, then discarded. Evolutionary: refined into the final product.' },
  { c: 1, f: 'Prototyping disadvantage', b: 'Important decisions may be made too early, before issues are fully understood.' },
  { c: 1, f: 'CASE tools', b: 'Framework + code generation + defect-free software; supports structured and O-O. Example: Visible Analyst.' },
  { c: 1, f: 'SDLC phases and deliverables', b: 'Planning → preliminary investigation report · Analysis → system requirements document · Design → system design specification · Implementation → functioning system · Security and support → fully operational system.' },
  { c: 1, f: 'Logical vs physical model', b: 'Logical = what (analysis). Physical = how (design).' },
  { c: 1, f: 'JAD / RAD / Agile', b: 'JAD: workshops with users and IT. RAD: JAD-style sessions + prototyping to go fast. Agile: short iterations, user stories, continuous feedback.' }
);
