function ProblemSlide({ onContinue, onBack, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">
      <button className="skip-to-prototype" onClick={onSkipToPrototype}>
        Hoppa till prototyp →
      </button>

      <div className="slide-card problem-slide">

        <h2 className="problem-title">Varför bilen vinner</h2>
        <p className="problem-subtitle">Samma störning – olika upplevelser</p>

        <div className="problem-scenario">
          <div className="scenario-item scenario-good">
            <div className="scenario-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            <div className="scenario-content">
              <span className="scenario-label">Bil med GPS</span>
              <p className="scenario-quote">"Sväng höger om 200m. Kö framåt – ny rutt beräknas."</p>
            </div>
            <div className="scenario-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
          </div>

          <div className="scenario-item scenario-bad">
            <div className="scenario-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6v6"/>
                <path d="M16 6v6"/>
                <path d="M2 12h20"/>
                <path d="M18 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"/>
                <circle cx="7" cy="18" r="2"/>
                <circle cx="17" cy="18" r="2"/>
              </svg>
            </div>
            <div className="scenario-content">
              <span className="scenario-label">Kollektivtrafik idag</span>
              <p className="scenario-quote">"Störningar i trafiken." ...och sen tystnad.</p>
            </div>
            <div className="scenario-badge scenario-badge-bad">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="problem-takeaway">
          <p>Störning i trafiken.</p>
          <p className="problem-takeaway-sub">Ingen vidare instruktion.</p>
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
        <span className="dot"></span>
        <span className="dot active"></span>
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

export default ProblemSlide
