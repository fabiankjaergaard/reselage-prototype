import { useState, useEffect } from 'react'

function WorkingScreen({ onSolutionReady }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Analyserar störningen...')

  useEffect(() => {
    const stages = [
      { progress: 20, text: 'Analyserar störningen...', delay: 1200 },
      { progress: 45, text: 'Söker alternativa rutter...', delay: 2800 },
      { progress: 70, text: 'Beräknar nya tider...', delay: 4400 },
      { progress: 90, text: 'Verifierar lösningen...', delay: 5600 },
      { progress: 100, text: 'Klar', delay: 6400 },
    ]

    const timers = stages.map((stage) =>
      setTimeout(() => {
        setProgress(stage.progress)
        setStatusText(stage.text)
      }, stage.delay)
    )

    const finishTimer = setTimeout(() => {
      onSolutionReady()
    }, 7200)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(finishTimer)
    }
  }, [onSolutionReady])

  return (
    <div className="screen working-screen">
      <div className="working-content">
        <div className="working-lotus-container">
          <img src="/lotus-flower-transparent.gif" alt="Lugn" className="working-lotus" />
        </div>

        <h1 className="working-title">Ingen panik!</h1>
        <p className="working-subtitle">Vi hittar en alternativ väg åt dig</p>
        <p className="working-subtitle-secondary">Du kommer fortfarande hinna fram i tid</p>

        <div className="working-progress-container">
          <div className="working-progress-bar">
            <div
              className="working-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="working-status">{statusText}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkingScreen
