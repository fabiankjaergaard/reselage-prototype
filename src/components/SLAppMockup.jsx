import { useState } from 'react'

function SLAppMockup({ onOpenReselage, highlightReselage = false }) {
  const [activeTopTab, setActiveTopTab] = useState('search')
  const [activeBottomTab, setActiveBottomTab] = useState('resa')

  const topTabs = [
    { id: 'search', label: 'Sök resa' },
    { id: 'departures', label: 'Avgångar' },
    { id: 'map', label: 'Karta' },
    { id: 'reselage', label: 'Reseläge', isNew: true }
  ]

  const handleTabClick = (tabId) => {
    if (tabId === 'reselage') {
      onOpenReselage()
    } else {
      setActiveTopTab(tabId)
    }
  }

  return (
    <div className="sl-app">
      {/* Status bar */}
      <div className="sl-status-bar">
        <span className="sl-time">16:27</span>
        <div className="sl-status-icons">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
            <rect x="0" y="6" width="3" height="6" rx="1"/>
            <rect x="4.5" y="4" width="3" height="8" rx="1"/>
            <rect x="9" y="2" width="3" height="10" rx="1"/>
            <rect x="13.5" y="0" width="3" height="12" rx="1"/>
          </svg>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.2 1 7 2.7l-1.4 1.4c-1.5-1.3-3.5-2.1-5.6-2.1s-4.1.8-5.6 2.1L.5 5.2c1.8-1.7 4.3-2.7 7-2.7zm0 3c1.8 0 3.4.7 4.6 1.8l-1.4 1.4c-.9-.8-2-1.2-3.2-1.2s-2.3.4-3.2 1.2L2.9 7.3c1.2-1.1 2.8-1.8 4.6-1.8zm0 3c.9 0 1.7.4 2.3 1l-2.3 2.5-2.3-2.5c.6-.6 1.4-1 2.3-1z"/>
          </svg>
          <div className="sl-battery">
            <span>39</span>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" stroke="currentColor">
              <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" strokeWidth="1"/>
              <rect x="22" y="3.5" width="2" height="5" rx="1" fill="currentColor"/>
              <rect x="2" y="2" width="8" height="8" rx="1" fill="#34C759"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="sl-header">
        <h1 className="sl-page-title">Resa</h1>
      </div>

      {/* Top tabs */}
      <div className="sl-top-tabs">
        {topTabs.map(tab => (
          <button
            key={tab.id}
            className={`sl-top-tab ${activeTopTab === tab.id ? 'active' : ''} ${tab.id === 'reselage' ? 'reselage-tab' : ''} ${tab.id === 'reselage' && highlightReselage ? 'highlight-pulse' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
            {tab.isNew && <span className="sl-new-badge">NY</span>}
          </button>
        ))}
      </div>

      {/* Search content */}
      <div className="sl-content">
        {/* Search card */}
        <div className="sl-search-card">
          <div className="sl-search-row">
            <span className="sl-search-label">Från</span>
            <span className="sl-search-placeholder">Var åker du från?</span>
          </div>
          <div className="sl-search-divider"></div>
          <div className="sl-search-row">
            <span className="sl-search-label">Till</span>
            <span className="sl-search-placeholder">Vart vill du åka?</span>
          </div>
          <button className="sl-swap-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003E9A" strokeWidth="2">
              <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/>
            </svg>
          </button>
        </div>

        {/* Time and filter */}
        <div className="sl-options-row">
          <button className="sl-option-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            Åka nu
          </button>
          <button className="sl-option-btn">
            Resefilter
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>
            </svg>
          </button>
        </div>

        {/* Search button */}
        <button className="sl-search-btn">Sök resa</button>

        {/* Favorites */}
        <div className="sl-section">
          <h3 className="sl-section-title">FAVORITSÖKNINGAR</h3>

          <div className="sl-favorite-card">
            <div className="sl-favorite-route">
              <div className="sl-route-row">
                <span className="sl-route-icon empty"></span>
                <span className="sl-route-text">Odenplan (Stockholm)</span>
              </div>
              <div className="sl-route-row">
                <span className="sl-route-icon pin"></span>
                <span className="sl-route-text">Slussen (Stockholm)</span>
              </div>
            </div>
            <button className="sl-star-btn filled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#003E9A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </button>
          </div>

          <div className="sl-favorite-card">
            <div className="sl-favorite-route">
              <div className="sl-route-row">
                <span className="sl-route-icon empty"></span>
                <span className="sl-route-text">Fridhemsplan (Stockholm)</span>
              </div>
              <div className="sl-route-row">
                <span className="sl-route-icon pin"></span>
                <span className="sl-route-text">Karlaplan (Stockholm)</span>
              </div>
            </div>
            <button className="sl-star-btn filled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#003E9A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Previous searches */}
        <div className="sl-section">
          <h3 className="sl-section-title">TIDIGARE SÖKNINGAR</h3>

          <div className="sl-favorite-card">
            <div className="sl-favorite-route">
              <div className="sl-route-row">
                <span className="sl-route-icon empty"></span>
                <span className="sl-route-text">Medborgarplatsen (Stockholm)</span>
              </div>
              <div className="sl-route-row">
                <span className="sl-route-icon pin"></span>
                <span className="sl-route-text">Globen (Stockholm)</span>
              </div>
            </div>
            <button className="sl-star-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E9A" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </button>
          </div>

          <div className="sl-favorite-card">
            <div className="sl-favorite-route">
              <div className="sl-route-row">
                <span className="sl-route-icon empty"></span>
                <span className="sl-route-text">T-Centralen (Stockholm)</span>
              </div>
              <div className="sl-route-row">
                <span className="sl-route-icon pin"></span>
                <span className="sl-route-text">Sundbyberg (Stockholm)</span>
              </div>
            </div>
            <button className="sl-star-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E9A" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="sl-bottom-nav">
        <button className={`sl-nav-item ${activeBottomTab === 'resa' ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
          </svg>
          <span>Resa</span>
        </button>
        <button className={`sl-nav-item ${activeBottomTab === 'biljetter' ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span>Appbiljetter</span>
        </button>
        <button className={`sl-nav-item ${activeBottomTab === 'kort' ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M2 10h20"/>
          </svg>
          <span>SL-kort</span>
        </button>
        <button className={`sl-nav-item ${activeBottomTab === 'mer' ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="19" cy="12" r="2"/>
          </svg>
          <span>Mer</span>
        </button>
      </div>
    </div>
  )
}

export default SLAppMockup
