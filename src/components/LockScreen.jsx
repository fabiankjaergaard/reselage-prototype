import { useState, useEffect } from 'react'

function LockScreen({ onNotificationTap, variant = 'disruption', notificationScenario = 'normal' }) {
  const [showNotification, setShowNotification] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    // Set current time based on variant
    if (variant === 'morning') {
      setCurrentTime('07:32')
    } else {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)
    }

    // Show notification after a delay (simulating it arriving)
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, variant === 'morning' ? 1500 : 2000)

    return () => clearTimeout(timer)
  }, [variant])

  const getNotificationContent = () => {
    if (variant === 'disruption') {
      return {
        title: 'Störning på din rutt',
        text: 'Röda linjen är försenad vid Slussen. Tryck för att se alternativ.',
        type: 'alert'
      }
    }

    // Morning notifications based on scenario
    switch (notificationScenario) {
      case 'warning':
        return {
          title: 'Hög beläggning förväntas',
          text: 'Gå tidigare för att få sittplats. Tryck för detaljer.',
          type: 'warning'
        }
      case 'alert':
        return {
          title: 'Störning på röda linjen',
          text: 'Din resa kan påverkas. Vi har alternativ redo.',
          type: 'alert'
        }
      default:
        return {
          title: 'Din resa ser bra ut',
          text: 'Inga störningar. Avgå 08:12 som vanligt.',
          type: 'success'
        }
    }
  }

  const notification = getNotificationContent()

  const getNotificationStyle = () => {
    switch (notification.type) {
      case 'warning': return 'lock-notification-warning'
      case 'alert': return 'lock-notification-alert'
      default: return 'lock-notification-success'
    }
  }

  return (
    <div className="lock-screen">
      <div className="lock-screen-content">
        <div className="lock-time">{currentTime}</div>
        <div className="lock-date">torsdag 16 januari</div>
      </div>

      {/* Now Playing Widget - only show during disruption (traveling) */}
      {variant === 'disruption' && (
        <div className="now-playing-widget">
          <div className="now-playing-artwork">
            <div className="artwork-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <div className="now-playing-info">
            <p className="now-playing-title">Framgångspodden</p>
            <p className="now-playing-artist">#312 Mikael Vemmenby - Hur Grupp 8 från IHM fullständigt briljerade och räddade hela SL:s framtid</p>
            <div className="now-playing-progress">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '34%' }}></div>
              </div>
              <div className="progress-times">
                <span>12:45</span>
                <span>-24:18</span>
              </div>
            </div>
          </div>
          <div className="now-playing-controls">
            <button className="control-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            <button className="control-btn control-btn-main" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            <button className="control-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Morning context - alarm widget */}
      {variant === 'morning' && (
        <div className="morning-context">
          <div className="alarm-widget">
            <div className="alarm-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 20c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-16c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9m.5 5v5.25l4.5 2.67-.75 1.23L11 15V9h1.5zM3.52 5.35l1.41-1.41 3.54 3.53-1.41 1.42L3.52 5.35zm16.96-.01l-3.54 3.54-1.41-1.42 3.53-3.53 1.42 1.41z"/>
              </svg>
            </div>
            <div className="alarm-info">
              <span className="alarm-label">Väckning</span>
              <span className="alarm-time">07:30</span>
            </div>
            <span className="alarm-status">Avstängd</span>
          </div>
        </div>
      )}

      {showNotification && (
        <div className={`lock-notification ${getNotificationStyle()}`} onClick={onNotificationTap}>
          <div className="notification-header">
            <div className="notification-app-icon sl-logo">SL</div>
            <span className="notification-app-name">Reseläge</span>
            <span className="notification-time">nu</span>
          </div>
          <div className="notification-body">
            <p className="notification-title">{notification.title}</p>
            <p className="notification-text">{notification.text}</p>
          </div>
        </div>
      )}

      {!showNotification && (
        <div className="lock-hint">
          <div className="lock-hint-dot"></div>
        </div>
      )}
    </div>
  )
}

export default LockScreen
