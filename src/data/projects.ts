export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of this project and the problem it solves.',
    tags: ['React', 'TypeScript'],
    link: 'https://github.com/',
  },
  {
    title: 'Project Two',
    description: 'A short description of this project and the problem it solves.',
    tags: ['Node.js', 'PostgreSQL'],
    link: 'https://github.com/',
  },
  {
    title: 'Project Three',
    description: 'A short description of this project and the problem it solves.',
    tags: ['Python', 'Data'],
    link: 'https://github.com/',
  },
]
