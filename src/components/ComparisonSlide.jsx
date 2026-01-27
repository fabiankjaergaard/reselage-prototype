import React from 'react'

function ComparisonSlide({ onContinue, onBack }) {
  const [showAfter, setShowAfter] = React.useState(false)

  const handleBackgroundClick = (e) => {
    // Only trigger if clicking outside the card
    if (e.target.classList.contains('slide-wrapper')) {
      setShowAfter(true)
    }
  }

  return (
    <div className="slide-wrapper" onClick={handleBackgroundClick}>

      {!showAfter && (
        <div className="comparison-hint">Klicka för att se lösningen</div>
      )}

      <div className="slide-card comparison-slide">

        <div className="slide-content-center">
        <h2 className="comparison-title">{showAfter ? 'Före & Efter' : 'Idag'}</h2>
        <p className="comparison-subtitle">
          {showAfter ? 'Samma resa. Samma störning. Helt annan upplevelse.' : 'En resa utan stöd'}
        </p>

        <div className="timeline-comparison">
          {/* Before Journey - Horizontal */}
          <div className="timeline-row timeline-before animate-in">
            <div className="timeline-label">
              <span className="timeline-label-text">Utan Reseläge</span>
            </div>
            <div className="timeline-steps">
              <div className="timeline-step">
                <div className="step-dot dot-gray"></div>
                <div className="step-line line-degrading"></div>
                <span className="step-text">Kollar SL-appen</span>
              </div>
              <div className="timeline-step">
                <div className="step-dot dot-yellow"></div>
                <div className="step-line line-degrading"></div>
                <span className="step-text">Störning!</span>
              </div>
              <div className="timeline-step">
                <div className="step-dot dot-red"></div>
                <div className="step-line line-degrading"></div>
                <span className="step-text">Stress och panik</span>
              </div>
              <div className="timeline-step">
                <div className="step-dot dot-gray"></div>
                <span className="step-text">Framme</span>
              </div>
            </div>
            <div className="timeline-result result-negative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              <span>Utmattad</span>
            </div>
          </div>

          {/* After Journey - Horizontal */}
          {showAfter && (
            <div className="timeline-row timeline-after animate-in-after">
              <div className="timeline-label">
                <span className="timeline-label-text">Med Reseläge</span>
              </div>
              <div className="timeline-steps">
                <div className="timeline-step">
                  <div className="step-dot dot-blue"></div>
                  <div className="step-line line-stable"></div>
                  <span className="step-text">Notis: "Allt klart!"</span>
                </div>
                <div className="timeline-step">
                  <div className="step-dot dot-blue"></div>
                  <div className="step-line line-stable"></div>
                  <span className="step-text">Proaktiv varning</span>
                </div>
                <div className="timeline-step">
                  <div className="step-dot dot-blue"></div>
                  <div className="step-line line-stable"></div>
                  <span className="step-text">Ny rutt presenteras</span>
                </div>
                <div className="timeline-step">
                  <div className="step-dot dot-blue-dark"></div>
                  <span className="step-text">Framme i tid!</span>
                </div>
              </div>
              <div className="timeline-result result-positive">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <span>I kontroll</span>
              </div>
            </div>
          )}
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
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default ComparisonSlide
