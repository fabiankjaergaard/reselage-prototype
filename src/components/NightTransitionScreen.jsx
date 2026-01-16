import { useState, useEffect } from 'react'

function NightTransitionScreen({ onComplete }) {
  const [phase, setPhase] = useState(0) // 0: start, 1: closing eye, 2: sleeping, 3: waking, 4: awake

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // Start closing eye
      setTimeout(() => setPhase(2), 2000),   // Fully asleep
      setTimeout(() => setPhase(3), 4500),   // Start waking
      setTimeout(() => setPhase(4), 6000),   // Fully awake
      setTimeout(() => onComplete(), 7000)   // Navigate away
    ]

    return () => timers.forEach(t => clearTimeout(t))
  }, [onComplete])

  const getPhaseText = () => {
    switch (phase) {
      case 0:
      case 1:
        return 'Stina går och lägger sig...'
      case 2:
        return 'Godnatt'
      case 3:
        return 'Nästa morgon...'
      case 4:
        return 'God morgon!'
      default:
        return ''
    }
  }

  // Calculate eye openness (1 = fully open, 0 = closed)
  const getEyeOpenness = () => {
    switch (phase) {
      case 0: return 1
      case 1: return 0.3
      case 2: return 0
      case 3: return 0.5
      case 4: return 1
      default: return 1
    }
  }

  const eyeOpenness = getEyeOpenness()
  const isSleeping = phase === 2
  const isWaking = phase >= 3

  return (
    <div className={`night-overlay phase-${phase}`}>
      <div className="night-overlay-content">
        {/* Large animated eye */}
        <div className="big-eye-container">
          <svg viewBox="0 0 200 100" className="big-eye-svg">
            {/* Eye white/sclera */}
            <ellipse
              cx="100"
              cy="50"
              rx="80"
              ry={eyeOpenness * 40}
              fill={isWaking ? '#fff' : '#e8e8e8'}
              className="eye-sclera"
            />
            {/* Iris */}
            {eyeOpenness > 0.1 && (
              <ellipse
                cx="100"
                cy="50"
                rx={25 * eyeOpenness}
                ry={25 * eyeOpenness}
                fill={isWaking ? '#4a90c2' : '#6b7c93'}
                className="eye-iris"
              />
            )}
            {/* Pupil */}
            {eyeOpenness > 0.2 && (
              <ellipse
                cx="100"
                cy="50"
                rx={12 * eyeOpenness}
                ry={12 * eyeOpenness}
                fill="#1a1a2e"
                className="eye-pupil"
              />
            )}
            {/* Light reflection */}
            {eyeOpenness > 0.3 && (
              <ellipse
                cx="108"
                cy="42"
                rx={4 * eyeOpenness}
                ry={4 * eyeOpenness}
                fill="#fff"
                opacity="0.8"
              />
            )}
            {/* Upper eyelid */}
            <path
              d={`M 20 50 Q 100 ${50 - eyeOpenness * 60} 180 50`}
              fill="none"
              stroke={isWaking ? '#d4a574' : '#2d3a4f'}
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Lower eyelid */}
            <path
              d={`M 20 50 Q 100 ${50 + eyeOpenness * 60} 180 50`}
              fill="none"
              stroke={isWaking ? '#d4a574' : '#2d3a4f'}
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Eyelashes when closed */}
            {eyeOpenness < 0.2 && (
              <g className="eyelashes" stroke={isWaking ? '#d4a574' : '#2d3a4f'} strokeWidth="3">
                <line x1="40" y1="50" x2="35" y2="65" />
                <line x1="60" y1="50" x2="58" y2="68" />
                <line x1="80" y1="50" x2="80" y2="70" />
                <line x1="100" y1="50" x2="100" y2="72" />
                <line x1="120" y1="50" x2="120" y2="70" />
                <line x1="140" y1="50" x2="142" y2="68" />
                <line x1="160" y1="50" x2="165" y2="65" />
              </g>
            )}
          </svg>

          {/* Zzz animation when sleeping */}
          {isSleeping && (
            <div className="zzz-float">
              <span className="zzz-letter z1">z</span>
              <span className="zzz-letter z2">z</span>
              <span className="zzz-letter z3">Z</span>
            </div>
          )}
        </div>

        {/* Celestial body */}
        <div className="celestial-body">
          {phase < 3 ? (
            <svg viewBox="0 0 50 50" className="moon">
              <path
                d="M40 25c0 8.284-6.716 15-15 15-6.627 0-12.255-4.302-14.242-10.258C12.07 31.205 13.986 32 16 32c5.523 0 10-4.477 10-10 0-2.014-.795-3.93-2.258-5.242C29.698 18.745 34 24.373 34 31c0 .169-.003.337-.01.505"
                fill="#f4f4dc"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 50 50" className="sun">
              <circle cx="25" cy="25" r="10" fill="#FFD93D" />
              <g stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round">
                <line x1="25" y1="5" x2="25" y2="10" />
                <line x1="25" y1="40" x2="25" y2="45" />
                <line x1="5" y1="25" x2="10" y2="25" />
                <line x1="40" y1="25" x2="45" y2="25" />
                <line x1="10.86" y1="10.86" x2="14.4" y2="14.4" />
                <line x1="35.6" y1="35.6" x2="39.14" y2="39.14" />
                <line x1="10.86" y1="39.14" x2="14.4" y2="35.6" />
                <line x1="35.6" y1="14.4" x2="39.14" y2="10.86" />
              </g>
            </svg>
          )}
        </div>

        {/* Phase text */}
        <p className="phase-text">{getPhaseText()}</p>

        {/* Stars */}
        <div className="star-field">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="star-dot"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Skip button */}
      <button className="skip-btn" onClick={onComplete}>
        Hoppa över
      </button>
    </div>
  )
}

export default NightTransitionScreen
