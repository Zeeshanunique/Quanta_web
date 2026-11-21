/** Blog posts. `body` paragraphs are split on blank lines; **Heading** lines render as headings.
 *  Every claim must be true today, or say plainly that it is in development. Old post ids (1–5) are retired on
 *  purpose (and 7, folded into 10): their links redirect to the blog index instead of opening different content. */

export const BLOGS = [
  {
    id: 10,
    category: 'Product',
    readTime: '6 min read',
    date: 'November 2026',
    title: 'Introducing Factum: the platform for your second workforce',
    excerpt:
      'Every company is about to run two workforces: one you hire, and one you deploy. Factum is the infrastructure that lets the second one do real work, safely, at scale.',
    featured: true,
    body: `Every company is about to run two workforces. One you hire. One you deploy.

The second one never sleeps, never forgets a policy, and never needs to be told twice. The models to power it already exist. Yet almost none of it runs in production, because the hard part was never the model. It's everything around it: access, oversight, proof, cost and trust.

Today we're opening early access to Factum, the platform we built to close that gap.

**Agents as colleagues, not chat windows**

On Factum, an AI agent is a colleague. It has a name and a role, a place on your org chart, and a team it works in. Teams have an orchestrator that hands work to the right member and brings the results together. Each colleague keeps a live dashboard of its own work, built from your real data.

Colleagues meet your people where they already are: their own mailboxes, and Slack, WhatsApp and Discord. And they reach your systems through more than 80 connectors built on the Model Context Protocol, the open standard for connecting AI to tools.

**Work that starts on its own**

Real work doesn't wait for someone to open a chat. Factum agents start on a schedule, on an event from another system, or on an email that just arrived. An invoice lands in a mailbox, and the agent is already reading it.

**Solution packs: start from a finished job**

You don't start from zero. Solution packs are ready-made agents for one job, each shipped with its own test suite. A new version only goes out if it passes. Four are live today.

Billing Desk works billing tickets end to end: refunds, credits and plan changes, by your own policy.

Collections follows up overdue invoices the way your collections policy says, and stops the moment there's a dispute.

AP Intake turns vendor invoices from email into bills, catching duplicates and changed bank details.

Bug Loop turns customer bug reports into engineering issues, and tells every customer when the fix ships.

The roadmap is every workflow a company repeats.

**Agents that get better every week**

Your team already corrects AI. Factum turns those corrections into lessons. Each lesson is replayed against past work before anyone sees it, approved by a person, and measured against a held-back group, so you can see what it actually changed. Nothing is ever trained on your data.

**Autonomy, governed**

Autonomy at scale only works if it's governed. Every agent on Factum runs on the same layer.

Least-privilege access: each agent reaches only the tools its job needs, read or write.

Approvals where they matter: a person signs off on the exact change.

Compliance built in: frameworks from SOC 2 and GDPR to HIPAA, the EU AI Act and ISO 42001 shape how agents work, down to zero-retention runs.

Cost you can prove: optimisations are measured against a live control group, and models are chosen per stage of work, across providers, including your own keys.

A full audit trail of every run, and a kill switch that stops every agent at once.

**Where this goes**

Factum is the first layer of what we're building at Quanta. Factum runs the business. Next, our software foundry builds it.

Early access is open, and we're onboarding a small number of teams one by one. If your team has work it repeats every week, request access at factum.quanta.co.in and we'll show you what handing it off looks like.`,
  },
  {
    id: 6,
    category: 'Company',
    readTime: '4 min read',
    date: 'November 2026',
    title: 'Two products, one standard: what Quanta builds',
    excerpt:
      'Quanta builds AI agents that do real work — one product for running operations, one for building software. Here is why they share one set of rules.',
    featured: false,
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
