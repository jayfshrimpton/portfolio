import { skills } from '../data/skills'

const categoryOrder = ['Languages', 'Frontend', 'Backend', 'Data', 'Systems'] as const

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section section-shell" aria-labelledby="skills-title">
      <div className="skills-heading" data-reveal>
        <p className="section-index">03 / Working stack</p>
        <h2 id="skills-title">
          Tools change.
          <br />
          <span>Judgement compounds.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {categoryOrder.map((category, categoryIndex) => (
          <section className="skill-group" key={category} data-reveal>
            <header>
              <span>0{categoryIndex + 1}</span>
              <h3>{category}</h3>
            </header>
            <ul>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
