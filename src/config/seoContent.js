/** Quanta — portfolio of vertical AI-employee products. Marketing copy.
 *  Source of truth for the product roster: Factum console apps/console/src/lib/catalog.ts
 *  (mirrors apps/factum-api/app/console.py). Keep names/verticals/status in sync. */

export const siteSeo = {
  title: 'Quanta | Hire an AI employee that learns your company',
  description:
    'Hire an AI employee for each team — HR, IT, sales. They take the everyday requests and see them through, and get better at how your company works every week.',
  keywords:
    'AI employees, digital workers, AI for HR teams, AI help desk, employee support automation, IT ticket automation, AI that learns your company, reduce support costs, HR automation, customer support AI, Quanta, Factum, Quaero',
  canonicalUrl: 'https://www.quanta.co.in/',
  ogImage: 'https://www.quanta.co.in/og-image.jpg',
  twitterImage: 'https://www.quanta.co.in/twitter-image.jpg',
  tagline: 'AI employees that get the job done.',
  elevatorPitch:
    'Quanta builds AI employees — one for each team, rather than a single assistant stretched across the company. Each handles everyday requests from question to done, checks with a person before anything that matters, and learns how your company works as it goes.',
};

/** Level 1: the vertical products. `live` ones link out to their own site. */
export const solutions = [
  {
    key: 'factum',
    name: 'Factum',
    vertical: 'Employee Experience',
    tagline: 'Answers the HR and IT questions your team gets all day — time off, tickets, access, policies.',
    url: 'https://factum.quanta.co.in',
    status: 'live',
    agents: ['EX Front Desk', 'Onboarding', 'Offboarding', 'Recruiter', 'Talent'],
  },
  {
    key: 'quaero',
    name: 'Quaero',
    vertical: 'Sales & Marketing',
    tagline: 'Finds leads, qualifies them, and drafts the proposals so your reps can spend the day selling.',
    url: 'https://quaero.quanta.co.in',
    status: 'live',
    agents: ['SDR', 'Lead Qualification', 'Proposal'],
  },
  {
    key: 'resolvo',
    name: 'Resolvo',
    vertical: 'Customer Experience',
    tagline: 'Handles customer questions across chat, email and phone, and escalates the ones that need a person.',
    url: null,
    status: 'coming_soon',
    agents: ['Support Resolution', 'Voice', 'Agent Assist', 'Agent QA', 'Knowledge Base'],
  },
  {
    key: 'solvo',
    name: 'Solvo',
    vertical: 'Finance Operations',
    tagline: 'Chases invoices, matches payments and closes the month faster.',
    url: null,
    status: 'coming_soon',
    agents: ['AP', 'AR / Collections', 'Expense Audit'],
  },
  {
    key: 'munera',
    name: 'Munera',
    vertical: 'Professional Services',
    tagline: 'Scopes the work, finds who is free to do it, and gets it billed on time.',
    url: null,
    status: 'coming_soon',
    agents: ['Engagement Scoping', 'Resource Staffing', 'Billing'],
  },
  {
    key: 'medeor',
    name: 'Medeor',
    vertical: 'Healthcare',
    tagline: 'Handles pre-approvals and patient intake without anyone waiting on hold.',
    url: null,
    status: 'coming_soon',
    agents: ['Prior Auth', 'Clinical Intake', 'Care Coordination'],
  },
  {
    key: 'fides',
    name: 'Fides',
    vertical: 'Insurance',
    tagline: 'Takes claims, answers policy questions, and keeps a clear record of every decision.',
    url: null,
    status: 'coming_soon',
    agents: ['Claims Intake', 'Policy Q&A', 'Underwriting Support'],
  },
];

