import CaseStudyLayout from './CaseStudyLayout'

const tags = [
  'React',
  'TypeScript',
  'Express',
  'Node.js',
  'Supabase',
  'Tailwind CSS',
  'Vercel',
  'Google Gemini API',
]

const features = [
  {
    name: 'AI-powered document capture and structuring',
    detail: 'Raw notes and files get turned into structured, searchable documents via Google Gemini.',
  },
  {
    name: 'Knowledge expiry and review reminders',
    detail: 'Scheduled notifications flag documents that are due for review before they go stale.',
  },
  {
    name: 'Role-based access control',
    detail: 'Admin, member, and guest roles keep sensitive documentation scoped to the right people.',
  },
  {
    name: 'MCP connector',
    detail: 'Lets AI agents — Claude Desktop and others — query the knowledge base directly as a tool.',
  },
  {
    name: 'Org brand styles',
    detail: "Exported documents inherit the organisation's own branding rather than a generic template.",
  },
  {
    name: 'Real-time library',
    detail: 'Search and filtering across the whole knowledge base as it grows.',
  },
]

export default function CommonplaceCaseStudy() {
  return (
    <CaseStudyLayout
      title="Commonplace"
      subtitle="Knowledge management for engineering and construction teams, built end-to-end solo."
      tags={tags}
      github="https://github.com/jayfshrimpton/knowledge-capture"
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">The problem</h2>
        <p className="mt-2 text-gray-600">
          At a lot of Australian engineering and construction SMEs, institutional knowledge lives in
          people's heads or is scattered across files, folders, and inboxes with no shared structure.
          When someone leaves, or a similar job comes around again, that knowledge is either
          re-discovered from scratch or lost. Commonplace is a full-stack SaaS product built to solve
          that: capture knowledge as it's created, structure it with AI, and surface it again exactly
          when a team needs it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">What it does</h2>
        <div className="mt-2 flex flex-col gap-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <p className="font-semibold text-gray-900">{feature.name}</p>
              <p className="text-gray-600">{feature.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Role</h2>
        <p className="mt-2 text-gray-600">
          Sole developer — product design, the full-stack build, database schema, and every feature
          end-to-end, from the Postgres/Supabase data model through to the Vercel-deployed frontend.
        </p>
      </section>
    </CaseStudyLayout>
  )
}
