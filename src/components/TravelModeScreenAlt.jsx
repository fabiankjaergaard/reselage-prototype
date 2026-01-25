import { useState } from 'react'

function TravelModeScreenAlt({
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
  const [selectedStep, setSelectedStep] = useState(null)
  const [progress, setProgress] = useState(35) // Simulated progress %

  // Journey steps with timing and details
  const journeySteps = planBActive ? [
    {
      id: 1,
      type: 'start',
      title: 'Hemma',
      time: '08:00',
      detail: 'Vasagatan 12',
      status: 'completed',
      icon: 'home'
    },
    {
      id: 2,
      type: 'walk',
      title: 'Gå till hållplats',
      time: '5 min',
      detail: 'Till Centralstationen',
      status: 'completed',
      icon: 'walk'
    },
    {
      id: 3,
      type: 'transport',
      title: 'Röda linjen',
      time: '08:08',
      detail: 'Mot Slussen',
      status: 'current',
      icon: 'metro',
      occupancy: 'low'
    },
    {
      id: 4,
      type: 'transfer',
      title: 'Byt vid Slussen',
      time: '08:18',
      detail: 'Gå till Hållplats B · 2 min',
      status: 'upcoming',
      icon: 'transfer'
    },
    {
      id: 5,
      type: 'transport',
      title: 'Buss 172',
      time: '08:22',
      detail: 'Mot Karolinska',
      status: 'upcoming',
      icon: 'bus',
      occupancy: 'low'
    },
    {
      id: 6,
      type: 'destination',
      title: 'Kontoret',
      time: '08:48',
      detail: 'Medborgarplatsen',
      status: 'upcoming',
      icon: 'destination'
    }
  ] : [
    {
      id: 1,
      type: 'start',
      title: 'Hemma',
      time: '08:00',
      detail: 'Vasagatan 12',
      status: 'completed',
      icon: 'home'
    },
    {
      id: 2,
      type: 'walk',
      title: 'Gå till hållplats',
      time: '5 min',
      detail: 'Till Centralstationen',
      status: 'completed',
      icon: 'walk'
    },
    {
      id: 3,
      type: 'transport',
      title: 'Röda linjen',
      time: '08:08',
      detail: 'Mot Mörby centrum',
      status: 'current',
      icon: 'metro',
      occupancy: 'medium'
    },
    {
      id: 4,
      type: 'destination',
      title: 'Kontoret',
      time: '08:42',
      detail: 'Medborgarplatsen',
      status: 'upcoming',
      icon: 'destination'
    }
  ]

  const currentStep = journeySteps.find(s => s.status === 'current')
  const completedSteps = journeySteps.filter(s => s.status === 'completed').length
  const totalSteps = journeySteps.length

  const getStepIcon = (step) => {
    switch (step.icon) {
      case 'home':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        )
      case 'walk':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
          </svg>
        )
      case 'metro':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm2 0V6h5v5h-5zm3.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        )
      case 'bus':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
          </svg>
        )
      case 'transfer':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
          </svg>
        )
      case 'destination':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        )
      default:
        return null
    }
  }

  const getOccupancyInfo = (level) => {
    switch (level) {
      case 'low': return { text: 'Gott om plats', color: '#2e7d32' }
      case 'medium': return { text: 'Ganska fullt', color: '#f9a825' }
      case 'high': return { text: 'Mycket fullt', color: '#e67700' }
      default: return null
    }
  }

  return (
    <div className="screen travel-alt-screen">
      <div className="screen-header">
        <h1 className="screen-title">Din resa</h1>
        <p className="screen-subtitle">Till {travelData.destination}</p>
      </div>

      {/* Live status banner */}
      <div className="journey-status-banner">
        <div className="status-dot"></div>
        <span>
          {hasDisruption && !planBActive
            ? 'Störning på din rutt'
            : `Din buss är i tid. Framme ${planBActive ? '08:48' : travelData.arrivalTime}`
          }
        </span>
      </div>

      {/* Journey progress visualization */}
      <div className="journey-progress-container">
        <div className="journey-timeline">
          {journeySteps.map((step, index) => (
            <div
              key={step.id}
              className={`journey-step ${step.status} ${selectedStep === step.id ? 'selected' : ''}`}
            >
              {/* Connector line */}
              {index < journeySteps.length - 1 && (
                <div className={`step-connector ${step.status === 'completed' ? 'completed' : ''}`}>
                  {step.status === 'current' && (
                    <div className="live-indicator" style={{ top: '30%' }}>
                      <div className="live-dot"></div>
                    </div>
                  )}
                </div>
              )}

              {/* Clickable step header */}
              <div
                className="step-header-clickable"
                onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
              >
                {/* Step node */}
                <div className={`step-node ${step.type}`}>
                  {getStepIcon(step)}
                </div>

                {/* Step info */}
                <div className="step-info">
                  <span className="step-time">{step.time}</span>
                  <span className="step-title">{step.title}</span>
                  <span className="step-subtitle">{step.detail}</span>
                  {step.occupancy && selectedStep !== step.id && (
                    <span className="step-occupancy-inline" style={{ color: getOccupancyInfo(step.occupancy)?.color }}>
                      <span
                        className="occupancy-dot"
                        style={{ backgroundColor: getOccupancyInfo(step.occupancy)?.color }}
                      ></span>
                      {getOccupancyInfo(step.occupancy)?.text}
                    </span>
                  )}
                </div>

                {/* Expand indicator */}
                <div className={`step-expand-icon ${selectedStep === step.id ? 'expanded' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>

              {/* Expanded details - simple mobile style */}
              {selectedStep === step.id && (
                <div className="step-expanded-simple">
                  {step.type === 'transport' && step.occupancy && (
                    <div className="expanded-row">
                      <span className="expanded-label">Beläggning</span>
                      <span className="expanded-value" style={{ color: getOccupancyInfo(step.occupancy)?.color }}>
                        {getOccupancyInfo(step.occupancy)?.text}
                      </span>
                    </div>
                  )}

                  {step.status === 'current' && (
                    <button className="expanded-link" onClick={(e) => { e.stopPropagation(); onShowMap(); }}>
                      Visa på karta →
                    </button>
                  )}

                  {step.status === 'upcoming' && (
                    <p className="expanded-hint">Vi meddelar dig i tid</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current step highlight */}
      {currentStep && (
        <div className="current-step-card">
          <div className="current-step-header">
            <span className="current-label">Just nu</span>
            {currentStep.occupancy && (
              <span className="current-occupancy" style={{ color: getOccupancyInfo(currentStep.occupancy)?.color }}>
                {getOccupancyInfo(currentStep.occupancy)?.text}
              </span>
            )}
          </div>
          <p className="current-step-title">{currentStep.title}</p>
          <p className="current-step-detail">{currentStep.detail}</p>
        </div>
      )}

      {/* Trust message */}
      <div className="trust-message">
        <p>Du behöver inte göra något just nu.</p>
        <p className="trust-subtext">
          {planBActive
            ? 'Vi larmar dig om buss 172 blir försenad.'
            : 'Vi larmar dig om röda linjen blir försenad.'}
        </p>
      </div>

      {/* Disruption alert */}
      {hasDisruption && !planBActive && (
        <div className="disruption-alert-card">
          <div className="disruption-alert-header">
            <span>Störning upptäckt</span>
          </div>
          <p className="disruption-alert-text">Din resa påverkas med ca 6 minuter.</p>
          <button className="btn btn-secondary" onClick={onShowPlanB}>
            Hitta alternativ rutt
          </button>
        </div>
      )}

      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-ghost" onClick={onEndTravelMode}>
          Avsluta reseläge
        </button>
      </div>
    </div>
  )
}

export default TravelModeScreenAlt
