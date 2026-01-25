function ConsequenceSlide({ onContinue, onBack }) {
  return (
    <div className="slide-wrapper">

      <div className="slide-card consequence-slide">

        <h2 className="consequence-title">Om SL inte löser detta?</h2>
        <p className="consequence-subtitle">Konsekvenserna av att inte agera</p>

        <div className="consequence-cards">

          <div className="consequence-card">
            <div className="consequence-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="consequence-card-title">Inte bara en Stina</h3>
            <p className="consequence-card-desc">Det här är inte en isolerad kund. Tusentals resenärer upplever samma frustration varje dag.</p>
          </div>

          <div className="consequence-card">
            <div className="consequence-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M8 10h.01"/>
                <path d="M12 10h.01"/>
                <path d="M16 10h.01"/>
              </svg>
            </div>
            <h3 className="consequence-card-title">Negativ spridning</h3>
            <p className="consequence-card-desc">Dåliga upplevelser sprids. Word of mouth bygger eller raserar förtroendet för kollektivtrafiken.</p>
          </div>

          <div className="consequence-card">
            <div className="consequence-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m4.9 4.9 14.2 14.2"/>
              </svg>
            </div>
            <h3 className="consequence-card-title">Ingen beteendeförändring</h3>
            <p className="consequence-card-desc">Utan förbättrad upplevelse väljer folk bilen. Klimatmålen blir svårare att nå.</p>
          </div>

        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka
          </button>
          <button className="slide-btn primary" onClick={onContinue}>
            Fortsätt
          </button>
        </div>

      </div>

    </div>
  )
}

export default ConsequenceSlide
