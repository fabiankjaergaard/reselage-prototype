import { useState, useEffect } from 'react'

function SMSView({ onSLNotificationTap }) {
  const [showSLNotification, setShowSLNotification] = useState(false)

  useEffect(() => {
    // Show SL notification after reading the message for a bit
    const timer = setTimeout(() => {
      setShowSLNotification(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="sms-view">
      {/* iOS-style header */}
      <div className="sms-header">
        <button className="sms-back-btn">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="sms-contact">
          <img src="/wallpaper.png" alt="Fabio" className="sms-avatar" />
          <span className="sms-contact-name">Fabio</span>
        </div>
        <div className="sms-header-spacer"></div>
      </div>

      {/* Messages */}
      <div className="sms-messages">
        <div className="sms-date-label">igår 22:14</div>

        <div className="sms-bubble outgoing">
          <p>Godnatt älskling ❤️</p>
        </div>

        <div className="sms-bubble incoming">
          <p>Godnatt gumman 😘 Sätter larmet på 04:10, ska simma innan mina superviktiga möten</p>
        </div>

        <div className="sms-date-label">idag 17:58</div>

        <div className="sms-bubble outgoing">
          <p>Hej! Vad gör du? 😊</p>
        </div>

        <div className="sms-bubble incoming">
          <p>Tjena! Dricker proteinshake och kollar börsen lite 📈</p>
        </div>

        <div className="sms-date-label">idag 18:45</div>

        <div className="sms-bubble incoming">
          <p>Sprang precis 6 mil! Nu ska jag göra några supercoola bitcoin-affärer så vi blir ännu rikare 💰 #Success</p>
        </div>
      </div>

      {/* Input field */}
      <div className="sms-input-area">
        <div className="sms-input-container">
          <button className="sms-plus-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <circle cx="12" cy="12" r="11" stroke="#007AFF" strokeWidth="2" fill="none"/>
              <path d="M12 7v10M7 12h10" stroke="#007AFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <input type="text" placeholder="iMessage" className="sms-input" />
          <button className="sms-send-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M12 4l8 8-8 8M4 12h16" stroke="#C7C7CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* SL Notification popup at top */}
      {showSLNotification && (
        <div className="sms-notification-popup" onClick={onSLNotificationTap}>
          <div className="notification-header">
            <div className="notification-app-icon sl-logo">SL</div>
            <span className="notification-app-name">Reseläge</span>
            <span className="notification-time">nu</span>
          </div>
          <div className="notification-body">
            <p className="notification-title">Nytt i SL-appen: Reseläge</p>
            <p className="notification-text">Slipp stressen – vi håller koll på din pendling åt dig. Testa nu!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SMSView
