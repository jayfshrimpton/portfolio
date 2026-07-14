const servers = [
  { name: 'kempe-docs', label: 'Document search', mode: 'Read-only', tone: 'safe' },
  { name: 'kempe-it-assets', label: 'Live asset lookup', mode: 'Read-only', tone: 'safe' },
  { name: 'kempe-freshservice', label: 'Ticket lifecycle', mode: 'Confirm first', tone: 'confirm' },
] as const

export function ArchitectureDiagram() {
  return (
    <figure className="architecture" data-reveal aria-labelledby="architecture-caption">
      <div className="architecture-label">
        <span>System map</span>
        <span>Blast radius by tool</span>
      </div>

      <div className="architecture-client">
        <span className="node-signal" />
        <div>
          <strong>Claude</strong>
          <small>Reasoning + orchestration</small>
        </div>
      </div>

      <div className="architecture-trunk" aria-hidden="true" />

      <div className="architecture-servers">
        {servers.map((server) => (
          <div className={`server-node server-${server.tone}`} key={server.name}>
            <span className="server-branch" aria-hidden="true" />
            <div className="server-topline">
              <span className="node-signal" />
              <span>{server.mode}</span>
            </div>
            <strong>{server.name}</strong>
            <small>{server.label}</small>
          </div>
        ))}
      </div>

      <figcaption id="architecture-caption">
        Capability increases from left to right. Human confirmation appears exactly where the system can affect somebody else.
      </figcaption>
    </figure>
  )
}
