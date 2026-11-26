/* Chapter 1: Introduction to Information Systems
   Sources: Ch1 slides, annotated slide screenshots, notebook lectures 2-4.
   Question format: o[0] is always the correct option (the app shuffles). */
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
<p>A <b>system</b> is a group of parts working together to reach a goal. The slide gives the formal definition:</p>
<blockquote>A collection of <b>Elements</b> in an <b>Environment</b> such that there is an <b>Interaction</b> among the elements and between the elements and the environment to reach the predefined <b>Goals</b>.</blockquote>
<p>The four <b>system properties</b> come straight out of this definition:</p>
<div class="tbl"><table>
<tr><th>Property</th><th>Meaning</th><th>Example: university registration</th></tr>
<tr><td>Elements</td><td>The parts of the system</td><td>Students, courses, the server, registration staff</td></tr>
<tr><td>Environment</td><td>What surrounds the system and affects it</td><td>The university, Ministry rules, the semester calendar</td></tr>
<tr><td>Interaction</td><td>Elements act on each other and on the environment</td><td>A student picks a course, the server checks seats, rules limit credit hours</td></tr>
<tr><td>Goals</td><td>The predefined purpose</td><td>Every student registered with no clashes</td></tr>
</table></div>
<div class="trap"><b>Watch out:</b> interaction goes two ways: among the elements <u>and</u> between the elements and the environment. A question may drop one of them and ask if the definition is complete.</div>
<h4>Input → Process → Output</h4>
<figure class="dg"><div class="flow"><div class="bx">Input<br><small>Data</small></div><div class="ar">→</div><div class="bx hi">System<br><small>Process</small></div><div class="ar">→</div><div class="bx">Output<br><small>Information</small></div></div><figcaption>From your notes, lecture 2</figcaption></figure>
<div class="note"><b>From your notes (lecture 2):</b> "System: group of components working together to achieve a goal" and "Technology is useless without a system". The best hardware in the world reaches no goal if nothing organizes how it is used.</div>
<div class="ex"><b>Real example:</b> a restaurant buys the best oven (technology) but has no way to take and queue orders (system). Orders get lost. The oven alone solves nothing.</div>`,
      quiz: [
        { id: 'c1l1q1', l: 'c1l1', q: 'A hospital buys the latest MRI machines but has no procedure for scheduling patients, so machines stay idle while patients wait. Which idea best explains this?',
          o: [['Technology is useless without a system', 'Correct. The technology exists, but no system organizes the elements toward the goal (serving patients).'],
              ['The hospital lacks an environment', 'The environment exists (the hospital, the patients). The missing part is organized interaction.'],
              ['Data is not useful in decision making', 'That describes the Data level of meaning, not technology versus systems.'],
              ['The machines are the goal of the system', 'The machines are elements. The goal is serving patients.']],
          k: 'Technology is only one element. Without organized interaction there is no system.' },
        { id: 'c1l1q2', l: 'c1l1', q: 'Which definition of a system is COMPLETE?',
          o: [['Elements in an environment interacting among themselves and with the environment to reach predefined goals', 'Correct. All four properties are there, with interaction in both directions.'],
              ['Elements interacting among themselves to reach goals', 'Incomplete: no environment and no interaction with it.'],
              ['Hardware, software, and services used to manage and share information', 'That is the definition of information technology.'],
              ['A set of components that store raw facts for later processing', 'This describes data storage; there is no goal or interaction.']],
          k: 'Complete definition = all 4 properties.' },
        { id: 'c1l1q3', l: 'c1l1', q: 'In a university registration system, Ministry of Higher Education rules that cap credit hours per semester are best classified as part of the system\'s:',
          o: [['Environment', 'Correct. The rules come from outside and affect the system, and the system does not control them.'],
              ['Elements', 'Elements are the parts inside the system (students, courses, server).'],
              ['Goals', 'The goal is correct registration; the rules constrain it.'],
              ['Output', 'Output is information the system produces, such as a timetable.']],
          k: 'Outside the system but affecting it = Environment.' }
      ]
    },
    {
      id: 'c1l2',
      t: 'Levels of Meaning: Data, Information, Knowledge, Wisdom',
      src: 'Ch1 slide 4 · annotated slide · Lecture 2 notes',
      body: `
<p>The slide arranges meaning in levels. Each level builds on the one below it:</p>
<figure class="dg"><div class="stair">
<div class="st s1"><b>Data</b><span>Raw facts · no meaning · not useful in decision making</span></div>
<div class="st s2"><b>Information</b><span>Processed data · useful in <u>current</u> decision making</span></div>
<div class="st s3"><b>Knowledge</b><span>Based on experience · useful in <u>future</u> decision making (prediction)</span></div>
<div class="st s4"><b>Wisdom</b><span>Based on knowledge · the highest meaning · taking action</span></div>
</div><figcaption>The slide, with the lecturer's corrections</figcaption></figure>
<div class="trap"><b>Most important point:</b> the original slide says Knowledge is "the highest meaning". The lecturer <u>crossed that out</u>, wrote "based on experience", and added <b>Wisdom</b> above it ("based on knowledge"). Your notes confirm: "Wisdom (highest meaning)". In the exam, <b>Wisdom is the highest level</b>, not Knowledge.</div>
<h4>Example from your notes</h4>
<div class="tbl"><table>
<tr><th>Level</th><th>Example</th></tr>
<tr><td>Data</td><td><code>2024832</code>: a number on its own, meaning nothing</td></tr>
<tr><td>Information</td><td>Alex 65, Sara 95: the numbers now mean something (grades), and you can decide now: Sara has the top grade</td></tr>
<tr><td>Knowledge</td><td>"Based on what you know": from experience, students who miss many classes usually score lower, so you can predict</td></tr>
<tr><td>Wisdom</td><td>"Making decisions based on what you know" and "take actions to improve them": you schedule review sessions for weaker students</td></tr>
</table></div>
<div class="note"><b>From your notes:</b> "In industry: decisions are based on data and information. Once you are using experience" you are at Knowledge.</div>
<div class="ex"><b>Business example:</b> an online store. Data: every purchase record. Information: "winter sales dropped 20%". Knowledge: "sales always drop in February because people spent on the holidays". Wisdom: "run promotions in February and reduce stock before it".</div>`,
      quiz: [
        { id: 'c1l2q1', l: 'c1l2', q: 'Which level of meaning represents "the highest meaning"?',
          o: [['Wisdom', 'Correct. Wisdom is the highest level: it is based on knowledge and leads to action.'],
              ['Knowledge', 'Knowledge is based on experience and used for prediction; Wisdom is above it.'],
              ['Information', 'Information is useful for current decisions only.'],
              ['Data', 'Data is the lowest level: raw facts with no meaning.']],
          k: 'Order: Data < Information < Knowledge < Wisdom.' },
        { id: 'c1l2q2', l: 'c1l2', q: 'A sales manager uses five years of past sales patterns to PREDICT next quarter\'s demand. This is mainly using:',
          o: [['Knowledge', 'Correct. Knowledge is useful in future decision making (prediction) and is built on experience.'],
              ['Information', 'Information supports <u>current</u> decisions. Predicting the future is Knowledge.'],
              ['Data', 'The manager is using patterns and experience, not raw numbers.'],
              ['Raw facts', 'That is just a description of Data.']],
          k: 'Keyword: predict / future → Knowledge.' },
        { id: 'c1l2q3', l: 'c1l2', q: 'Which statement about Information is CORRECT?',
          o: [['It is processed data that is useful in current decision making', 'Correct, word for word from the slide.'],
              ['It is raw facts that are not useful in decision making', 'That describes Data.'],
              ['It is useful in future decision making (prediction)', 'That describes Knowledge.'],
              ['It is the highest level of meaning', 'That is Wisdom.']],
          k: 'Current → Information. Future → Knowledge.' }
      ]
    },
    {
      id: 'c1l3',
      t: 'Information Technology vs Information System',
      src: 'Ch1 slides 5-6 · Lecture 2 notes',
      body: `
