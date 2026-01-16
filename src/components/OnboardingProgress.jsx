function OnboardingProgress({ currentStep, totalSteps = 3 }) {
  const steps = [
    { id: 1, label: 'Resa' },
    { id: 2, label: 'Spara' },
    { id: 3, label: 'Schema' }
  ]

  // Calculate progress (percentage)
  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div className="onboarding-progress">
      {/* Weather scene - clouds only */}
      <div className="progress-weather">
        <svg className="cloud cloud-1" viewBox="0 0 64 32">
          <ellipse cx="20" cy="20" rx="12" ry="8" fill="#fff"/>
          <ellipse cx="32" cy="16" rx="16" ry="12" fill="#fff"/>
          <ellipse cx="46" cy="20" rx="10" ry="7" fill="#fff"/>
        </svg>
        <svg className="cloud cloud-2" viewBox="0 0 48 24">
          <ellipse cx="14" cy="14" rx="10" ry="7" fill="#fff"/>
          <ellipse cx="26" cy="12" rx="12" ry="9" fill="#fff"/>
          <ellipse cx="38" cy="15" rx="8" ry="6" fill="#fff"/>
        </svg>
        <svg className="cloud cloud-3" viewBox="0 0 56 28">
          <ellipse cx="16" cy="18" rx="10" ry="6" fill="#fff"/>
          <ellipse cx="28" cy="14" rx="14" ry="10" fill="#fff"/>
          <ellipse cx="42" cy="17" rx="9" ry="6" fill="#fff"/>
        </svg>
      </div>

      {/* Track */}
      <div className="progress-track">
        {/* Completed track */}
        <div
          className="progress-track-fill"
          style={{ width: `${progressWidth}%` }}
        ></div>

        {/* Stops */}
        {steps.map((step, index) => {
          const position = (index / (totalSteps - 1)) * 100
          const isCompleted = currentStep > step.id
          const isCurrent = currentStep === step.id

          return (
            <div
              key={step.id}
              className={`progress-stop ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
              style={{ left: `${position}%` }}
            >
              <div className="stop-marker">
                {isCurrent ? (
                  <img src="/bus-no-clouds.gif" alt="Buss" className="stop-bus-gif" />
                ) : isCompleted ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                ) : (
                  <span className="stop-number">{step.id}</span>
                )}
              </div>
              <span className="stop-label">{step.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OnboardingProgress
