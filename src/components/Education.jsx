import React, { useState } from 'react'
import '../styles/App.css'

function Education({ data, onSave }) {

  const [isEditing, setIsEditing]   = useState(true)
  const [formData, setFormData]     = useState(data)

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
        <h2 className="card-title">Education</h2>

        <div className="field">
          <label>School / University</label>
          <input
            type="text"
            name="school"
            placeholder="e.g. Alexandria University"
            value={formData.school}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Degree / Title of Study</label>
          <input
            type="text"
            name="degree"
            placeholder="e.g. B.Sc. Civil & Environmental Engineering"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Dates</label>
          <input
            type="text"
            name="dates"
            placeholder="e.g. Sep 2018 – Jun 2022"
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
      <h2 className="card-title">Education</h2>

      <div className="display-field">
        <span className="display-label">School: </span>
        <span>{data.school || '—'}</span>
      </div>
      <div className="display-field">
        <span className="display-label">Degree: </span>
        <span>{data.degree || '—'}</span>
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

export default Education