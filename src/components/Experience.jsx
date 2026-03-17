import React, { useState } from 'react'
import '../styles/App.css'

function Experience({ data, onSave }) {

  const [isEditing, setIsEditing] = useState(true)
  const [formData, setFormData]   = useState(data)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    onSave(formData)
    setIsEditing(false)
  }

  function handleEdit() {
    setFormData(data)
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div className="card">
        <h2 className="card-title">Experience</h2>

        <div className="field">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="e.g. Esri North Africa"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Position Title</label>
          <input
            type="text"
            name="position"
            placeholder="e.g. GIS Analyst"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Main Responsibilities</label>
          <textarea
            name="responsibilities"
            placeholder="Describe your main duties..."
            value={formData.responsibilities}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Dates</label>
          <input
            type="text"
            name="dates"
            placeholder="e.g. Jan 2023 – Present"
            value={formData.dates}
            onChange={handleChange}
          />
        </div>

        <div className="btn-row">
          <button className="btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="card-title">Experience</h2>

      <div className="display-field">
        <span className="display-label">Company: </span>
        <span>{data.company || '—'}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Position: </span>
        <span>{data.position || '—'}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Responsibilities: </span>
        <span style={{ whiteSpace: 'pre-line' }}>{data.responsibilities || '—'}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Dates: </span>
        <span>{data.dates || '—'}</span>
      </div>

      <div className="btn-row">
        <button className="btn-edit" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default Experience