import { useState, useEffect } from 'react'
import Toast from './Toast'

function DisruptionScreen({ travelData, onFollowPlanB, onChooseMyself }) {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="screen">
      {showToast && (
        <div className="toast-container">
          <Toast
            type="alert"
            message={
              <>
                <p>Störning på tunnelbanan</p>
                <p>Röda linjen försenad vid Slussen</p>
              </>
            }
            autoDismiss={false}
          />
        </div>
      )}

      <div className="screen-header" style={{ marginTop: '80px' }}>
        <h1 className="screen-title">Ändring upptäckt</h1>
        <p className="screen-subtitle">Vi har en lösning</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Konsekvens för dig</span>
        </div>
        <div className="card-content">
          {travelData.delayMinutes > 5 ? (
            <>
              <p className="impact-negative">
                Du blir {travelData.delayMinutes} minuter sen
              </p>
              <p className="impact-detail">Men vi har en lösning som fungerar.</p>
            </>
          ) : (
            <>
              <p className="impact-positive">
                Du kommer fortfarande hinna i tid
              </p>
              <p className="impact-detail">Vi har justerat din rutt automatiskt.</p>
            </>
          )}
        </div>
      </div>

      <div className="card card-recommendation">
        <div className="card-header">
          <span className="card-title">Vår rekommendation</span>
        </div>
        <div className="card-content">
          <p className="recommendation-title">Gå till hållplats B</p>
          <p className="recommendation-detail">2 minuters promenad härifrån</p>
          <p className="recommendation-route">Ta buss 172 istället → Framme 08:48</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Beläggningsjämförelse</span>
        </div>
        <div className="card-content">
          <div className="occupancy-comparison">
            <div className="occupancy-compare-item">
              <span className="occupancy-compare-label">Nuvarande rutt</span>
              <div className="occupancy-compare-value occupancy-high">
                <div className="occupancy-indicator"></div>
                <span>Mycket fullt</span>
              </div>
            </div>
            <div className="occupancy-compare-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="occupancy-compare-item">
              <span className="occupancy-compare-label">Alternativ rutt</span>
              <div className="occupancy-compare-value occupancy-low">
                <div className="occupancy-indicator"></div>
                <span>Gott om plats</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-message">
        <p>SL tar ansvar för din resa.</p>
        <p className="trust-subtext">Du behöver inte leta information själv.</p>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-primary" onClick={onFollowPlanB}>
          Följ rekommendationen
        </button>
        <button className="btn btn-ghost" onClick={onChooseMyself}>
          Jag vill välja själv
        </button>
      </div>
    </div>
  )
}

export default DisruptionScreen
