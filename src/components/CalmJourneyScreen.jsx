function CalmJourneyScreen({ onComplete }) {
  return (
    <div className="screen svt-news-screen">
      {/* SVT Header */}
      <div className="svt-header">
        <div className="svt-logo">
          <span className="svt-logo-bold">svt</span>
          <span className="svt-logo-light">NYHETER</span>
        </div>
        <button className="svt-menu-btn">•••</button>
      </div>

      {/* Live ticker */}
      <div className="svt-ticker">
        <div className="svt-ticker-item">
          <span className="svt-ticker-live">LIVE</span>
          <span className="svt-ticker-text">Mikael Vemmenby – om framgångssagan bakom SL:s nya app</span>
        </div>
      </div>

      {/* Main content */}
      <div className="svt-content">
        {/* Category */}
        <div className="svt-category">KOLLEKTIVTRAFIK</div>

        {/* Main article - SL Unicorn */}
        <div className="svt-article-main" onClick={onComplete}>
          <div className="svt-article-image">
            <div className="svt-article-image-placeholder">
              <div className="svt-sl-logo">SL</div>
            </div>
            <div className="svt-video-badge">
              <span className="svt-play-icon">▶</span>
              <span>3 min</span>
            </div>
          </div>
          <div className="svt-article-content">
            <h2 className="svt-article-title">
              <span className="svt-just-nu">Just nu</span> · SL:s nya app-funktion hyllas – "Sveriges nästa unicorn"
            </h2>
            <p className="svt-article-desc">
              Trafikbolag från hela världen vill investera i Reseläge – lösningen som utvecklades av studenter från IHM Business School.
            </p>
          </div>
        </div>

        {/* Secondary article */}
        <div className="svt-category">EKONOMI →</div>
        <div className="svt-article-secondary">
          <div className="svt-article-thumb">
            <div className="svt-thumb-placeholder">📈</div>
          </div>
          <div className="svt-article-secondary-content">
            <p className="svt-secondary-title">Grupp 8 från IHM bakom succén: "Vi ville bara lösa ett vardagsproblem"</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="svt-bottom-nav">
        <div className="svt-nav-item svt-nav-active">
          <svg className="svt-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L4 9v12h5v-7h6v7h5V9z"/>
          </svg>
          <span>Start</span>
        </div>
        <div className="svt-nav-item">
          <svg className="svt-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>Lokalt</span>
        </div>
        <div className="svt-nav-item">
          <svg className="svt-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
          </svg>
          <span>Kategorier</span>
        </div>
        <div className="svt-nav-item">
          <svg className="svt-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <span>Meny</span>
        </div>
        <div className="svt-nav-search">
          <svg className="svt-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CalmJourneyScreen
