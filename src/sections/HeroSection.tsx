export default function HeroSection() {
  return (
    <section id="hero" className="hero-section section-shell" aria-labelledby="hero-title">
      <div className="hero-kicker" data-hero-detail>
        <span>Portfolio / 2026</span>
        <span>Designing systems that hold up in the real world</span>
      </div>

      <h1 id="hero-title" className="hero-name" aria-label="Jay Shrimpton">
        <span className="name-mask hero-name-first">
          <span data-hero-word>Jay</span>
        </span>
        <span className="name-mask hero-name-last">
          <span data-hero-word>Shrimpton</span>
        </span>
      </h1>

      <div className="hero-details">
        <p className="hero-role" data-hero-detail>
          Full Stack
          <br />
          Developer
        </p>
        <p className="hero-thesis" data-hero-detail>
          I build real products—and the systems behind them—with judgement where it matters, not just code where it’s easy.
        </p>
      </div>

      <a className="hero-scroll" href="#projects" data-hero-detail data-cursor="Explore">
        <span>Scroll to explore</span>
        <span className="scroll-arrow" aria-hidden="true">↘</span>
      </a>
    </section>
  )
}
