/** Quanta — portfolio of vertical AI-employee products. Marketing copy.
 *  Source of truth for the product roster: Factum console apps/console/src/lib/catalog.ts
 *  (mirrors apps/factum-api/app/console.py). Keep names/verticals/status in sync. */

export const siteSeo = {
  title: 'Quanta | Your next hire doesn’t need a laptop',
  description:
    'Quanta builds an AI employee for every business function. Each one answers, decides, and completes the work directly in your systems — connect your stack and it starts the same day.',
  keywords:
    'AI employees, digital workers, agentic automation, vertical AI agents, HR automation, customer support AI, finance operations AI, human-in-the-loop, audit trail, Quanta, Factum, Quaero',
  canonicalUrl: 'https://www.quanta.co.in/',
  ogImage: 'https://www.quanta.co.in/og-image.jpg',
  twitterImage: 'https://www.quanta.co.in/twitter-image.jpg',
  tagline: 'Hire a digital employee, not a chatbot.',
  elevatorPitch:
    'Quanta is a portfolio of vertical AI-employee products. Each solution is its own product with its own agents inside — not one undifferentiated AI. They read your live systems, preview every write, and wait for a human Approve.',
};

/** Level 1: the vertical products. `live` ones link out to their own site. */
export const solutions = [
  {
    key: 'factum',
    name: 'Factum',
    vertical: 'Employee Experience',
    tagline: 'Employee desk for HR and IT — policy answers, PTO, tickets, access, all behind one approval.',
    url: 'https://factum.quanta.co.in',
    status: 'live',
    agents: ['EX Front Desk', 'Onboarding', 'Offboarding', 'Recruiter', 'Talent'],
  },
  {
    key: 'quaero',
    name: 'Quaero',
    vertical: 'Sales & Marketing',
    tagline: 'SDR outreach, lead qualification, and proposals that move the pipeline without a spreadsheet.',
    url: 'https://quaero.quanta.co.in',
    status: 'live',
    agents: ['SDR', 'Lead Qualification', 'Proposal'],
  },
  {
    key: 'resolvo',
    name: 'Resolvo',
    vertical: 'Customer Experience',
    tagline: 'Resolves tickets across chat, email, and voice — with agent assist and QA built in.',
    url: null,
    status: 'coming_soon',
    agents: ['Support Resolution', 'Voice', 'Agent Assist', 'Agent QA', 'Knowledge Base'],
  },
  {
    key: 'solvo',
    name: 'Solvo',
    vertical: 'Finance Operations',
    tagline: 'AP, AR, and collections that close the books faster.',
    url: null,
    status: 'coming_soon',
    agents: ['AP', 'AR / Collections', 'Expense Audit'],
  },
  {
    key: 'munera',
    name: 'Munera',
    vertical: 'Professional Services',
    tagline: 'Scopes, staffs, and bills the work automatically.',
    url: null,
    status: 'coming_soon',
    agents: ['Engagement Scoping', 'Resource Staffing', 'Billing'],
  },
  {
    key: 'medeor',
    name: 'Medeor',
    vertical: 'Healthcare',
    tagline: 'Prior auth and clinical intake without the hold music.',
    url: null,
    status: 'coming_soon',
    agents: ['Prior Auth', 'Clinical Intake', 'Care Coordination'],
  },
  {
    key: 'fides',
    name: 'Fides',
    vertical: 'Insurance',
    tagline: 'Claims and policy Q&A with a full audit trail.',
    url: null,
    status: 'coming_soon',
    agents: ['Claims Intake', 'Policy Q&A', 'Underwriting Support'],
  },
];

