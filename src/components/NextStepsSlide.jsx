function NextStepsSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card next-steps-slide">

        <div className="next-steps-header">
          <h2 className="next-steps-title">Nästa steg</h2>
          <p className="next-steps-subtitle">Hur vi går vidare</p>
        </div>

        <div className="next-steps-content">

          <div className="next-steps-section">
            <h3 className="next-steps-section-title">Vad är nästa steg?</h3>
            <ul className="next-steps-list">
              <li>Pilot med begränsad användargrupp</li>
              <li>Utveckla MVP tillsammans med SL:s teknikteam</li>
              <li>Fler användartester med bredare målgrupp</li>
              <li>Integration i befintlig SL-app</li>
            </ul>
          </div>

          <div className="next-steps-section">
            <h3 className="next-steps-section-title">Hur kan detta skalas?</h3>
            <ul className="next-steps-list">
              <li>Börja med en linje (t.ex. pendeltåg)</li>
              <li>Utöka till hela SL:s nät</li>
              <li>Licensiera till andra trafikbolag</li>
              <li>Internationellt</li>
            </ul>
          </div>

        </div>

        <div className="next-steps-closing">
          <div className="closing-quote">
            <img src="/stina.png" alt="Stina" className="closing-avatar" />
            <p>"Stina har äntligen kontroll - utan att behöva ta den."</p>
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
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
    </div>
  )
}

export default NextStepsSlide
