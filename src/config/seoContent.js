/** Quanta — the company. Builds AI agents that do real work, under one standard, in two products:
 *  Factum (runs operations, live) and a software foundry (builds software, in development, not yet named).
 *  Only claim what is true today. The parent page never favours one product: both get the same fields and weight. */

export const siteSeo = {
  title: 'Quanta | AI agents that do real work',
  description:
    'Quanta builds AI agents that do real work, under one standard: they do the job end to end, ask before they act, are proven before release and keep a record of every step. Factum runs operations today; our software foundry is in development.',
  keywords:
    'AI agents, AI agents for business, agentic AI, AI for operations, AI software development, agentic SDLC, AI software factory, human in the loop, audit trail, Quanta, Factum',
  canonicalUrl: 'https://www.quanta.co.in/',
  ogImage: 'https://www.quanta.co.in/og-image.jpg',
  twitterImage: 'https://www.quanta.co.in/twitter-image.jpg',
  tagline: 'AI agents that do real work.',
  elevatorPitch:
    'Quanta builds AI agents that do real work, held to one standard: they see the job through, ask before they act, are proven before release and keep a record of every step. Factum runs business operations and is live; our software foundry, which builds software from requirements to release, is in development.',
};

/**
 * The products. Same fields for each, so the page treats them alike.
 * `live`: the product's site answers and customers can use it. Otherwise `cta` says what a visitor can do.
 */
export const solutions = [
  {
    key: 'factum',
    name: 'Factum',
    door: 'Run your operations',
    vertical: 'Agents for operations',
    tagline:
      'Agents that work inside your billing, accounting, ticketing and email — issuing the credit, entering the bill, chasing the invoice — with a person approving every change.',
    points: ['Ready-made agents for finance and support', 'Approval on every change', 'Tested before every release'],
    url: 'https://factum.quanta.co.in',
    status: 'live',
    cta: 'Visit Factum',
  },
  {
    key: 'foundry',
    name: 'Software foundry',
    door: 'Build your software',
    vertical: 'Agents for engineering',
    tagline:
      'Agents that take software from requirements to release — design, code, tests and pull requests — with your engineers reviewing every change before it merges.',
    points: ['Requirements to release', 'Every change reviewed before merge', 'Tests must pass to ship'],
    url: null,
    status: 'in_development',
    cta: 'Join the waitlist',
  },
];

