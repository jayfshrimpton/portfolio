import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArchitectureDiagram } from './ArchitectureDiagram'

interface ProjectStoryProps {
  project: Project
}

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <article id={`project-${project.id}`} className={`project-story project-${project.id}`} data-project>
      <div className="project-progress-line" />

      <header className="project-heading" data-reveal>
        <div className="project-meta">
          <span>{project.index}</span>
          <span>{project.eyebrow}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </header>

      <div className="project-body">
        <dl className="project-metrics" data-reveal>
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className="project-narrative" data-reveal>
          {project.narrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {project.id === 'mcp' && <ArchitectureDiagram />}

        {project.quote && (
          <blockquote className="project-quote" data-reveal>
            <span aria-hidden="true">“</span>
            {project.quote}
          </blockquote>
        )}

        <footer className="project-footer" data-reveal>
          <div>
            <p className="project-status">{project.status}</p>
            <ul className="project-tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {project.slug && (
              <Link to={`/projects/${project.slug}`} data-cursor="Read">
                Full case study <span aria-hidden="true">↗</span>
              </Link>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" data-cursor="Code">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" data-cursor="Visit">
                Live product <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </footer>
      </div>
    </article>
  )
}
