import React, { useState } from 'react';


const RangeSlider = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="range-slider">
      <div className="value-label">
        {value === '0' && 'Keine Erfahrung'}
        {value === '1' && 'Bisschen Erfahrung'}
        {value === '2' && 'Viel Erfahrung'}
      </div>
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={value}
        onChange={handleChange}
      />
      <div className="labels">
        <span>Keine Erfahrung</span>
        <span>Bisschen Erfahrung</span>
        <span>Viel Erfahrung</span>
      </div>

    </div>
  );
};

export default RangeSlider;
