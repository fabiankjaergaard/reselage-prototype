import { useState } from 'react'

function PreferenceConflictScreen({ onChooseOption, onBack }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
  }

  const handleConfirm = () => {
    if (selectedOption) {
      onChooseOption(selectedOption)
    }
  }

  return (
    <div className="screen preference-conflict-screen">
      <div className="conflict-calm-icon">
        <img src="/lotus-flower-transparent.gif" alt="" />
      </div>

      <div className="conflict-header">
        <span className="conflict-label">Preferenskonflikt</span>
        <h1 className="conflict-title">Vilken är viktigast just nu?</h1>
      </div>

      <p className="conflict-description">
        Det finns ingen rutt som uppfyller båda dina preferenser. Välj vad som är viktigast för just den här resan.
      </p>

      <div className="conflict-options">
        {/* Option 1: Sittplats */}
        <button
          className={`conflict-option ${selectedOption === 'sittplats' ? 'selected' : ''}`}
          onClick={() => handleSelect('sittplats')}
        >
          <div className="option-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
              <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-4 0z"/>
              <path d="M5 18v2"/>
              <path d="M19 18v2"/>
            </svg>
          </div>
          <div className="option-content">
            <span className="option-title">Sittplats garanterad</span>
            <span className="option-subtitle">1 byte · Tunnelbana + Buss</span>
            <div className="option-details">
              <span className="option-time">Framme 08:47</span>
              <span className="option-occupancy low">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                Gott om plats
              </span>
            </div>
          </div>
          <div className="option-check">
            {selectedOption === 'sittplats' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            )}
          </div>
        </button>

        {/* Option 2: Inga byten */}
        <button
          className={`conflict-option ${selectedOption === 'direktrutt' ? 'selected' : ''}`}
          onClick={() => handleSelect('direktrutt')}
        >
          <div className="option-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
          <div className="option-content">
            <span className="option-title">Inga byten</span>
            <span className="option-subtitle">Direktbuss hela vägen</span>
            <div className="option-details">
              <span className="option-time">Framme 08:52</span>
              <span className="option-occupancy medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                Ganska fullt
              </span>
            </div>
          </div>
          <div className="option-check">
            {selectedOption === 'direktrutt' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      <div className="conflict-learning">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        <span>Ditt val hjälper oss att lära oss vad som är viktigast för dig</span>
      </div>

      <div className="conflict-actions">
        <button
          className={`conflict-confirm-btn ${selectedOption ? 'active' : ''}`}
          onClick={handleConfirm}
          disabled={!selectedOption}
        >
          Välj denna rutt
        </button>
        <button className="conflict-back-btn" onClick={onBack}>
          Tillbaka
        </button>
      </div>
    </div>
  )
}

export default PreferenceConflictScreen
