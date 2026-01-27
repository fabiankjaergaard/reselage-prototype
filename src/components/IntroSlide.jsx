function IntroSlide({ onContinue }) {
  const teamMembers = [
    { name: 'Fabian', role: 'Utvecklare & UX Designer', avatar: '/fabian-avatar.png', photo: '/fabian-photo.jpg' },
    { name: 'Victoria', role: 'Projektledare', avatar: '/victoria-avatar.png' },
    { name: 'Malou', role: 'UX Researcher', avatar: '/malou-avatar.png' },
    { name: 'Thea', role: 'Tjänstedesigner', avatar: '/thea-avatar.png' },
    { name: 'Isabelle', role: 'Visuell Designer', avatar: '/isabelle-avatar.png' },
  ]

  return (
    <div className="slide-wrapper">

      <div className="slide-card intro-slide">

        <div className="slide-content-center">

          <div className="intro-header">
            <img src="/sl-logo.jpg" alt="SL" className="intro-sl-logo" />
            <p className="intro-label">Reseläge</p>
            <h1 className="intro-title">Välkommen</h1>
          </div>


          <div className="intro-phones">
            <div className="intro-phone-frame intro-phone-left">
              <div className="intro-phone-notch"></div>
              <div className="intro-phone-screen">
                <img src="/intro-phone-back.jpg" alt="App preview" className="intro-screen-img" />
              </div>
            </div>
            <div className="intro-phone-frame intro-phone-center">
              <div className="intro-phone-notch"></div>
              <div className="intro-phone-screen">
                <img src="/intro-phone-screen.jpg" alt="App preview" className="intro-screen-img" />
              </div>
            </div>
            <div className="intro-phone-frame intro-phone-right">
              <div className="intro-phone-notch"></div>
              <div className="intro-phone-screen">
                <img src="/intro-phone-right.jpg" alt="App preview" className="intro-screen-img" />
              </div>
            </div>
          </div>

        </div>

        <div className="slide-actions">
          <button className="slide-btn primary" onClick={onContinue}>
            Fortsätt
          </button>
        </div>

      </div>

    </div>
  )
}

export default IntroSlide
