import { useState } from 'react'

function DisruptionScreen({ travelData, onFollowPlanB, onChooseMyself }) {
  const [expandedCard, setExpandedCard] = useState(null)

  const currentSteps = [
    { title: 'Fortsätt på Röda linjen', detail: 'Försenad ca 6 min' },
    { title: 'Kliv av vid Medborgarplatsen', detail: 'Ankomst ca 08:54' }
  ]

  const recommendedSteps = [
    { title: 'Gå till hållplats B', detail: '2 min promenad österut' },
    { title: 'Ta buss 172', detail: 'Avgår kl 08:15' },
    { title: 'Kliv av vid Medborgarplatsen', detail: 'Ankomst ca 08:48' }
  ]

  return (
    <div className="screen clean-solution">
      {/* Header */}
      <div className="clean-header highlight-target-disruption-header">
        <h1 className="clean-title">Ändring upptäckt</h1>
        <p className="clean-subtitle">Vi har hittat en alternativ rutt</p>
      </div>

      {/* Nuvarande rutt */}
      <div
        className={`clean-card clean-card-expandable ${expandedCard === 'current' ? 'expanded' : ''}`}
        onClick={() => setExpandedCard(expandedCard === 'current' ? null : 'current')}
      >
        <div className="clean-card-header-row">
          <p className="clean-card-label">Din planerade resa</p>
          <svg
            className={`expand-icon ${expandedCard === 'current' ? 'rotated' : ''}`}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div className="clean-card-row">
          <div className="clean-card-info">
            <p className="clean-card-title">Röda linjen</p>
            <p className="clean-card-detail">Störning vid Slussen</p>
          </div>
          <div className="clean-badge clean-badge-red delay-times">
            <span className="time-original">08:48</span>
            <span className="time-new">08:54</span>
          </div>
        </div>
        <div className="clean-occupancy">
          <span className="status-dot status-dot-red"></span>
          <span>Mycket fullt</span>
        </div>

        {/* Expanderat innehåll */}
        {expandedCard === 'current' && (
          <div className="expanded-steps">
            {currentSteps.map((step, index) => (
              <div key={index} className="expanded-step">
                <div className="step-number step-number-muted">{index + 1}</div>
                <div className="step-content">
                  <p className="step-title">{step.title}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rekommenderad rutt */}
      <div
        className={`clean-card clean-card-recommended highlight-target-disruption-recommended ${expandedCard === 'recommended' ? 'expanded' : ''}`}
        onClick={() => setExpandedCard(expandedCard === 'recommended' ? null : 'recommended')}
      >
        <div className="clean-card-header-row">
          <p className="clean-card-label">Rekommenderad resa</p>
          <svg
            className={`expand-icon ${expandedCard === 'recommended' ? 'rotated' : ''}`}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div className="clean-card-row">
          <div className="clean-card-info">
            <p className="clean-card-title">Buss 172</p>
            <p className="clean-card-detail">2 min promenad till hållplats B</p>
          </div>
          <div className="clean-badge clean-badge-green">
            08:48
          </div>
        </div>
        <div className="clean-occupancy">
          <span className="status-dot status-dot-green"></span>
          <span>Gott om plats</span>
        </div>

        {/* Expanderat innehåll */}
        {expandedCard === 'recommended' && (
          <div className="expanded-steps">
            {recommendedSteps.map((step, index) => (
              <div key={index} className="expanded-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <p className="step-title">{step.title}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="clean-actions">
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
