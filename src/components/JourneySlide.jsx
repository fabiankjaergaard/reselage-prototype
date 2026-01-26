function JourneySlide({ onContinue, onBack, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card journey-slide">

        <h2 className="journey-title">Stinas morgon idag</h2>
        <p className="journey-subtitle">En resa utan stöd</p>

        <div className="journey-timeline">
          {/* Step 1 - Morgon */}
          <div className="timeline-step">
            <div className="timeline-dot mood-good"></div>
            <div className="timeline-content">
              <div className="timeline-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <span className="timeline-label">Morgonkaffe</span>
              <span className="timeline-desc">Allt känns lugnt</span>
            </div>
          </div>

          {/* Step 2 - Kollar appen */}
          <div className="timeline-step">
            <div className="timeline-dot mood-ok"></div>
            <div className="timeline-content">
              <div className="timeline-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                </svg>
              </div>
              <span className="timeline-label">Kollar SL-appen</span>
              <span className="timeline-desc">Verkar ok...</span>
            </div>
          </div>

          {/* Step 3 - Störning */}
          <div className="timeline-step step-pain">
            <div className="timeline-dot mood-bad"></div>
            <div className="timeline-content">
              <div className="timeline-icon icon-alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <span className="timeline-label">Störning!</span>
              <span className="timeline-desc">"Vad händer?!"</span>
            </div>
            <div className="pain-marker">
              <span>Pain point</span>
            </div>
          </div>

          {/* Step 4 - Stress */}
          <div className="timeline-step step-stress step-pain">
            <div className="timeline-dot mood-stressed"></div>
            <div className="timeline-content">
              <div className="timeline-icon icon-stress">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4"/>
                  <path d="M12 16h.01"/>
                </svg>
              </div>
              <span className="timeline-label">Stress och panik</span>
              <span className="timeline-desc">Letar alternativ, väntar oroligt, ringer jobbet</span>
            </div>
            <div className="pain-marker">
              <span>Pain point</span>
            </div>
          </div>

          {/* Step 5 - Framme */}
          <div className="timeline-step">
            <div className="timeline-dot mood-exhausted"></div>
            <div className="timeline-content">
              <div className="timeline-icon icon-muted">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="timeline-label">Framme</span>
              <span className="timeline-desc">Utmattad, sen</span>
            </div>
          </div>

          {/* Connecting line */}
          <div className="timeline-line"></div>
        </div>

        {/* Key insight */}
        <div className="journey-insight-box">
          <p className="journey-insight-text">
            "Jag orkar inte behöva tänka och stressa nu..."
          </p>
          <span className="journey-insight-author">– Stina</span>
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
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default JourneySlide
