function IterationBeforeAfterSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card iteration-comparison-slide">

        <div className="iteration-header">
          <h2 className="iteration-title">Iteration</h2>
          <p className="iteration-subtitle">Så här förbättrade vi störningsvyn</p>
        </div>

        <div className="iteration-comparison iteration-three-steps">
          <div className="iteration-version">
            <span className="iteration-label">V1</span>
            <div className="iteration-phone iteration-phone-small">
              <img src="/iteration-before.jpg" alt="Version 1: Enkel störningsvy" />
            </div>
            <p className="iteration-caption">Enkel vy, lite info.<br/>Saknar val av andra rutter</p>
          </div>

          <div className="iteration-arrow">→</div>

          <div className="iteration-version">
            <span className="iteration-label">V2</span>
            <div className="iteration-phone iteration-phone-small">
              <img src="/iteration-after.jpg" alt="Version 2: Mer information" />
            </div>
            <p className="iteration-caption">För mycket info, svårt att ta beslut</p>
          </div>

          <div className="iteration-arrow">→</div>

          <div className="iteration-version">
            <span className="iteration-label">V3</span>
            <div className="iteration-phone iteration-phone-small">
              <img src="/iteration-final.jpg" alt="Version 3: Slutgiltig design" />
            </div>
            <p className="iteration-caption">Tydligt val utan kognitiv<br/>overload, men med valmöjligheter</p>
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
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default IterationBeforeAfterSlide