<p>These two are easy to mix up, but the difference matters:</p>
<div class="two">
<div class="card"><h5>Information Technology (IT)</h5><p>The combination of <b>hardware, software, and services</b> that people use to manage, communicate, and share information.</p><p>In short: <b>the tools</b>.</p></div>
<div class="card"><h5>Information System (IS)</h5><p>A system that <b>uses information technology</b> to support <b>business functions</b> such as HR, accounting, and marketing. It can handle <b>day-to-day tasks</b> or help managers make <b>better decisions</b>.</p><p>In short: <b>the system that uses the tools</b> to serve the business.</p></div>
</div>
<div class="note"><b>From your notes:</b> "IT helps the information system" and "distinguish between an information system and a system". An IS is a special kind of system whose purpose is producing information for the business. Hardware alone is not an information system because it produces no information.</div>
<div class="ex"><b>Example:</b> laptops, an Oracle database, and the internet are IT. The payroll system that uses them to calculate salaries every month is an information system supporting the HR and accounting functions.</div>
<h4>Characteristics of an IS</h4>
<ul><li><b>Effective processing</b>: handles data efficiently.</li><li><b>Effective management</b>: supports management.</li><li><b>Flexibility</b>: adapts to change.</li><li><b>User satisfaction</b>: users are happy with it.</li></ul>
<div class="trap"><b>Watch out:</b> an IS does two things: <b>day-to-day tasks</b> (like entering orders) <u>and</u> <b>better decisions</b> for managers. A question may ask "which is NOT a role of an IS" with an option like "replaces business functions".</div>`,
      quiz: [
        { id: 'c1l3q1', l: 'c1l3', q: 'A company buys new servers, Microsoft Office licenses, and an internet subscription. What has it acquired so far?',
          o: [['Information technology', 'Correct. Hardware + software + services = IT by definition.'],
              ['An information system', 'Not yet. An IS is the system that <u>uses</u> these tools to support a business function.'],
              ['A business function', 'Business functions are departments such as HR and accounting.'],
              ['Wisdom', 'Unrelated; that is a level of meaning.']],
          k: 'IT = tools. IS = the system using them for the business.' },
        { id: 'c1l3q2', l: 'c1l3', q: 'Which is NOT listed as a characteristic of an information system?',
          o: [['Low cost', 'Correct, it is not on the list. The list is effective processing, effective management, flexibility, user satisfaction.'],
              ['Flexibility', 'On the list.'],
              ['User satisfaction', 'On the list.'],
              ['Effective processing', 'On the list.']],
          k: 'Learn the four as a set.' },
        { id: 'c1l3q3', l: 'c1l3', q: 'An information system differs from a general system mainly because it:',
          o: [['Uses IT to produce information that supports business functions and decisions', 'Correct. That is the heart of the IS definition.'],
              ['Has elements and an environment', 'Every system has these.'],
              ['Has a predefined goal', 'Every system has a goal.'],
              ['Is made only of hardware', 'Hardware alone is not an IS.']],
          k: 'IS = system + IT + information for the business.' }
      ]
    },
    {
      id: 'c1l4',
      t: 'Organizational Levels and Business Functions',
      src: 'Ch1 slides 7-9 (Figure 1-20) · annotated slides · Lecture 2 notes',
      body: `
