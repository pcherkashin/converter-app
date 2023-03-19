import React from 'react';

//!Add values validation >=0
//!Add default values

export default function LengthConverter() {
  const [far, setFar] = React.useState(0);
  const [cel, setCel] = React.useState(0);

  const handleFarChange = (event) => {
    const farValue = event.target.value
    setFar(farValue);
    const setValue = (farValue / 3.2808)    // meters = feet / 3.2808
    setCel(setValue.toFixed(2))
  };

  const handleCelChange = (event) => {
    const celValue = event.target.value
    setCel(celValue);
    const setValue = (celValue * 3.2808) // feet = meters * 3.2808
    setFar(setValue.toFixed(2)); 
  };

  return (
    <div>
      <form>
        <input
          type="number"
          id="cur1"
          placeholder="0.00"
          value={far}
          onChange={handleFarChange}
        />
        Feet
        <br />
        <input
          type="number"
          id="cur2"
          placeholder="0.00"
          value={cel}
          onChange={handleCelChange}
        />
        Meters
      </form>
    </div>
  );
}
