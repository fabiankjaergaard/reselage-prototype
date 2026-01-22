import { useState, useEffect, useRef } from 'react'
import './App.css'
import SLAppMockup from './components/SLAppMockup'
import StartScreen from './components/StartScreen'
import SetupTripScreen from './components/SetupTripScreen'
import SaveFavoriteScreen from './components/SaveFavoriteScreen'
import ScheduleScreen from './components/ScheduleScreen'
import OnboardingCompleteScreen from './components/OnboardingCompleteScreen'
import TravelModeScreen from './components/TravelModeScreen'
import TravelModeScreenAlt from './components/TravelModeScreenAlt'
import LockScreen from './components/LockScreen'
import WorkingScreen from './components/WorkingScreen'
import DisruptionScreen from './components/DisruptionScreen'
import PlanBScreen from './components/PlanBScreen'
import ArrivalScreen from './components/ArrivalScreen'
import MapView from './components/MapView'
import Annotation from './components/Annotation'
import TabBar from './components/TabBar'
import NightTransitionScreen from './components/NightTransitionScreen'
import CalmJourneyScreen from './components/CalmJourneyScreen'
import TravelLockScreen from './components/TravelLockScreen'
import TravelLockScreenWidget from './components/TravelLockScreenWidget'
import SMSView from './components/SMSView'
import ResearchSlide from './components/ResearchSlide'
import TitleSlide from './components/TitleSlide'
import HookSlide from './components/HookSlide'
import ProblemSlide from './components/ProblemSlide'
import JourneySlide from './components/JourneySlide'
import InsightSlide from './components/InsightSlide'
import SolutionSlide from './components/SolutionSlide'
import SummarySlide from './components/SummarySlide'
import ComparisonSlide from './components/ComparisonSlide'
import FeasibilitySlide from './components/FeasibilitySlide'
import ValueSlide from './components/ValueSlide'
import PreferenceConflictScreen from './components/PreferenceConflictScreen'
import ValidationSlide from './components/ValidationSlide'
import IterationBeforeAfterSlide from './components/IterationBeforeAfterSlide'
import IterationBeforeAfterSlide2 from './components/IterationBeforeAfterSlide2'
import ValidationSlide2 from './components/ValidationSlide2'
import RiskEthicsSlide from './components/RiskEthicsSlide'
import NextStepsSlide from './components/NextStepsSlide'

