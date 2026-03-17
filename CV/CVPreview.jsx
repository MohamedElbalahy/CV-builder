import React from 'react'
import '../styles/App.css'

function CVPreview({ general, education, experience }) {

  const hasContent = general.name || education.school || experience.company

  if (!hasContent) {
    return (
      <div className="card preview-card">
        <h2 className="card-title">CV Preview</h2>
        <p className="empty-msg">Submit a section above to see your CV here.</p>
      </div>
    )
  }

  return (
    <div className="card preview-card">
      <h2 className="card-title">CV Preview</h2>

      {general.name && (
        <div className="preview-header">
          <h3 className="preview-name">{general.name}</h3>
          <p className="preview-contact">
            {[general.email, general.phone].filter(Boolean).join('  ·  ')}
          </p>
        </div>
      )}

      {education.school && (
        <div className="preview-section">
          <h4 className="preview-section-title">Education</h4>
          <p><strong>{education.school}</strong></p>
          <p>{education.degree}</p>
          <p className="preview-meta">{education.dates}</p>
        </div>
      )}

      {experience.company && (
        <div className="preview-section">
          <h4 className="preview-section-title">Experience</h4>
          <p><strong>{experience.position}</strong> — {experience.company}</p>
          <p className="preview-meta">{experience.dates}</p>
          <p style={{ whiteSpace: 'pre-line', marginTop: '4px' }}>
            {experience.responsibilities}
          </p>
        </div>
      )}
    </div>
  )
}

export default CVPreview