<p>The slide asks: <b>what information do users need?</b> Your notes answer: <b>it depends on the level of the user</b>.</p>
<figure class="dg"><div class="pyr">
<div class="pl p1"><b>Top managers</b><span>long-range strategic plans · 5-10 years</span></div>
<div class="pl p2"><b>Middle managers and knowledge workers</b><span>short-term plans · 2-3 years</span></div>
<div class="pl p3"><b>Supervisors and team leaders</b><span>oversee operational employees</span></div>
<div class="pl p4"><b>Operational employees</b><span>day-to-day · transaction processing systems</span></div>
</div>
<p class="side">The lower the level, the <b>more detailed</b> information users need.</p>
<figcaption>Figure 1-20, plus the lecturer's note "the lower, the more information they need"</figcaption></figure>
<div class="tbl"><table>
<tr><th>Level</th><th>What they do (slides)</th><th>From your notes</th></tr>
<tr><td>Top managers</td><td>Develop long-range <b>strategic plans</b> that define the company's mission and goals. Need information on economic forecasts, technology trends, competitive threats, governmental issues.</td><td>Vision and mission. A vision such as "for a better tomorrow": <b>you will never fully achieve it</b>; it is a direction. Goals should be SMARTER. "Managers don't need details."</td></tr>
<tr><td>Middle managers and knowledge workers</td><td>Provide direction, resources, and performance feedback to supervisors and team leaders. Need <b>more detailed</b> information than top managers.</td><td>Short-term plans: "take the roadmap and divide it". Orange example: top management sets "provide fiber" as the roadmap; middle management splits it into plans.</td></tr>
<tr><td>Supervisors and team leaders</td><td>Oversee operational employees and carry out day-to-day functions.</td><td></td></tr>
<tr><td>Operational employees</td><td>Rely on <b>transaction processing systems</b> to enter and receive the data they need.</td><td>Day to day. An employee who sees a "rock" (a problem) that affects time, quality, or money should escalate it.</td></tr>
</table></div>
<h4>SMARTER goals (from your notes)</h4>
<p><b>S</b>pecific, <b>M</b>easurable, <b>A</b>chievable (something doable), <b>R</b>ealistic (based on your own limitations), <b>T</b>ime-bound. The extra <b>E</b> and <b>R</b> usually stand for Evaluate and Review <span class="muted">(general meaning; your notes list the first five)</span>.</p>
<h4>Business functions (the wheel)</h4>
<p>The figure's wheel shows IT, Human Resources, Accounting, Sales, Marketing, and Production. The lecturer labeled them <b>support functions</b> in the organization. Every function runs through every level.</p>
<div class="note"><b>From your notes:</b> "Core domain: when working with a system like healthcare, you need to know the basics of the domain." An analyst must understand the business area, not only the technology.</div>
<div class="trap"><b>Trap:</b> higher level → less detail (summaries). Middle managers need <b>more detailed</b> information than top managers. Don't reverse it.</div>`,
      quiz: [
        { id: 'c1l4q1', l: 'c1l4', q: 'Orange decides to "provide fiber to every home within 5 years". A manager then splits this into yearly regional rollout plans. Who most likely split the plan?',
          o: [['Middle managers and knowledge workers', 'Correct. "Take the roadmap and divide it" into short-term plans is middle management\'s job.'],
              ['Top managers', 'Top managers set the long-range roadmap; they did not split it.'],
              ['Operational employees', 'They work day to day, not on planning.'],
              ['The IT department', 'IT is a business function, not a management level in the pyramid.']],
          k: 'Top = long-range strategy. Middle = turning it into short-term plans.' },
        { id: 'c1l4q2', l: 'c1l4', q: 'Which group relies MOST on transaction processing systems to enter and receive the data they need?',
          o: [['Operational employees', 'Correct, word for word from slide 9.'],
              ['Top managers', 'They need summarized information on forecasts and trends.'],
              ['Middle managers', 'They need detailed reports, but they don\'t enter transactions daily.'],
              ['Knowledge workers', 'They sit with middle management.']],
          k: 'Day-to-day + TPS → operational.' },
        { id: 'c1l4q3', l: 'c1l4', q: 'Based on Figure 1-20, which statement is TRUE?',
          o: [['The lower the organizational level, the more detailed information users need', 'Correct.'],
              ['Top managers need the most detailed information', 'The opposite: "managers don\'t need details".'],
              ['Business functions exist only at the top level', 'Every function runs through every level.'],
              ['A company vision must be fully achievable within a year', 'A vision is a direction: "you will never achieve it".']],
          k: 'Detail increases as you go down the pyramid.' }
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
<div class="tbl"><table>
<tr><th>Unit</th><th>Responsibility</th></tr>
<tr><td>Application Development</td><td>Systems are developed by <b>teams</b> of users, managers, and IT staff</td></tr>
<tr><td>Systems Support &amp; Security</td><td>Vital <b>protection and maintenance</b> services</td></tr>
<tr><td>User Support</td><td>Technical information, <b>training</b>, and any needed support for users</td></tr>
<tr><td>Database Administration</td><td>Data design, management, security, <b>backup</b>, and access</td></tr>
<tr><td>Network Administration</td><td>Hardware and software maintenance, support, and security for the network</td></tr>
<tr><td>Web Support</td><td>Design and build <b>web pages</b>, monitor traffic, manage hardware and software, link web apps to company systems</td></tr>
<tr><td>Quality Assurance</td><td>Reviews and <b>tests</b> all applications and system changes against specifications and quality standards</td></tr>
</table></div>
<div class="note"><b>From your notes:</b> "Some organizations have one IT employee, others have none. <b>It depends.</b>" The size of the department follows the size of the company, which matches the figure caption.</div>
<div class="ex"><b>Example:</b> a large bank has a team per unit. A small accounting office has one person who fixes the network, runs backups, and trains staff.</div>
<div class="trap"><b>Tell them apart:</b> backup → Database Administration. Training → User Support. Testing changes → QA. Protection and maintenance → Systems Support &amp; Security.</div>`,
      quiz: [
        { id: 'c1l5q1', l: 'c1l5', q: 'Before a payroll update goes live, a team checks that it meets the specifications and software quality standards. Which IT unit is this?',
          o: [['Quality Assurance', 'Correct. QA reviews and tests all applications and system changes.'],
              ['Application Development', 'They built the update; they don\'t verify it against standards.'],
              ['User Support', 'They train and help users.'],
              ['Systems Support and Security', 'They handle protection and maintenance.']],
          k: 'Verify specifications + quality standards → QA.' },
        { id: 'c1l5q2', l: 'c1l5', q: 'Which unit is responsible for data backup and controlling access to the company database?',
          o: [['Database Administration', 'Correct: data design, management, security, backup, access.'],
              ['Network Administration', 'Responsible for the network, not the data.'],
              ['Web Support', 'Responsible for web pages.'],
              ['User Support', 'Responsible for training and support.']],
          k: 'Backup → DBA.' },
        { id: 'c1l5q3', l: 'c1l5', q: 'A small company has one IT employee who handles networks, backups, and user training. This is:',
          o: [['Acceptable, because depending on size, functions may be combined into fewer teams', 'Correct. It depends on the size of the company.'],
              ['Wrong, because every company must have seven separate IT units', 'The figure says units "might be combined".'],
              ['Wrong, because user training belongs to HR', 'User Support is part of IT.'],
              ['Only allowed if there is no database', 'No such rule.']],
          k: 'Department size depends on company size.' }
      ]
    },
    {
      id: 'c1l6',
      t: 'The Systems Analyst',
      src: 'Ch1 slides 13-15 · Lecture 2-3 notes',
      body: `
<p>A <b>systems analyst</b> understands a business problem and designs the technical solution for it. They are the bridge between users and developers.</p>
<div class="two">
<div class="card"><h5>Role</h5><ul><li>Builds models, diagrams, decision tables, and other descriptive tools</li><li><b>Most valuable skill: the ability to listen</b></li><li>An effective analyst <b>involves users in every step</b></li></ul></div>
<div class="card"><h5>Knowledge, skills, and education</h5><ul><li>Technical knowledge</li><li>Communication skills</li><li>Business skills</li><li>Critical thinking skills</li><li>Education</li><li>Certification</li></ul></div>
</div>
<h4>Characteristics (slide 14)</h4>
<ul><li>Develop a project plan</li><li>Involve users and listen carefully to them</li><li>Use project management tools to identify tasks and milestones</li><li>Develop accurate cost and benefit information</li><li>Remain flexible</li></ul>
<h4>Career opportunities (slide 15)</h4>
<p>Companies need analysts to apply new IT, and e-commerce keeps raising demand. <b>What's important?</b> Job titles, company organization, company size, salary, location and future growth, corporate culture.</p>
<div class="note"><b>From your notes:</b><ul><li>"Sketching on paper is a tool."</li><li>"Get sign-off (try to keep everything documented)": get written approval from the client and document everything.</li><li>"Job title isn't so important": what you do matters more than the title. AI was mentioned as a change in the job market.</li><li>Types of employee motivation: <b>1. Financial</b>, <b>2. Self-actualization</b>, <b>3. Job-oriented</b>.</li></ul></div>
<div class="ex"><b>Why sign-off matters:</b> in a meeting the client says "I want a monthly report". After delivery they say "I said weekly". With a signed document the dispute is settled quickly. Without it, you redo the work at your own cost.</div>`,
      quiz: [
        { id: 'c1l6q1', l: 'c1l6', q: 'What is a systems analyst\'s MOST valuable skill?',
          o: [['The ability to listen', 'Correct, word for word from slide 13.'],
              ['Programming in several languages', 'Technical knowledge matters, but it is not the most valuable skill.'],
              ['Obtaining certifications', 'Listed, but not "most valuable".'],
              ['Drawing diagrams with CASE tools', 'A tool, not the key skill.']],
          k: 'Listen and involve users.' },
        { id: 'c1l6q2', l: 'c1l6', q: 'After a requirements meeting, an analyst writes down the agreed requirements and asks the client to approve them in writing. Which practice is this?',
          o: [['Getting sign-off and keeping everything documented', 'Correct: "get sign-off (try to keep everything documented)".'],
              ['Remaining flexible', 'Flexibility matters, but this situation is about documentation and approval.'],
              ['Prototyping', 'No working version was built.'],
              ['Self-actualization', 'That is a type of employee motivation.']],
          k: 'Sign-off = documented approval.' },
        { id: 'c1l6q3', l: 'c1l6', q: 'An employee stays in a lower-paid job because it lets them grow and reach their full potential. Which type of motivation is this?',
          o: [['Self-actualization', 'Correct. Personal growth matters more than pay here.'],
              ['Financial', 'They accepted lower pay.'],
              ['Job-oriented', 'Close, but "reach full potential" is the definition of self-actualization.'],
              ['Corporate culture', 'That is a career factor, not a motivation type.']],
          k: 'Three types: financial, self-actualization, job-oriented.' }
      ]
    },
    {
      id: 'c1l7',
      t: 'Development Tools: Modeling, Prototyping, CASE',
      src: 'Ch1 slides 16-19 · annotated prototyping slide · Lecture 3 notes',
      body: `
<p>Analysts must know a variety of techniques and tools to plan, design, and implement systems. They use them <b>in a team</b>: users, managers, and IT staff all contribute to the design.</p>
<h4>1. Modeling</h4>
<p>Produces a <b>graphical representation</b> of a concept or process that developers can analyze, test, and modify. Model types include business, data, object, network, and process. A popular tool is <b>Microsoft Visio</b>.</p>
<div class="note"><b>From your notes:</b> modeling = "text → visual". You turn words into a diagram.</div>
<h4>2. Prototyping</h4>
<p>An early <b>working version</b> of an information system. It lets you examine input, output, and user interfaces before final decisions. It is built, tested, and reworked until the outcome is acceptable. It <b>works best when requirements are not known in detail</b>, as an iterative trial-and-error process between developer and client.</p>
<figure class="dg"><div class="split"><div class="bx hi">Prototype</div><div class="arms">
<div class="arm"><b>Throwaway</b> ("throw it away")<br>Purpose: <u>understand requirements</u>. Show it to the customer, learn what they want, then discard it and build the real system from scratch.</div>
<div class="arm"><b>Evolutionary</b><br>Improved step by step until it becomes the <u>final product</u>. You have a good grasp of the requirements, but some points are unclear, so you keep editing.</div>
</div></div><figcaption>The lecturer's note on the slide + your notes, lecture 3</figcaption></figure>
<div class="trap"><b>Key disadvantage:</b> "important decisions might be made <b>too early</b>, before business or IT issues are thoroughly understood." This is a classic exam question.</div>
<h4>3. CASE tools</h4>
<p><b>Computer-Aided Systems Engineering</b>: powerful software that helps analysts develop and maintain systems.</p>
<ul><li>Provides an overall framework and <b>can generate program code</b>, which speeds implementation</li><li>Helps ensure high-quality, defect-free software</li><li>Supports structured <u>and</u> object-oriented methodologies</li><li>Example: <b>Visible Analyst</b></li></ul>
<div class="ex"><b>Example:</b> a delivery app. You mock up screens in Figma and let 5 users try them: a prototype. If you throw the mock-ups away and build the app from scratch: throwaway. If you keep extending the same code until it becomes the final app: evolutionary.</div>`,
      quiz: [
        { id: 'c1l7q1', l: 'c1l7', q: 'A client cannot clearly describe what they want. The team builds a quick mock version only to discover the real requirements, then discards it and builds the real system. This is:',
          o: [['Throwaway prototyping', 'Correct. The purpose is understanding requirements, then it is thrown away.'],
              ['Evolutionary prototyping', 'In evolutionary prototyping the version itself becomes the final product; it is not discarded.'],
              ['Modeling', 'Modeling produces diagrams, not a working version.'],
              ['CASE tool code generation', 'No code generation is involved.']],
          k: 'Discarded → throwaway. Becomes final → evolutionary.' },
        { id: 'c1l7q2', l: 'c1l7', q: 'What is the main DISADVANTAGE of prototyping?',
          o: [['Important decisions might be made too early, before issues are thoroughly understood', 'Correct, word for word from slide 18.'],
              ['It slows down the development process', 'The slide says it speeds it up.'],
              ['It works only when requirements are fully known', 'It works best when requirements are <u>not</u> known in detail.'],
              ['It cannot examine user interfaces', 'It examines input, output, and user interfaces.']],
          k: 'Prototyping is fast and useful, but risks early decisions.' },
        { id: 'c1l7q3', l: 'c1l7', q: 'Which feature belongs to CASE tools but NOT to modeling alone?',
          o: [['Generating program code to speed up implementation', 'Correct. CASE tools can generate code; modeling only produces graphical representations.'],
              ['Producing a graphical representation of a process', 'That is the definition of modeling.'],
              ['Being used by a systems analyst', 'Analysts use both.'],
              ['Describing data, process, and network models', 'Those are model types.']],
          k: 'CASE = framework + code generation + quality.' }
      ]
    },
    {
      id: 'c1l8',
      t: 'Development Methods: Structured (SDLC) vs Object-Oriented',
      src: 'Ch1 slides 20-27 (Figures 1-24, 1-25, 1-26) · Lecture 4 notes',
      body: `
<div class="two">
<div class="card"><h5>Structured analysis</h5><ul><li><b>Traditional</b>, time-tested, easy to understand</li><li>Organized into <b>phases</b> (the SDLC)</li><li>Uses <b>process models</b> to describe the system graphically</li></ul></div>
<div class="card"><h5>Object-oriented analysis</h5><ul><li><b>More recent</b> method</li><li>Objects represent actual people, things, or events</li><li>Combines <b>data and processes</b> into objects</li><li>Built-in processes are called <b>methods</b></li><li>Easy transition to O-O languages such as Java</li></ul></div>
</div>
<h4>The SDLC: 5 phases and their deliverables</h4>
<figure class="dg"><div class="cycle">
<div class="ph"><b>1. Systems planning</b><span>Preliminary investigation report</span></div>
<div class="ph"><b>2. Systems analysis</b><span>System requirements document</span></div>
<div class="ph"><b>3. Systems design</b><span>System design specification</span></div>
<div class="ph"><b>4. Systems implementation</b><span>Functioning system</span></div>
<div class="ph"><b>5. Systems security and support</b><span>Fully operational system</span></div>
</div><figcaption>Figure 1-25: the circular symbols indicate interaction among the phases</figcaption></figure>
<div class="tbl"><table>
<tr><th>Phase</th><th>What happens</th></tr>
<tr><td>Planning</td><td>Begins with a <b>systems request</b>. Purpose: a <b>preliminary investigation</b> (a critical step). Its key part is a <b>feasibility study</b>.</td></tr>
<tr><td>Analysis</td><td>Build a <b>logical model</b> (data and process models). Deliverable: system requirements document.</td></tr>
<tr><td>Design</td><td>Create a <b>physical model</b> that satisfies all documented requirements. Design the UI; identify outputs, inputs, and processes. Management and user involvement is critical.</td></tr>
<tr><td>Implementation</td><td>The system is constructed, programs are written and tested, the system is installed.</td></tr>
<tr><td>Security and support</td><td>The system must be <b>secure, reliable, maintainable, and scalable</b>. Most systems need major updates or replacement after several years.</td></tr>
</table></div>
<div class="trap"><b>Trap:</b> logical model → Analysis. Physical model → Design. This distinction is asked often.</div>
<h4>From your notes (lecture 4): modified waterfall</h4>
<figure class="dg"><div class="wf"><span>Requirements</span><span>Analysis</span><span>Design</span><span>Implementation</span><span>Test</span><span>Deployment</span></div><figcaption>Each phase flows into the next; "modified" means arrows allow going back to earlier phases. A typical project takes 9-12 months.</figcaption></figure>
<div class="note"><b>From your notes:</b> SDLC: planning (requirements → result: the <b>business case</b>, meeting) → analysis and design → <b>specification</b>: the solution, and how it will fulfil the requirements → implement → test → deploy. In O-O, "an object can be anything".</div>
<h4>Key figures</h4>
<ul><li><b>Figure 1-24</b> (Visible Analyst): a process model for a school registration system. The REGISTER STUDENTS process takes input from two sources (STUDENTS, COURSES) and produces output (CLASS ROSTERS).</li>
<li><b>Figure 1-26</b>: a PERSON class (Name, Address, Date of Birth). INSTRUCTOR and STUDENT objects inherit these properties and add their own: INSTRUCTOR (Office Location, Office Phone, E-mail), STUDENT (GPA, Advisor).</li></ul>`,
      quiz: [
        { id: 'c1l8q1', l: 'c1l8', q: 'The "system requirements document" is produced at the end of which SDLC phase?',
          o: [['Systems analysis', 'Correct. Analysis → logical model → system requirements document.'],
              ['Systems planning', 'Planning produces the preliminary investigation report.'],
              ['Systems design', 'Design produces the system design specification.'],
              ['Systems implementation', 'Implementation produces a functioning system.']],
          k: 'Learn each phase with its deliverable.' },
        { id: 'c1l8q2', l: 'c1l8', q: 'In Figure 1-26, which property does STUDENT have that INSTRUCTOR does NOT inherit from PERSON?',
          o: [['GPA', 'Correct. GPA belongs only to STUDENT; it is not inherited from PERSON.'],
              ['Name', 'Inherited from PERSON by both.'],
              ['Date of Birth', 'Inherited from PERSON by both.'],
              ['Address', 'Inherited from PERSON by both.']],
          k: 'Inherited = from the parent class. Other properties = specific.' },
        { id: 'c1l8q3', l: 'c1l8', q: 'Creating a physical model that satisfies all documented requirements and designing the user interface happens in:',
          o: [['Systems design', 'Correct: physical model, UI, outputs, inputs, processes.'],
              ['Systems analysis', 'Analysis builds a <u>logical</u> model.'],
              ['Systems implementation', 'This is where code is written and the system installed.'],
              ['Systems planning', 'This is the preliminary investigation.']],
          k: 'Logical (what) → Analysis. Physical (how) → Design.' }
      ]
    },
    {
      id: 'c1l9',
      t: 'Other Methods: Agile, JAD, RAD',
      src: 'Ch1 slide 28 · Lecture 4-5 notes',
      body: `
<p>The slide only lists the names: <b>Agile methods</b>, <b>Joint Application Development (JAD)</b>, and <b>Rapid Application Development (RAD)</b>. The explanation below is added so the idea makes sense.</p>
<div class="extra"><b>Extra explanation (not on the slide):</b>
<ul><li><b>Agile</b>: the system is built in small iterations; each one delivers something working, and the client gives feedback continuously. Requirements are written as <b>user stories</b>.</li>
<li><b>JAD</b>: users, managers, and IT staff work together in workshops to define requirements quickly and accurately, instead of separate interviews.</li>
<li><b>RAD</b>: compresses development time, using JAD-style sessions and prototyping to deliver a system fast.</li></ul></div>
<div class="note"><b>From your notes (lecture 5):</b> "JAD and RAD: they are connected (details: midterm question about it)". The lecturer hinted at a midterm question on how they relate: RAD uses the JAD approach (intensive user participation) to speed up development.</div>
<div class="note"><b>From your notes (lecture 4), an Agile user story:</b> "As a student, I want the ability to add a course to my schedule quickly", with a 3-second condition. And an example of "exceeding expectations": a phone with a Snapdragon processor; the client asked for a working phone and got more than expected.</div>
<div class="ex"><b>Example:</b> a university app. Agile: sprint 1 delivers login, sprint 2 the timetable, sprint 3 adding a course. JAD: a two-day workshop where students, registration staff, and developers agree on the screens. RAD: the workshop plus a fast prototype to deliver a complete version within weeks.</div>`,
      quiz: [
        { id: 'c1l9q1', l: 'c1l9', q: '"As a student, I want the ability to add a course to my schedule quickly (within 3 seconds)." This requirement is written as:',
          o: [['A user story, typical of Agile methods', 'Correct. "As a... I want..." is the user story format.'],
              ['A system design specification', 'That is a detailed design document, not a sentence from the user\'s view.'],
              ['A feasibility study', 'A feasibility study evaluates whether a project is possible.'],
              ['A CASE tool output', 'Unrelated.']],
          k: 'User story = the user\'s voice in one sentence.' },
        { id: 'c1l9q2', l: 'c1l9', q: 'JAD and RAD are connected. What is the best explanation of the connection?',
          o: [['RAD speeds up development and commonly uses JAD-style sessions with users', 'Correct. RAD relies on intensive user participation (the JAD approach) to go faster.'],
              ['They are two names for structured analysis', 'They are listed under "other development methods".'],
              ['JAD is a CASE tool used by RAD', 'JAD is not software.'],
              ['RAD removes users from the process to go faster', 'The opposite; users are heavily involved.']],
          k: 'JAD = users + IT together. RAD = speed using that participation.' }
      ]
    }
  ],
  groups: [
    { id: 'c1g1', after: 'c1l3', t: 'Practice: System, Meaning, IS', qs: [
      { id: 'c1g1q1', l: 'c1l3', q: 'A registration system takes student numbers (e.g. 2024832) and course codes and produces a timetable that advisors use today to approve schedules. Which mapping is correct?',
        o: [['Input = data, process = system, output = information for current decisions', 'Correct. The numbers are raw (data), the system processes them, and the timetable is information for current decisions.'],
            ['Input = information, output = knowledge', 'The raw numbers are data, and the timetable supports current decisions (information), not prediction.'],
            ['Input = wisdom, output = data', 'Completely reversed.'],
            ['Input = knowledge, output = wisdom', 'No experience or prediction is involved.']],
        k: 'Data → process → information.' },
      { id: 'c1g1q2', l: 'c1l2', q: 'After years of advising, an advisor knows that students who take 3 lab courses together usually fail one, so she redesigns the study plan to prevent it. Which pair describes "knows" and "redesigns"?',
        o: [['Knowledge, then wisdom', 'Correct. Knowing from experience = knowledge. Acting on that knowledge to improve = wisdom.'],
            ['Information, then knowledge', 'Knowing from years of experience is above information.'],
            ['Data, then information', 'There are no raw facts here.'],
            ['Wisdom, then knowledge', 'Reversed.']],
        k: 'Wisdom = taking action based on knowledge.' },
      { id: 'c1g1q3', l: 'c1l1', q: 'Which statement best combines "technology is useless without a system" and "IT helps the information system"?',
        o: [['IT is one element; it creates value only inside an IS that organizes interaction toward business goals', 'Correct. IT is a tool; value appears when a system organizes it toward a goal.'],
            ['IT and IS are the same thing', 'IT is the tools; an IS uses them.'],
            ['An IS can only exist without technology', 'An IS uses IT.'],
            ['Technology is the goal of every system', 'The goal is the business purpose, not the technology.']],
        k: 'IT is part of an IS.' },
      { id: 'c1g1q4', l: 'c1l3', q: 'An IS lets cashiers record sales all day AND gives the manager a weekly report to decide on discounts. This shows that an IS can:',
        o: [['Handle day-to-day tasks and help managers make better decisions', 'Correct. The definition names both roles.'],
            ['Only process transactions', 'Incomplete; it also supports decisions.'],
            ['Replace business functions', 'An IS supports business functions; it doesn\'t replace them.'],
            ['Produce wisdom automatically', 'Wisdom belongs to the person deciding.']],
        k: 'IS = day-to-day tasks + better decisions.' }
    ]},
    { id: 'c1g2', after: 'c1l6', t: 'Practice: Organization, IT Department, Analyst', qs: [
      { id: 'c1g2q1', l: 'c1l4', q: 'An analyst designs reports for a bank. Which design decision matches the organizational model?',
        o: [['Summary dashboards for top managers and detailed transaction lists for operational staff', 'Correct. Detail increases as you go down.'],
            ['Detailed transaction lists for top managers only', 'The opposite: "managers don\'t need details".'],
            ['The same report for every level', 'Ignores that information needs depend on the level.'],
            ['No reports for middle managers', 'They need more detail than top managers.']],
        k: 'Information needs depend on level.' },
      { id: 'c1g2q2', l: 'c1l6', q: 'A hospital hires an analyst for a new patient-records system. Besides technical knowledge, the analyst must also:',
        o: [['Understand the basics of the healthcare domain', 'Correct: "when working with a system like healthcare you need to know the basics about the domain".'],
            ['Become a doctor', 'Too much; the basics are enough.'],
            ['Avoid talking to users to stay objective', 'The opposite: listen and involve users.'],
            ['Focus only on hardware', 'No.']],
        k: 'Core domain knowledge = business skills.' },
      { id: 'c1g2q3', l: 'c1l5', q: 'Users of a new system need training sessions after deployment. Which IT unit and which analyst characteristic are most related?',
        o: [['User Support; involving users and listening to them', 'Correct. Training comes from User Support, and the analyst should involve users.'],
            ['Database Administration; developing a project plan', 'DBA is not about training.'],
            ['Web Support; remaining flexible', 'Web Support handles web pages.'],
            ['Quality Assurance; certification', 'QA handles testing.']],
        k: 'Training → User Support.' },
      { id: 'c1g2q4', l: 'c1l4', q: 'An operational employee notices a recurring machine fault that delays orders and raises costs. What should happen?',
        o: [['Escalate it, because it affects time, quality, or money', 'Correct: "saw a rock (problem), if it affects time, quality, money... → escalate".'],
            ['Ignore it, since operational staff do not make decisions', 'It must be raised.'],
            ['Change the company vision', 'The vision belongs to top managers and does not change over a fault.'],
            ['Wait for the yearly strategic plan', 'The problem affects work now.']],
        k: 'Problems affecting time, quality, or money get escalated.' }
    ]},
    { id: 'c1g3', after: 'c1l9', t: 'Practice: Tools and Methods', qs: [
      { id: 'c1g3q1', l: 'c1l7', q: 'Requirements are vague, the client wants to see something early, and the team plans to keep improving the same version until it becomes the final product. Best choice?',
        o: [['Evolutionary prototyping', 'Correct: vague requirements, and the same version becomes the final product.'],
            ['Throwaway prototyping', 'That version would be discarded; the team wants to keep building on it.'],
            ['Pure waterfall with no feedback', 'Waterfall needs clear requirements up front.'],
            ['Modeling only', 'The client wants to see something working, not diagrams.']],
        k: 'Vague requirements → prototyping.' },
      { id: 'c1g3q2', l: 'c1l8', q: 'Which pairing is correct?',
        o: [['Structured analysis: phases and process models · O-O analysis: objects combining data and processes', 'Correct.'],
            ['Structured analysis: objects and methods · O-O analysis: SDLC phases', 'Reversed.'],
            ['Both use only objects', 'Structured analysis does not use objects.'],
            ['O-O is the traditional, time-tested method', 'Structured is traditional; O-O is more recent.']],
        k: 'Structured = traditional + phases.' },
      { id: 'c1g3q3', l: 'c1l8', q: 'In a modified waterfall model, what makes it "modified"?',
        o: [['Arrows allow returning to earlier phases when problems are found', 'Correct. Arrows allow going back.'],
            ['It has no testing phase', 'It includes Test.'],
            ['It skips requirements', 'It starts with requirements.'],
            ['It replaces phases with objects', 'That is O-O.']],
        k: 'Modified = you can go back.' },
      { id: 'c1g3q4', l: 'c1l7', q: 'A CASE tool such as Visible Analyst supports which methodologies?',
        o: [['Both structured analysis and object-oriented analysis', 'Correct: "supports a wide variety of design methodologies, including structured and object-oriented".'],
            ['Only structured analysis', 'Incomplete.'],
            ['Only Agile', 'Not stated.'],
            ['None; it only draws pictures', 'It can also generate code.']],
        k: 'CASE supports both.' }
    ]}
  ],
  exam: [
    { id: 'c1x1', l: 'c1l2', q: 'Which ordering goes from LOWEST to HIGHEST meaning?',
      o: [['Data, Information, Knowledge, Wisdom', 'Correct.'],
          ['Data, Knowledge, Information, Wisdom', 'Information comes before Knowledge.'],
          ['Information, Data, Knowledge, Wisdom', 'Data comes first.'],
          ['Data, Information, Wisdom, Knowledge', 'Wisdom is above Knowledge.']],
      k: 'D < I < K < W.' },
    { id: 'c1x2', l: 'c1l8', q: 'Which deliverable belongs to systems implementation?',
      o: [['A completely functioning and documented information system', 'Correct.'],
          ['System design specification', 'Design.'],
          ['Preliminary investigation report', 'Planning.'],
          ['System requirements document', 'Analysis.']],
      k: 'Implementation → functioning system.' },
    { id: 'c1x3', l: 'c1l8', q: 'A key part of the preliminary investigation in systems planning is:',
      o: [['A feasibility study', 'Correct, word for word from slide 23.'],
          ['Writing program code', 'Implementation.'],
          ['Designing the user interface', 'Design.'],
          ['Building a logical model', 'Analysis.']],
      k: 'Planning: systems request → preliminary investigation → feasibility.' },
    { id: 'c1x4', l: 'c1l8', q: 'A well-designed system must be all of the following EXCEPT:',
      o: [['Disposable', 'Correct, not on the list. The list is secure, reliable, maintainable, scalable.'],
          ['Secure', 'On the list.'],
          ['Maintainable', 'On the list.'],
          ['Scalable', 'On the list.']],
      k: 'Security and support: secure, reliable, maintainable, scalable.' },
    { id: 'c1x5', l: 'c1l4', q: 'Top managers need information on all of the following EXCEPT:',
      o: [['Individual daily transactions', 'Correct. That level of detail is for lower levels.'],
          ['Economic forecasts', 'Listed.'],
          ['Technology trends', 'Listed.'],
          ['Governmental issues', 'Listed.']],
      k: 'Top = the big picture.' },
    { id: 'c1x6', l: 'c1l7', q: 'Prototyping works BEST when:',
      o: [['The project requirements are not known in detail', 'Correct.'],
          ['Requirements are fixed and fully documented', 'Then there is little to discover.'],
          ['There is no client involvement', 'Prototyping happens between developer and client.'],
          ['Decisions must be made as early as possible', 'That is actually the risk (the disadvantage).']],
      k: 'Prototyping = discovering requirements.' },
    { id: 'c1x7', l: 'c1l5', q: 'Web support specialists do all of the following EXCEPT:',
      o: [['Review and test all application changes against quality standards', 'Correct; that is QA.'],
          ['Design and construct web pages', 'Web Support.'],
          ['Monitor traffic', 'Web Support.'],
          ['Link web-based applications to the company\'s information systems', 'Web Support.']],
      k: 'Know which unit does what.' },
    { id: 'c1x8', l: 'c1l1', q: 'Which property is missing from "elements interacting with each other to reach goals"?',
      o: [['Environment', 'Correct. The surroundings, and interaction with them, are missing.'],
          ['Elements', 'Present.'],
          ['Goals', 'Present.'],
          ['Interaction', 'Partly present (among elements).']],
      k: 'Four properties.' },
    { id: 'c1x9', l: 'c1l9', q: 'Which of the following is one of the "Other Development Methods"?',
      o: [['Rapid application development (RAD)', 'Correct.'],
          ['Structured analysis', 'A main method, not "other".'],
          ['Modeling', 'A tool, not a method.'],
          ['CASE', 'A tool.']],
      k: 'Other: Agile, JAD, RAD.' },
    { id: 'c1x10', l: 'c1l6', q: 'Which career factor is the least important when choosing a systems analyst job?',
      o: [['Job titles', 'Correct. The job title is not so important; what you actually do matters more.'],
          ['Corporate culture', 'This does matter when choosing a job.'],
          ['Future growth', 'This does matter when choosing a job.'],
          ['Company size', 'This does matter when choosing a job.']],
      k: 'Job title is the least important factor.' },
    { id: 'c1x11', l: 'c1l8', open: true, q: 'Describe the difference between structured analysis and object-oriented analysis, and give one example of each from the figures.',
      m: '<p><b>Structured analysis</b>: a traditional, time-tested method organized into SDLC phases, using process models to describe the system graphically. Example: Figure 1-24, the REGISTER STUDENTS process taking STUDENTS and COURSES as input and producing CLASS ROSTERS.</p><p><b>Object-oriented analysis</b>: a newer method that combines data and processes into objects (people, things, events), with built-in processes called methods and an easy transition to O-O languages such as Java. Example: Figure 1-26, the PERSON class with INSTRUCTOR and STUDENT objects inheriting Name, Address, and Date of Birth.</p>' },
    { id: 'c1x12', l: 'c1l7', open: true, q: 'Explain the two types of prototyping, and state one disadvantage of prototyping.',
      m: '<p><b>Throwaway</b>: built only to understand requirements with the customer, then discarded. <b>Evolutionary</b>: refined step by step until it becomes the final product.</p><p><b>Disadvantage</b>: important decisions might be made too early, before business or IT issues are thoroughly understood.</p>' }
  ]
});

window.COURSE.cards.push(
  { c: 1, f: 'System', b: 'Elements in an environment that interact with each other and with the environment to reach predefined goals.' },
  { c: 1, f: 'System properties', b: 'Elements, Environment, Interaction, Goals.' },
  { c: 1, f: 'Data', b: 'Raw facts with no meaning; not useful in decision making.' },
  { c: 1, f: 'Information', b: 'Processed data; useful in <b>current</b> decision making.' },
  { c: 1, f: 'Knowledge', b: 'Based on experience; useful in <b>future</b> decision making (prediction).' },
  { c: 1, f: 'Wisdom', b: 'Based on knowledge; the <b>highest meaning</b>; taking action.' },
  { c: 1, f: 'Information technology', b: 'Hardware + software + services used to manage, communicate, and share information.' },
  { c: 1, f: 'Information system', b: 'A system that uses IT to support business functions: day-to-day tasks and better decisions.' },
  { c: 1, f: 'Characteristics of an IS', b: 'Effective processing, effective management, flexibility, user satisfaction.' },
  { c: 1, f: 'Top managers', b: 'Long-range strategic plans, mission and goals, 5-10 years; don\'t need details.' },
  { c: 1, f: 'Middle managers and knowledge workers', b: 'Short-term plans; divide the roadmap; need more detail than top managers.' },
  { c: 1, f: 'Operational employees', b: 'Day-to-day work; rely on transaction processing systems.' },
  { c: 1, f: 'SMARTER goals', b: 'Specific, Measurable, Achievable, Realistic, Time-bound (+ Evaluate, Review).' },
  { c: 1, f: 'Most valuable analyst skill', b: 'The ability to listen.' },
  { c: 1, f: 'Throwaway vs evolutionary prototype', b: 'Throwaway: built to understand requirements, then discarded. Evolutionary: refined until it becomes the final product.' },
  { c: 1, f: 'Prototyping disadvantage', b: 'Important decisions may be made too early, before issues are fully understood.' },
  { c: 1, f: 'CASE tools', b: 'Computer-Aided Systems Engineering: framework + code generation + defect-free software; supports structured and O-O. Example: Visible Analyst.' },
  { c: 1, f: 'SDLC phases and deliverables', b: 'Planning → preliminary investigation report · Analysis → system requirements document · Design → system design specification · Implementation → functioning system · Security and support → fully operational system.' },
  { c: 1, f: 'Logical vs physical model', b: 'Logical (data + process) → Analysis. Physical → Design.' },
  { c: 1, f: 'JAD / RAD', b: 'JAD: workshops with users and IT. RAD: fast development using JAD-style sessions and prototyping. The lecturer: "connected, midterm question".' },
  { c: 1, f: 'Types of employee motivation', b: 'Financial, self-actualization, job-oriented.' }
);
