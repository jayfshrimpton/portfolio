export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  slug?: string
}

export const projects: Project[] = [
  {
    title: 'Building MCP Servers to Automate an IT Support Role',
    description:
      'Three MCP servers built solo to remove the repetitive lookup work behind a 350-machine, 25+ site IT support role — from a first attempt at a RAG chatbot to read-only search and asset lookup tools, up to a ticketing server that can act on live systems behind a human confirmation gate.',
    tags: ['Python', 'FastAPI', 'Pandas', 'MCP (Model Context Protocol)', 'Freshservice API', 'Claude'],
    slug: 'mcp-servers-it-support',
  },
  {
    title: 'Commonplace',
    description:
      'Knowledge management platform for Australian engineering and construction SMEs — helps teams capture, structure, and retrieve institutional knowledge. AI-powered document structuring (Gemini), document expiry/review reminders, role-based access control, an MCP connector for AI agents, org brand styles, and scheduled notifications.',
    tags: ['React', 'TypeScript', 'Express', 'Node.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/jayfshrimpton/knowledge-capture',
    slug: 'commonplace',
    // TODO: add Vercel live URL once known
  },
  {
    title: "Punter's Journal",
    description:
      "Bet tracking and performance analytics SaaS for Australian horse racing punters — helps them treat betting like a discipline instead of a habit. Logs all major bet types (win, place, each-way, multis, exotics, lays) with automatic P&L calculations, a dashboard tracking strike rate, ROI, POT%, turnover, and streaks, and AI-powered insights that surface personalized patterns in a user's own betting history. Tiered subscription model (Free/Pro/Elite) with Stripe billing and usage-based feature gating. Founder and sole developer, covering product design, the full-stack build, database schema, payments integration, and go-to-market. Live in production with paying customers, grown organically out of the Wolfden Australian racing community.",
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel', 'Tailwind CSS'],
    github: 'https://github.com/jayfshrimpton/PuntTracker',
    live: 'https://www.puntersjournal.com.au/',
  },
  {
    title: 'OnTrack',
    description:
      'Contribution to a mature open-source full-stack codebase as part of a university capstone project. Role: Full Stack Developer.',
    // TODO: add tech stack, what OnTrack does, and a link once Jay provides more info
    tags: [],
  },
]
