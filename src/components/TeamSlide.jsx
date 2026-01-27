import { useState } from 'react'
import Confetti from 'react-dom-confetti'

function TeamSlide({ onBack }) {
  const [explode, setExplode] = useState(false)

  const teamMembers = [
    { name: 'Fabian', role: 'Utvecklare & UX Designer', avatar: '/fabian-avatar.png' },
    { name: 'Victoria', role: 'Projektledare', avatar: '/victoria-avatar.png' },
    { name: 'Malou', role: 'UX Researcher', avatar: '/malou-avatar.png' },
    { name: 'Thea', role: 'Tjänstedesigner', avatar: '/thea-avatar.png' },
    { name: 'Isabelle', role: 'Visuell Designer', avatar: '/isabelle-avatar.png' },
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

        <div className="slide-content-center">
        <div className="team-header">
          <h2 className="team-title">Vårt team</h2>
          <p className="team-subtitle">Varför vi är rätt för detta projekt</p>
        </div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-avatar">
                {member.avatar
                  ? <img src={member.avatar} alt={member.name} className="team-member-img" />
                  : member.name.charAt(0)
                }
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
            <li>Djupa insikter i resenärers pain points och beteenden</li>
            <li>Kombination av research, design och teknisk kompetens</li>
            <li>Användartestad lösning byggd på verkliga behov</li>
          </ul>
        </div>

        <div className="team-thanks" onClick={triggerConfetti} style={{ cursor: 'pointer' }}>
          <p>Tack för att ni lyssnade!</p>
        </div>
        </div>


      </div>

    </div>
  )
}

export default TeamSlide
