function TitleSlide({ onContinue, onSkipToPrototype }) {
  return (
    <div className="slide-wrapper">
      <div className="slide-card title-slide">

        <div className="title-content">
          <h1 className="title-headline">
            Varför Stina tar bilen – trots att bussen redan går rätt väg
          </h1>
          <p className="title-subtitle">
            Ett problem om kontroll, inte restid
          </p>
        </div>

        <div className="slide-actions">
          <button className="slide-btn primary" onClick={onContinue}>
            Fortsätt
          </button>
          <button className="slide-btn secondary" onClick={onSkipToPrototype}>
            Direkt till prototyp
          </button>
        </div>

      </div>

      <div className="slide-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default TitleSlide
