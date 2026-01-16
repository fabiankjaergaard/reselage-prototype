import { useState, useEffect } from 'react'
import Toast from './Toast'

function WorkingScreen({ onSolutionReady }) {
  const [showToast, setShowToast] = useState(false)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Analyserar störningen...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const stages = [
      { progress: 20, text: 'Analyserar störningen...', delay: 600 },
      { progress: 45, text: 'Söker alternativa rutter...', delay: 1200 },
      { progress: 70, text: 'Beräknar nya tider...', delay: 1800 },
      { progress: 90, text: 'Verifierar lösningen...', delay: 2400 },
      { progress: 100, text: 'Klar', delay: 2800 },
    ]

    const timers = stages.map((stage) =>
      setTimeout(() => {
        setProgress(stage.progress)
        setStatusText(stage.text)
      }, stage.delay)
    )

    const finishTimer = setTimeout(() => {
      onSolutionReady()
    }, 3200)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(finishTimer)
    }
  }, [onSolutionReady])

  return (
    <div className="screen working-screen">
      {showToast && (
        <div className="toast-container">
          <Toast
            type="alert"
            message={
              <>
                <p>Störning på tunnelbanan</p>
                <p>Röda linjen försenad vid Slussen</p>
              </>
            }
            autoDismiss={false}
          />
        </div>
      )}

      <div className="working-content">
        <div className="working-icon-container">
          <div className="working-spinner"></div>
        </div>

        <h1 className="working-title">Söker lösning</h1>
        <p className="working-subtitle">Vi fixar detta åt dig</p>

        <div className="working-progress-container">
          <div className="working-progress-bar">
            <div
              className="working-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="working-status">{statusText}</p>
        </div>

        <div className="working-reassurance">
          <p>Du behöver inte göra något.</p>
          <p>Vi hittar bästa alternativet automatiskt.</p>
        </div>
      </div>
    </div>
  )
}

export default WorkingScreen
