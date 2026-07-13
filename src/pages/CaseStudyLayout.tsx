import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface CaseStudyLayoutProps {
  title: string
  subtitle: string
  tags: string[]
  github?: string
  children: ReactNode
}

export default function CaseStudyLayout({ title, subtitle, tags, github, children }: CaseStudyLayoutProps) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link to="/#projects" className="text-sm font-medium text-gray-500 hover:text-gray-900">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 text-lg text-gray-600">{subtitle}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
            {tag}
          </span>
        ))}
      </div>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-medium text-gray-900 hover:underline"
        >
          GitHub →
        </a>
      )}

      <div className="prose-case-study mt-10 flex flex-col gap-8">{children}</div>
    </article>
  )
}
