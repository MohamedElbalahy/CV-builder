
import GeneralInfo from './components/GeneralInfo'
import Education   from './components/Education'
import Experience  from './components/Experience'
import CVPreview   from './components/CVPreview'
import React from 'react'
import './styles/App.css'

function App() {
  const [general, setGeneral] = React.useState({});
  const [education, setEducation] = React.useState([]);
  const [experience, setExperience] = React.useState([]);

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

export default App   // ← this line MUST be here 

