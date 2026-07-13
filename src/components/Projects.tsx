import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col gap-2 rounded-lg border border-gray-200 p-5"
        >
          <h3 className="font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
          {project.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(project.github || project.live || project.slug) && (
            <div className="mt-2 flex gap-4">
              {project.slug && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  Read case study →
                </Link>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-900 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
