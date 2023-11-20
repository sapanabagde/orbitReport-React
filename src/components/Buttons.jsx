import React from 'react';
import './styling.css';

import satData from "./satData"

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div class='flex-container'>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>
        All Orbits</button>
    </div>
  );
};

export default Buttons;