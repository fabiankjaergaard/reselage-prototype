function TabBar({ activeTab = 'resa' }) {
  return (
    <div className="sl-bottom-nav">
      <button className={`sl-nav-item ${activeTab === 'resa' ? 'active' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
        </svg>
        <span>Resa</span>
      </button>
      <button className={`sl-nav-item ${activeTab === 'biljetter' ? 'active' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
        <span>Biljetter</span>
      </button>
      <button className={`sl-nav-item ${activeTab === 'kort' ? 'active' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <path d="M2 10h20"/>
        </svg>
        <span>SL-kort</span>
      </button>
      <button className={`sl-nav-item ${activeTab === 'mer' ? 'active' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="19" cy="12" r="2"/>
        </svg>
        <span>Mer</span>
      </button>
    </div>
  )
}

export default TabBar
