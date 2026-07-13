const servers = [
  {
    name: 'kempe-docs',
    label: 'Read-only search',
    tier: 'readonly',
    x: 60,
  },
  {
    name: 'kempe-it-assets',
    label: 'Live device lookup',
    tier: 'readonly',
    x: 260,
  },
  {
    name: 'kempe-freshservice',
    label: 'Confirms before send',
    tier: 'confirm',
    x: 460,
  },
] as const

const tierColor = {
  readonly: '#16a34a',
  confirm: '#d97706',
} as const

export default function ArchitectureDiagram() {
  return (
    <figure className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <svg viewBox="0 0 580 260" className="w-full" role="img" aria-label="Architecture diagram: Claude connects to three MCP servers — kempe-docs and kempe-it-assets are read-only, kempe-freshservice requires confirmation before acting">
        {/* Claude node */}
        <rect x="220" y="10" width="140" height="44" rx="8" fill="#111827" />
        <text x="290" y="37" textAnchor="middle" fill="white" fontSize="15" fontWeight="600">
          Claude
        </text>

        {/* Connecting lines */}
        <line x1="290" y1="54" x2="90" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="290" y1="54" x2="290" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="290" y1="54" x2="490" y2="100" stroke="#9ca3af" strokeWidth="1.5" />

        {/* Server nodes */}
        {servers.map((server) => (
          <g key={server.name}>
            <rect
              x={server.x}
              y="100"
              width="120"
              height="56"
              rx="8"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
            <text x={server.x + 60} y="124" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="600">
              {server.name}
            </text>
            <circle cx={server.x + 12} cy="141" r="4" fill={tierColor[server.tier]} />
            <text x={server.x + 60 + 8} y="145" textAnchor="middle" fill="#6b7280" fontSize="10.5">
              {server.label}
            </text>
          </g>
        ))}

        {/* Legend */}
        <circle cx="180" cy="215" r="5" fill={tierColor.readonly} />
        <text x="192" y="219" fill="#374151" fontSize="12">
          Read-only
        </text>
        <circle cx="300" cy="215" r="5" fill={tierColor.confirm} />
        <text x="312" y="219" fill="#374151" fontSize="12">
          Requires confirmation
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-xs text-gray-500">
        Every server Claude can reach — colour marks the blast radius, not the code.
      </figcaption>
    </figure>
  )
}
