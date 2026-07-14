export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
      <div className="contact-kicker" data-reveal>
        <p className="section-index">04 / Contact</p>
        <span>Have a useful problem?</span>
      </div>

      <div className="contact-main" data-reveal>
        <h2 id="contact-title">
          Let’s build
          <br />
          <span>the real thing.</span>
        </h2>
        <a className="contact-email" href="mailto:jayfshrimpton@gmail.com" data-cursor="Email">
          jayfshrimpton@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>

      <footer className="site-footer">
        <p>Jay Shrimpton © 2026</p>
        <p>Built with React, GSAP + Three.js</p>
        <a href="https://github.com/jayfshrimpton" target="_blank" rel="noreferrer" data-cursor="GitHub">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </section>
  )
}
