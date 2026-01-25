import { useState } from 'react'
import Confetti from 'react-dom-confetti'

function TeamSlide({ onBack }) {
  const [explode, setExplode] = useState(false)

  const teamMembers = [
    { name: 'Fabian', role: 'Titel' },
    { name: 'Victoria', role: 'Titel' },
    { name: 'Malou', role: 'Titel' },
    { name: 'Thea', role: 'Titel' },
    { name: 'Isabelle', role: 'Titel' },
  ]

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 8,
    elementCount: 150,
    dragFriction: 0.01,
    duration: 12000,
    stagger: 8,
    width: "14px",
    height: "14px",
    colors: ['#003e9a', '#0072bc', '#00a3e0', '#ffd700', '#ff6b6b', '#4ecdc4']
  }

  const triggerConfetti = () => {
    setExplode(false)
    setTimeout(() => setExplode(true), 10)
  }

  return (
    <div className="slide-wrapper">

      {/* Confetti positioned at center of screen */}
      <div style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 9999 }}>
        <Confetti active={explode} config={confettiConfig} />
      </div>

      <div className="slide-card team-slide">

        <div className="team-header">
          <h2 className="team-title">Vårt team</h2>
          <p className="team-subtitle">Varför vi är rätt för detta projekt</p>
        </div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-avatar">
                {member.name.charAt(0)}
              </div>
              <div className="team-member-info">
                <span className="team-member-name">{member.name}</span>
                <span className="team-member-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="team-why">
          <h3 className="team-why-title">Varför vi?</h3>
          <ul className="team-why-list">
            <li>Djup förståelse för användarcentrerad design</li>
            <li>Erfarenhet av komplexa tjänstedesign-projekt</li>
            <li>Passion för att förbättra vardagen för resenärer</li>
          </ul>
        </div>

        <div className="team-thanks" onClick={triggerConfetti} style={{ cursor: 'pointer' }}>
          <p>Tack för att ni lyssnade!</p>
        </div>

        <div className="slide-actions">
          <button className="slide-btn secondary" onClick={onBack}>
            Tillbaka
          </button>
        </div>

      </div>

    </div>
  )
}

export default TeamSlide
