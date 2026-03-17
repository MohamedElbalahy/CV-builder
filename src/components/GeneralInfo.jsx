import React, { useState } from 'react'
import '../styles/App.css'


function GeneralInfo({ data, onSave }) {

  const [isEditing, setIsEditing] = useState(true)

  const [formData, setFormData] = useState(data)

  function handleChange(e) {
    setFormData({
      ...formData,                    
      [e.target.name]: e.target.value
    })
  }

  // when submit
  function handleSubmit() {
    onSave(formData)      
    setIsEditing(false)   
  }

  // Called when user clicks Edit
  function handleEdit() {
    setFormData(data)  
    setIsEditing(true)  
  }

  // ── EDITING ──
  if (isEditing) {
    return (
      <div className="card">
        <h2 className="card-title">General Information</h2>

        <div className="field">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="e.g. Mohamed Ahmed"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. mohamed@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="e.g. +20 100 000 0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="btn-row">
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    )
  }

  // ── DISPLAY ──
  return (
    <div className="card">
      <h2 className="card-title">General Information</h2>

      <div className="display-field">
        <span className="display-label">Name: </span>
        <span>{data.name || '—'}</span>
      </div>

      <div className="display-field">
        <span className="display-label">Email: </span>
        <span>{data.email || '—'}</span>
      </div>

      <div className="display-field">
        <span className="display-label">Phone: </span>
        <span>{data.phone || '—'}</span>
      </div>

      <div className="btn-row">
        <button className="btn-edit" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default GeneralInfo