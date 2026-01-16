import { useState } from 'react'
import OnboardingProgress from './OnboardingProgress'

function SetupTripScreen({ onNext, onBack }) {
  const [fromAddress, setFromAddress] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [arrivalTime, setArrivalTime] = useState('09:00')

  const isValid = fromAddress.trim() && toAddress.trim() && arrivalTime

  const handleNext = () => {
    if (isValid) {
      onNext({
        from: fromAddress,
        to: toAddress,
        arrivalTime: arrivalTime
      })
    }
  }

  const fillDemo = () => {
    setFromAddress('Vasagatan 12, Stockholm')
    setToAddress('Kontoret, Medborgarplatsen')
    setArrivalTime('09:00')
  }

  return (
    <div className="screen">
      <OnboardingProgress currentStep={1} />

      <div className="screen-header">
        <h1 className="screen-title">Planera din resa</h1>
        <p className="screen-subtitle">Vi tar hand om resten</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Resuppgifter</span>
        </div>
        <div className="card-content">
          <div className="form-group">
            <label className="form-label">Varifrån åker du?</label>
            <input
              type="text"
              className="form-input"
              placeholder="T.ex. Vasagatan 12"
              value={fromAddress}
              onChange={(e) => setFromAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Vart ska du?</label>
            <input
              type="text"
              className="form-input"
              placeholder="T.ex. Kontoret, Medborgarplatsen"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">När måste du vara framme?</label>
            <input
              type="time"
              className="form-input"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="trust-message">
        <p>Vi beräknar automatiskt när du behöver gå hemifrån.</p>
      </div>

      <button className="btn btn-ghost btn-small" onClick={fillDemo}>
        Fyll i demo-data
      </button>

      <div className="spacer"></div>

      <div className="btn-container">
        <button
          className={`btn btn-primary ${!isValid ? 'btn-disabled' : ''}`}
          onClick={handleNext}
          disabled={!isValid}
        >
          Fortsätt
        </button>
        {onBack && (
          <button className="btn btn-ghost" onClick={onBack}>
            Tillbaka
          </button>
        )}
      </div>
    </div>
  )
}

export default SetupTripScreen
