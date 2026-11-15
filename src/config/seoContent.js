/** Quanta — the company. Builds AI agents that do real work; Factum is live, the rest are coming.
 *  Only claim what is true today: `live` means the product's site answers and customers can use it.
 *  Factum's packs mirror the Factum repo (packs/<id>/PACK.yaml); its own site lists them from its catalog. */

export const siteSeo = {
  title: 'Quanta | AI agents that do real work',
  description:
    'Quanta builds AI agents that take real work off your teams, inside the systems you already run, with a person approving every change. Factum, our agent platform, is live for finance and support.',
  keywords:
    'AI agents, AI agents for business, AI agent infrastructure, AI for finance operations, AI for customer support, human in the loop, audit trail, Quanta, Factum',
  canonicalUrl: 'https://www.quanta.co.in/',
  ogImage: 'https://www.quanta.co.in/og-image.jpg',
  twitterImage: 'https://www.quanta.co.in/twitter-image.jpg',
  tagline: 'AI agents that do real work.',
  elevatorPitch:
    'Quanta builds AI agents that do real work inside the systems a company already runs — and never change anything without a person’s approval. Factum, our agent platform, is live with packs for finance and support; products for sales, customer experience, professional services, healthcare and insurance are on the way.',
};

/** The products. `live` ones link out to their own site. */
export const solutions = [
  {
    key: 'factum',
    name: 'Factum',
    vertical: 'AI agent infrastructure',
    tagline:
      'Runs AI agents inside your billing, accounting, ticketing and email — with approval on every change, a test suite before every release and a record of every run.',
    url: 'https://factum.quanta.co.in',
    status: 'live',
    agents: ['Billing Desk', 'Bug Loop', 'Collections', 'AP Intake'],
  },
  {
    key: 'quaero',
    name: 'Quaero',
    vertical: 'Sales & Marketing',
    tagline: 'Finds leads, qualifies them, and drafts the proposals so your reps can spend the day selling.',
    url: null,
    status: 'coming_soon',
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

/** Systems Quanta's live agents have been run against (Factum's packs). */
export const systems = ['Jira', 'Confluence', 'GitHub', 'Chargebee', 'QuickBooks', 'Gmail'];

export const homeCopy = {
  hero: {
    subhead:
      'Quanta builds AI agents that take real work off your teams — inside the systems you already run, with a person approving every change. Factum, our agent platform, is live today.',
    ctaPrimary: 'See our products',
    ctaSecondary: 'Book a demo',
    cardsLabel: 'Our products',
    trustLabel: 'Our agents work in the systems you already run',
  },
  problem: {
    badge: 'The gap',
    headline: 'Most AI stops at the answer',
    body: 'A chatbot tells you the refund policy. A copilot drafts the email. Someone still has to issue the refund, enter the bill and chase the invoice. That is the work that piles up.',
    panelTitle: 'Where it falls short',
    tabs: [
      {
        label: 'What teams get today',
        items: [
          'A chatbot that points at a policy, then stops',
          'A copilot that drafts, while a person does the rest',
          'A demo agent nobody trusts with a real system',
          'Automations that break the moment a form changes',
          'No record of what the AI did, or why',
        ],
      },
      {
        label: 'What the work actually needs',
        items: [
          'Reading the real records, not guessing',
          'Following your own policy, word for word',
          'A person’s yes before anything changes',
          'Proof it works before it goes live',
          'A full record of every step and its cost',
        ],
      },
    ],
    queueLabel: 'work queue · live',
    queue: [
      'Charged twice this month — please refund',
      'Invoice INV-2041 is 31 days overdue',
      'New vendor invoice (PDF) from Northwind',
      'Export to CSV fails since Tuesday',
      'Downgrade us to the Starter plan',
      'Vendor says their bank details changed',
      'We will pay on the 15th, promise',
      'Is the login bug fixed yet?',
    ],
    markStrong: 'Real',
    markRest: 'work, every day',
    cta: 'See how we build',
  },
  // How Quanta builds every product. Each point is true of Factum today.
  learning: {
    badge: 'How we build',
    headline: 'Agents you can\nhand real work to.',
    subhead:
      'Every Quanta product is built on the same four rules, so the agent that issues a refund is held to the same standard as the one that answers a question.',
    steps: [
      { step: '01', title: 'Does the work', chip: 'End to end', body: 'Reads the records, applies your policy and prepares the exact change — not a suggestion for someone else to finish.' },
      { step: '02', title: 'Asks first', chip: 'Approvals', body: 'Nothing changes in your systems until a person approves the exact change. Each agent gets only the access its job needs.' },
      { step: '03', title: 'Proven first', chip: 'Tested', body: 'Every agent ships with a test suite of real cases, and a new version only goes live if it passes.' },
      { step: '04', title: 'Learns', chip: 'Ongoing', body: 'Correct it once and it becomes a lesson, tested on past cases and approved by a person before it is used.' },
    ],
    notesTitle: 'Lessons it has learned · example',
    notes: [
      { id: '01', text: 'Quote the refund policy section, never paraphrase it', helped: 34, wrong: 0, at: 0 },
      { id: '02', text: 'Check for an open support ticket before chasing an invoice', helped: 21, wrong: 1, at: 1 },
      { id: '03', text: 'Compare bank details with the vendor’s last invoice', helped: 17, wrong: 0, at: 1 },
      { id: '04', text: 'Waive late fees under $50 without asking', helped: 2, wrong: 9, at: 2, pruneAt: 3 },
    ],
    noteStatus: ['Reading your policy', 'New lessons highlighted', 'Tested before use', 'Dropped 04: wrong 9 times'],
    proofTitle: 'You can see everything it did',
    proofBody: 'Every run is on the record, in plain language. Nothing changes and nothing is learned without a person approving it.',
    proofPoints: [
      { k: 'Every change', v: 'approved by a person first' },
      { k: 'Every release', v: 'passes its test suite' },
      { k: 'Every run', v: 'on record, with its cost' },
    ],
  },
  solutions: {
    badge: 'Products',
    headline: 'One standard,',
    headlineAccent: 'every team.',
    subhead: 'Factum is live today, with ready-made agents for finance and support. More products are on the way, built the same way.',
    featuredLabel: 'Live now',
    packsLabel: 'Ready-made agents on Factum',
    soonLabel: 'Coming soon',
  },
  economics: {
    badge: 'Pricing',
    headline: 'Pay for the work,\nnot the seats.',
    subhead: 'Each product is priced for the work it takes on, not the number of people who log in.',
    columns: [
      { title: 'Per product', body: 'A platform fee for what you run. No per-seat charges.' },
      { title: 'Usage you can see', body: 'Every run shows what it cost, as it happens. No surprise invoices.' },
      { title: 'Pilot first', body: 'Start with one workflow and measure it against your own numbers.' },
    ],
    kicker: 'Every run shows what it cost.',
  },
  // Architecture only. No certification claims — none are held today.
  security: {
    badge: 'Security',
    headline: 'Built for the teams\nthat have to say no.',
    subhead: 'Our agents touch money and customer data. They are built for the person who has to sign off on that.',
    points: [
      { tag: 'Approval', title: 'It asks before it acts', body: 'Every change — a refund, a bill, an email — waits for a person’s yes.' },
      { tag: 'Audit', title: 'Every run is on record', body: 'What started it, each step, what it proposed, who approved and what changed.' },
      { tag: 'Access', title: 'Least access, per job', body: 'Each agent gets only the systems its job needs, read or write — nothing more.' },
      { tag: 'Privacy', title: 'Your data stays yours', body: 'Kept apart from every other customer’s, and never used to train a shared model.' },
    ],
    footnote: 'Running a security review? We will walk your team through the architecture and data flows.',
  },
  cta: {
    headline: 'Hand off your first workflow',
    body: 'Bring a task your team does every week. We will show it done end to end, with approvals, in fifteen minutes.',
    button: 'Book a demo',
  },
  contact: {
    headline: 'Book a demo',
    subhead: 'Tell us which work you would hand off first. We will show you what it looks like done.',
    steps: ['15-minute walkthrough', 'Bring a real workflow', 'Pilot on your own systems'],
    interests: [
      { value: 'factum', label: 'Factum (live)' },
      ...['quaero', 'resolvo', 'solvo', 'munera', 'medeor', 'fides'].map((k) => ({
        value: k,
        label: `${k[0].toUpperCase()}${k.slice(1)} (coming soon)`,
      })),
      { value: 'partnership', label: 'Partnership' },
    ],
    messageLabel: 'Which work would you hand off first?',
    messagePlaceholder: 'Tell us what your team handles every week…',
    submit: 'Submit request',
    success: 'Thank you! Our team will reach out shortly.',
  },
};

export const navCopy = {
  getStarted: 'Book a demo',
};

export const footerCopy = {
  tagline: 'AI agents that do real work.',
  blurb:
    'Quanta builds AI agents that take real work off your teams, inside the systems you already run, with a person approving every change.',
  headquarters: '321 Koramangala\nBangalore, 560064\nIndia',
  copyright: 'Quanta — AI agents that do real work.',
};

export const faqCopy = [
  {
    q: 'What does Quanta make?',
    a: 'AI agents that do real work inside your business systems. Factum, our agent platform, is live with ready-made agents for finance and support. Products for sales, customer experience, professional services, healthcare and insurance are on the way.',
  },
  {
    q: 'Will it change things in our systems?',
    a: 'Yes — that is the point. It issues the credit, enters the bill, sends the reminder. But never quietly: every change is shown to a person first and only goes ahead once they approve it.',
  },
  {
    q: 'What does it work with?',
    a: 'Today our agents run against Jira, Confluence, GitHub, Chargebee, QuickBooks and Gmail. More connectors are available on Factum; we confirm each one against your setup during a pilot.',
  },
  {
    q: 'Which products can we use today?',
    a: 'Factum is live, with four ready-made agents: Billing Desk, Bug Loop, Collections and AP Intake. The other products are coming soon — tell us which one you need and we will keep you posted.',
  },
  {
    q: 'How is this different from a copilot?',
    a: 'A copilot helps a person do the work faster. Our agents do the work — they take the task, see it through, and come back when it is done or when they need a decision from you.',
  },
  {
    q: 'How do you know an agent will behave?',
    a: 'Every agent ships with a test suite of real cases, and a new version only goes live if it passes. In production every run is recorded and every change waits for a person.',
  },
  {
    q: 'Does it get better over time?',
    a: 'Yes, from your team’s corrections. Mark a result wrong and say what should have happened; it becomes a lesson, tested on past cases and approved by a person before it is used. Nothing is trained on your data.',
  },
];
