/** Blog posts. `body` paragraphs are split on blank lines; **Heading** lines render as headings. */
export const BLOG_CATEGORIES = ['All', 'Product', 'AI & Enterprise', 'Security', 'How it works'];

export const BLOGS = [
  {
    id: 1,
    category: 'Product',
    readTime: '6 min read',
    date: 'June 2025',
    title: 'Introducing Factum: The AI Employee for HR and IT',
    excerpt:
      'Most HR and IT teams spend the majority of their day answering the same questions — leave balances, password resets, onboarding checklists. Factum takes that off their plate entirely.',
    featured: true,
    body: `Every HR and IT team we have spoken to describes the same problem. A significant portion of their day is spent answering questions that have already been answered — in a policy document, a handbook, a previous ticket. The same questions, from different people, every single day.

The standard fix has been a chatbot. Point it at your documentation, let it answer FAQs. The problem is that most workplace requests are not FAQs. They are actions. Someone does not just want to know the leave policy — they want to book the leave. Someone does not just want to know how to request access — they want the access granted.

A chatbot that answers and stops is half a solution. The other half is doing the work.

**What Factum actually does**

Factum is an AI employee built specifically for HR and IT. It lives in Slack or Microsoft Teams — wherever your team already works — and handles requests from the moment someone asks to the moment the thing is done.

That means it books the leave in BambooHR. It raises the Jira ticket. It grants the Okta access. It does not hand the request back to a human unless it genuinely needs one.

When it does need a human — because the request is unusual, or because it involves something sensitive — it surfaces the decision clearly, with context, and waits for a yes before proceeding. Nothing happens quietly.

**How it learns your company**

The part that makes Factum different from a configured chatbot is that it gets better over time. Not through retraining or model updates — through experience.

Every request it handles, every correction a manager makes, every exception it is told about — these become plain-English notes that Factum carries forward. Notes like: "The engineering team has a two-week notice period for access changes, not the standard one." Or: "Contractors on the Bangalore team are treated as full-time for leave purposes."

These notes are visible. You can read them, edit them, and remove them. Nothing is a black box.

**The economics**

Factum is priced as a hire, not a subscription. A flat monthly rate per AI employee, with no per-seat or per-message charges. The work it handles grows over time. The bill does not.

We offer a trial period with agreed targets. If Factum does not hit them, you walk away. That is the only way we think this should work.

**What is live today**

The EX Front Desk agent — the one that handles day-to-day HR and IT questions and requests — is live now. Onboarding, offboarding, and access management agents are in active pilots.

If you want to see it handle a real request from your team, book a demo. Bring something your team deals with every week. We will show it done end to end in fifteen minutes.`,
  },
  {
    id: 2,
    category: 'AI & Enterprise',
    readTime: '5 min read',
    date: 'May 2025',
    title: 'Why one AI assistant for the whole company is the wrong model',
    excerpt:
      'A general-purpose assistant stretched across every team sounds efficient. In practice it knows nothing deeply, and the people who need it most trust it least.',
    featured: false,
    body: '',
  },
  {
    id: 3,
    category: 'Security',
    readTime: '4 min read',
    date: 'May 2025',
    title: 'How we think about data: nothing leaves your environment',
    excerpt:
      'HR and IT hold the most sensitive data in any company. Here is exactly how Factum handles it — and what we will never do with it.',
    featured: false,
    body: '',
  },
  {
    id: 4,
    category: 'How it works',
    readTime: '7 min read',
    date: 'April 2025',
    title: 'From question to done: what a real Factum request looks like',
    excerpt:
      'A walkthrough of a leave request, an access grant, and an onboarding checklist — handled start to finish without a human in the loop.',
    featured: false,
    body: '',
  },
  {
    id: 5,
    category: 'AI & Enterprise',
    readTime: '5 min read',
    date: 'April 2025',
    title: 'The difference between a copilot and an AI employee',
    excerpt:
      'A copilot helps your team work faster. An AI employee does the work. The distinction matters more than it sounds.',
    featured: false,
    body: '',
  },
];