export const homeCopy = {
  hero: {
    subhead:
      'Quanta builds AI agents that take real work off your teams — held to one standard: they see the job through, ask before they act, and keep a record of every step.',
    ctaPrimary: 'See our products',
    ctaSecondary: 'Book a demo',
    cardsLabel: 'Two products, one standard',
  },
  problem: {
    badge: 'Why now',
    headline: 'AI has moved from answering to acting',
    body: 'Agents can now issue the refund, enter the bill and open the pull request. What holds companies back is no longer the model. It is trust: knowing what the agent will do, and proving what it did.',
    panelTitle: 'Where it falls short',
    tabs: [
      {
        label: 'What teams get today',
        items: [
          'An assistant that answers, then leaves the work to a person',
          'A demo agent nobody trusts with a real system',
          'Changes made with no one approving them first',
          'A fix for one case that quietly breaks three others',
          'No record of what the agent did, or why',
        ],
      },
      {
        label: 'What real work needs',
        items: [
          'Reading the real records and your own rules',
          'A person’s yes before anything changes',
          'Proof it works before it goes live',
          'Only the access each job needs',
          'A full record of every step',
        ],
      },
    ],
    queueLabel: 'work queue · live',
    queue: [
      'Charged twice this month — please refund',
      'Add SSO login to the admin app',
      'Invoice INV-2041 is 31 days overdue',
      'Export to CSV fails since Tuesday',
      'New vendor invoice (PDF) from Northwind',
      'Upgrade the payments service to Node 22',
      'Vendor says their bank details changed',
      'Write tests for the billing module',
    ],
    markStrong: 'Real',
    markRest: 'work, every day',
    cta: 'See our standard',
  },
  solutions: {
    badge: 'Products',
    headline: 'Two products.',
    headlineAccent: 'One standard.',
    subhead: 'One runs your operations, one builds your software. Both are built the same way, so you can trust them the same way.',
    statusLabel: { live: 'Live', in_development: 'In development' },
  },
  // The shared standard. Each rule names what it looks like in each product; every line is true of the product today
  // or (for the software foundry) of how it is being built.
  learning: {
    badge: 'One standard',
    headline: 'Agents you can\nhand real work to.',
    subhead:
      'Every Quanta product follows the same four rules — whether the agent is issuing a refund or opening a pull request.',
    steps: [
      {
        step: '01',
        title: 'Does the work',
        chip: 'End to end',
        body: 'Reads the real records, follows your own rules and prepares the finished change — not a suggestion for someone else to complete.',
        in: { factum: 'Prepares the exact refund, bill or reminder', foundry: 'Writes the code, the tests and the pull request' },
      },
      {
        step: '02',
        title: 'Asks first',
        chip: 'Approval',
        body: 'Nothing changes until a person says yes, and each agent gets only the access its job needs.',
        in: { factum: 'A person approves each change', foundry: 'Engineers review each change before it merges' },
      },
      {
        step: '03',
        title: 'Proven first',
        chip: 'Tested',
        body: 'Work is checked against real cases before it goes live, so a fix for one thing can’t quietly break another.',
        in: { factum: 'Each agent passes its test suite before release', foundry: 'Tests must pass before anything ships' },
      },
      {
        step: '04',
        title: 'On record',
        chip: 'Audit',
        body: 'Every step is recorded: what started it, what the agent did, who approved it and what it cost.',
        in: { factum: 'Every run traced, with its cost', foundry: 'Every session, change and review logged' },
      },
    ],
    panelTitle: 'What it looks like',
    proofTitle: 'Learns from your team',
    proofBody: 'Correct an agent once and the correction is kept — checked against past work and approved by a person before it is used.',
    proofPoints: [
      { k: 'Nothing changes', v: 'without a person’s yes' },
      { k: 'Nothing ships', v: 'without passing its tests' },
      { k: 'Nothing happens', v: 'off the record' },
    ],
  },
  // Architecture only. No certification claims — none are held today.
  security: {
    badge: 'Trust',
    headline: 'Built for the teams\nthat have to say no.',
    subhead: 'Our agents touch money, customer data and production code. They are built for the person who has to sign off on that.',
    points: [
      { tag: 'Approval', title: 'It asks before it acts', body: 'Every change waits for a person’s yes — a refund, a bill, a merge.' },
      { tag: 'Audit', title: 'Every step is on record', body: 'What started it, what the agent did, who approved and what changed.' },
      { tag: 'Access', title: 'Least access, per job', body: 'Each agent gets only the systems and permissions its job needs.' },
      { tag: 'Privacy', title: 'Your data stays yours', body: 'Kept apart from every other customer’s, and never used to train a shared model.' },
    ],
    footnote: 'Running a security review? We will walk your team through the architecture and data flows.',
  },
  company: {
    badge: 'Company',
    headline: 'Who we are',
    body: 'Quanta is an applied AI company based in Bangalore. We build agents for the work companies actually need done — and we hold every product to the same standard, because trust is what lets an agent do real work.',
    facts: [
      { k: 'Founded', v: '2023', sub: 'Bangalore, India' },
      { k: 'Live', v: 'Factum', sub: 'Agents for operations' },
      { k: 'In development', v: 'Software foundry', sub: 'Agents for engineering' },
    ],
  },
  cta: {
    headline: 'Hand off your first piece of real work',
    body: 'Tell us what your team does every week — in operations or engineering. We will show you what it looks like done.',
    button: 'Book a demo',
  },
  contact: {
    headline: 'Talk to us',
    subhead: 'Book a Factum demo, join the software foundry waitlist, or tell us what you need and we will point you to the right one.',
    steps: ['15-minute walkthrough', 'Bring a real piece of work', 'Pilot on your own systems'],
    interests: [
      { value: 'factum', label: 'Factum — demo' },
      { value: 'foundry', label: 'Software foundry — waitlist' },
      { value: 'unsure', label: 'Not sure yet' },
      { value: 'partnership', label: 'Partnership' },
    ],
    messageLabel: 'What would you hand off first?',
    messagePlaceholder: 'Tell us about the work your team does every week…',
    submit: 'Send',
    success: 'Thank you! Our team will reach out shortly.',
  },
};

export const navCopy = {
  getStarted: 'Book a demo',
};

export const footerCopy = {
  tagline: 'AI agents that do real work.',
  blurb:
    'Quanta builds AI agents that do real work — held to one standard: they see the job through, ask before they act, and keep a record of every step.',
  headquarters: '321 Koramangala\nBangalore, 560064\nIndia',
  copyright: 'Quanta — AI agents that do real work.',
};

export const faqCopy = [
  {
    q: 'What does Quanta make?',
    a: 'AI agents that do real work, in two products. Factum runs business operations — billing, accounting, support — and is live. Our software foundry takes software from requirements to release and is in development.',
  },
  {
    q: 'Which one is for us?',
    a: 'If the work is in your business systems — refunds, bills, invoices, tickets — that is Factum. If the work is building and changing software, that is the software foundry. Not sure? Tell us the work and we will say.',
  },
  {
    q: 'Will the agents change things in our systems?',
    a: 'Yes — that is the point. But never quietly: every change is shown to a person first, and only goes ahead once they approve it, or once your engineers review and merge it.',
  },
  {
    q: 'How do you know an agent will behave?',
    a: 'Work is checked against real cases before it goes live, and every step in production is on record. In Factum each agent must pass its test suite before release; in the software foundry, tests must pass before anything ships.',
  },
  {
    q: 'How is this different from a copilot?',
    a: 'A copilot helps a person do the work faster. Our agents do the work — they take the task, see it through, and come back when it is done or when they need a decision from you.',
  },
  {
    q: 'When can we use the software foundry?',
    a: 'It is in development. Join the waitlist and we will contact you when it is ready for early teams.',
  },
  {
    q: 'Is our data used to train models?',
    a: 'No. Your data is kept apart from every other customer’s and used only to do the work you ask for.',
  },
];
