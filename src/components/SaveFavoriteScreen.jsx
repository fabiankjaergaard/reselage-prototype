import { useState } from 'react'
import OnboardingProgress from './OnboardingProgress'

function SaveFavoriteScreen({ tripData, onNext, onBack }) {
  const [tripName, setTripName] = useState('')
  const [preferSeat, setPreferSeat] = useState(false)
  const [avoidTransfers, setAvoidTransfers] = useState(false)
  const [timeBuffer, setTimeBuffer] = useState('10')
  const [accessibility, setAccessibility] = useState(false)

  const isValid = tripName.trim()

  const handleNext = () => {
    if (isValid) {
      onNext({
        ...tripData,
        name: tripName,
        preferSeat,
        avoidTransfers,
        timeBuffer,
        accessibility
      })
    }
  }

  const suggestName = () => {
    if (tripData?.to?.toLowerCase().includes('kontor')) {
      setTripName('Till jobbet')
    } else if (tripData?.to?.toLowerCase().includes('hem')) {
      setTripName('Hem')
    } else {
      setTripName('Min pendling')
    }
  }

  return (
    <div className="screen">
      <OnboardingProgress currentStep={2} />

      <div className="screen-header">
        <h1 className="screen-title">Anpassa din resa</h1>
        <p className="screen-subtitle">Ge den ett namn och ställ in preferenser</p>
      </div>

      <div className="card card-highlight">
        <div className="card-content">
          <div className="trip-summary">
            <div className="trip-summary-row">
              <span className="trip-summary-label">Från</span>
              <span className="trip-summary-value">{tripData?.from || 'Ej angiven'}</span>
            </div>
            <div className="trip-summary-row">
              <span className="trip-summary-label">Till</span>
              <span className="trip-summary-value">{tripData?.to || 'Ej angiven'}</span>
            </div>
            <div className="trip-summary-row">
              <span className="trip-summary-label">Framme</span>
              <span className="trip-summary-value">{tripData?.arrivalTime || '09:00'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Ge resan ett namn</span>
        </div>
        <div className="card-content">
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="T.ex. Till jobbet"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
            />
            <button className="btn-suggest" onClick={suggestName}>
              Föreslå namn
            </button>
          </div>
        </div>
      </div>

      <div className="card highlight-target-preferences">
        <div className="card-header">
          <span className="card-title">Preferenser</span>
        </div>
        <div className="card-content">
          <div className="preference-list">
            <label className="preference-toggle">
              <div className="preference-info">
                <span className="preference-label">Föredra sittplats</span>
                <span className="preference-desc">Välj rutter med mer plats</span>
              </div>
              <div className={`toggle ${preferSeat ? 'toggle-active' : ''}`} onClick={() => setPreferSeat(!preferSeat)}>
                <div className="toggle-knob"></div>
              </div>
            </label>

            <label className="preference-toggle">
              <div className="preference-info">
                <span className="preference-label">Undvik byten</span>
                <span className="preference-desc">Föredra direkta rutter även om de tar längre tid</span>
              </div>
              <div className={`toggle ${avoidTransfers ? 'toggle-active' : ''}`} onClick={() => setAvoidTransfers(!avoidTransfers)}>
                <div className="toggle-knob"></div>
              </div>
            </label>

            <label className="preference-toggle">
              <div className="preference-info">
                <span className="preference-label">Tillgänglighet</span>
                <span className="preference-desc">Undvik trappor, föredra hissar</span>
              </div>
              <div className={`toggle ${accessibility ? 'toggle-active' : ''}`} onClick={() => setAccessibility(!accessibility)}>
                <div className="toggle-knob"></div>
              </div>
            </label>

            <div className="preference-select">
              <div className="preference-info">
                <span className="preference-label">Tidsmarginal</span>
                <span className="preference-desc">Buffert innan du behöver vara framme</span>
              </div>
              <div className="time-buffer-options">
                {['5', '10', '15'].map((min) => (
                  <button
                    key={min}
                    className={`time-buffer-btn ${timeBuffer === min ? 'selected' : ''}`}
                    onClick={() => setTimeBuffer(min)}
                  >
                    {min} min
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-message">
        <p>Sparade resor ger dig automatiska uppdateringar.</p>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button
          className={`btn btn-primary ${!isValid ? 'btn-disabled' : ''}`}
          onClick={handleNext}
          disabled={!isValid}
        >
          Spara och fortsätt
        </button>
        <button className="btn btn-ghost" onClick={onBack}>
          Tillbaka
        </button>
      </div>
    </div>
  )
}

export default SaveFavoriteScreen
