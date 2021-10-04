import { useState } from 'react'
import './App.css';
import AffectationList from './AffectationList';
import OfficeForm from './Form';

function App() {
  const [offices, setOffices] = useState(['B1', 'B2', 'B3'])
  const [affectations, setAffectations] = useState(
    { B4: 'Benjamin Petetot'}
  )

  const affectToOffice = (office, person) => {
    if (!office) return
    // remove availibities
    setOffices(offices.filter((item) => item !== office))
    // affectation
    setAffectations({
      ...affectations,
      [office]: person,
    })
  }

  const unaffect = (office) => {
    setOffices([...offices, office].sort())
    const newAffectations = {...affectations}
    delete newAffectations[office]
    setAffectations(newAffectations)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Gestion des bureaux</h1>
        <OfficeForm offices={offices} onAffect={affectToOffice} />
        <br />
        <AffectationList affectations={affectations} onUnaffect={unaffect} />
      </div>
    </div>
  );
}

export default App;
