import { useState, useEffect } from 'react'

function MapView({ travelData, planBActive, mapContext = 'traveling', onClose }) {
  const getInitialProgress = () => {
    switch (mapContext) {
      case 'waiting': return 8
      case 'planb': return 5
      default: return 25
    }
  }

  const [vehicleProgress, setVehicleProgress] = useState(getInitialProgress())

  const getStations = () => {
    if (planBActive || mapContext === 'planb') {
      return [
        { id: 1, name: 'Din position', type: 'user', progress: 0 },
        { id: 2, name: 'Hållplats B', type: 'station', progress: 15, eta: 'Om 2 min' },
        { id: 3, name: 'Hornstull', type: 'station', progress: 40, eta: 'Om 12 min' },
        { id: 4, name: 'Zinkensdamm', type: 'station', progress: 65, eta: 'Om 18 min' },
        { id: 5, name: 'Kontoret', type: 'destination', progress: 100, eta: 'Om 28 min' },
      ]
    }

    if (mapContext === 'waiting') {
      return [
        { id: 1, name: 'Karlberg', type: 'passed', progress: 0 },
        { id: 2, name: 'Odenplan', type: 'station', progress: 25, eta: 'Om 2 min' },
        { id: 3, name: 'Din hållplats', type: 'user', progress: 45, eta: 'Om 5 min' },
        { id: 4, name: 'T-Centralen', type: 'station', progress: 70, eta: 'Om 12 min' },
        { id: 5, name: 'Kontoret', type: 'destination', progress: 100, eta: 'Om 24 min' },
      ]
    }

    return [
      { id: 1, name: 'Start', type: 'passed', progress: 0 },
      { id: 2, name: 'Odenplan', type: 'passed', progress: 20 },
      { id: 3, name: 'T-Centralen', type: 'station', progress: 45, eta: 'Om 8 min' },
      { id: 4, name: 'Slussen', type: 'station', progress: 70, eta: 'Om 14 min' },
      { id: 5, name: 'Kontoret', type: 'destination', progress: 100, eta: 'Om 22 min' },
    ]
  }

  const stations = getStations()

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleProgress((prev) => {
        const maxProgress = mapContext === 'waiting' ? 50 : 60
        if (prev >= maxProgress) return getInitialProgress()
        return prev + 0.3
      })
    }, 100)
    return () => clearInterval(interval)
  }, [mapContext])

  const getHeaderTitle = () => {
    switch (mapContext) {
      case 'waiting': return 'Spåra din buss'
      case 'planb': return 'Alternativ rutt'
      default: return 'Din resa live'
    }
  }

  // Get countdown info based on context
  const getCountdownInfo = () => {
    switch (mapContext) {
      case 'waiting':
        return {
          label: 'Bussen är här om',
          time: '5 min',
          tip: 'Stå i framvagnen för snabbaste utgång vid Medborgarplatsen',
          tipIcon: 'location'
        }
      case 'planb':
        return {
          label: 'Framme om',
          time: '28 min',
          tip: 'Du tar buss 172 istället – vi guidar dig hela vägen',
          tipIcon: 'info'
        }
      default: // traveling
        return {
          label: 'Du är framme om',
          time: '22 min',
          tip: null // No tip when traveling normally
        }
    }
  }

  const countdownInfo = getCountdownInfo()

  const getVehicleLabel = () => {
    if (planBActive || mapContext === 'planb') return 'Buss 172'
    return 'Röda linjen'
  }

  const getVehicleIcon = () => {
    const isBus = travelData.vehicleType === 'bus' || planBActive || mapContext === 'planb'

    if (isBus) {
      // Bus icon
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
        </svg>
      )
    }
    // Metro/train icon
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm2 0V6h5v5h-5zm3.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    )
  }

  const getNextStationInfo = () => {
    const next = stations.find(s => s.progress > vehicleProgress && s.type !== 'passed')
    if (!next) return null

    if (mapContext === 'waiting' && next.type === 'user') {
      return { label: 'Kommer till dig om', time: next.eta }
    }
    return { label: `Nästa stopp: ${next.name}`, time: next.eta }
  }

  const isPlanBStyle = planBActive || mapContext === 'planb'
  const lineColor = isPlanBStyle ? '#1565c0' : '#c62828'
  const nextInfo = getNextStationInfo()

  return (
    <div className="screen map-screen-v2">
      {/* Header */}
      <div className="map-header-v2">
        <button className="map-back-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div className="map-header-content">
          <h1>{getHeaderTitle()}</h1>
          <div className="map-header-route">
            <span className="route-line" style={{ background: lineColor }}></span>
            <span>{getVehicleLabel()} → {travelData.destination}</span>
          </div>
        </div>
        <div className="map-live-indicator">
          <span className="live-pulse"></span>
          LIVE
        </div>
      </div>

      {/* Big countdown - shown for all contexts */}
      <div className="map-countdown">
        <span className="countdown-label">{countdownInfo.label}</span>
        <span className="countdown-time">{countdownInfo.time}</span>
      </div>

      {/* Contextual tip */}
      {countdownInfo.tip && (
        <div className={`platform-position-card ${mapContext === 'planb' ? 'planb-tip' : ''}`}>
          {countdownInfo.tipIcon === 'location' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
          <span>{countdownInfo.tip}</span>
        </div>
      )}

      {/* Timeline */}
      <div className="map-timeline-container">
        <div className="timeline-track">
          {/* Background line */}
          <div className="timeline-line-bg"></div>

          {/* Progress line */}
          <div
            className="timeline-line-progress"
            style={{
              height: `${vehicleProgress}%`,
              background: lineColor
            }}
          ></div>

          {/* Vehicle indicator */}
          <div
            className="timeline-vehicle"
            style={{ top: `${vehicleProgress}%` }}
          >
            <div className="vehicle-marker" style={{ background: lineColor }}>
              {getVehicleIcon()}
            </div>
            <div className="vehicle-pulse-ring" style={{ borderColor: lineColor }}></div>
          </div>

          {/* Stations */}
          {stations.map((station) => (
            <div
              key={station.id}
              className={`timeline-station ${station.type}`}
              style={{ top: `${station.progress}%` }}
            >
              <div className="station-marker">
                {station.type === 'destination' ? (
                  <div className="marker-destination">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                ) : station.type === 'user' ? (
                  <div className="marker-user">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                ) : (
                  <div className={`marker-dot ${station.type === 'passed' ? 'passed' : ''}`}></div>
                )}
              </div>
              <div className="station-info">
                <span className="station-name">{station.name}</span>
                {station.eta && <span className="station-eta">{station.eta}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info - simplified */}
      <div className="map-bottom-panel">
        <div className="arrival-card-simple">
          <div className="arrival-info-simple">
            <span className="arrival-destination-simple">{travelData.destination}</span>
            <span className="arrival-time-simple">Framme {travelData.arrivalTime}</span>
          </div>
          <div className="arrival-status">
            <span className="status-dot status-dot-green"></span>
            <span>I tid</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapView
