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
    trustLogos: ['Slack', 'Microsoft Teams', 'Jira', 'BambooHR', 'Okta', 'Confluence'],
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
    badge: 'Gets better over time',
    headline: 'It learns your company,\nnot just your industry.',
    headlineAccent: 'not just your industry.',
    subhead:
      'Most AI tools are the same on day 300 as on day one. This one keeps notes on how your company actually works — which manager signs off on what, how your team words things, where the exceptions are — and gets more useful every week.',
    steps: [
      {
        step: '01',
        title: 'It notices what worked',
        body: 'After each request it checks what it got right and what it got wrong — the same way a new starter figures out how things are really done around here.',
      },
      {
        step: '02',
        title: 'Your yes or no teaches it',
        body: 'Before it does anything that matters, it shows you the request and waits. Every time you approve or correct it, it learns your standard — so you are training it just by doing your normal job.',
      },
      {
        step: '03',
        title: 'The lesson sticks',
        body: 'What it learns is written down as a plain-English note you can read, edit or delete. Nothing is buried in a model you cannot see into.',
      },
      {
        step: '04',
        title: 'Bad habits get dropped',
        body: 'Notes that keep leading it wrong are removed automatically. It gets sharper over time rather than slowly picking up bad habits.',
      },
    ],
    proofTitle: 'You can always see why it did something',
    proofBody:
      'Every action it takes comes with the reason behind it and the notes it relied on. When someone asks why an approval went through, you have a straight answer instead of a shrug — and nothing gets added to what it knows unless a person signed off on it first.',
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
    headline: 'Most software costs more as you grow.\nThis costs less.',
    headlineAccent: 'This costs less.',
    subhead:
      'Everything else in your budget goes up with headcount and volume — more seats, more tickets, more usage. This works the other way round. The more it handles, the better it gets at it, and the less each request ends up costing you.',
    columns: [
      {
        title: 'Priced like a hire, not per seat',
        body: 'One flat monthly cost for the role, budgeted the way you would budget a person. It does not go up because more of your team started using it.',
      },
      {
        title: 'Busier means cheaper',
        body: 'The more requests it handles, the more it learns, and the more it can finish without pulling in someone from your team. Your cost per request falls while your volume grows.',
      },
      {
        title: 'Only pay if it works',
        body: 'Start with a trial against targets you set. If it does not hit them, you do not keep it — the same deal you would give any new hire.',
      },
    ],
    curveLabel: 'What each request costs you',
    curveStart: 'Month 1',
    curveEnd: 'Month 12',
    curveNote: 'The shape is how the product is designed to behave. Where your own line lands depends on how many requests you get and how much of your policy it starts with.',
    kicker: 'The work keeps growing. The bill does not.',
  },
  solutions: {
    badge: 'Solutions',
    headline: 'A specialist for',
    headlineAccent: 'every team.',
    subhead:
      'Not one general-purpose assistant stretched across the whole company. Each one is built for a single team, and knows that job properly. Pick the team, then the role you need covered.',
  },
  aiEmployees: {
    title: 'Solutions',
    // rendered as the scrolling roster — driven by `solutions` above
    stages: solutions.map((s) => ({
      title: s.status === 'live' ? s.name : `${s.name} · coming soon`,
      proof: `${s.vertical} — ${s.tagline}`,
    })),
  },
  cta: {
    headline: 'The only hire that gets cheaper every quarter',
    body: 'Bring us a request your team handles every week. We will show you it done end to end in fifteen minutes — and what it learns from doing it once.',
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
    { label: 'Overview', href: '#hero' },
    { label: 'Why Quanta', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How it works', href: '#learning' },
    { label: 'Pricing', href: '#economics' },
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