function App() {
  // App version: 'personal' (with Fabio) or 'neutral' (standard)
  const [appVersion, setAppVersion] = useState('neutral')

  // User test mode - shows tasks/scenarios instead of annotations
  const [testMode, setTestMode] = useState(false)

  // Current screen state - start with intro
  const [screen, setScreen] = useState('hook-slide')

  // Test scenarios - phase-based, open-ended
  const thinkAloud = 'Beskriv gärna vad du ser, vad du tror händer om du klickar någonstans, och om något känns oklart.'

  const testScenarios = {
    // FAS 1: Kom-igång (onboarding)
    'discovery-lock': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'sl-app': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'start': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'setup': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'save-favorite': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'schedule': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'onboarding-complete': {
      phase: '1. Kom-igång',
      scenario: 'Du har fått en notis från SL om en ny funktion. Du öppnar appen för att se vad det handlar om. Ditt mål är att förstå vad funktionen gör och komma igång med den så att du kan använda den.',
      followUp: thinkAloud
    },
    'night-transition': {
      phase: '',
      scenario: 'Natten passerar...',
      followUp: ''
    },
    // FAS 2: Huvuduppgift (morgonrutin)
    'morning-lock-screen': {
      phase: '2. Huvuduppgift',
      scenario: 'Det är morgon och du ska ta dig till jobbet. Använd funktionen för att genomföra din resa.',
      followUp: thinkAloud
    },
    'travel': {
      phase: '2. Huvuduppgift',
      scenario: 'Det är morgon och du ska ta dig till jobbet. Använd funktionen för att genomföra din resa.',
      followUp: thinkAloud
    },
    'travel-lock': {
      phase: '2. Huvuduppgift',
      scenario: 'Det är morgon och du ska ta dig till jobbet. Använd funktionen för att genomföra din resa.',
      followUp: thinkAloud
    },
    // FAS 3: Problem (störning)
    'lock-screen': {
      phase: '3. Problem',
      scenario: 'Det har blivit en störning på din linje och du riskerar att komma försent. Ditt mål är att hitta en ny rutt som fungerar för dig.',
      followUp: thinkAloud
    },
    'working': {
      phase: '3. Problem',
      scenario: 'Det har blivit en störning på din linje och du riskerar att komma försent. Ditt mål är att hitta en ny rutt som fungerar för dig.',
      followUp: thinkAloud
    },
    'disruption': {
      phase: '3. Problem',
      scenario: 'Det har blivit en störning på din linje och du riskerar att komma försent. Ditt mål är att hitta en ny rutt som fungerar för dig.',
      followUp: thinkAloud
    },
    // FAS 4: Avslut
    'arrival': {
      phase: '4. Avslut',
      scenario: 'Du har kommit fram. Hur upplevde du resan?',
      followUp: '• Är det här något du hade kunnat tänka dig att använda i verkligheten? Varför/varför inte?\n• Saknade du något?\n• Var det något i flödet som kändes oklart eller extra bra?'
    }
  }

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
  const [travelModeVersion, setTravelModeVersion] = useState('default') // 'default' or 'progress'

  // Morning notification state
  const [showMorningToast, setShowMorningToast] = useState(false)

  // Notification scenario for demo
  const [notificationScenario, setNotificationScenario] = useState('normal')

  // Trigger notification on lock screen (for demo click)
  const [triggerLockNotification, setTriggerLockNotification] = useState(false)

  // Scenario showcase mode
  const [scenarioMode, setScenarioMode] = useState(null)
  const [scenarioScreen, setScenarioScreen] = useState(null)
  const [scenarioTypedText, setScenarioTypedText] = useState('')
  const [scenarioTypingComplete, setScenarioTypingComplete] = useState(false)
  const [scenarioReturnScreen, setScenarioReturnScreen] = useState('start')
  const [scenarioReturnState, setScenarioReturnState] = useState(null)

  // Scenario definitions
  const scenarios = {
    'preference-conflict': {
      title: 'Preferenskonflikt',
      description: 'Ibland finns det såklart ingen rutt som uppfyller alla Stinas preferenser. Istället för att öka mental belastning i onboarding genom att "tvinga" henne rangordna – frågar vi i stunden, när det faktiskt spelar roll.',
      screen: 'preference-conflict'
    }
  }

  // Start scenario showcase
  const startScenario = (scenarioId) => {
    const scenario = scenarios[scenarioId]
    if (scenario) {
      // Save current state to return to
      setScenarioReturnScreen(screen)
      setScenarioReturnState({ hasDisruption, planBActive })

      setScenarioMode(scenarioId)
      setScenarioScreen(scenario.screen)
      setScenarioTypedText('')
      setScenarioTypingComplete(false)
      navigate(scenario.screen)
    }
  }

  // Exit scenario mode
  const exitScenarioMode = () => {
    const returnScreen = scenarioReturnScreen
    const returnState = scenarioReturnState

    setScenarioMode(null)
    setScenarioScreen(null)
    setScenarioTypedText('')
    setScenarioTypingComplete(false)

    // Restore state based on where we came from
    if (returnState) {
      setHasDisruption(returnState.hasDisruption)
      setPlanBActive(returnState.planBActive)
    } else {
      setHasDisruption(false)
      setPlanBActive(false)
    }

    navigate(returnScreen)
  }

  // Typewriter state for narration
  const [typedText, setTypedText] = useState('')
  const [typingComplete, setTypingComplete] = useState(false)
  const [narrationHidden, setNarrationHidden] = useState(false)
  const [showArrivalContinue, setShowArrivalContinue] = useState(false)

  // Narration texts for different screens (function to allow state-based text)
  const getNarrationText = (screenName) => {
    const texts = {
      'discovery-lock': 'Det är kväll och Stina får en pushnotis från SL om en ny funktion...',
      'sl-app': 'Hon klickar på notisen och ser att SL har lagt till en ny funktion...',
      'start': 'Stina blir nyfiken. Om SL faktiskt kan hålla koll åt henne – då kanske morgonen kan bli lite lättare.',
      'setup': 'Stina går igenom onboardingen och fyller i det SL behöver för att anpassa sig efter henne...',
      'morning-lock-screen': 'Det är morgon och Stina får sin första pushnotis från Reseläge...',
      'lock-screen': 'Stina sitter på bussen och lyssnar på sitt favoritavsnitt med Mikael Vimmenby som gästar Framgångspodden när hon plötsligt får en notis...',
      'travel': planBActive
        ? 'Stina valde snabbt en alternativ rutt som passade hennes preferenser – framme i tid och gott om plats. GPS-vyn visar exakt var hon ska gå och när bussen kommer. Hon känner sig lugn och i full kontroll.'
        : hasDisruption
          ? 'Stina får lite panik och klickar på notisen – men SL har redan en lösning...'
          : 'Stina har startat sin resa och allt flyter på. Nu är det bara att luta sig tillbaka... för inget kan ju gå fel med SL, eller hur?',
      'disruption': 'Hon ser den nya rutten och tycker den ser bra ut – framme i tid och gott om plats...',
      'travel-lock': 'Skönt att snabbt kunna se hur resan går utan att låsa upp mobilen...',
      'travel-lock-widget': 'GPS-kartan anpassar sig automatiskt efter var Stina är – alltid rätt information i rätt stund. Hon behöver inte ens öppna appen.',
      'calm-journey': 'Stina sitter bekvämt på bussen och känner sig helt i kontroll. Med lite tid över scrollar hon igenom nyheterna – och plötsligt ser hon något bekant...',
      'arrival-lock': 'Stina kommer fram till kontoret i tid. En kort stund senare får hon en notis...',
      'arrival': 'Det här var ju väldigt smidigt, tänker Stina. Framme i tid trots störningar – och sittplats hela vägen! 5/5 kreativa bananer!'
    }
    return texts[screenName]
  }

  // Scroll tracking for annotations
  const [scrollOffset, setScrollOffset] = useState(0)
  const phoneContentRef = useRef(null)

  // Mock data based on saved trip or defaults
  const travelData = {
    destination: savedTrip?.to || 'kontoret',
    departureTime: '08:12',
    arrivalTime: hasDisruption && planBActive ? '08:48' : (savedTrip?.arrivalTime || '08:42'),
    nextStop: 'Slussen',
    nextStopTime: '08:24',
    occupancy: notificationScenario === 'warning' ? 'high' : 'low',
    delayMinutes: hasDisruption ? 6 : 0,
    vehicleType: planBActive ? 'bus' : 'metro'
  }

  // Don't auto-show toast - user already saw notification on lock screen

  // Typewriter effect for screens with narration
  useEffect(() => {
    const narrationText = getNarrationText(screen)

    if (narrationText) {
      // Reset on screen enter
      setTypedText('')
      setTypingComplete(false)
      setNarrationHidden(false)

      let index = 0
      const interval = setInterval(() => {
        if (index < narrationText.length) {
          setTypedText(narrationText.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          // Wait a moment, then mark complete
          setTimeout(() => {
            setTypingComplete(true)
            // Trigger notification for lock screens
            if (screen === 'discovery-lock' || screen === 'lock-screen') {
              setTriggerLockNotification(true)
            }
          }, 500)
        }
      }, 50) // 50ms per character

      return () => clearInterval(interval)
    }
  }, [screen])

  // Typewriter effect for scenario descriptions
  useEffect(() => {
    if (scenarioMode && scenarios[scenarioMode]) {
      const scenarioText = scenarios[scenarioMode].description
      setScenarioTypedText('')
      setScenarioTypingComplete(false)

      let index = 0
      const interval = setInterval(() => {
        if (index < scenarioText.length) {
          setScenarioTypedText(scenarioText.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setScenarioTypingComplete(true)
          }, 500)
        }
      }, 40) // Slightly faster than narration

      return () => clearInterval(interval)
    }
  }, [scenarioMode])

  // Show continue button after bananas animate on arrival screen
  useEffect(() => {
    if (screen === 'arrival' && typingComplete) {
      const timer = setTimeout(() => {
        setShowArrivalContinue(true)
      }, 1500) // Wait for bananas to animate in
      return () => clearTimeout(timer)
    } else {
      setShowArrivalContinue(false)
    }
  }, [screen, typingComplete])

  // Navigation functions
  const navigate = (newScreen) => {
    setScreen(newScreen)
    // Reset notification trigger when changing screens
    setTriggerLockNotification(false)
  }

  // Handle background click to trigger lock screen notification or hide narration
  const handleBackgroundClick = (e) => {
    // Only trigger if clicking on the background (not the phone frame)
    if (e.target.classList.contains('app-container')) {
      if (screen === 'lock-screen') {
        setTriggerLockNotification(true)
      }
      // Hide narration when clicking background
      if (getNarrationText(screen) && !narrationHidden) {
        setNarrationHidden(true)
      }
    }
  }

  const showMap = (fromScreen, context) => {
    setMapReturnScreen(fromScreen)
    setMapContext(context)
    navigate('map')
  }

  const closeMap = () => {
    navigate(mapReturnScreen)
  }

  // Start user test mode - start from discovery lock screen with notification
  const startTestMode = () => {
    setTestMode(true)
    setSavedTrip(null)
    setSetupTripData(null)
    setHasDisruption(false)
    setPlanBActive(false)
    navigate('discovery-lock')
  }

  // Exit test mode
  const exitTestMode = () => {
    setTestMode(false)
    navigate('hook-slide')
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
    // Go to night transition to show time passing
    navigate('night-transition')
  }

  const handleNightTransitionComplete = () => {
    // After night transition, show morning lock screen
    navigate('morning-lock-screen')
  }

  const handleCalmJourneyComplete = () => {
    // After calm journey lock screen, go to arrival
    navigate('arrival-lock')
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
    setHasDisruption(true)
    navigate('travel')
  }

  const showSolution = () => {
    navigate('disruption')
  }

  const activatePlanB = () => {
    setPlanBActive(true)
    setHasDisruption(false)
    navigate('travel')
  }

  const confirmPlanB = () => {
    navigate('calm-journey')
  }

  const returnToTravel = () => {
    navigate('travel')
  }

  const endTravelMode = () => {
    if (planBActive || hasDisruption) {
      navigate('arrival-lock')
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
    navigate('arrival-lock')
  }

  const handleArrivalNotificationTap = () => {
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

  // Navigation for flow sidebar - jump to specific screens
  const navigateToDiscoveryStep = (stepId) => {
    setSavedTrip(null)
    setSetupTripData(null)

    switch (stepId) {
      case 0: // Upptäck
        navigate('discovery-lock')
        break
      case 1: // SMS
        navigate('sms-view')
        break
      default:
        break
    }
  }

  const navigateToOnboardingStep = (stepId) => {
    // Clear saved trip for onboarding flow
    setSavedTrip(null)
    setSetupTripData(null)

    switch (stepId) {
      case 0: // SL-appen
        navigate('sl-app')
        break
      case 1: // Välkommen
        navigate('start')
        break
      case 2: // Planera resa
        navigate('setup')
        break
      case 3: // Personalisera
        setSetupTripData({ from: 'Vasagatan 12, Stockholm', to: 'Kontoret, Medborgarplatsen', arrivalTime: '09:00' })
        navigate('save-favorite')
        break
      case 4: // Schemalägg
        setSetupTripData({ from: 'Vasagatan 12, Stockholm', to: 'Kontoret, Medborgarplatsen', arrivalTime: '09:00', name: 'Till jobbet' })
        navigate('schedule')
        break
      case 5: // Klart
        const tripData = { from: 'Vasagatan 12, Stockholm', to: 'Kontoret, Medborgarplatsen', arrivalTime: '09:00', name: 'Till jobbet', schedule: { days: ['mon', 'tue', 'wed', 'thu', 'fri'] } }
        setSavedTrip(tripData)
        navigate('onboarding-complete')
        break
      case 6: // Godnatt
        const tripForNight = { from: 'Vasagatan 12, Stockholm', to: 'Kontoret, Medborgarplatsen', arrivalTime: '09:00', name: 'Till jobbet', schedule: { days: ['mon', 'tue', 'wed', 'thu', 'fri'] } }
        setSavedTrip(tripForNight)
        navigate('night-transition')
        break
      default:
        break
    }
  }

  const navigateToMorningStep = (stepId) => {
    // Ensure saved trip exists for morning flow
    const tripData = { from: 'Vasagatan 12, Stockholm', to: 'Kontoret, Medborgarplatsen', arrivalTime: '09:00', name: 'Till jobbet', schedule: { days: ['mon', 'tue', 'wed', 'thu', 'fri'] } }
    setSavedTrip(tripData)

    switch (stepId) {
      case 0: // Morgonnotis
        setHasDisruption(false)
        setPlanBActive(false)
        navigate('morning-lock-screen')
        break
      case 1: // Översikt
        setHasDisruption(false)
        setPlanBActive(false)
        navigate('start')
        break
      case 2: // Under resan
        setHasDisruption(false)
        setPlanBActive(false)
        navigate('travel')
        break
      case 3: // Låsskärm
        setHasDisruption(false)
        setPlanBActive(false)
        navigate('travel-lock')
        break
      case 4: // Störning
        setHasDisruption(true)
        setPlanBActive(false)
        navigate('lock-screen')
        break
      case 5: // Välj rutt (DisruptionScreen)
        setHasDisruption(true)
        setPlanBActive(false)
        navigate('disruption')
        break
      case 6: // Plan B
        setHasDisruption(false)
        setPlanBActive(true)
        navigate('travel')
        break
      case 7: // På väg (calm journey on new route)
        setHasDisruption(false)
        setPlanBActive(true)
        navigate('calm-journey')
        break
      case 8: // Framme
        setHasDisruption(false)
        setPlanBActive(true)
        navigate('arrival-lock')
        break
      default:
        break
    }
  }

  // Render current screen
  const renderScreen = () => {
    switch (screen) {
      case 'intro':
        return null // Rendered outside phone frame
      case 'discovery-lock':
        return (
          <LockScreen
            variant="discovery"
            appVersion={appVersion}
            triggerNotification={triggerLockNotification}
            onNotificationTap={() => appVersion === 'personal' ? navigate('sms-view') : navigate('sl-app')}
          />
        )
      case 'sms-view':
        return (
          <SMSView
            onSLNotificationTap={() => navigate('sl-app')}
          />
        )
      case 'sl-app':
        return (
          <SLAppMockup
            onOpenReselage={() => navigate('start')}
            highlightReselage={!testMode && typingComplete}
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
      case 'night-transition':
        return null // Rendered as full-screen overlay instead
      case 'travel':
        return travelModeVersion === 'progress' ? (
          <TravelModeScreenAlt
            travelData={travelData}
            hasDisruption={hasDisruption}
            planBActive={planBActive}
            onSimulateDisruption={simulateDisruption}
            onShowPlanB={() => navigate('working')}
            onEndTravelMode={endTravelMode}
            onCompleteTrip={completeTrip}
            onShowMap={() => showMap('travel', planBActive ? 'planb' : 'traveling')}
            onLockPhone={() => navigate('travel-lock')}
          />
        ) : (
          <TravelModeScreen
            travelData={travelData}
            hasDisruption={hasDisruption}
            planBActive={planBActive}
            onSimulateDisruption={simulateDisruption}
            onShowPlanB={() => navigate('working')}
            onEndTravelMode={endTravelMode}
            onCompleteTrip={completeTrip}
            onShowMap={() => showMap('travel', planBActive ? 'planb' : 'traveling')}
            onLockPhone={() => navigate('travel-lock')}
          />
        )
      case 'travel-lock':
        return (
          <TravelLockScreen
            travelData={travelData}
            hasDisruption={hasDisruption}
            appVersion={appVersion}
            onUnlock={() => navigate('travel')}
            onNotificationTap={handleNotificationTap}
          />
        )
      case 'travel-lock-widget':
        return (
          <TravelLockScreenWidget
            planBActive={planBActive}
            onUnlock={() => navigate('travel')}
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
            appVersion={appVersion}
            onNotificationTap={handleNotificationTap}
            triggerNotification={triggerLockNotification}
          />
        )
      case 'morning-lock-screen':
        return (
          <LockScreen
            variant="morning"
            appVersion={appVersion}
            notificationScenario={notificationScenario}
            onNotificationTap={handleMorningNotificationTap}
          />
        )
      case 'arrival-lock':
        return (
          <LockScreen
            variant="arrival"
            appVersion={appVersion}
            onNotificationTap={handleArrivalNotificationTap}
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
            onConfirm={confirmPlanB}
            onBack={() => navigate('disruption')}
            onShowMap={() => showMap('planb', 'planb')}
          />
        )
      case 'calm-journey':
        return (
          <CalmJourneyScreen
            onComplete={handleCalmJourneyComplete}
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
      case 'preference-conflict':
        return (
          <PreferenceConflictScreen
            onChooseOption={(option) => {
              // User chose a preference, continue to travel
              navigate('travel')
            }}
            onBack={() => navigate('start')}
          />
        )
      default:
        return <StartScreen onActivate={activateTravelMode} onSetupTrip={startSetupFlow} travelData={travelData} savedTrip={savedTrip} />
    }
  }

  const [expandedFlow, setExpandedFlow] = useState(null)

  // Discovery flow (Flöde 1)
  const getDiscoveryStep = () => {
    switch (screen) {
      case 'discovery-lock':
        return 0
      case 'sms-view':
        return 1
      default:
        return null
    }
  }

  // Onboarding flow (Flöde 2)
  const getOnboardingStep = () => {
    switch (screen) {
      case 'sl-app':
        return 0
      case 'start':
        return savedTrip ? null : 1
      case 'setup':
        return 2
      case 'save-favorite':
        return 3
      case 'schedule':
        return 4
      case 'onboarding-complete':
        return 5
      case 'night-transition':
        return 6
      default:
        return null
    }
  }

  // Morning flow (Flöde 3)
  const getMorningStep = () => {
    switch (screen) {
      case 'morning-lock-screen':
        return 0
      case 'start':
        return savedTrip ? 1 : null
      case 'travel':
        // Travel with Plan B active = "Plan B" step, otherwise "Under resan"
        return planBActive ? 6 : 2
      case 'travel-lock':
        return 3
      case 'lock-screen':
      case 'working':
        return 4
      case 'disruption':
        return 5
      case 'calm-journey':
        return 7
      case 'arrival-lock':
      case 'arrival':
        return 8
      default:
        return null
    }
  }

  const discoveryStep = getDiscoveryStep()
  const onboardingStep = getOnboardingStep()
  const morningStep = getMorningStep()

  const discoverySteps = appVersion === 'personal'
    ? [
        { id: 0, label: 'Upptäck' },
        { id: 1, label: 'SMS' }
      ]
    : [
        { id: 0, label: 'Upptäck' }
      ]

  const onboardingSteps = [
    { id: 0, label: 'SL-appen' },
    { id: 1, label: 'Välkommen' },
    { id: 2, label: 'Planera resa' },
    { id: 3, label: 'Personalisera' },
    { id: 4, label: 'Schemalägg' },
    { id: 5, label: 'Klart' },
    { id: 6, label: 'Godnatt' }
  ]

  const morningSteps = [
    { id: 0, label: 'Morgonnotis' },
    { id: 1, label: 'Översikt' },
    { id: 2, label: 'Under resan' },
    { id: 3, label: 'Låsskärm' },
    { id: 4, label: 'Störning' },
    { id: 5, label: 'Välj rutt' },
    { id: 6, label: 'Plan B' },
    { id: 7, label: 'På väg' },
    { id: 8, label: 'Framme' }
  ]

  // Presentation slides for navigation
  const presentationSlides = [
    { id: 'hook-slide', label: 'Hook', section: 'Fas 1: Problem' },
    { id: 'persona', label: 'Persona', section: 'Fas 1: Problem' },
    { id: 'problem', label: 'Problem', section: 'Fas 1: Problem' },
    { id: 'journey', label: 'Kundresa', section: 'Fas 1: Problem' },
    { id: 'insight', label: 'Insikt', section: 'Fas 1: Problem' },
    { id: 'solution', label: 'Lösning', section: 'Fas 2: Lösning' },
    { id: 'summary', label: 'Sammanfattning', section: 'Fas 3: Bevis' },
    { id: 'comparison', label: 'Före/Efter', section: 'Fas 3: Bevis' },
    { id: 'feasibility', label: 'Genomförbarhet', section: 'Fas 3: Bevis' },
    { id: 'value', label: 'Affärsvärde', section: 'Fas 3: Bevis' },
    { id: 'validation', label: 'Validering', section: 'Fas 3: Bevis' },
    { id: 'iteration-comparison', label: 'Iteration 1', section: 'Fas 3: Bevis' },
    { id: 'iteration-comparison2', label: 'Iteration 2', section: 'Fas 3: Bevis' },
    { id: 'validation2', label: 'Resultat', section: 'Fas 3: Bevis' },
    { id: 'risk-ethics', label: 'Risker & Etik', section: 'Fas 3: Bevis' },
    { id: 'next-steps', label: 'Nästa steg', section: 'Fas 3: Bevis' }
  ]

  const isPresentationSlide = presentationSlides.some(slide => slide.id === screen)
  const currentPresentationIndex = presentationSlides.findIndex(slide => slide.id === screen)

  const currentFlow = discoveryStep !== null ? 'discovery' : (onboardingStep !== null ? 'onboarding' : (morningStep !== null ? 'morning' : null))
  const showSidebar = currentFlow !== null

  // Auto-expand current flow
  useEffect(() => {
    if (currentFlow) {
      setExpandedFlow(currentFlow)
    }
  }, [currentFlow])

  // Reset scroll offset when screen changes
  useEffect(() => {
    setScrollOffset(0)
  }, [screen])

  // Track scroll in phone content
  useEffect(() => {
    const handleScroll = (e) => {
      setScrollOffset(e.target.scrollTop)
    }

    const phoneContent = phoneContentRef.current
    if (phoneContent) {
      const scrollableElement = phoneContent.querySelector('.screen')
      if (scrollableElement) {
        scrollableElement.addEventListener('scroll', handleScroll)
        return () => scrollableElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [screen])

  // Get annotations for current screen
  const getAnnotations = () => {
    switch (screen) {
      case 'save-favorite':
        return [
          { text: 'Personalisering - Stina anger vad som är viktigt för henne. Denna yta kan utökas för att lösa fler pain points i framtiden.', top: '580px', position: 'left', highlightClass: 'highlight-preferences' }
        ]
      case 'schedule':
        return [
          { text: 'Stina väljer vilka dagar hon pendlar - ingen gillar onödiga notiser. Vi anpassar oss efter hennes schema.', top: '320px', position: 'left', highlightClass: 'highlight-days' },
          { text: 'Tydliga förväntningar - Stina vet precis vad hon får. Mindre stress, mer kontroll över sin morgon.', top: '720px', position: 'left', highlightClass: 'highlight-expectations' }
        ]
      case 'onboarding-complete':
        return [
          { text: 'Micro copy som talar till Stinas behov - mjukt, tryggt språk som kontinuerligt visar på värdet av tjänsten.', top: '560px', position: 'left', highlightClass: 'highlight-microcopy' }
        ]
      case 'morning-lock-screen':
        return []
      case 'travel':
        return []
      case 'travel-lock-widget':
        return []
      case 'disruption':
        return [
          { text: 'Tydlig jämförelse – Stina ser direkt skillnaden mellan att stanna kvar vs. ta alternativet. Enkel beslutssituation.', top: '420px', position: 'left', highlightClass: 'highlight-disruption-recommended' }
        ]
      case 'start':
        if (savedTrip) {
          return [
            { text: 'It\'s all about the details – små detaljer som skapar en känsla av lugn och omsorg.', top: '80px', position: 'left', highlightClass: 'highlight-morning-coffee' },
            { text: 'Stina ser direkt att allt är under kontroll', top: '300px', position: 'left', highlightClass: 'highlight-status-card' },
            { text: 'Syns den inte, finns den inte – vi lyfter fram en befintlig funktion som idag ligger helt gömd.', top: '680px', position: 'left', highlightClass: 'highlight-live-map' },
            { text: 'Personligt anpassat – vi lyfter in Stinas preferenser och visar det som är viktigt för just henne för en bra resa.', top: '820px', position: 'left', highlightClass: 'highlight-occupancy' }
          ]
        }
        return [
          { text: 'Vi visar värde direkt - Stina förstår vad hon får innan hon ens börjat. Tydlighet skapar trygghet.', top: '440px', position: 'left', highlightClass: 'highlight-value-props' }
        ]
      default:
        return []
    }
  }

  const annotations = getAnnotations()

  return (
    <>
      {/* Full-screen night transition overlay */}
      {screen === 'night-transition' && (
        <NightTransitionScreen onComplete={handleNightTransitionComplete} />
      )}


      <div className={`app-container ${showSidebar ? 'with-sidebar' : ''}`} onClick={handleBackgroundClick}>
      {/* Annotations on the left - hidden in test mode */}
      {!testMode && annotations.filter(a => a.position !== 'right').length > 0 && (
        <div className="annotations-container annotations-left">
          {annotations.filter(a => a.position !== 'right').map((annotation, index) => (
            <Annotation
              key={index}
              text={annotation.text}
              position="left"
              top={annotation.top}
              scrollOffset={scrollOffset}
              highlightClass={annotation.highlightClass}
            />
          ))}
        </div>
      )}

      {/* Annotations on the right - hidden in test mode */}
      {!testMode && annotations.filter(a => a.position === 'right').length > 0 && (
        <div className="annotations-container annotations-right-side">
          {annotations.filter(a => a.position === 'right').map((annotation, index) => (
            <Annotation
              key={index}
              text={annotation.text}
              position="right"
              top={annotation.top}
              scrollOffset={scrollOffset}
              highlightClass={annotation.highlightClass}
            />
          ))}
        </div>
      )}
      <div className="phone-frame" ref={phoneContentRef}>
        {renderScreen()}
        {!['intro', 'discovery-lock', 'sms-view', 'sl-app', 'lock-screen', 'morning-lock-screen', 'map', 'working', 'night-transition', 'travel-lock', 'travel-lock-widget', 'arrival-lock', 'preference-conflict', 'calm-journey'].includes(screen) && (
          <TabBar activeTab="resa" />
        )}
      </div>

      {/* Test mode scenario panel */}
      {testMode && testScenarios[screen] && testScenarios[screen].phase && !(screen === 'start' && savedTrip) && !(screen === 'travel' && hasDisruption) && (
        <div className="test-scenario-panel">
          <div className="test-scenario-header">
            <span className="test-phase">{testScenarios[screen].phase}</span>
            <button className="test-exit-btn" onClick={exitTestMode}>
              Avsluta ×
            </button>
          </div>
          <p className="test-scenario">{testScenarios[screen].scenario}</p>
          {testScenarios[screen].followUp && (
            <p className="test-followup">{testScenarios[screen].followUp}</p>
          )}
        </div>
      )}

      {/* Test mode scenario for travel screen with disruption (show problem scenario) */}
      {testMode && screen === 'travel' && hasDisruption && (
        <div className="test-scenario-panel">
          <div className="test-scenario-header">
            <span className="test-phase">3. Problem</span>
            <button className="test-exit-btn" onClick={exitTestMode}>
              Avsluta ×
            </button>
          </div>
          <p className="test-scenario">Det har blivit en störning på din linje och du riskerar att komma försent. Ditt mål är att hitta en ny rutt som fungerar för dig.</p>
          <p className="test-followup">{thinkAloud}</p>
        </div>
      )}

      {/* Test mode scenario for start screen when user has saved trip (morning flow) */}
      {testMode && screen === 'start' && savedTrip && (
        <div className="test-scenario-panel">
          <div className="test-scenario-header">
            <span className="test-phase">2. Huvuduppgift</span>
            <button className="test-exit-btn" onClick={exitTestMode}>
              Avsluta ×
            </button>
          </div>
          <p className="test-scenario">Det är morgon och du ska ta dig till jobbet. Använd funktionen för att genomföra din resa.</p>
          <p className="test-task"><strong>Extra:</strong> Om du vill se var din buss är just nu, hur hade du gått tillväga då?</p>
          <p className="test-followup">Beskriv gärna vad du ser, vad du tror händer om du klickar någonstans, och om något känns oklart.</p>
        </div>
      )}

      {/* Narration panel for screens with narration - hidden in test mode */}
      {!testMode && getNarrationText(screen) && (
        <div className={`narration-panel ${narrationHidden ? 'hidden' : ''}`}>
          <p className="narration-text">
            {typedText}
            {!typingComplete && <span className="typing-cursor">|</span>}
          </p>
          {screen === 'arrival' && typingComplete && (
            <>
              <div className="banana-rating">
                <span className="banana banana-1">🍌</span>
                <span className="banana banana-2">🍌</span>
                <span className="banana banana-3">🍌</span>
                <span className="banana banana-4">🍌</span>
                <span className="banana banana-5">🍌</span>
              </div>
              {showArrivalContinue && (
                <button className="arrival-continue-btn" onClick={() => navigate('summary')}>
                  Avsluta prototyp →
                </button>
              )}
            </>
          )}
        </div>
      )}

      {/* Scenario showcase panel - narration style */}
      {scenarioMode && scenarios[scenarioMode] && (
        <div className="narration-panel scenario-narration">
          <p className="narration-text">
            {scenarioTypedText}
            {!scenarioTypingComplete && <span className="typing-cursor">|</span>}
          </p>
          {scenarioTypingComplete && (
            <button className="scenario-back-btn" onClick={exitScenarioMode}>
              ← Tillbaka till prototyp
            </button>
          )}
        </div>
      )}

      {/* Intro overlay */}
      {screen === 'intro' && (
        <div className="intro-overlay">
          <div className="intro-sun"></div>
          <div className="intro-cloud-1"></div>
          <div className="intro-cloud-2"></div>
          <div className="intro-cloud-3"></div>
          <div className="intro-lane-divider"></div>
          <div className="intro-road-line"></div>
          <img src="/bus-stop.gif" alt="" className="intro-bus-stop" />
          <img src="/doubting.gif" alt="" className="intro-person" />
          <div className="intro-thought-bubble">
            <span>Jag orkar inte tänka såhär tidigt på morgonen...</span>
          </div>
          <div className="intro-content">
            <img src="/bus-journey-transparent.gif" alt="" className="intro-gif" />
            <h1 className="intro-title">Reseläge</h1>
            <p className="intro-subtitle">Ett koncept för SL</p>

            {/* Version toggle */}
            <div className="version-toggle">
              <button
                className={`version-btn ${appVersion === 'personal' ? 'active' : ''}`}
                onClick={() => setAppVersion('personal')}
              >
                Version 1
                <span className="version-desc">Med Fabio</span>
              </button>
              <button
                className={`version-btn ${appVersion === 'neutral' ? 'active' : ''}`}
                onClick={() => setAppVersion('neutral')}
              >
                Version 2
                <span className="version-desc">Neutral</span>
              </button>
            </div>

            <button className="intro-start-btn" onClick={() => navigate('research')}>
              Starta koncept
            </button>
          </div>
        </div>
      )}

      {/* Hook slide */}
      {screen === 'hook-slide' && (
        <HookSlide
          onContinue={() => navigate('persona')}
          onSkipToPrototype={() => navigate('discovery-lock')}
          onStartUserTest={startTestMode}
          onSkipToAfterPrototype={() => navigate('summary')}
        />
      )}

      {/* Persona slide */}
      {screen === 'persona' && (
        <ResearchSlide
          onContinue={() => navigate('problem')}
          onBack={() => navigate('hook-slide')}
          onSkipToPrototype={() => navigate('discovery-lock')}
        />
      )}

      {/* Problem slide */}
      {screen === 'problem' && (
        <ProblemSlide
          onContinue={() => navigate('journey')}
          onBack={() => navigate('persona')}
          onSkipToPrototype={() => navigate('discovery-lock')}
        />
      )}

      {/* Journey slide */}
      {screen === 'journey' && (
        <JourneySlide
          onContinue={() => navigate('insight')}
          onBack={() => navigate('problem')}
          onSkipToPrototype={() => navigate('discovery-lock')}
        />
      )}

      {/* Insight slide */}
      {screen === 'insight' && (
        <InsightSlide
          onContinue={() => navigate('solution')}
          onBack={() => navigate('journey')}
          onSkipToPrototype={() => navigate('discovery-lock')}
        />
      )}

      {/* Solution slide */}
      {screen === 'solution' && (
        <SolutionSlide
          onContinue={() => navigate('discovery-lock')}
          onBack={() => navigate('insight')}
          onSkipToPrototype={() => navigate('discovery-lock')}
        />
      )}

      {/* Summary slide (after prototype) */}
      {screen === 'summary' && (
        <SummarySlide
          onContinue={() => navigate('comparison')}
          onBack={() => navigate('arrival')}
        />
      )}

      {/* Comparison slide (before/after) */}
      {screen === 'comparison' && (
        <ComparisonSlide
          onContinue={() => navigate('feasibility')}
          onBack={() => navigate('summary')}
        />
      )}

      {/* Feasibility slide */}
      {screen === 'feasibility' && (
        <FeasibilitySlide
          onContinue={() => navigate('value')}
          onBack={() => navigate('comparison')}
        />
      )}

      {/* Value/Business case slide */}
      {screen === 'value' && (
        <ValueSlide
          onContinue={() => navigate('validation')}
          onBack={() => navigate('feasibility')}
        />
      )}

      {/* Validation slide */}
      {screen === 'validation' && (
        <ValidationSlide
          onContinue={() => navigate('iteration-comparison')}
          onBack={() => navigate('value')}
        />
      )}

      {/* Iteration before/after comparison */}
      {screen === 'iteration-comparison' && (
        <IterationBeforeAfterSlide
          onContinue={() => navigate('iteration-comparison2')}
          onBack={() => navigate('validation')}
        />
      )}

      {/* Iteration before/after comparison 2 - GPS view */}
      {screen === 'iteration-comparison2' && (
        <IterationBeforeAfterSlide2
          onContinue={() => navigate('validation2')}
          onBack={() => navigate('iteration-comparison')}
        />
      )}

      {/* Validation slide 2 - Quote */}
      {screen === 'validation2' && (
        <ValidationSlide2
          onContinue={() => navigate('risk-ethics')}
          onBack={() => navigate('iteration-comparison2')}
        />
      )}

      {/* Risk & Ethics slide */}
      {screen === 'risk-ethics' && (
        <RiskEthicsSlide
          onContinue={() => navigate('next-steps')}
          onBack={() => navigate('validation2')}
        />
      )}

      {/* Next Steps slide */}
      {screen === 'next-steps' && (
        <NextStepsSlide
          onContinue={() => navigate('hook-slide')}
          onBack={() => navigate('risk-ethics')}
        />
      )}

      {showSidebar && (
        <div className="flow-sidebar">
          {/* Discovery flow */}
          <div className={`flow-dropdown ${currentFlow === 'discovery' ? 'active-flow' : ''}`}>
            <button
              className={`flow-dropdown-header ${expandedFlow === 'discovery' ? 'expanded' : ''}`}
              onClick={() => setExpandedFlow(expandedFlow === 'discovery' ? null : 'discovery')}
            >
              <span className="flow-dropdown-title">Flöde 1: Upptäckt</span>
              <svg className="flow-dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {expandedFlow === 'discovery' && (
              <div className="flow-dropdown-content">
                {discoverySteps.map((step) => (
                  <button
                    key={step.id}
                    className={`flow-dropdown-item clickable ${discoveryStep === step.id ? 'current' : ''} ${discoveryStep !== null && discoveryStep > step.id ? 'completed' : ''}`}
                    onClick={() => navigateToDiscoveryStep(step.id)}
                  >
                    <span className="flow-item-indicator">
                      {discoveryStep !== null && discoveryStep > step.id ? '✓' : discoveryStep === step.id ? '●' : '○'}
                    </span>
                    <span className="flow-item-label">{step.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Onboarding flow */}
          <div className={`flow-dropdown ${currentFlow === 'onboarding' ? 'active-flow' : ''}`}>
            <button
              className={`flow-dropdown-header ${expandedFlow === 'onboarding' ? 'expanded' : ''}`}
              onClick={() => setExpandedFlow(expandedFlow === 'onboarding' ? null : 'onboarding')}
            >
              <span className="flow-dropdown-title">Flöde 2: Onboarding</span>
              <svg className="flow-dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {expandedFlow === 'onboarding' && (
              <div className="flow-dropdown-content">
                {onboardingSteps.map((step) => (
                  <button
                    key={step.id}
                    className={`flow-dropdown-item clickable ${onboardingStep === step.id ? 'current' : ''} ${onboardingStep !== null && onboardingStep > step.id ? 'completed' : ''}`}
                    onClick={() => navigateToOnboardingStep(step.id)}
                  >
                    <span className="flow-item-indicator">
                      {onboardingStep !== null && onboardingStep > step.id ? '✓' : onboardingStep === step.id ? '●' : '○'}
                    </span>
                    <span className="flow-item-label">{step.label}</span>
                  </button>
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
              <span className="flow-dropdown-title">Flöde 3: D-day</span>
              <svg className="flow-dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {expandedFlow === 'morning' && (
              <div className="flow-dropdown-content">
                {morningSteps.map((step) => (
                  <button
                    key={step.id}
                    className={`flow-dropdown-item clickable ${morningStep === step.id ? 'current' : ''} ${morningStep !== null && morningStep > step.id ? 'completed' : ''}`}
                    onClick={() => navigateToMorningStep(step.id)}
                  >
                    <span className="flow-item-indicator">
                      {morningStep !== null && morningStep > step.id ? '✓' : morningStep === step.id ? '●' : '○'}
                    </span>
                    <span className="flow-item-label">{step.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Demo actions - only on travel screen without disruption */}
          {screen === 'travel' && !scenarioMode && !hasDisruption && !planBActive && (
            <div className="sidebar-demo-actions">
              <span className="sidebar-demo-label">Demo</span>
              <button className="sidebar-demo-btn" onClick={simulateDisruption}>
                Simulera störning
              </button>
            </div>
          )}

          {/* Demo actions - on travel screen with disruption */}
          {screen === 'travel' && !scenarioMode && hasDisruption && !planBActive && (
            <div className="sidebar-demo-actions">
              <span className="sidebar-demo-label">Demo</span>
              <button className="sidebar-demo-btn" onClick={() => startScenario('preference-conflict')}>
                Simulera preferenskonflikt
              </button>
            </div>
          )}

          {/* Scenarios section - on start screen with saved trip */}
          {screen === 'start' && savedTrip && !scenarioMode && (
            <div className="sidebar-scenarios">
              <span className="sidebar-demo-label">Scenarier</span>
              <button className="sidebar-scenario-btn" onClick={() => startScenario('preference-conflict')}>
                Preferenskonflikt
              </button>
            </div>
          )}

          {/* Toggle travel mode version - on travel screen with Plan B active */}
          {screen === 'travel' && !scenarioMode && planBActive && (
            <div className="sidebar-demo-actions">
              <span className="sidebar-demo-label">Alternativ design</span>
              <button
                className="sidebar-demo-btn"
                onClick={() => navigate('travel-lock-widget')}
              >
                Visa widget-låsskärm
              </button>
            </div>
          )}

          {/* Toggle lock screen widget - on travel-lock screen */}
          {screen === 'travel-lock' && !scenarioMode && (
            <div className="sidebar-demo-actions">
              <span className="sidebar-demo-label">Alternativ design</span>
              <button
                className="sidebar-demo-btn"
                onClick={() => navigate('travel-lock-widget')}
              >
                Visa reseöversikt (widget)
              </button>
            </div>
          )}

          {/* Back from widget to normal lock - on travel-lock-widget screen */}
          {screen === 'travel-lock-widget' && !scenarioMode && (
            <div className="sidebar-demo-actions">
              <span className="sidebar-demo-label">Alternativ design</span>
              <button
                className="sidebar-demo-btn"
                onClick={() => navigate('travel-lock')}
              >
                Visa standardvy
              </button>
            </div>
          )}
        </div>
      )}

      {/* Presentation sidebar */}
      {isPresentationSlide && (
        <div className="presentation-sidebar">
          <div className="presentation-sidebar-title">Presentation</div>
          <div className="presentation-slides-list">
            {presentationSlides.map((slide, index) => (
              <button
                key={slide.id}
                className={`presentation-slide-item ${screen === slide.id ? 'active' : ''} ${index < currentPresentationIndex ? 'completed' : ''}`}
                onClick={() => navigate(slide.id)}
              >
                <span className="presentation-slide-number">{index + 1}</span>
                <span className="presentation-slide-label">{slide.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
