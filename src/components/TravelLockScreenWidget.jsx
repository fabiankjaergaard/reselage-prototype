import { useState, useEffect } from 'react'

function TravelLockScreenWidget({ planBActive, onUnlock }) {
  const [time, setTime] = useState('08:24')
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="lock-screen">
      {/* Lock screen header */}
      <div className="lock-screen-content">
        <div className="lock-time">{time}</div>
        <div className="lock-date">Onsdag 20 mars</div>
      </div>

      {/* Now Playing Widget - Podcast */}
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

      {/* GPS Navigation widget at bottom */}
      <div className="travel-widget-card-empty" onClick={onUnlock}>
        {/* Top navigation bar */}
        <div className="nav-bottom-bar">
          <svg className="walk-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
          </svg>
          <span className="nav-instruction">Gå till Hållplats B · 160 m · 2 min</span>
        </div>

        <div className="widget-gps-container">
          {/* Map background */}
          <div className="gps-map-bg">
            {/* Park areas - green */}
            <div className="park-area park-left"></div>
            <div className="park-area park-right"></div>

            {/* Building blocks - white */}
            <div className="building-block building-1"></div>
            <div className="building-block building-2"></div>
            <div className="building-block building-3"></div>

            {/* Street labels */}
            <div className="street-name street-kata">Katarinavägen</div>
            <div className="street-name street-stads">Stadsgårdsleden</div>

            {/* Blue route line */}
            <svg className="route-line" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 12 82 L 52 52 L 78 26"
                fill="none"
                stroke="#5B8FF9"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Start position (blue circle with pulsing ring) */}
            <div className="start-marker">
              <div className="start-pulse-ring"></div>
              <div className="start-dot"></div>
            </div>

            {/* Bus stop icon (green circle) */}
            <div className="walking-marker">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
              </svg>
            </div>

            {/* Destination bubble */}
            <div className="destination-popup">Hållplats B</div>

            {/* Destination marker (small blue dot) */}
            <div className="destination-dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelLockScreenWidget
