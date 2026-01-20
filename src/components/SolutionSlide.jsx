function SolutionSlide({ onContinue, onBack, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">
      <button className="skip-to-prototype" onClick={onSkipToPrototype}>
        Hoppa till prototyp →
      </button>

      <div className="slide-card solution-slide">

        <div className="solution-label">Lösningen</div>

        <h1 className="solution-name">Reseläge</h1>
        <p className="solution-tagline">Din personliga reseassistent i SL-appen</p>

        <div className="solution-statement">
          <p>
            En tjänst som guidar Stina genom hela resan –<br />
            så hon får <strong>känslan av kontroll</strong> och <strong>slipper tänka</strong>, bara bli ledd från A till B.
          </p>
        </div>

        <div className="solution-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="benefit-text">
              <span className="benefit-title">Proaktiv</span>
              <span className="benefit-desc">Säger till innan du behöver fråga</span>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <div className="benefit-text">
              <span className="benefit-title">Personlig</span>
              <span className="benefit-desc">Anpassad efter dina preferenser</span>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="benefit-text">
              <span className="benefit-title">Alltid på</span>
              <span className="benefit-desc">Övervakar resan i bakgrunden</span>
            </div>
          </div>
        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka
          </button>
          <button className="slide-btn primary" onClick={onContinue}>
            Se prototypen
          </button>
        </div>

      </div>

      <div className="slide-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default SolutionSlide
