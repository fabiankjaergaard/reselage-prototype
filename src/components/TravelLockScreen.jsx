import { useState, useEffect } from 'react'

function TravelLockScreen({ travelData, onUnlock, onNotificationTap, hasDisruption, appVersion = 'personal' }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  // Simulate progress (in real app this would come from real-time data)
  const progress = 0.35 // 35% of journey complete
  const minutesLeft = 18

  return (
    <div className={`travel-lock-screen ${appVersion === 'neutral' ? 'travel-lock-screen-neutral' : ''}`}>
      {/* Time and date */}
      <div className="lock-time-display">
        <span className="lock-time">{formatTime(currentTime)}</span>
        <span className="lock-date">{formatDate(currentTime)}</span>
      </div>

      {/* Live Activity Widget */}
      <div className={`live-activity-widget ${hasDisruption ? 'has-disruption' : ''}`}>
        <div className="widget-header">
          <div className="widget-app-info">
            <div className="widget-app-icon sl-logo-icon">SL</div>
            <span className="widget-app-name">Reseläge</span>
          </div>
          <div className={`widget-status-indicator ${hasDisruption ? 'disruption' : 'ok'}`}>
            <span className="status-dot"></span>
            {hasDisruption ? 'Störning' : 'Inga störningar'}
          </div>
        </div>

        <div className="widget-content">
          {/* Transport line */}
          <div className="widget-transport-line">
            <span className="transport-line-badge">Röda linjen</span>
            <span className="transport-direction">→ {travelData?.destination || 'Kontoret, Medborgarplatsen'}</span>
          </div>

          {/* Journey visualization */}
          <div className="journey-visual">
            <div className="journey-endpoints">
              <span className="journey-from">Nu</span>
              <span className="journey-to">{travelData?.destination || 'Kontoret'}</span>
            </div>
            <div className="journey-track">
              <div className="journey-progress" style={{ width: `${progress * 100}%` }}></div>
              <div className="journey-bus" style={{ left: `${progress * 100}%` }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="6" width="18" height="10" rx="2"/>
                  <circle cx="7" cy="16" r="1.5"/>
                  <circle cx="17" cy="16" r="1.5"/>
                </svg>
              </div>
              <div className="journey-dot journey-dot-start"></div>
              <div className="journey-dot journey-dot-end"></div>
            </div>
          </div>

          {/* Next stop highlight */}
          <div className="widget-next-stop-highlight">
            <span className="next-stop-label">Kliv av nästa</span>
            <span className="next-stop-name">{travelData?.nextStop || 'Slussen'}</span>
          </div>

          {/* Status info */}
          <div className="widget-info-row">
            <div className="widget-info-item">
              <span className="widget-info-label">Framme</span>
              <span className="widget-info-value">{travelData?.arrivalTime || '08:42'}</span>
            </div>
            <div className="widget-info-item">
              <span className="widget-info-label">Kvar</span>
              <span className="widget-info-value highlight">{minutesLeft} min</span>
            </div>
          </div>

          {/* Disruption alert if any */}
          {hasDisruption && (
            <div className="widget-alert">
              <svg viewBox="0 0 24 24" fill="currentColor" className="alert-icon">
                <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
              </svg>
              <span>Störning upptäckt - vi söker alternativ</span>
            </div>
          )}
        </div>

        {/* Invisible tap area */}
        <button className="widget-tap-area" onClick={onUnlock} aria-label="Öppna Reseläge" />
      </div>

      {/* Notification if disruption */}
      {hasDisruption && (
        <div className="lock-notification disruption-notification" onClick={onNotificationTap}>
          <div className="notification-header">
            <div className="notification-app-icon sl-logo">SL</div>
            <span className="notification-app-name">Reseläge</span>
            <span className="notification-time">nu</span>
          </div>
          <div className="notification-body">
            <p className="notification-title">Störning på din rutt</p>
            <p className="notification-text">Vi har hittat en alternativ väg. Tryck för att se.</p>
          </div>
        </div>
      )}

      {/* Bottom hint */}
      <div className="lock-bottom-hint">
        <div className="home-indicator"></div>
      </div>

      {/* Tap anywhere to unlock hint */}
      <button className="unlock-area" onClick={onUnlock} aria-label="Lås upp">
        <span className="unlock-hint">Svep upp för att låsa upp</span>
      </button>
    </div>
  )
}

export default TravelLockScreen
