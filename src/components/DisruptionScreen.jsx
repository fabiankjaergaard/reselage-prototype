import { useState } from 'react'

function DisruptionScreen({ travelData, onFollowPlanB, onChooseMyself }) {
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [showMoreRoutes, setShowMoreRoutes] = useState(false)

  // Alternativa rutter med preferenser och steg
  const alternativeRoutes = [
    {
      id: 'route1',
      name: 'Buss 172 mot Karolinska',
      detail: 'Hållplats B',
      walkTime: '2 min gång',
      departure: '08:15',
      arrival: '08:48',
      occupancy: 'low',
      occupancyText: 'Gott om sittplatser',
      benefit: 'Framme i tid + sittplats',
      preferences: {
        ingaByten: false,
        snabbast: true
      },
      recommended: true,
      steps: [
        { title: 'Kliv av vid Slussen', detail: 'Nästa hållplats' },
        { title: 'Gå till Hållplats B', detail: '2 min gång österut' },
        { title: 'Ta buss 172', detail: 'Avgår 08:15 · Mot Karolinska' },
        { title: 'Kliv av vid Medborgarplatsen', detail: 'Framme 08:48' }
      ]
    },
    {
      id: 'route2',
      name: 'Direktbuss 96 mot Södermalm',
      detail: 'Slussen',
      walkTime: '0 min gång',
      departure: '08:22',
      arrival: '08:52',
      occupancy: 'medium',
      occupancyText: 'Trolig sittplats',
      benefit: 'Inga byten, stanna kvar',
      preferences: {
        ingaByten: true,
        snabbast: false
      },
      recommended: false,
      steps: [
        { title: 'Stanna kvar på Slussen', detail: 'Samma hållplats' },
        { title: 'Ta direktbuss 96', detail: 'Avgår 08:22 · Mot Södermalm' },
        { title: 'Kliv av vid Medborgarplatsen', detail: 'Framme 08:52' }
      ]
    },
    {
      id: 'route3',
      name: 'Grön linje mot Farsta',
      detail: 'Gamla stan',
      walkTime: '5 min gång',
      departure: '08:18',
      arrival: '08:55',
      occupancy: 'low',
      occupancyText: 'Gott om sittplatser',
      benefit: 'Undviker störningen helt',
      preferences: {
        ingaByten: false,
        snabbast: false
      },
      recommended: false,
      steps: [
        { title: 'Kliv av vid Gamla stan', detail: 'Nästa hållplats' },
        { title: 'Byt till Grön linje', detail: 'Spår 2' },
        { title: 'Ta tunnelbana mot Farsta', detail: 'Avgår 08:18' },
        { title: 'Kliv av vid Medborgarplatsen', detail: 'Framme 08:55' }
      ]
    }
  ]

  const handleSelectRoute = (routeId) => {
    setSelectedRoute(routeId)
  }

  return (
    <div className="screen clean-solution">
      {/* Header */}
      <div className="clean-header highlight-target-disruption-header">
        <h1 className="clean-title">Din resa påverkas</h1>
        <p className="clean-subtitle">Här är bättre alternativ för dig</p>
      </div>

      {/* Nuvarande rutt - nedtonad */}
      <div className="clean-card clean-card-current">
        <span className="current-route-tag">Din nuvarande resa</span>
        <div className="current-route-summary">
          <div className="current-route-info">
            <p className="clean-card-title">Röda linjen</p>
            <p className="clean-card-detail">+6 min · Trolig trängsel</p>
          </div>
          <div className="current-route-delay">
            <span className="time-original">08:48</span>
            <span className="time-new">08:54</span>
          </div>
        </div>
      </div>

      {/* Alternativa rutter */}
      <div className="route-alternatives">
        <p className="alternatives-label">Alternativa rutter</p>

        {/* Rekommenderade rutter visas alltid */}
        {alternativeRoutes.filter(r => r.recommended).map((route) => (
          <div
            key={route.id}
            className={`route-option ${selectedRoute === route.id ? 'selected' : ''} ${route.recommended ? 'recommended' : ''}`}
            onClick={() => handleSelectRoute(selectedRoute === route.id ? null : route.id)}
          >
            {route.recommended && <span className="route-recommended-tag">Rekommenderas</span>}

            <div className="route-option-header">
              <div className="route-option-info">
                <p className="route-option-name">{route.name}</p>
                <p className="route-option-detail">Från {route.detail} · {route.walkTime}</p>
              </div>
              <div className="route-option-right">
                <span className="arrival-time">{route.arrival}</span>
                <svg
                  className={`route-chevron ${selectedRoute === route.id ? 'rotated' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="20"
                  height="20"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Kompakt info-rad */}
            <div className="route-info-row">
              <span className="route-departure">Avgår {route.departure}</span>
              <span className="route-occupancy-inline">
                <span className={`status-dot-small ${route.occupancy === 'low' ? 'status-dot-green' : route.occupancy === 'medium' ? 'status-dot-yellow' : 'status-dot-red'}`}></span>
                {route.occupancyText}
              </span>
            </div>

            {/* Små preferens-taggar */}
            {(route.preferences.ingaByten || route.preferences.snabbast) && (
              <div className="route-preferences-simple">
                {route.preferences.ingaByten && <span className="pref-tag-simple">Inga byten</span>}
                {route.preferences.snabbast && <span className="pref-tag-simple">Snabbast</span>}
              </div>
            )}

            {/* Expanderad vy med steg */}
            {selectedRoute === route.id && (
              <div className="route-expanded">
                <div className="route-steps-expanded">
                  {route.steps.map((step, index) => (
                    <div key={index} className="route-step-mini">
                      <div className="route-step-number-mini">{index + 1}</div>
                      <div className="route-step-content-mini">
                        <p className="route-step-title-mini">{step.title}</p>
                        <p className="route-step-detail-mini">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-primary btn-select-route"
                  onClick={(e) => {
                    e.stopPropagation()
                    onFollowPlanB()
                  }}
                >
                  Välj denna rutt
                </button>
              </div>
            )}

          </div>
        ))}

        {/* Visa fler alternativ knapp */}
        {alternativeRoutes.filter(r => !r.recommended).length > 0 && (
          <button
            className="show-more-routes-btn"
            onClick={() => setShowMoreRoutes(!showMoreRoutes)}
          >
            {showMoreRoutes ? 'Dölj andra alternativ' : `Visa ${alternativeRoutes.filter(r => !r.recommended).length} andra alternativ`}
            <svg
              className={`chevron-icon ${showMoreRoutes ? 'rotated' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}

        {/* Icke-rekommenderade rutter (kollapsade) */}
        <div className={`more-routes-container ${showMoreRoutes ? 'expanded' : ''}`}>
          {alternativeRoutes.filter(r => !r.recommended).map((route) => (
            <div
              key={route.id}
              className={`route-option ${selectedRoute === route.id ? 'selected' : ''}`}
              onClick={() => handleSelectRoute(selectedRoute === route.id ? null : route.id)}
            >
              <div className="route-option-header">
                <div className="route-option-info">
                  <p className="route-option-name">{route.name}</p>
                  <p className="route-option-detail">Från {route.detail} · {route.walkTime}</p>
                </div>
                <div className="route-option-right">
                  <span className="arrival-time">{route.arrival}</span>
                  <svg
                    className={`route-chevron ${selectedRoute === route.id ? 'rotated' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="20"
                    height="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Kompakt info-rad */}
              <div className="route-info-row">
                <span className="route-departure">Avgår {route.departure}</span>
                <span className="route-occupancy-inline">
                  <span className={`status-dot-small ${route.occupancy === 'low' ? 'status-dot-green' : route.occupancy === 'medium' ? 'status-dot-yellow' : 'status-dot-red'}`}></span>
                  {route.occupancyText}
                </span>
              </div>

              {/* Små preferens-taggar */}
              {(route.preferences.ingaByten || route.preferences.snabbast) && (
                <div className="route-preferences-simple">
                  {route.preferences.ingaByten && <span className="pref-tag-simple">Inga byten</span>}
                  {route.preferences.snabbast && <span className="pref-tag-simple">Snabbast</span>}
                </div>
              )}

              {/* Expanderad vy med steg */}
              {selectedRoute === route.id && (
                <div className="route-expanded">
                  <div className="route-steps-expanded">
                    {route.steps.map((step, index) => (
                      <div key={index} className="route-step-mini">
                        <div className="route-step-number-mini">{index + 1}</div>
                        <div className="route-step-content-mini">
                          <p className="route-step-title-mini">{step.title}</p>
                          <p className="route-step-detail-mini">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn btn-primary btn-select-route"
                    onClick={(e) => {
                      e.stopPropagation()
                      onFollowPlanB()
                    }}
                  >
                    Välj denna rutt
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="clean-actions">
        <button className="btn-text-link" onClick={onChooseMyself}>
          Fortsätt med nuvarande resa
        </button>
      </div>
    </div>
  )
}

export default DisruptionScreen
