import { useState } from 'react'

function ArrivalScreen({ onSave, onSkip, hasFavoriteRoute }) {
  const [selectedFeedback, setSelectedFeedback] = useState(null)

  const feedbackOptions = [
    { id: 'good', label: 'Lugnt' },
    { id: 'okay', label: 'Okej' },
    { id: 'bad', label: 'Stressigt' }
  ]

  return (
    <div className="screen">
      <div className="screen-header">
        <h1 className="screen-title">Framme</h1>
        <p className="screen-subtitle">Du har nått din destination</p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="success-icon"></div>
          <span className="card-title">Resan är avslutad</span>
        </div>
        <div className="card-content">
          <p className="arrival-time">Du kom fram 08:48</p>
          <p className="arrival-route">Till kontoret via alternativ rutt</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Hur kändes resan?</span>
        </div>
        <div className="feedback-options">
          {feedbackOptions.map((option) => (
            <button
              key={option.id}
              className={`feedback-option ${selectedFeedback === option.id ? 'selected' : ''}`}
              onClick={() => setSelectedFeedback(option.id)}
            >
              <span className="feedback-label">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Din resstatistik</span>
        </div>
        <div className="card-content">
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">12</span>
              <span className="stat-label">resor denna månad</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3</span>
              <span className="stat-label">hanterade störningar</span>
            </div>
          </div>
        </div>
      </div>

      {hasFavoriteRoute && (
        <div className="trust-message">
          <p>Den här resan är sparad som favorit</p>
          <p className="trust-subtext">Du får morgonuppdateringar automatiskt</p>
        </div>
      )}

      <div className="spacer"></div>

      <div className="btn-container">
        {!hasFavoriteRoute ? (
          <button className="btn btn-primary" onClick={onSave}>
            Spara som favoritresa
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onSkip}>
            Tillbaka till start
          </button>
        )}
        {!hasFavoriteRoute && (
          <button className="btn btn-ghost" onClick={onSkip}>
            Klar
          </button>
        )}
      </div>
    </div>
  )
}

export default ArrivalScreen