export const homeCopy = {
  hero: {
    headline: 'Your next hire\ndoesn’t need a laptop.',
    subhead:
      'Quanta builds an AI employee for every business function. Each one answers, decides, and completes the work directly in your systems — connect your stack and it starts the same day.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'See the solutions',
    trustLabel: 'Works in the tools your team already uses',
    trustLogos: ['Slack', 'Microsoft Teams', 'Jira', 'BambooHR', 'Okta', 'Confluence'],
    cardsLabel: 'On the job today',
    suiteCards: [
      { label: 'HR + IT', sub: 'Factum', href: '#solutions' },
      { label: 'Sales', sub: 'Quaero', href: '#solutions' },
      { label: 'Support', sub: 'Coming soon', href: '#solutions' },
    ],
  },
  problem: {
    badge: 'The challenge',
    headline: 'Every function runs its own stack',
    headlineAccent: 'its own stack',
    markStrong: 'Siloed',
    markRest: 'ops',
    body: 'HR lives in BambooHR. IT in Jira. Sales in the CRM. Finance in spreadsheets. The work that spans them — onboard a hire, resolve a ticket, close the month — falls through the cracks between the tools.',
    panelTitle: 'Where the work stalls',
    threatsLeft: [
      'One generic assistant, spread thin across every team',
      'Answers questions, but can’t touch the systems',
      'Requests bounce between three queues',
      'No one owns the outcome end to end',
      'Shadow work happening outside any governance',
    ],
    threatsRight: [
      'Writes happen silently, or not at all',
      'No citation, no preview, no audit trail',
      'Every department re-explains its own context',
      'Leaders have no real-time view of what got done',
      'Automation that breaks the first time a form changes',
    ],
    cta: 'See the solutions',
  },
  solutions: {
    badge: 'Solutions',
    headline: 'One product',
    headlineAccent: 'per business function.',
    subhead:
      'Each solution is its own product with its own agents inside — not one undifferentiated AI. Pick the function, then the specific role.',
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
    headline: 'Meet a digital employee that actually files the ticket',
    body: 'See Factum handle a real request end to end — policy cite, PTO preview, Jira preview, two separate approvals, then the real writes.',
    button: 'Book a demo',
  },
  contact: {
    headline: 'Book a demo',
    subhead: 'Tell us which function you want covered first. We’ll show you the agent that owns it.',
    submit: 'Submit request',
    success: 'Thank you! Our team will reach out shortly.',
  },
};

export const navCopy = {
  cinematic: [
    { label: 'Overview', href: '#hero' },
    { label: 'Challenge', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ],
  getStarted: 'Book a demo',
  tryFree: 'Book a demo',
};

export const footerCopy = {
  tagline: 'A digital employee, not a chatbot.',
  blurb:
    'Quanta builds vertical AI-employee products — one per business function. Each reads your live systems, previews every write, and waits for a human Approve. Every write is audited; zero silent writes.',
  headquarters: '321 Koramangala\nBangalore, 560064\nIndia',
  copyright: 'Quanta — vertical AI employees, one product per business function.',
};

export const faqCopy = [
  {
    q: 'Is Quanta one AI or many?',
    a: 'Many. Quanta is a portfolio — one product per business function (Factum for EX, Quaero for Sales, and more), each with its own named agents inside.',
  },
  {
    q: 'Does it write to our systems?',
    a: 'Yes, but never silently. Every write — PTO, a Jira ticket, an access grant — is shown as a preview with parsed arguments and waits for a human Approve or Deny.',
  },
  {
    q: 'What does it connect to?',
    a: 'Slack and Teams as channels; BambooHR, Okta, Jira/Atlassian, and Confluence as systems of record, via Nango. Each product adds the integrations its function needs.',
  },
  {
    q: 'Which products are live today?',
    a: 'Factum (Employee Experience) and Quaero (Sales & Marketing) are live. Resolvo, Solvo, Munera, Medeor, and Fides are on the roadmap.',
  },
  {
    q: 'How is it different from a copilot?',
    a: 'A copilot drafts and you do the work. A Quanta agent does the work — reads the record, prepares the write, and executes it once you approve — with a full audit trail.',
  },
];
