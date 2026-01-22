function ValidationSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card validation-slide">

        <div className="validation-header">
          <h2 className="validation-title">Validering</h2>
          <p className="validation-subtitle">Vi testade och lärde oss</p>
        </div>

        <div className="validation-content">

          {/* What we tested */}
          <div className="validation-section">
            <h3 className="validation-section-title">Vad vi testade</h3>
            <ul className="validation-list">
              <li>Prototyp med 5 pendlare i målgruppen</li>
              <li>Think-aloud test genom hela flödet</li>
              <li>Fokus på onboarding och störningshantering</li>
            </ul>
          </div>

          {/* What didn't work */}
          <div className="validation-section validation-issues">
            <h3 className="validation-section-title">Vad som inte funkade först</h3>
            <div className="validation-issue-cards">
              <div className="issue-card">
                <span className="issue-icon">✗</span>
                <p>För mycket information på en gång i störningsvyn</p>
              </div>
              <div className="issue-card">
                <span className="issue-icon">✗</span>
                <p>Saknar val av rutter på ett bra sätt</p>
              </div>
              <div className="issue-card">
                <span className="issue-icon">✗</span>
                <p>Användare missade GPS-kartan vid byte</p>
              </div>
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
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default ValidationSlide