export const homeCopy = {
  hero: {
    headline: 'Hire an AI employee\nthat learns your company.',
    subhead:
      'One for each team — HR, IT, sales. They take the everyday requests and see them through, and they get better at how your company does things every week they’re here.',
    ctaPrimary: 'Meet the candidates',
    ctaSecondary: 'Book a demo',
    trustLabel: 'Works in the tools your team already uses',
    cardsLabel: 'Available to hire',
    suiteCards: [
      { label: 'HR + IT', sub: 'Factum', href: '#solutions' },
      { label: 'Sales', sub: 'Quaero', href: '#solutions' },
      { label: 'Support', sub: 'Coming soon', href: '#solutions' },
    ],
  },
  problem: {
    badge: 'Sound familiar?',
    headline: 'Your team is the help desk',
    headlineAccent: 'the help desk',
    markStrong: 'Same',
    markRest: 'questions, daily',
    body: 'Where do I find the leave policy? Can someone reset my password? Is my expense approved? Your best people spend their days answering the same questions instead of doing the job you hired them for.',
    panelTitle: 'What it costs you',
    threatsLeft: [
      'Senior people answering beginner questions',
      'A chatbot that points at a policy, then stops',
      'Simple requests passed between three teams',
      'Nobody owns it from question to done',
      'Staff going around the process to get unstuck',
    ],
    threatsRight: [
      'New joiners waiting days to get set up',
      'No clear record of who approved what',
      'Every team explaining itself from scratch',
      'No view of the backlog until it is a problem',
      'Tools that break the moment a form changes',
    ],
    cta: 'See how we fix it',
  },
  // Self-improving loop. Copy is deliberately non-technical — the underlying
  // model is ACE (itemized lessons + helpful/harmful counters + decision-time
  // provenance); none of that vocabulary belongs on a buyer-facing page.
  learning: {
    badge: 'What makes it different',
    headline: 'It learns how your\ncompany actually runs.',
    headlineAccent: 'company actually runs.',
    subhead:
      'Who approves what. Which exceptions are real. How your team words things. It picks all of that up as it goes.',
    steps: [
      { step: '01', title: 'Week one', body: 'Answers from your handbook, quotes the source, sends anything unclear to your team.' },
      { step: '02', title: 'Week four', body: 'Knows your exceptions — the contractor rule, the deploy freeze, the manager who wants notice.' },
      { step: '03', title: 'Month three', body: 'Handles the routine on its own. Your team only sees what needs a decision.' },
      { step: '04', title: 'Ongoing', body: 'Tell it once when it is wrong. The correction sticks, in plain English you can edit.' },
    ],
    proofTitle: 'You can see everything it has learned',
    proofBody: 'One page, plain English, editable. Nothing added without a person approving it.',
    proofPoints: [
      { k: 'Every action', v: 'shows who approved it and why' },
      { k: 'Every lesson', v: 'in plain English you can edit' },
      { k: 'Nothing learned', v: 'without a person approving it' },
    ],
    cta: 'See it handle a real request',
  },
  // The commercial consequence of `learning`. Structural claims only — no
  // invented metrics. Swap in real pilot numbers from /api/proof when they exist.
  economics: {
    badge: 'What it costs',
    headline: 'Budgeted like a hire,\nnot another subscription.',
    headlineAccent: 'not another subscription.',
    subhead: 'You are covering a role, not buying seats.',
    columns: [
      { title: 'Flat monthly rate', body: 'Per AI employee. No per-seat or per-message charges.' },
      { title: 'Trial first', body: 'Set the targets. Miss them and you walk.' },
      { title: 'Cheaper over time', body: 'Handles more each month for the same cost.' },
    ],
    kicker: 'The work keeps growing. The bill does not.',
  },
  solutions: {
    badge: 'Solutions',
    headline: 'A specialist for',
    headlineAccent: 'every team.',
    subhead: 'One AI employee per team, built for that job — not one assistant stretched across all of them.',
  },
  aiEmployees: {
    title: 'Solutions',
    // rendered as the scrolling roster — driven by `solutions` above
    stages: solutions.map((s) => ({
      title: s.status === 'live' ? s.name : `${s.name} · coming soon`,
      proof: `${s.vertical} — ${s.tagline}`,
    })),
  },
  // Architecture-only. No certification claims — none are held today.
  security: {
    badge: 'Security',
    headline: 'Built for the teams\nthat have to say no.',
    headlineAccent: 'that have to say no.',
    subhead: 'HR and IT hold the company’s most sensitive data. This is built for the person who has to protect it.',
    points: [
      { title: 'It asks before it acts', body: 'Every change waits for a human yes. No autonomous mode.' },
      { title: 'Every action is logged', body: 'Who asked, what it proposed, who approved, what changed.' },
      { title: 'Your data stays yours', body: 'Never used to train a shared model. Nothing leaves your environment.' },
      { title: 'Respects your permissions', body: 'It only sees what the person asking is already allowed to see.' },
    ],
    footnote:
      'Running a security review? We will walk your team through the architecture and data flows.',
  },
  cta: {
    headline: 'The only hire that gets cheaper every quarter',
    body: 'Bring a request your team handles every week. We will show it done end to end in fifteen minutes.',
    button: 'Book a demo',
  },
  contact: {
    headline: 'Book a demo',
    subhead: 'Tell us which team is drowning first. We’ll show you what we would take off their plate.',
    submit: 'Submit request',
    success: 'Thank you! Our team will reach out shortly.',
  },
};

export const navCopy = {
  cinematic: [
    { label: 'Solutions', href: '#solutions' },
    { label: 'How it works', href: '#learning' },
    { label: 'Pricing', href: '#economics' },
    { label: 'Security', href: '#security' },
    { label: 'Contact', href: '#contact' },
  ],
  getStarted: 'Book a demo',
  tryFree: 'Book a demo',
};

export const footerCopy = {
  tagline: 'AI employees that get the job done.',
  blurb:
    'Quanta builds AI employees — one for each team. They handle everyday requests from question to done, check with a person before anything that matters, and get better at your company every week.',
  headquarters: '321 Koramangala\nBangalore, 560064\nIndia',
  copyright: 'Quanta — AI employees for every team.',
};

export const faqCopy = [
  {
    q: 'Is this one AI or several?',
    a: 'Several. Rather than one assistant stretched across the whole company, there is a separate one for each team — Factum for HR and IT, Quaero for sales, with more coming. Each knows its own job properly.',
  },
  {
    q: 'Will it change things in our systems?',
    a: 'Yes, that is the point — it books the leave, raises the ticket, grants the access. But never quietly. Anything that matters gets shown to a person first, and only goes ahead once they say yes.',
  },
  {
    q: 'What does it plug into?',
    a: 'Your team talks to it in Slack or Teams. Behind the scenes it works with the tools you already run — BambooHR, Okta, Jira, Confluence — and each one connects to whatever its team needs.',
  },
  {
    q: 'Which ones can we get today?',
    a: 'Factum for HR and IT, and Quaero for sales, are both live now. Customer support, finance, professional services, healthcare and insurance are on the way.',
  },
  {
    q: 'How is this different from Copilot?',
    a: 'A copilot helps your team do the work faster. This does the work — it takes the request, sorts it out, and comes back when it is done or when it needs a decision from you.',
  },
  {
    q: 'How does it get better over time?',
    a: 'It keeps plain-English notes on how your company actually works, learned from the requests it handles and the decisions you make on them. Notes that turn out to be wrong get dropped. You can read and edit them at any time.',
  },
  {
    q: 'How long until it is useful?',
    a: 'It starts handling requests the same day you connect it. It gets noticeably better over the first few weeks as it learns your policies, your people and your exceptions.',
  },
];

