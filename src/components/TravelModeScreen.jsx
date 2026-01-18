function TravelModeScreen({
  travelData,
  hasDisruption,
  planBActive,
  onSimulateDisruption,
  onShowPlanB,
  onEndTravelMode,
  onCompleteTrip,
  onShowMap,
  onLockPhone
}) {
  const getOccupancyLevel = (level) => {
    switch (level) {
      case 'low': return { text: 'Trolig sittplats', color: '#2e7d32' }
      case 'medium': return { text: 'Kan bli trångt', color: '#f9a825' }
      case 'high': return { text: 'Stående resa', color: '#c62828' }
      default: return { text: 'Trolig sittplats', color: '#2e7d32' }
    }
  }

  const occupancy = getOccupancyLevel(travelData.occupancy)

  return (
    <div className="screen">
      <div className="screen-header">
        <h1 className="screen-title">Reseläge</h1>
        <p className="screen-subtitle">Till {travelData.destination}</p>
      </div>

      {planBActive && (
        <span className="plan-b-badge">Alternativ rutt aktiv</span>
      )}

      {hasDisruption && !planBActive ? (
        <>
          <div className="status-card status-disruption">
            <div className="status-dot"></div>
            <span className="status-text">Störning på din rutt</span>
          </div>

          <div className="disruption-alert-card">
            <div className="disruption-alert-header">
              <span>Röda linjen försenad vid Slussen</span>
            </div>
            <p className="disruption-alert-text">Din resa påverkas med ca 6 minuter.</p>
            <button className="btn btn-secondary" onClick={onShowPlanB}>
              Hitta alternativ rutt
            </button>
          </div>
        </>
      ) : (
        <div className="status-card status-ok">
          <div className="status-dot"></div>
          <span className="status-text">
            {planBActive
              ? `Allt flyter – framme ${travelData.arrivalTime}`
              : `Allt flyter – framme ${travelData.arrivalTime}`
            }
          </span>
        </div>
      )}

      <button className="map-btn" onClick={onShowMap}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Visa på karta
      </button>

      <div className="next-step-card highlight-target-next-step">
        <div className="next-step-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
          </svg>
        </div>
        <p className="next-step-label">Nästa steg</p>
        {planBActive ? (
          <>
            <p className="next-step-action">Buss 172 från Hållplats B</p>
            <p className="next-step-time">Avgår {travelData.nextStopTime}</p>
          </>
        ) : (
          <>
            <p className="next-step-action">Kliv av vid {travelData.nextStop}</p>
            <p className="next-step-time">Klockan {travelData.nextStopTime}</p>
          </>
        )}
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Beläggning just nu</span>
        </div>
        <div className="card-content">
          <div className="occupancy-display">
            <div className="occupancy-main">
              <div className="occupancy-indicator" style={{ backgroundColor: occupancy.color }}></div>
              <div className="occupancy-info">
                <span className="occupancy-text">{occupancy.text}</span>
                <span className="occupancy-detail">Baserat på realtidsdata</span>
              </div>
            </div>
            <div className="occupancy-meter">
              <div className="occupancy-meter-bg">
                <div
                  className="occupancy-meter-fill"
                  style={{
                    width: travelData.occupancy === 'low' ? '25%' : travelData.occupancy === 'medium' ? '60%' : '90%',
                    backgroundColor: occupancy.color
                  }}
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
        <p className="trust-subtext">Vi säger till om något ändras.</p>
      </div>


      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-primary" onClick={onCompleteTrip}>
          Jag är framme
        </button>
        <button className="btn btn-ghost" onClick={onEndTravelMode}>
          Avsluta
        </button>
      </div>
    </div>
  )
}

export default TravelModeScreen
