import { ProjectStory } from '../components/ProjectStory'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-shell" aria-labelledby="projects-title">
      <div className="section-intro" data-reveal>
        <p className="section-index">01 / Selected work</p>
        <h2 id="projects-title">
          Real systems.
          <br />
          <span>Real stakes.</span>
        </h2>
        <p>
          Three products at different scales, connected by the same standard: understand the problem, choose the right abstraction, and ship the whole thing.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectStory key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
