function ValidationSlide2({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card validation-slide validation-quote-slide">

        <div className="validation-header">
          <h2 className="validation-title">Resultat</h2>
          <p className="validation-subtitle">Vad testdeltagarna sa</p>
        </div>

        <div className="validation-content">

          {/* Main quote */}
          <div className="validation-quote-section validation-quote-large">
            <blockquote className="validation-quote">
              Åh, den visar ju exakt var jag ska gå! Det hade gjort min morgon så mycket lugnare.
            </blockquote>
            <p className="validation-quote-source">– Testdeltagare, 38 år, Södermalm</p>
          </div>

          {/* Additional quote */}
          <div className="validation-quote-section">
            <blockquote className="validation-quote">
              Jag förstod direkt vad jag skulle göra. Ingen stress.
            </blockquote>
            <p className="validation-quote-source">– Testdeltagare, 52 år, Bromma</p>
          </div>

          {/* Key takeaway */}
          <div className="validation-takeaway">
            <p><strong>Slutsats:</strong> Efter iterationen förstod alla testdeltagare direkt vad de skulle göra vid en störning – utan att behöva tänka.</p>
          </div>

        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka
          </button>
          <button className="slide-btn primary" onClick={onContinue}>
            Avsluta
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
        <span className="dot active"></span>
      </div>
    </div>
  )
}

export default ValidationSlide2
