import { useState, useEffect } from 'react'

function Annotation({ text, position = 'left', top, arrowPosition = 'middle', highlightClass }) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (highlightClass) {
      if (isExpanded) {
        document.body.classList.add(highlightClass)
      } else {
        document.body.classList.remove(highlightClass)
      }
    }
    return () => {
      if (highlightClass) {
        document.body.classList.remove(highlightClass)
      }
    }
  }, [isExpanded, highlightClass])

  return (
    <div
      className={`annotation annotation-${position} arrow-${arrowPosition} ${isExpanded ? 'expanded' : 'collapsed'}`}
      style={{ top: top }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <div className="annotation-content">
          <p>{text}</p>
        </div>
      ) : (
        <div className="annotation-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
        </div>
      )}
      <div className="annotation-arrow"></div>
    </div>
  )
}

export default Annotation
