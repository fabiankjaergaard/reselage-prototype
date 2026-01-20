function FeasibilitySlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card feasibility-slide">

        <div className="feasibility-header">
          <h2 className="feasibility-title">Kan vi bygga detta?</h2>
          <p className="feasibility-subtitle">En snabb teknisk genomgång</p>
        </div>

        <div className="feasibility-content">
          <div className="feasibility-section">
            <h3 className="feasibility-section-title">Det här finns redan hos SL</h3>
            <ul className="feasibility-list">
              <li>Realtidsdata för avgångar (öppet API)</li>
              <li>Ruttberäkning med alternativ</li>
              <li>Push-notiser (standardteknologi)</li>
              <li>Beläggningsdata för fordon</li>
            </ul>
          </div>

          <div className="feasibility-section">
            <h3 className="feasibility-section-title">Utmaningar att lösa</h3>
            <div className="challenges-list">
              <div className="challenge-item">
                <span className="challenge-name">Personliga avgångstider</span>
                <span className="challenge-level easy">Enkel</span>
              </div>
              <div className="challenge-item">
                <span className="challenge-name">Störningsprediktion</span>
                <span className="challenge-level medium">Medel</span>
              </div>
              <div className="challenge-item">
                <span className="challenge-name">Automatisk Plan B</span>
                <span className="challenge-level medium">Medel</span>
              </div>
              <div className="challenge-item">
                <span className="challenge-name">Beläggningsprognos</span>
                <span className="challenge-level medium">Medel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="feasibility-bottom">
          <p className="feasibility-verdict">
            <strong>Vår bedömning:</strong> Genomförbart med befintlig teknik.
            Största jobbet är UX och logik – inte infrastruktur.
          </p>
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
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default FeasibilitySlide
