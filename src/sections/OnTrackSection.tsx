export function OnTrackSection() {
  return (
    <section id="ontrack" className="ontrack-section section-shell" aria-labelledby="ontrack-title">
      <div className="ontrack-type" aria-hidden="true" data-reveal>
        <span>ON</span>
        <span>TRACK</span>
      </div>

      <div className="ontrack-content" data-reveal>
        <p className="section-index">02 / Team contribution</p>
        <h2 id="ontrack-title">Learning in a codebase that already matters.</h2>
        <p>
          Contributing as a Senior Full Stack Developer on OnTrack—also known as Doubtfire—a live learning management system used at Deakin University and universities worldwide.
        </p>
        <dl>
          <div>
            <dt>Frontend</dt>
            <dd>TypeScript / Angular</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>Ruby on Rails</dd>
          </div>
          <div>
            <dt>Environment</dt>
            <dd>Docker / GitHub</dd>
          </div>
        </dl>
        <a href="https://github.com/thoth-tech" target="_blank" rel="noreferrer" data-cursor="Visit">
          Explore Thoth Tech <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
