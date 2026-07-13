const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur">
      <a href="#hero" className="text-lg font-semibold text-gray-900">
        Your Name
      </a>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
