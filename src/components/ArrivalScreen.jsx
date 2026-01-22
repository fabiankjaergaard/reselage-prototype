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

      <div className="card arrival-hero-card">
        <div className="arrival-hero-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <p className="arrival-hero-title">Du kom fram i tid!</p>
        <p className="arrival-hero-time">08:48 till Kontoret</p>
        <div className="arrival-hero-divider"></div>
        <p className="arrival-hero-saved">Du undvek 6 min försening tack vare alternativ rutt</p>
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

      <p className="arrival-thanks">Tack för att du reser med SL</p>

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
