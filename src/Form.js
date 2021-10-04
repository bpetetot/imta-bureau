import React, { useState } from 'react';

function OfficeForm({ offices = [], onAffect }) {
  const [selectedOffice, setSelectedOffice] = useState();
  const [person, setPerson] = useState();

  const handleAffectation = (e) => {
    e.preventDefault();
    onAffect(selectedOffice, person);
  };

  return (
    <form>
      <select defaultValue="" onChange={(e) => setSelectedOffice(e.target.value)}>
        <option value="" disabled>
          Selectionner un bureau
        </option>
        {offices.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input type="text" onChange={(e) => setPerson(e.target.value)} />
      <button type="submit" onClick={handleAffectation}>
        Affecter
      </button>
    </form>
  );
}

export default OfficeForm;
