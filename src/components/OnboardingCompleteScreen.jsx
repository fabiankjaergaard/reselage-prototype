function OnboardingCompleteScreen({ tripData, onComplete }) {
  return (
    <div className="screen screen-complete">
      <div className="complete-content">
        <div className="complete-illustration">
          <img src="/bus-journey-transparent.gif" alt="Bussresa" className="complete-gif" />
        </div>

        <div className="complete-header">
          <h1 className="complete-title">Allt klart!</h1>
          <p className="complete-subtitle">Din resa är nu sparad och aktiv</p>
        </div>

        <div className="card card-complete-summary">
          <div className="card-content">
            <div className="complete-summary">
              <div className="summary-row">
                <div className="summary-info">
                  <span className="summary-label">Resa</span>
                  <span className="summary-value">{tripData?.from} → {tripData?.to}</span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-info">
                  <span className="summary-label">Framme</span>
                  <span className="summary-value">{tripData?.arrivalTime}</span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-info">
                  <span className="summary-label">Notis</span>
                  <span className="summary-value">{tripData?.schedule?.notifyMinutesBefore} min innan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="complete-message">
          <p>Vi håller dig i handen hela vägen. Om något händer tar vi hand om det så du slipper tänka.</p>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button className="btn btn-primary btn-success" onClick={onComplete}>
          Klar
        </button>
      </div>
    </div>
  )
}

export default OnboardingCompleteScreen
