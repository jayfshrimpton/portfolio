import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-2 rounded-lg border border-gray-200 p-5 hover:border-gray-400"
        >
          <h3 className="font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
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
        </a>
      ))}
    </div>
  )
}
