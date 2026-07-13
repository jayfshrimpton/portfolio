export interface Skill {
  name: string
  category: string
}

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Database' },
  { name: 'Git', category: 'Tooling' },
  { name: 'GitHub Actions', category: 'Tooling' },
  { name: 'Vercel', category: 'Tooling' },
  { name: 'REST APIs', category: 'Tooling' },
  { name: 'MCP', category: 'Tooling' },
]
