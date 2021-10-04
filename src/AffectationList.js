import React from 'react';

function AffectationList({ affectations = {}, onUnaffect }) {
  const list = Object.entries(affectations);

  return (
    <ul>
      {list.map(([key, value]) => (
        <li key={key}>
          {key} affecté à {value}
          <br />
          <button onClick={() => onUnaffect(key)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default AffectationList;
