function ResearchSlide({ onContinue, onBack, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card research-slide persona-centered">

        <div className="slide-content-center">
        <div className="persona-header">
          <div className="persona-avatar-large">
            <img src="/stina.png" alt="Stina" className="persona-image" />
          </div>
          <h1 className="persona-name-large">Stina, 45</h1>
          <p className="persona-role">Pendlare · Stockholm</p>
        </div>

        <blockquote className="persona-quote">
          "Jag vill bli hållen i handen hela vägen – och slippa tänka"
        </blockquote>

        <div className="persona-traits">
          <div className="trait-item">
            <span className="trait-label">Beteende</span>
            <span className="trait-value">Tar ofta bilen för kontrollen</span>
          </div>
          <div className="trait-item">
            <span className="trait-label">Frustration</span>
            <span className="trait-value">Stressad av att hålla koll själv</span>
          </div>
          <div className="trait-item">
            <span className="trait-label">Behov</span>
            <span className="trait-value">Vill kunna släppa ansvaret</span>
          </div>
        </div>

        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka
          </button>
          <button className="slide-btn primary" onClick={onContinue}>
            Fortsätt
          </button>
        </div>

      </div>

      <div className="slide-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default ResearchSlide
