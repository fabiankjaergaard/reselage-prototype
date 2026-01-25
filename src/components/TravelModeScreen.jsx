import { useState } from 'react'

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
  const [showAllSteps, setShowAllSteps] = useState(false)
  const [showWalkingMap, setShowWalkingMap] = useState(false)

  // Plan B route steps
  const planBSteps = [
    { title: 'Kliv av vid Slussen', detail: 'Nästa hållplats' },
    { title: 'Gå till Hållplats B', detail: '2 min gång österut' },
    { title: 'Ta buss 172', detail: 'Avgår 08:15 · Mot Karolinska' },
    { title: 'Kliv av vid Medborgarplatsen', detail: 'Framme 08:48' }
  ]

  const getOccupancyLevel = (level) => {
    switch (level) {
      case 'low': return { text: 'Trolig sittplats', color: '#2e7d32' }
      case 'medium': return { text: 'Kan bli trångt', color: '#f9a825' }
      case 'high': return { text: 'Stående resa', color: '#e67700' }
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
            <button className="btn btn-primary" onClick={onShowPlanB}>
              Hitta alternativ rutt
            </button>
          </div>
        </>
      ) : (
        <div className="status-card status-ok">
          <div className="status-dot"></div>
          <span className="status-text">
            {planBActive
              ? `Din buss är i tid – framme ${travelData.arrivalTime}`
              : `Din buss är i tid – framme ${travelData.arrivalTime}`
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
            <p className="next-step-action">Kliv av vid Slussen</p>
            <p className="next-step-time">
              <span className="time-label">Nästa hållplats</span>
            </p>

            {/* GPS walking map - always visible */}
            <div className="gps-walking-card">
              {/* Info bar at top */}
              <div className="gps-info-bar">
                <div className="gps-info-left">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                  </svg>
                  <span>Gå till Hållplats B · 160 m · 2 min</span>
                </div>
              </div>

              <div className="gps-map-view">
                {/* Mock Apple Maps style background */}
                <div className="map-background">
                  {/* Buildings */}
                  <div className="map-building building-1"></div>
                  <div className="map-building building-2"></div>
                  <div className="map-building building-3"></div>

                  {/* Green spaces */}
                  <div className="map-park park-1"></div>
                  <div className="map-park park-2"></div>

                  {/* Streets */}
                  <div className="map-street street-horizontal"></div>
                  <div className="map-street street-vertical"></div>

                  {/* Street labels */}
                  <div className="street-name street-name-1">Katarinavägen</div>
                  <div className="street-name street-name-2">Stadsgårdsleden</div>
                </div>

                {/* Blue route line */}
                <svg className="route-line-svg" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <path
                    d="M 30 95 Q 80 85, 130 70 T 240 35"
                    fill="none"
                    stroke="#007AFF"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Your position (blue plupp) */}
                <div className="map-user-position">
                  <div className="user-plupp-apple">
                    <div className="plupp-inner"></div>
                  </div>
                  <div className="position-pulse-apple"></div>
                </div>

                {/* Destination marker (green with bus stop icon) */}
                <div className="map-destination-apple">
                  <div className="destination-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                    </svg>
                  </div>
                  <span className="destination-label-apple">Hållplats B</span>
                </div>
              </div>
            </div>

            {/* Expanderbar rutt-vy */}
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
                {planBSteps.map((step, index) => (
                  <div key={index} className="route-step-mini">
                    <div className={`route-step-number-mini ${index === 0 ? 'active' : ''}`}>{index + 1}</div>
                    <div className="route-step-content-mini">
                      <p className="route-step-title-mini">{step.title}</p>
                      <p className="route-step-detail-mini">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <p className="next-step-action">Kliv av vid {travelData.nextStop}</p>
            <p className="next-step-time">
              <span className="time-label">Ankomst hållplats:</span> {travelData.nextStopTime}
            </p>
          </>
        )}
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Hur fullt är det?</span>
        </div>
        <div className="card-content">
          <div className="occupancy-display">
            <div className="occupancy-main">
              <div className="occupancy-indicator" style={{ backgroundColor: occupancy.color }}></div>
              <div className="occupancy-info">
                <span className="occupancy-text">{occupancy.text}</span>
                <span className="occupancy-detail">Brukar vara så här kl 08:15</span>
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

      <div className="platform-tip-card">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span>Stå i framvagnen för snabbaste utgång vid {travelData.nextStop}</span>
      </div>

      <div className="trust-message">
        <p>Du behöver inte göra något just nu.</p>
        <p className="trust-subtext">
          {planBActive
            ? 'Vi larmar dig om buss 172 blir försenad.'
            : 'Vi larmar dig om röda linjen blir försenad.'}
        </p>
      </div>


      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-ghost" onClick={onEndTravelMode}>
          Avsluta reseläge
        </button>
      </div>
    </div>
  )
}

export default TravelModeScreen
