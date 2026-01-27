function RiskEthicsSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card risk-ethics-slide">

        <div className="slide-content-center">
        <div className="risk-ethics-header">
          <h2 className="risk-ethics-title">Risker och etik</h2>
          <p className="risk-ethics-subtitle">Vi har tänkt ett varv till</p>
        </div>

        <div className="risk-ethics-content">

          {/* What if system fails */}
          <div className="risk-section">
            <h3 className="risk-section-title">Om systemet fallerar?</h3>
            <p className="risk-answer">Reseläge är ett <strong>tillägg</strong>, inte en ersättning. Fallerar det faller användaren tillbaka på vanliga SL-appen.</p>
          </div>

          {/* Who risks being left out */}
          <div className="risk-section">
            <h3 className="risk-section-title">Vem riskerar att hamna utanför?</h3>
            <div className="exclusion-row">
              <div className="exclusion-chip">
                <span>Personer utan smartphone</span>
              </div>
              <div className="exclusion-chip">
                <span>Integritetsmedvetna</span>
              </div>
            </div>
          </div>

          {/* How we've thought about it */}
          <div className="risk-section">
            <h3 className="risk-section-title">Hur har vi tänkt kring det?</h3>
            <ul className="mitigation-list">
              <li>Funktionen är <strong>opt-in</strong>, inte tvingande</li>
              <li>Platsdata används endast under aktiv resa</li>
              <li>Befintliga kanaler (skyltar, högtalare) finns kvar</li>
            </ul>
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
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default RiskEthicsSlide
