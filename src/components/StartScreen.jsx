import Toast from './Toast'

function StartScreen({
  onActivate,
  onSetupTrip,
  travelData,
  savedTrip,
  showMorningToast,
  onDismissToast,
  onShowMap,
  notificationScenario = 'normal'
}) {
  const hasSavedTrip = savedTrip !== null

  const getOccupancyLevel = (level) => {
    switch (level) {
      case 'low': return { text: 'Låg beläggning', color: '#2e7d32' }
      case 'medium': return { text: 'Normal beläggning', color: '#f9a825' }
      case 'high': return { text: 'Hög beläggning', color: '#c62828' }
      default: return { text: 'Låg beläggning', color: '#2e7d32' }
    }
  }

  const getScheduleText = () => {
    if (!savedTrip?.schedule?.days) return ''
    const days = savedTrip.schedule.days
    if (days.length === 7) return 'Alla dagar'
    if (days.length === 5 && !days.includes('sat') && !days.includes('sun')) return 'Vardagar'
    const dayLabels = {
      mon: 'Mån', tue: 'Tis', wed: 'Ons', thu: 'Tor', fri: 'Fre', sat: 'Lör', sun: 'Sön'
    }
    return days.map(d => dayLabels[d]).join(', ')
  }

  const getToastConfig = () => {
    const destination = savedTrip?.to || travelData.destination
    switch (notificationScenario) {
      case 'warning':
        return {
          type: 'warning',
          message: (
            <>
              <p>Hög beläggning förväntas</p>
              <p>Gå tidigare för att få sittplats på din resa till {destination}</p>
            </>
          )
        }
      case 'alert':
        return {
          type: 'alert',
          message: (
            <>
              <p>Störning på röda linjen</p>
              <p>Din resa kan påverkas. Vi har en alternativ rutt redo.</p>
            </>
          )
        }
      default:
        return {
          type: 'success',
          message: (
            <>
              <p>Din resa ser bra ut</p>
              <p>Inga störningar. Avgå {travelData.departureTime} som vanligt.</p>
            </>
          )
        }
    }
  }

  const toastConfig = getToastConfig()
  const occupancy = getOccupancyLevel(travelData.occupancy)

  if (!hasSavedTrip) {
    return (
      <div className="screen">
        <div className="screen-header">
          <h1 className="screen-title">Välkommen</h1>
          <p className="screen-subtitle">Reseläge tar hand om din pendling</p>
        </div>

        <div className="welcome-illustration">
          <img src="/bus-journey-transparent.gif" alt="Bussresa" className="welcome-gif" />
          <p className="welcome-text">Slipp stressen att hålla koll själv</p>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Vad vi gör för dig</span>
          </div>
          <div className="card-content">
            <ul className="feature-list">
              <li>Morgonuppdatering med status på din resa</li>
              <li>Varning vid störningar</li>
              <li>Automatisk alternativ rutt om något händer</li>
              <li>Du slipper räkna ut tider själv</li>
            </ul>
          </div>
        </div>

        <div className="trust-message">
          <p>SL tar ansvar för din resa så du kan fokusera på annat.</p>
        </div>

        <div className="spacer"></div>

        <div className="btn-container">
          <button className="btn btn-primary" onClick={onSetupTrip}>
            Lägg till min resa
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      {showMorningToast && (
        <div className="toast-container">
          <Toast
            type={toastConfig.type}
            message={toastConfig.message}
            onDismiss={onDismissToast}
            autoDismiss={true}
            duration={8000}
          />
        </div>
      )}

      <div className="screen-header">
        <p className="screen-greeting">God morgon</p>
        <h1 className="screen-title">Stina</h1>
        <p className="screen-subtitle">Torsdag 16 januari</p>
      </div>

      <div className="status-card status-ok">
        <div className="status-dot"></div>
        <span className="status-text">Din resa är under kontroll</span>
      </div>

      <div className="card card-saved">
        <div className="card-header">
          <span className="card-title">{savedTrip.name || 'Min resa'}</span>
          <span className="saved-badge">Sparad</span>
        </div>
        <div className="card-content">
          <div className="trip-details">
            <div className="trip-route">
              <span className="trip-from">{savedTrip.from}</span>
              <span className="trip-arrow">→</span>
              <span className="trip-to">{savedTrip.to}</span>
            </div>
            <div className="trip-schedule-info">
              <span className="schedule-badge">{getScheduleText()}</span>
              <span className="arrival-badge">Framme {savedTrip.arrivalTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Rekommenderad avgång</span>
        </div>
        <div className="card-content">
          <p className="card-large-text">{travelData.departureTime}</p>
          <p className="card-small-text">För att vara framme {savedTrip.arrivalTime}</p>
        </div>
      </div>

      <button className="map-btn" onClick={onShowMap}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Se var din buss är
        <span className="live-badge">Live</span>
      </button>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Förväntad beläggning</span>
          {savedTrip?.preferSeat && (
            <span className="preference-badge">Sittplats föredras</span>
          )}
        </div>
        <div className="card-content">
          <div className="occupancy-display">
            <div className="occupancy-main">
              <div className="occupancy-indicator" style={{ backgroundColor: occupancy.color }}></div>
              <div className="occupancy-info">
                <span className="occupancy-text">{occupancy.text}</span>
                <span className="occupancy-detail">
                  {occupancy.color === '#2e7d32' ? 'Trolig sittplats' :
                   occupancy.color === '#f9a825' ? 'Kan bli trångt' : 'Förvänta dig stående resa'}
                </span>
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
          <p className="info-tooltip">Baserat på historik och realtidsdata</p>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-primary" onClick={onActivate}>
          Starta resan
        </button>
        <button className="btn btn-ghost" onClick={onSetupTrip}>
          Ändra resa
        </button>
      </div>
    </div>
  )
}

export default StartScreen
