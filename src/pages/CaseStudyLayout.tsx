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
    <main id="main-content" className="case-study-page">
      <Link to="/#projects" className="case-study-back" data-cursor="Back">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <article>
        <header className="case-study-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <div className="case-study-tags" aria-label="Technologies used">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {github && (
            <a className="case-study-github" href={github} target="_blank" rel="noreferrer" data-cursor="Code">
              View source <span aria-hidden="true">↗</span>
            </a>
          )}
        </header>

        <div className="case-study-body">{children}</div>
      </article>
    </main>
  )
}
