function IterationBeforeAfterSlide2({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card iteration-comparison-slide">

        <div className="iteration-header">
          <h2 className="iteration-title">Iteration</h2>
          <p className="iteration-subtitle">Så här förbättrade vi resevyn</p>
        </div>

        <div className="iteration-comparison">
          <div className="iteration-version">
            <span className="iteration-label">Före</span>
            <div className="iteration-phone">
              <img src="/iteration2-before.jpg" alt="Före: Steg-för-steg lista" />
            </div>
            <p className="iteration-caption">Lista med steg, saknar CTA,<br/>ingen visuell vägledning</p>
          </div>

          <div className="iteration-arrow">→</div>

          <div className="iteration-version">
            <span className="iteration-label">Efter</span>
            <div className="iteration-phone">
              <img src="/iteration2-after.jpg" alt="Efter: GPS-karta" />
            </div>
            <p className="iteration-caption">GPS-vy som visar exakt<br/>var man ska gå</p>
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
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default IterationBeforeAfterSlide2
