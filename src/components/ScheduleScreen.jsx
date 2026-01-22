import { useState } from 'react'
import OnboardingProgress from './OnboardingProgress'

function ScheduleScreen({ tripData, onComplete, onBack }) {
  const [selectedDays, setSelectedDays] = useState(['mon', 'tue', 'wed', 'thu', 'fri'])
  const [notifyBefore, setNotifyBefore] = useState('30')

  const days = [
    { id: 'mon', label: 'M', full: 'Måndag' },
    { id: 'tue', label: 'T', full: 'Tisdag' },
    { id: 'wed', label: 'O', full: 'Onsdag' },
    { id: 'thu', label: 'T', full: 'Torsdag' },
    { id: 'fri', label: 'F', full: 'Fredag' },
    { id: 'sat', label: 'L', full: 'Lördag' },
    { id: 'sun', label: 'S', full: 'Söndag' },
  ]

  const toggleDay = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter(d => d !== dayId))
    } else {
      setSelectedDays([...selectedDays, dayId])
    }
  }

  const selectWeekdays = () => {
    setSelectedDays(['mon', 'tue', 'wed', 'thu', 'fri'])
  }

  const selectAll = () => {
    setSelectedDays(days.map(d => d.id))
  }

  const handleComplete = () => {
    onComplete({
      ...tripData,
      schedule: {
        days: selectedDays,
        notifyMinutesBefore: parseInt(notifyBefore)
      }
    })
  }

  const hasSelection = selectedDays.length > 0

  return (
    <div className="screen">
      <OnboardingProgress currentStep={3} />

      <div className="screen-header">
        <h1 className="screen-title">Schemalägg</h1>
        <p className="screen-subtitle">Välj vilka dagar du pendlar</p>
      </div>

      <div className="schedule-trip-badge">
        <span className="badge-name">{tripData?.name || 'Min resa'}</span>
        <span className="badge-time">Framme {tripData?.arrivalTime || '09:00'}</span>
      </div>

      <div className="card highlight-target-days">
        <div className="card-header">
          <span className="card-title">Aktiva dagar</span>
        </div>
        <div className="card-content">
          <div className="quick-select-row">
            <button className="btn-quick" onClick={selectWeekdays}>
              Vardagar
            </button>
            <button className="btn-quick" onClick={selectAll}>
              Alla dagar
            </button>
          </div>

          <div className="day-grid">
            {days.map((day) => (
              <button
                key={day.id}
                className={`day-btn ${selectedDays.includes(day.id) ? 'selected' : ''}`}
                onClick={() => toggleDay(day.id)}
              >
                <span className="day-label">{day.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Notifieringar</span>
        </div>
        <div className="card-content">
          <div className="form-group">
            <label className="form-label">Meddela mig</label>
            <select
              className="form-select"
              value={notifyBefore}
              onChange={(e) => setNotifyBefore(e.target.value)}
            >
              <option value="15">15 min innan avfärd</option>
              <option value="30">30 min innan avfärd</option>
              <option value="45">45 min innan avfärd</option>
              <option value="60">1 timme innan avfärd</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card card-info highlight-target-expectations">
        <div className="card-header">
          <span className="card-title">Så fungerar det</span>
        </div>
        <div className="card-content">
          <ul className="feature-list">
            <li>Du får en påminnelse innan du ska gå hemifrån</li>
            <li>Om något händer med din resa hjälper vi dig hitta ett bättre alternativ</li>
            <li>Du slipper tänka – vi håller koll åt dig</li>
          </ul>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="btn-container">
        <button
          className={`btn btn-primary ${!hasSelection ? 'btn-disabled' : ''}`}
          onClick={handleComplete}
          disabled={!hasSelection}
        >
          Spara resa
        </button>
        <button className="btn btn-ghost" onClick={onBack}>
          Tillbaka
        </button>
      </div>
    </div>
  )
}

export default ScheduleScreen
