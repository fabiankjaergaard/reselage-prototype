function ValueSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card value-slide">

        <div className="value-header">
          <h2 className="value-title">Varför ska SL investera i detta?</h2>
          <p className="value-subtitle">Affärsvärde och potential</p>
        </div>

        <div className="value-content">

          <div className="value-metrics">
            <div className="value-metric">
              <span className="metric-number">8-12% (+)</span>
              <span className="metric-label">Ökad kundnöjdhet vid störningar</span>
              <span className="metric-source">Proaktiv info istället för reaktiv</span>
            </div>
            <div className="value-metric">
              <span className="metric-number">15-20% (-)</span>
              <span className="metric-label">Färre samtal till kundtjänst</span>
              <span className="metric-source">Användare får svar innan de ringer</span>
            </div>
            <div className="value-metric">
              <span className="metric-number">10-15% (-)</span>
              <span className="metric-label">Minskad upplevd stress</span>
              <span className="metric-source">Känsla av kontroll över resan</span>
            </div>
          </div>

          <div className="value-qualitative">
            <h3 className="value-section-title">Mjuka värden</h3>
            <ul className="value-list">
              <li>Stärkt varumärke: "SL som bryr sig"</li>
              <li>Ökad lojalitet bland periodkortsinnehavare</li>
              <li>Konkurrenskraft mot bil och taxi</li>
              <li>Data för bättre trafikplanering</li>
            </ul>
          </div>

        </div>

        <div className="value-bottom">
          <p className="value-verdict">
            <strong>Sammanfattning:</strong> Liten investering, stor påverkan på kundupplevelsen –
            och SL:s position som modern kollektivtrafik.
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

export default ValueSlide
