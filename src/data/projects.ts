export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Commonplace',
    description:
      'Knowledge management platform for Australian engineering and construction SMEs — helps teams capture, structure, and retrieve institutional knowledge. AI-powered document structuring (Gemini), document expiry/review reminders, role-based access control, an MCP connector for AI agents, org brand styles, and scheduled notifications.',
    tags: ['React', 'TypeScript', 'Express', 'Node.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/jayfshrimpton/knowledge-capture',
    // TODO: add Vercel live URL once known
  },
  {
    title: "Punter's Journal",
    // TODO: Jay hasn't described this project yet — add a real description
    description: '',
    tags: [],
  },
  {
    title: 'OnTrack',
    description:
      'Contribution to a mature open-source full-stack codebase as part of a university capstone project. Role: Full Stack Developer.',
    // TODO: add tech stack, what OnTrack does, and a link once Jay provides more info
    tags: [],
  },
]
