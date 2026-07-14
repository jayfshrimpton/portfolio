import { Link } from 'react-router-dom'

const links = [
  { label: 'Projects', href: '/#projects' },
  { label: 'OnTrack', href: '/#ontrack' },
  { label: 'Stack', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
] as const

export function Navbar() {
  return (
    <header className="site-header" data-nav-item>
      <Link className="site-mark" to="/#hero" aria-label="Jay Shrimpton, home" data-cursor="Home">
        <span>J</span>
        <span>S</span>
      </Link>

      <p className="site-status">
        <span className="status-dot" /> Full-stack developer
      </p>

      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href} data-cursor="Go">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <span id="scroll-progress" className="scroll-progress" />
    </header>
  )
}
