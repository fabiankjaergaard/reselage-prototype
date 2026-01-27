function ValidationSlide2({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card validation-slide validation-quote-slide">

        <div className="slide-content-center">
        <div className="validation-header">
          <h2 className="validation-title">Resultat</h2>
          <p className="validation-subtitle">Vad testdeltagarna sa</p>
        </div>

        <div className="validation-content">

          {/* Details quote */}
          <div className="validation-quote-section">
            <blockquote className="validation-quote">
              Nice med de små detaljerna, som det vänliga språket och kaffekoppen på morgonen. Det gör mer än vad man tror!
            </blockquote>
            <p className="validation-quote-source">Testdeltagare 1</p>
          </div>

          {/* GPS quote */}
          <div className="validation-quote-section">
            <blockquote className="validation-quote">
              Bra med automatisk GPS-vy som anpassar sig efter vart du är i din resa, både när appen är öppen och låst.
            </blockquote>
            <p className="validation-quote-source">Testdeltagare 2</p>
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
        <span className="dot active"></span>
      </div>
    </div>
  )
}

export default ValidationSlide2
