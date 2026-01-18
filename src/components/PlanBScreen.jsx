function PlanBScreen({ travelData, onConfirm, onBack, onShowMap }) {
  const steps = [
    {
      title: 'Gå till hållplats B',
      detail: '2 minuters promenad österut'
    },
    {
      title: 'Ta buss 172',
      detail: 'Avgår kl 08:15'
    },
    {
      title: 'Kliv av vid Medborgarplatsen',
      detail: 'Ankomst ca 08:48'
    }
  ]

  return (
    <div className="screen">
      <div className="screen-header">
        <h1 className="screen-title">Alternativ rutt</h1>
        <p className="screen-subtitle">Till {travelData.destination}</p>
      </div>

      <span className="plan-b-badge">Ny ankomsttid: 08:48</span>

      <button className="map-btn" onClick={onShowMap}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Se var din buss är
      </button>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Din nya rutt</span>
        </div>
        <div className="step-list">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <p className="step-title">{step.title}</p>
                <p className="step-detail">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Beläggning på buss 172</span>
        </div>
        <div className="card-content">
          <div className="occupancy-display">
            <div className="occupancy-main">
              <div className="occupancy-indicator" style={{ backgroundColor: '#2e7d32' }}></div>
              <div className="occupancy-info">
                <span className="occupancy-text">Gott om sittplatser</span>
                <span className="occupancy-detail">Prognos baserad på historisk data</span>
              </div>
            </div>
            <div className="occupancy-meter">
              <div className="occupancy-meter-bg">
                <div
                  className="occupancy-meter-fill"
                  style={{ width: '20%', backgroundColor: '#2e7d32' }}
                ></div>
              </div>
              <div className="occupancy-meter-labels">
                <span>Ledigt</span>
                <span>Fullt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="status-card status-updating">
        <div className="status-spinner"></div>
        <span className="status-text">Uppdateras automatiskt</span>
      </div>

      <div className="trust-message">
        <p>SL tar ansvar – du får uppdateringar utan att leta information.</p>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-primary" onClick={onConfirm}>
          Jag är på väg
        </button>
        <button className="btn btn-ghost" onClick={onBack}>
          Tillbaka
        </button>
      </div>
    </div>
  )
}

export default PlanBScreen
