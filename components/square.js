import React from 'react';

//!Add values validation >=0
//!Add default values

export default function SquareConverter() {
  const [far, setFar] = React.useState(0);
  const [cel, setCel] = React.useState(0);

  const handleFarChange = (event) => {
    const farValue = event.target.value
    setFar(farValue);
    const setValue = (farValue * 0.404686)    // hectares = acres * 0.404686
    setCel(setValue.toFixed(2))
  };

  const handleCelChange = (event) => {
    const celValue = event.target.value
    setCel(celValue);
    const setValue = (celValue * 2.47105) // acres = hectares * 2.47105
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
        Acres
        <br />
        <input
          type="number"
          id="cur2"
          placeholder="0.00"
          value={cel}
          onChange={handleCelChange}
        />
        Hectares
      </form>
    </div>
  );
}
