function HookSlide({ onContinue }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card hook-slide">

        <div className="slide-content-center">
        <img src="/sl-logo.jpg" alt="SL" className="hook-sl-logo" />
        <p className="hook-concept-label">Reseläge</p>

        <img src="/bus-journey-transparent.gif" alt="" className="hook-gif" />

        <h1 className="hook-headline">
          GPS:en ger dig <span className="hook-highlight">kontroll</span> – från A till B, utan att du behöver <span className="hook-highlight">tänka</span>.<br />
          Varför kan inte SL göra samma sak?
        </h1>

        </div>

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
