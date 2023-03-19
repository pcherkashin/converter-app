import React from 'react';
import styles from '@/styles/Component.module.css'

//!Add values validation >=0
//!Add default values

export default function VolConverter() {
  const [far, setFar] = React.useState(0);
  const [cel, setCel] = React.useState(0);

  const handleFarChange = (event) => {
    const farValue = event.target.value
    setFar(farValue);
    const setValue = (farValue * 3.78541)    // liters = gallons * 3.78541
    setCel(setValue.toFixed(2))
  };

  const handleCelChange = (event) => {
    const celValue = event.target.value
    setCel(celValue);
    const setValue = (celValue / 3.78541) // gallons = liters / 3.78541
    setFar(setValue.toFixed(2)); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
      <label htmlFor="fahrenheit" className={styles.label}>Gallons</label>
        
        <input
          className={styles.input}
          type="number"
          id="cur1"
          placeholder="0.00"
          value={far}
          onChange={handleFarChange}
        />
        </div>
        <div className={styles.column}>
        <label htmlFor="celsius" className={styles.label}>Litres</label>
        <input
          className={styles.input}
          type="number"
          id="cur2"
          placeholder="0.00"
          value={cel}
          onChange={handleCelChange}
        />
      </div>
    </div>
  )
}

