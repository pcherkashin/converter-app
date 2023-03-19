import React from 'react';

//!Add values validation >=0
//!Add default values

export default function DistConverter() {
  const [far, setFar] = React.useState(0);
  const [cel, setCel] = React.useState(0);

  const handleFarChange = (event) => {
    const farValue = event.target.value
    setFar(farValue);
    const setValue = (farValue * 1.60934)    // kilometers = miles * 1.60934
    setCel(setValue.toFixed(2))
  };

  const handleCelChange = (event) => {
    const celValue = event.target.value
    setCel(celValue);
    const setValue = (celValue * 0.621371) // miles = kilometers * 0.621371
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
        Miles
        <br />
        <input
          type="number"
          id="cur2"
          placeholder="0.00"
          value={cel}
          onChange={handleCelChange}
        />
        Kilometers
      </form>
    </div>
  );
}
