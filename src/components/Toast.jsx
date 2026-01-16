import { useState, useEffect } from 'react'

function Toast({ message, type = 'info', onDismiss, autoDismiss = true, duration = 6000 }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [autoDismiss, duration])

  const handleDismiss = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      if (onDismiss) onDismiss()
    }, 300)
  }

  if (!isVisible) return null

  const typeStyles = {
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
    alert: 'toast-alert'
  }

  return (
    <div className={`toast ${typeStyles[type]} ${isExiting ? 'toast-exit' : ''}`}>
      <div className={`toast-indicator toast-indicator-${type}`}></div>
      <div className="toast-content">
        {typeof message === 'string' ? <p>{message}</p> : message}
      </div>
      <button className="toast-dismiss" onClick={handleDismiss} aria-label="Stäng">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}

export default Toast
