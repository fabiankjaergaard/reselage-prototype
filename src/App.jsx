import { useState, useEffect } from 'react'
import './App.css'
import SLAppMockup from './components/SLAppMockup'
import StartScreen from './components/StartScreen'
import SetupTripScreen from './components/SetupTripScreen'
import SaveFavoriteScreen from './components/SaveFavoriteScreen'
import ScheduleScreen from './components/ScheduleScreen'
import OnboardingCompleteScreen from './components/OnboardingCompleteScreen'
import TravelModeScreen from './components/TravelModeScreen'
import LockScreen from './components/LockScreen'
import WorkingScreen from './components/WorkingScreen'
import DisruptionScreen from './components/DisruptionScreen'
import PlanBScreen from './components/PlanBScreen'
import ArrivalScreen from './components/ArrivalScreen'
import MapView from './components/MapView'
import Annotation from './components/Annotation'

function App() {
  // Current screen state - start with SL app mockup
  const [screen, setScreen] = useState('sl-app')

  // Track where map was opened from (for back navigation)
  const [mapReturnScreen, setMapReturnScreen] = useState('travel')

  // Map context: 'waiting' | 'traveling' | 'planb'
  const [mapContext, setMapContext] = useState('traveling')

  // Saved trip data (persisted across sessions in real app)
  const [savedTrip, setSavedTrip] = useState(null)

  // Temporary trip data during setup flow
  const [setupTripData, setSetupTripData] = useState(null)

  // Travel state
  const [hasDisruption, setHasDisruption] = useState(false)
  const [planBActive, setPlanBActive] = useState(false)

  // Morning notification state
  const [showMorningToast, setShowMorningToast] = useState(false)

  // Notification scenario for demo
  const [notificationScenario, setNotificationScenario] = useState('normal')

  // Mock data based on saved trip or defaults
  const travelData = {
    destination: savedTrip?.to || 'kontoret',
    departureTime: '08:12',
    arrivalTime: hasDisruption && planBActive ? '08:48' : (savedTrip?.arrivalTime || '08:42'),
    nextStop: 'Slussen',
    nextStopTime: '08:24',
    occupancy: notificationScenario === 'warning' ? 'high' : 'low',
    delayMinutes: hasDisruption ? 6 : 0
  }

  // Don't auto-show toast - user already saw notification on lock screen

  // Navigation functions
  const navigate = (newScreen) => {
    setScreen(newScreen)
  }

  const showMap = (fromScreen, context) => {
    setMapReturnScreen(fromScreen)
    setMapContext(context)
    navigate('map')
  }

  const closeMap = () => {
    navigate(mapReturnScreen)
  }

  // Setup flow functions
  const startSetupFlow = () => {
    setSetupTripData(null)
    navigate('setup')
  }

  const handleSetupNext = (tripData) => {
    setSetupTripData(tripData)
    navigate('save-favorite')
  }

  const handleSaveNext = (tripData) => {
    setSetupTripData(tripData)
    navigate('schedule')
  }

  const handleScheduleComplete = (tripData) => {
    setSavedTrip(tripData)
    setSetupTripData(tripData) // Keep for complete screen
    navigate('onboarding-complete')
  }

  const handleOnboardingComplete = () => {
    setSetupTripData(null)
    // Go to morning lock screen to simulate getting the morning notification
    navigate('morning-lock-screen')
  }

  const handleMorningNotificationTap = () => {
    setShowMorningToast(false)
    navigate('start')
  }

  // Travel mode functions
  const activateTravelMode = () => {
    setHasDisruption(false)
    setPlanBActive(false)
    setShowMorningToast(false)
    navigate('travel')
  }

  const simulateDisruption = () => {
    setHasDisruption(true)
    navigate('lock-screen')
  }

  const handleNotificationTap = () => {
    navigate('working')
  }

  const showSolution = () => {
    navigate('disruption')
  }

  const activatePlanB = () => {
    setPlanBActive(true)
    navigate('planb')
  }

  const returnToTravel = () => {
    navigate('travel')
  }

  const endTravelMode = () => {
    if (planBActive || hasDisruption) {
      navigate('arrival')
    } else {
      setHasDisruption(false)
      setPlanBActive(false)
      navigate('start')
    }
  }

  const finishTrip = () => {
    setHasDisruption(false)
    setPlanBActive(false)
    navigate('sl-app')
  }

  const completeTrip = () => {
    navigate('arrival')
  }

  const dismissToast = () => {
    setShowMorningToast(false)
  }

  const cycleNotificationScenario = () => {
    const scenarios = ['normal', 'warning', 'alert']
    const currentIndex = scenarios.indexOf(notificationScenario)
    const nextIndex = (currentIndex + 1) % scenarios.length
    setNotificationScenario(scenarios[nextIndex])
    setShowMorningToast(false)
    setTimeout(() => setShowMorningToast(true), 100)
  }

  // Render current screen
  const renderScreen = () => {
    switch (screen) {
      case 'sl-app':
        return (
          <SLAppMockup
            onOpenReselage={() => navigate('start')}
          />
        )
      case 'start':
        return (
          <StartScreen
            onActivate={activateTravelMode}
            onSetupTrip={startSetupFlow}
            travelData={travelData}
            savedTrip={savedTrip}
            showMorningToast={showMorningToast}
            onDismissToast={dismissToast}
            onShowMap={() => showMap('start', 'waiting')}
            notificationScenario={notificationScenario}
          />
        )
      case 'setup':
        return (
          <SetupTripScreen
            onNext={handleSetupNext}
            onBack={() => navigate('start')}
          />
        )
      case 'save-favorite':
        return (
          <SaveFavoriteScreen
            tripData={setupTripData}
            onNext={handleSaveNext}
            onBack={() => navigate('setup')}
          />
        )
      case 'schedule':
        return (
          <ScheduleScreen
            tripData={setupTripData}
            onComplete={handleScheduleComplete}
            onBack={() => navigate('save-favorite')}
          />
        )
      case 'onboarding-complete':
        return (
          <OnboardingCompleteScreen
            tripData={savedTrip}
            onComplete={handleOnboardingComplete}
          />
        )
      case 'travel':
        return (
          <TravelModeScreen
            travelData={travelData}
            hasDisruption={hasDisruption}
            planBActive={planBActive}
            onSimulateDisruption={simulateDisruption}
            onShowPlanB={() => navigate('planb')}
            onEndTravelMode={endTravelMode}
            onCompleteTrip={completeTrip}
            onShowMap={() => showMap('travel', planBActive ? 'planb' : 'traveling')}
          />
        )
      case 'map':
        return (
          <MapView
            travelData={travelData}
            planBActive={planBActive}
            mapContext={mapContext}
            onClose={closeMap}
          />
        )
      case 'lock-screen':
        return (
          <LockScreen
            variant="disruption"
            onNotificationTap={handleNotificationTap}
          />
        )
      case 'morning-lock-screen':
        return (
          <LockScreen
            variant="morning"
            notificationScenario={notificationScenario}
            onNotificationTap={handleMorningNotificationTap}
          />
        )
      case 'working':
        return (
          <WorkingScreen
            onSolutionReady={showSolution}
          />
        )
      case 'disruption':
        return (
          <DisruptionScreen
            travelData={travelData}
            onFollowPlanB={activatePlanB}
            onChooseMyself={returnToTravel}
          />
        )
      case 'planb':
        return (
          <PlanBScreen
            travelData={travelData}
            onConfirm={returnToTravel}
            onBack={returnToTravel}
            onShowMap={() => showMap('planb', 'planb')}
          />
        )
      case 'arrival':
        return (
          <ArrivalScreen
            onSave={finishTrip}
            onSkip={finishTrip}
            hasFavoriteRoute={savedTrip !== null}
          />
        )
      default:
        return <StartScreen onActivate={activateTravelMode} onSetupTrip={startSetupFlow} travelData={travelData} savedTrip={savedTrip} />
    }
  }

  const [expandedFlow, setExpandedFlow] = useState(null)

  // Onboarding flow
  const getOnboardingStep = () => {
    switch (screen) {
      case 'start':
        return savedTrip ? null : 0
      case 'setup':
        return 1
      case 'save-favorite':
        return 2
      case 'schedule':
        return 3
      case 'onboarding-complete':
        return 4
      default:
        return null
    }
  }

  // Morning flow (day after)
  const getMorningStep = () => {
    switch (screen) {
      case 'morning-lock-screen':
        return 0
      case 'start':
        return savedTrip ? 1 : null
      case 'travel':
        return 2
      case 'arrival':
        return 3
      default:
        return null
    }
  }

  const onboardingStep = getOnboardingStep()
  const morningStep = getMorningStep()

  const onboardingSteps = [
    { id: 0, label: 'Välkommen' },
    { id: 1, label: 'Planera resa' },
    { id: 2, label: 'Personalisera' },
    { id: 3, label: 'Schemalägg' },
    { id: 4, label: 'Klart' }
  ]

  const morningSteps = [
    { id: 0, label: 'Morgonnotis' },
    { id: 1, label: 'Översikt' },
    { id: 2, label: 'Under resan' },
    { id: 3, label: 'Framme' }
  ]

  const currentFlow = onboardingStep !== null ? 'onboarding' : (morningStep !== null ? 'morning' : null)
  const showSidebar = currentFlow !== null

  // Auto-expand current flow
  useEffect(() => {
    if (currentFlow) {
      setExpandedFlow(currentFlow)
    }
  }, [currentFlow])

  // Get annotations for current screen
  const getAnnotations = () => {
    switch (screen) {
      case 'save-favorite':
        return [
          { text: 'Personalisering - Stina anger vad som är viktigt för henne. Denna yta kan utökas för att lösa fler pain points i framtiden.', top: '580px', position: 'right' }
        ]
      case 'schedule':
        return [
          { text: 'Stina väljer vilka dagar hon pendlar - ingen gillar onödiga notiser. Vi anpassar oss efter hennes schema.', top: '320px', position: 'left' },
          { text: 'Tydliga förväntningar - Stina vet precis vad hon får. Mindre stress, mer kontroll över sin morgon.', top: '620px', position: 'right' }
        ]
      case 'morning-lock-screen':
        return [
          { text: 'Stina vaknar och får direkt besked om sin resa', top: '350px' }
        ]
      case 'start':
        if (savedTrip) {
          return [
            { text: 'Stina ser direkt att allt är under kontroll', top: '180px' },
            { text: 'Rekommenderad avgång - Stina slipper räkna själv', top: '380px' }
          ]
        }
        return []
      default:
        return []
    }
  }

  const annotations = getAnnotations()

  return (
    <div className={`app-container ${showSidebar ? 'with-sidebar' : ''}`}>
      {/* Annotations on the left */}
      {annotations.filter(a => a.position !== 'right').length > 0 && (
        <div className="annotations-container annotations-left">
          {annotations.filter(a => a.position !== 'right').map((annotation, index) => (
            <Annotation
              key={index}
              text={annotation.text}
              position="left"
              top={annotation.top}
            />
          ))}
        </div>
      )}

      {/* Annotations on the right */}
      {annotations.filter(a => a.position === 'right').length > 0 && (
        <div className="annotations-container annotations-right-side">
          {annotations.filter(a => a.position === 'right').map((annotation, index) => (
            <Annotation
              key={index}
              text={annotation.text}
              position="right"
              top={annotation.top}
            />
          ))}
        </div>
      )}
      <div className="phone-frame">
        {renderScreen()}
      </div>
      {showSidebar && (
        <div className="flow-sidebar">
          {/* Onboarding flow */}
          <div className={`flow-dropdown ${currentFlow === 'onboarding' ? 'active-flow' : ''}`}>
            <button
              className={`flow-dropdown-header ${expandedFlow === 'onboarding' ? 'expanded' : ''}`}
              onClick={() => setExpandedFlow(expandedFlow === 'onboarding' ? null : 'onboarding')}
            >
              <span className="flow-dropdown-title">Flöde 1: Onboarding</span>
              <span className="flow-dropdown-arrow">{expandedFlow === 'onboarding' ? '▼' : '▶'}</span>
            </button>
            {expandedFlow === 'onboarding' && (
              <div className="flow-dropdown-content">
                {onboardingSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`flow-dropdown-item ${onboardingStep === step.id ? 'current' : ''} ${onboardingStep !== null && onboardingStep > step.id ? 'completed' : ''}`}
                  >
                    <span className="flow-item-indicator">
                      {onboardingStep !== null && onboardingStep > step.id ? '✓' : onboardingStep === step.id ? '●' : '○'}
                    </span>
                    <span className="flow-item-label">{step.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Morning flow */}
          <div className={`flow-dropdown ${currentFlow === 'morning' ? 'active-flow' : ''}`}>
            <button
              className={`flow-dropdown-header ${expandedFlow === 'morning' ? 'expanded' : ''}`}
              onClick={() => setExpandedFlow(expandedFlow === 'morning' ? null : 'morning')}
            >
              <span className="flow-dropdown-title">Flöde 2: D-day</span>
              <span className="flow-dropdown-arrow">{expandedFlow === 'morning' ? '▼' : '▶'}</span>
            </button>
            {expandedFlow === 'morning' && (
              <div className="flow-dropdown-content">
                {morningSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`flow-dropdown-item ${morningStep === step.id ? 'current' : ''} ${morningStep !== null && morningStep > step.id ? 'completed' : ''}`}
                  >
                    <span className="flow-item-indicator">
                      {morningStep !== null && morningStep > step.id ? '✓' : morningStep === step.id ? '●' : '○'}
                    </span>
                    <span className="flow-item-label">{step.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
