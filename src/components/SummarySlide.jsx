function SummarySlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card summary-slide">

        <div className="summary-header">
          <div className="summary-label">Sammanfattning</div>
          <h1 className="summary-name">Reseläge</h1>
          <p className="summary-tagline">Vad vi just upplevde i prototypen</p>
        </div>

        <div className="summary-problems">
          <div className="summary-section-title">Reseläge löser</div>

          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="summary-item-content">
                <span className="summary-item-title">Proaktiv kommunikation</span>
                <span className="summary-item-desc">Resenären får info innan hen behöver fråga</span>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="summary-item-content">
                <span className="summary-item-title">Mindre mental belastning</span>
                <span className="summary-item-desc">Stina slipper tänka – appen tänker åt henne</span>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
                  <path d="M12 3v6"/>
                </svg>
              </div>
              <div className="summary-item-content">
                <span className="summary-item-title">Automatisk problemlösning</span>
                <span className="summary-item-desc">Vid störning presenteras ny rutt direkt</span>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div className="summary-item-content">
                <span className="summary-item-title">Personlig upplevelse</span>
                <span className="summary-item-desc">Anpassad efter Stinas preferenser och schema</span>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-outcome">
          <div className="outcome-text">
            <strong>Resultatet?</strong> En personaliserad resa utifrån vad som är viktigt för individen. En resenär som känner sig <em>omhändertagen</em>, har <em>kontroll</em>, och når fram i tid – utan stress.
          </div>
        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka till prototyp
          </button>
          <button className="slide-btn primary" onClick={onContinue}>
            Se före & efter
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
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default SummarySlide
