/** Blog posts. `body` paragraphs are split on blank lines; **Heading** lines render as headings.
 *  Every claim must be true today, or say plainly that it is in development. Old post ids (1–5) are retired on
 *  purpose: their links redirect to the blog index instead of opening different content. */

export const BLOGS = [
  {
    id: 6,
    category: 'Company',
    readTime: '4 min read',
    date: 'November 2026',
    title: 'Two products, one standard: what Quanta builds',
    excerpt:
      'Quanta builds AI agents that do real work — one product for running operations, one for building software. Here is why they share one set of rules.',
    featured: true,
    body: `AI has moved from answering to acting. A model can now issue a refund, enter a bill or open a pull request. The question companies ask has changed with it. It is no longer "is the model good enough?" It is "can we trust it with this?"

That question is what Quanta is built around.

**Two products**

Factum runs operations. Its agents work inside the systems a business already runs — billing, accounting, ticketing, email — and do jobs end to end: working a billing ticket, chasing an overdue invoice, turning a vendor invoice into a bill, turning a customer's bug report into an engineering issue. Factum is live.

Our software foundry builds software. Its agents take work from requirements to release — design, code, tests and pull requests — with engineers reviewing every change before it merges. It is in development, and we are opening a waitlist for early teams.

Different buyers, different work. The same problem underneath.

**One standard**

Every Quanta product follows the same four rules.

Does the work. The agent reads the real records, follows your own rules and prepares the finished change — not a suggestion for someone else to complete.

Asks first. Nothing changes until a person says yes. In Factum that is an approval of the exact change; in the software foundry it is a review before merge. Each agent gets only the access its job needs.

Proven first. Work is checked against real cases before it goes live, so a fix for one thing cannot quietly break another.

On record. Every step is recorded: what started it, what the agent did, who approved it and what it cost.

**Why one standard**

Because trust does not transfer between rules. A team that has learned what "approved" and "on record" mean in one product should not have to learn it again in the next. And because the hard part of putting agents to work is the same everywhere: knowing what the agent will do, and proving what it did.

If you have work you would hand off — in operations or engineering — tell us. We will show you what it looks like done.`,
  },
  {
    id: 7,
    category: 'Product',
    readTime: '5 min read',
    date: 'November 2026',
    title: 'Factum: AI agents for operations, held to one standard',
    excerpt:
      'Factum puts AI agents to work inside billing, accounting, ticketing and email. Four ready-made agents are live today. Here is what they do and how they are kept honest.',
    featured: false,
    body: `Factum is where Quanta's agents run operations. It connects agents to the systems a business already uses, and gives each one what it needs to do real work safely: access to the right tools, a person's approval on every change, a test suite before every release, and a record of every run.

**Four ready-made agents**

Billing Desk works billing tickets end to end. It finds the customer's subscription, invoices and payments, applies your own refund and plan-change policy, and proposes the exact refund, credit or plan change together with the reply.

Bug Loop turns customer bug reports into engineering issues without duplicates. When the fix ships, it finds every linked ticket and tells each customer.

Collections follows up overdue invoices the way your collections policy says, logs every promise to pay and dispute, and stops chasing as soon as an invoice is paid, disputed or the customer has an open problem.

AP Intake turns vendor invoices that arrive by email into bills. It matches the vendor and purchase order, catches duplicates and changed bank details, and codes each line.

Each one follows your own policy document, not a generic one. When the facts or the policy do not allow something, it hands off to a person with the reason.

**How they are kept honest**

Every change waits for a person. The agent prepares the change; a person approves it before anything happens in your systems.

Every agent is tested before release. Each ships with a suite of real cases, and a new version only goes out if it passes.

Every run is on record. What started it, each tool call, what was proposed, who approved it and what it cost.

Each agent gets only the access its job needs — for each system, whether it may read or also write.

**Getting started**

Pick an agent, connect your systems, add your policy and approve its first changes. We usually start with one workflow and measure it against your current numbers.`,
  },
  {
    id: 8,
    category: 'Security',
    readTime: '4 min read',
    date: 'November 2026',
    title: 'Agents that touch money and code: how we keep them in check',
    excerpt:
      'Our agents issue refunds and open pull requests. Here is what stops them doing anything nobody approved — and what we will never do with your data.',
    featured: false,
    body: `An agent that can only answer questions is easy to secure. An agent that issues refunds, enters bills or changes code is not. These are the controls every Quanta product is built on.

**Nothing changes without a person**

The agent prepares the exact change and waits. In Factum, a person approves the refund, the bill or the email before it happens. In the software foundry, engineers review every change before it merges. There is no mode where an agent quietly writes to your systems.

**Only the access the job needs**

Each agent gets only the systems its job needs, and for each one whether it may only read or also write. An agent that reads your policy documents cannot edit them.

**Everything on record**

Every run is recorded: what started it, each step the agent took, what it proposed, who approved it and what it cost. When someone asks "what did the agent do last Tuesday, and why?", there is an answer.

**Your data stays yours**

Each customer's data is kept apart from every other customer's. It is used only to do the work you ask for, and it is never used to train a shared model.

**What we do not claim**

We do not hold security certifications today, and we will not imply that we do. If you are running a security review, we will walk your team through the architecture and the data flows directly.`,
  },
  {
    id: 9,
    category: 'AI & Enterprise',
    readTime: '4 min read',
    date: 'November 2026',
    title: 'Copilots help. Agents do the work. Trust is the difference.',
    excerpt:
      'A copilot speeds up the person doing the work. An agent takes the work on. The step between the two is not a better model — it is trust.',
    featured: false,
    body: `A copilot sits next to a person and makes them faster. It drafts the email, suggests the code, summarises the ticket. The person still does the job: they decide, they click, they own the result.

An agent takes the job on. It reads the ticket, checks the records, applies the policy and prepares the finished change — the refund, the bill, the pull request.

**The model is no longer the bottleneck**

Today's models can already do much of this work. What stops most companies from letting them is not capability. It is not knowing what the agent will do, not being able to stop it, and not being able to prove afterwards what it did.

**What it takes to hand work over**

A person's yes before anything changes. Not a log to read afterwards — a decision before the change.

Proof before release. A test suite of real cases that every new version has to pass, so improving one case cannot quietly break another.

A record of every step. What started the work, what the agent did, who approved it and what it cost.

Least access. Each agent can reach only what its job needs.

**Where that leaves people**

With the decisions, not the legwork. The agent does the research and prepares the change; a person signs off in one step instead of doing the work or redoing it. That is the line we build to, in every product.`,
  },
];

/** Categories that have at least one post, so the filter never shows an empty one. */
export const BLOG_CATEGORIES = ['All', ...new Set(BLOGS.map((b) => b.category))];
