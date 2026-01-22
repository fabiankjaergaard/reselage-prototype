import { useState } from 'react'

function PlanBScreen({ travelData, onConfirm, onBack, onShowMap }) {
  const [showAllSteps, setShowAllSteps] = useState(false)

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

      {/* Nästa steg + Visa hela rutten i samma kort */}
      <div className="next-step-card">
        <div className="next-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
          </svg>
        </div>
        <p className="next-step-label">Nästa steg</p>
        <p className="next-step-action">Kliv av vid Slussen</p>
        <p className="next-step-time">
          <span className="time-label">Nästa hållplats</span>
        </p>

        {/* Toggle för hela rutten */}
        <button
          className="route-toggle-btn-inline"
          onClick={() => setShowAllSteps(!showAllSteps)}
        >
          <span>{showAllSteps ? 'Dölj hela rutten' : 'Visa hela rutten'}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`route-toggle-icon ${showAllSteps ? 'rotated' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {showAllSteps && (
          <div className="route-steps-list-inline">
            <div className="route-step route-step-active">
              <div className="route-step-number">1</div>
              <div className="route-step-content">
                <p className="route-step-title">Kliv av vid Slussen</p>
                <p className="route-step-detail">Nästa hållplats</p>
              </div>
            </div>

            <div className="route-step">
              <div className="route-step-number">2</div>
              <div className="route-step-content">
                <p className="route-step-title">Gå till Hållplats B</p>
                <p className="route-step-detail">2 min gång österut</p>
              </div>
            </div>

            <div className="route-step">
              <div className="route-step-number">3</div>
              <div className="route-step-content">
                <p className="route-step-title">Ta buss 172</p>
                <p className="route-step-detail">Avgår 08:15 · Mot Karolinska</p>
              </div>
            </div>

            <div className="route-step">
              <div className="route-step-number">4</div>
              <div className="route-step-content">
                <p className="route-step-title">Framme vid Medborgarplatsen</p>
                <p className="route-step-detail">ca 08:48</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Hur fullt är det på buss 172?</span>
        </div>
        <div className="card-content">
          <div className="occupancy-display">
            <div className="occupancy-main">
              <div className="occupancy-indicator" style={{ backgroundColor: '#2e7d32' }}></div>
              <div className="occupancy-info">
                <span className="occupancy-text">Gott om sittplatser</span>
                <span className="occupancy-detail">Brukar vara ledigt kl 08:15</span>
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

      <div className="trust-message">
        <p>Du behöver inte göra något just nu.</p>
        <p className="trust-subtext">Vi larmar dig om buss 172 blir försenad.</p>
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
