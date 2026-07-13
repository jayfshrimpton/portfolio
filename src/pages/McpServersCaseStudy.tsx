import CaseStudyLayout from './CaseStudyLayout'
import ArchitectureDiagram from '../components/ArchitectureDiagram'

const tags = ['Python', 'FastAPI', 'Pandas', 'MCP (Model Context Protocol)', 'Freshservice API', 'Claude']

export default function McpServersCaseStudy() {
  return (
    <CaseStudyLayout
      title="Building MCP Servers to Automate an IT Support Role"
      subtitle="Three servers, escalating stakes, and a lesson about which part of an AI project is actually hard."
      tags={tags}
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">The pain</h2>
        <p className="mt-2 text-gray-600">
          As an IT Support Analyst, I was remotely connecting to roughly 350 machines, one at a time,
          across 25+ sites — checking device state, pulling asset details, and working tickets that
          all funnelled through the same manual process. Before IT, I worked in customer service,
          and that background left me with zero tolerance for people waiting on tickets. Watching how
          much of that wait was just repetitive lookup work, not actual troubleshooting, is what made
          the problem feel worth solving rather than just enduring.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">First attempt, and why it was wrong</h2>
        <p className="mt-2 text-gray-600">
          My first attempt was a RAG chatbot over our ERP data — FastAPI backend, TF-IDF for
          retrieval, Gemini for generation, and a chat UI in front of it. It worked. But building it
          taught me the real lesson: retrieval was the easy part. The UI, the conversation state, the
          orchestration around the model — that was the 80% of the project I'd be maintaining
          forever, and none of it was actually about solving the IT problem. The chatbot itself was
          the wrong abstraction: I was building an app around the AI, when the AI already had a
          perfectly good app in front of it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">The pivot</h2>
        <p className="mt-2 text-gray-600">
          That's what led me to MCP (Model Context Protocol): instead of building a custom
          interface around a model, you expose your data and actions as tools and let an existing
          client — Claude — handle the conversation, reasoning, and orchestration. I built three MCP
          servers solo, in escalating order of stakes, starting with read-only data and working up to
          a server that can act on live systems.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">The three servers</h2>
        <div className="mt-2 flex flex-col gap-3 text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">kempe-docs</span> — full-text search across
            internal documentation: titles, content, and tags. Read-only.
          </p>
          <p>
            <span className="font-semibold text-gray-900">kempe-it-assets</span> — a Pandas layer over
            an Excel-based asset register: who has which laptop, where the printers are. A teammate
            uses it daily and it replaced the spreadsheet instantly. Read-only.
          </p>
          <p>
            <span className="font-semibold text-gray-900">kempe-freshservice</span> — the full ticket
            lifecycle against the Freshservice REST API v2: create, update, bulk operations, replies
            (which email the requester directly), notes, time entries, attachments. The
            highest-stakes server, and the one that changed how I thought about the whole project.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">The architecture decision</h2>
        <p className="mt-2 text-gray-600">
          The moment a tool can email a real user or bulk-modify live tickets, "the AI can do it"
          stops being the feature and becomes the risk. So every destructive action in
          kempe-freshservice sits behind a confirmation gate: the model drafts the action, a human
          approves it, and only then does it execute. That wasn't a default I inherited from the
          protocol — it was a deliberate design call, and it's the part of this project I'd point to
          first if asked what I actually contributed versus what the AI wrote for me.
        </p>
        <div className="mt-6">
          <ArchitectureDiagram />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Outcome</h2>
        <p className="mt-2 text-gray-600">
          All three servers are real and in daily use — a teammate already relies on the assets
          server as their primary lookup tool. Going from zero to three servers took a few months,
          built with heavy AI assistance. The scarce input wasn't the code — it was nine months of
          knowing exactly where the pain lives in the day-to-day of the role, which is what made it
          possible to build the right tools instead of just more tools.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">What's next</h2>
        <p className="mt-2 text-gray-600">
          Intune automation, to eliminate the remaining manual, device-by-device work entirely.
        </p>
      </section>
    </CaseStudyLayout>
  )
}
