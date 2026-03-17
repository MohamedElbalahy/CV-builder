import React, { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education   from './components/Education'
import Experience  from './components/Experience'
import CVPreview   from './components/CVPreview'

function App() {

  const [general, setGeneral] = useState({
    name:  '',
    email: '',
    phone: '',
  })

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    dates:  '',
  })

  const [experience, setExperience] = useState({
    company:          '',
    position:         '',
    responsibilities: '',
    dates:            '',
  })

  return (
    <div className="app">
      <h1 className="app-title">CV Builder</h1>

      <div className="grid">

        <GeneralInfo
          data={general}
          onSave={(newData) => setGeneral(newData)}
        />

        <Education
          data={education}
          onSave={(newData) => setEducation(newData)}
        />

        <Experience
          data={experience}
          onSave={(newData) => setExperience(newData)}
        />

        <CVPreview
          general={general}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  )
}

export default App