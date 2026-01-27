function InsightSlide({ onContinue, onBack, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card insight-slide">

        <h2 className="insight-title">Vad vi lärde oss</h2>

        <div className="insight-comparison">
          <div className="insight-box insight-before">
            <span className="insight-box-label">Vi trodde</span>
            <p className="insight-box-text">
              "Det handlar om <span className="strikethrough">trängsel</span>, <span className="strikethrough">fulla bussar</span>, <span className="strikethrough">bekvämlighet</span> och <span className="strikethrough">miljömedvetenhet</span>"
            </p>
          </div>

          <div className="insight-vs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>

          <div className="insight-box insight-after">
            <span className="insight-box-label">Research visade</span>
            <p className="insight-box-text">
              "Det handlar om <strong>känslan av kontroll</strong> och <strong>mental belastning på morgonen</strong>"
            </p>
          </div>
        </div>

        <div className="insight-reveal">
          <div className="reveal-line"></div>
          <p className="reveal-text">
            Resenärer vill inte bara veta <em>när</em> bussen kommer.<br />
            <strong>De vill känna sig omhändertagna hela vägen.</strong>
          </p>
          <div className="reveal-line"></div>
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
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default InsightSlide
