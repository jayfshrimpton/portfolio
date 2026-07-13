import { skills } from '../data/skills'

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
        >
          {skill.name}
        </span>
      ))}
    </div>
  )
}
