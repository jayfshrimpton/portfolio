export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  narrative: string[]
  quote?: string
  metrics: ProjectMetric[]
  tags: string[]
  status: string
  github?: string
  live?: string
  slug?: string
}

export const projects: Project[] = [
  {
    id: 'mcp',
    index: '01',
    eyebrow: 'Lead case study / IT automation',
    title: 'MCP Servers',
    description:
      'Three production tools that turned repetitive IT support work into safe, conversational actions—without building another chatbot interface.',
    narrative: [
      'I began with a RAG chatbot: FastAPI, TF-IDF retrieval, Gemini, and a custom interface. It worked, but the lesson was more useful than the product. Retrieval was the easy part; the UI and orchestration would become 80% of the ongoing maintenance.',
      'The pivot was MCP. Instead of wrapping an AI in another application, I exposed the data and actions as tools and let an existing client—Claude—handle the conversation and reasoning.',
      'The servers escalated deliberately: internal document search, live asset lookup over an Excel register, then the complete Freshservice ticket lifecycle. A teammate now uses the asset server every day.',
    ],
    quote:
      'When a tool can email a real user or bulk-modify live tickets, “the AI can do it” becomes the risk—not the feature.',
    metrics: [
      { value: '03', label: 'MCP servers shipped' },
      { value: '350', label: 'Machines in scope' },
      { value: '25+', label: 'Company sites' },
    ],
    tags: ['Python', 'FastAPI', 'Pandas', 'MCP SDK', 'Freshservice API', 'Claude'],
    status: 'Internal tooling / In daily use',
    slug: 'mcp-servers-it-support',
  },
  {
    id: 'commonplace',
    index: '02',
    eyebrow: 'Full-stack SaaS / Knowledge systems',
    title: 'Commonplace',
    description:
      'A knowledge management platform for Australian engineering and construction SMEs—capturing institutional knowledge before it disappears.',
    narrative: [
      'Commonplace takes the notes, files, and know-how scattered across a business and turns them into structured, searchable knowledge using Google Gemini.',
      'I designed and built the product solo: the React interface, Express API, Postgres data model, role-based access, review reminders, organisation brand styles, and an MCP connector that lets AI agents query the library directly.',
      'The product is designed around a practical truth: useful knowledge has an owner, a lifespan, and a moment when somebody needs it again.',
    ],
    quote: 'Knowledge management works when capture feels lighter than rediscovery.',
    metrics: [
      { value: '01', label: 'Developer, end to end' },
      { value: 'AI', label: 'Structured capture' },
      { value: 'MCP', label: 'Agent-ready access' },
    ],
    tags: ['React', 'TypeScript', 'Express', 'Supabase', 'Gemini', 'Vercel'],
    status: 'Sole developer / Active build',
    github: 'https://github.com/jayfshrimpton/knowledge-capture',
    slug: 'commonplace',
  },
  {
    id: 'punters-journal',
    index: '03',
    eyebrow: 'Live SaaS / Performance analytics',
    title: "Punter’s Journal",
    description:
      'Bet tracking and performance analytics for Australian racing punters who want evidence—not instinct—to tell them whether they are profitable.',
    narrative: [
      'The journal handles the messy reality of racing: win, place, each-way, multis, exotics, and lays, with automatic profit-and-loss calculations across each bet type.',
      'The dashboard turns that history into strike rate, ROI, POT%, turnover, and streaks. AI insights then analyse the actual record to surface personalised patterns instead of generic betting advice.',
      'I built the product solo alongside a day job, including Stripe subscriptions, usage-based feature gating, and the operational work required to support paying customers in production.',
    ],
    quote: 'The product does not promise better bets. It makes the truth about past ones impossible to ignore.',
    metrics: [
      { value: 'LIVE', label: 'Paying customers' },
      { value: '03', label: 'Subscription tiers' },
      { value: '06+', label: 'Bet types modelled' },
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel', 'Tailwind CSS'],
    status: 'Founder / Live in production',
    github: 'https://github.com/jayfshrimpton/PuntTracker',
    live: 'https://www.puntersjournal.com.au/',
  },
]
