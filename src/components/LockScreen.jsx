import { useState, useEffect } from 'react'

function LockScreen({ onNotificationTap, variant = 'disruption', notificationScenario = 'normal', appVersion = 'personal', triggerNotification = false }) {
  const [showNotification, setShowNotification] = useState(false)
  const [showPartnerNotification, setShowPartnerNotification] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [isPlaying, setIsPlaying] = useState(true)
  const [screenOn, setScreenOn] = useState(variant !== 'discovery' && variant !== 'morning' && variant !== 'arrival') // Start dark for discovery, morning, and arrival
  const [isVibrating, setIsVibrating] = useState(false)

  // Watch for external trigger to show notification
  useEffect(() => {
    if (triggerNotification && !showNotification) {
      if (variant === 'disruption') {
        setShowNotification(true)
        setIsVibrating(true)
        setTimeout(() => setIsVibrating(false), 400)
      } else if (variant === 'discovery') {
        // External trigger from typewriter effect
        setScreenOn(true)
        if (appVersion === 'personal') {
          setShowPartnerNotification(true)
        } else {
          setShowNotification(true)
          setIsVibrating(true)
          setTimeout(() => setIsVibrating(false), 400)
        }
      }
    }
  }, [triggerNotification, variant, showNotification, appVersion])

  useEffect(() => {
    // Set current time based on variant
    if (variant === 'morning') {
      setCurrentTime('07:32')
    } else if (variant === 'discovery') {
      setCurrentTime('18:45')
    } else if (variant === 'disruption') {
      setCurrentTime('08:24') // Morning commute time
    } else if (variant === 'arrival') {
      setCurrentTime('08:48') // Arrival time
    } else {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)
    }

    // Show notifications with delays
    if (variant === 'discovery') {
      // Now controlled by external triggerNotification prop
      // Phone starts dark, notification arrives when typewriter completes
      return
    } else if (variant === 'morning') {
      // Morning: Phone is dark, then notification arrives and screen lights up
      const wakeUpTimer = setTimeout(() => {
        setScreenOn(true)
        setShowNotification(true)
        setIsVibrating(true)
        setTimeout(() => setIsVibrating(false), 400)
      }, 1500)
      return () => clearTimeout(wakeUpTimer)
    } else if (variant === 'arrival') {
      // Arrival: Phone lights up, notification arrives after short delay
      const arrivalTimer = setTimeout(() => {
        setScreenOn(true)
        setShowNotification(true)
        setIsVibrating(true)
        setTimeout(() => setIsVibrating(false), 400)
      }, 1000)
      return () => clearTimeout(arrivalTimer)
    } else if (variant === 'disruption') {
      // Disruption: notification only appears on click
      // Don't auto-show - wait for user interaction
    } else {
      const timer = setTimeout(() => {
        setShowNotification(true)
        setIsVibrating(true)
        setTimeout(() => setIsVibrating(false), 400)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [variant, appVersion])

  const getNotificationContent = () => {
    if (variant === 'discovery') {
      return {
        title: 'Nytt i SL-appen: Reseläge',
        text: 'Slipp stressen – vi håller koll på din pendling åt dig. Testa nu!',
        type: 'discovery'
      }
    }

    if (variant === 'disruption') {
      return {
        title: 'Störning på din rutt',
        text: 'Röda linjen är försenad vid Slussen. Tryck för att se alternativ.',
        type: 'alert'
      }
    }

    if (variant === 'arrival') {
      return {
        title: 'Du verkar vara framme! 🎉',
        text: 'Tyck till och hjälp oss göra din och andras resa ännu bättre.',
        type: 'success'
      }
    }

    // Morning notifications based on scenario
    switch (notificationScenario) {
      case 'warning':
        return {
          title: 'Det kan bli trångt',
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
          text: 'Inga störningar. Gå hemifrån 08:12 som vanligt.',
          type: 'success'
        }
    }
  }

  const notification = getNotificationContent()

  const getNotificationStyle = () => {
    switch (notification.type) {
      case 'warning': return 'lock-notification-warning'
      case 'alert': return 'lock-notification-alert'
      case 'discovery': return 'lock-notification-discovery'
      default: return 'lock-notification-success'
    }
  }

  // If screen is off, show dark screen
  if (!screenOn && (variant === 'discovery' || variant === 'morning' || variant === 'arrival')) {
    return (
      <div className={`lock-screen screen-off ${appVersion === 'neutral' ? 'lock-screen-neutral' : ''}`}>
        {/* Dark screen - waiting for notification */}
      </div>
    )
  }

  return (
    <div
      className={`lock-screen ${(variant === 'discovery' || variant === 'morning' || variant === 'arrival') ? 'waking-up' : ''} ${isVibrating ? 'vibrating' : ''} ${appVersion === 'neutral' ? 'lock-screen-neutral' : ''}`}
    >
      <div className="lock-screen-content">
        <div className="lock-time">{currentTime}</div>
        <div className="lock-date">torsdag 16 januari</div>
      </div>

      {/* Now Playing Widget - only show during disruption (traveling) */}
      {variant === 'disruption' && (
        <div className="now-playing-widget">
          <div className="now-playing-artwork">
            <img src="/framgangspodden.jpeg" alt="Framgångspodden" className="artwork-image" />
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

      {/* Reseläge Live Activity Widget - show during disruption (traveling) */}
      {variant === 'disruption' && (
        <div className="live-activity-widget-mini">
          <div className="widget-mini-header">
            <div className="widget-mini-app">
              <div className="widget-mini-icon">SL</div>
              <span>Reseläge</span>
            </div>
            <div className="widget-mini-status">
              <span className="status-dot-mini"></span>
              Inga störningar
            </div>
          </div>
          <div className="widget-mini-content">
            <div className="widget-mini-transport">
              <span className="transport-badge-mini">Röda linjen</span>
              <span>→ Kontoret</span>
            </div>
            <div className="widget-mini-progress">
              <div className="mini-progress-track">
                <div className="mini-progress-fill" style={{ width: '35%' }}></div>
                <div className="mini-progress-bus" style={{ left: '35%' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="6" width="18" height="10" rx="2"/>
                    <circle cx="7" cy="16" r="1.5"/>
                    <circle cx="17" cy="16" r="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="widget-mini-info">
              <div className="mini-info-item">
                <span className="mini-label">Nästa</span>
                <span className="mini-value">Slussen</span>
              </div>
              <div className="mini-info-item">
                <span className="mini-label">Framme</span>
                <span className="mini-value">08:42</span>
              </div>
              <div className="mini-info-item">
                <span className="mini-label">Kvar</span>
                <span className="mini-value highlight">18 min</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SL notification - always shown when showNotification is true */}
      {showNotification && (
        <div className={`lock-notification ${getNotificationStyle()} highlight-target-morning-notification`} onClick={onNotificationTap}>
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

      {!showNotification && variant !== 'discovery' && (
        <div className="lock-hint">
          <div className="lock-hint-dot"></div>
        </div>
      )}
    </div>
  )
}

export default LockScreen
