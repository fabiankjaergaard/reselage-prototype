function HookSlide({ onContinue, onSkipToPrototype, onStartUserTest }) {
  return (
    <div className="slide-wrapper">
      <div className="skip-buttons-container">
        <button className="skip-to-prototype" onClick={onSkipToPrototype}>
          Hoppa till prototyp →
        </button>
        {onStartUserTest && (
          <button className="start-user-test" onClick={onStartUserTest}>
            Användartest →
          </button>
        )}
      </div>

      <div className="slide-card hook-slide">

        <img src="/bus-journey-transparent.gif" alt="" className="hook-gif" />

        <h1 className="hook-headline">
          Bilen ger dig <span className="hook-highlight">kontroll</span>.<br />
          Kollektivtrafiken ber dig hoppas.<br />
          Varför?
        </h1>

        <p className="hook-subtext">
          Det behöver inte vara så.
        </p>

        <div className="slide-actions">
          <button className="slide-btn primary" onClick={onContinue}>
            Fortsätt
          </button>
        </div>

      </div>

      <div className="slide-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default HookSlide
