import { useState } from 'react'

function Annotation({ text, position = 'left', top, arrowPosition = 'middle' }) {
  const [isExpanded, setIsExpanded] = useState(false)

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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12" y2="8"/>
          </svg>
        </div>
      )}
      <div className="annotation-arrow"></div>
    </div>
  )
}

export default Annotation
