import React from 'react';
import styles from '@/styles/Component.module.css'

export default function WeightConverter() {
    const [val1, setVal1] = React.useState(0)
    const [val2, setVal2] = React.useState(0)
    const [val1Error, setVal1Error] = React.useState(false)
    const [val2Error, setVal2Error] = React.useState(false)
  
    const handleVal1Change = (event) => {
      const val1Value = event.target.value
      if (val1Value < 0) {
        setVal1Error(true)
      } else {
      setVal1Error(false)
      setVal1(val1Value)
    const setValue = (val1Value * 0.45359237)    // kilograms = pounds * 0.45359237
    setVal2(setValue.toFixed(2))
  }
}

  const handleVal2Change = (event) => {
    const val2Value = event.target.value
    if (val2Value < 0) {
      setVal2Error(true)
    } else {
      setVal2Error(false)
    setVal2(val2Value)
    const setValue = (val2Value / 0.45359237) // pounds = kilograms / 0.45359237
    setVal1(setValue.toFixed(2)); 
  }
}

  const handleFocus = (e) => {
    e.target.select()
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
      <label htmlFor="val1" className={styles.label}>Pounds</label>
        
        <input
          className={styles.input}
          type="number"
          id="val1"
          placeholder="0.00"
          value={val1}
          min="0"
          required
          onChange={handleVal1Change}
          onFocus={handleFocus}
        />
        </div>
        <div className={styles.column}>
        <label htmlFor="val2" className={styles.label}>Kilograms</label>
        <input
          className={styles.input}
          type="number"
          id="val2"
          placeholder="0.00"
          value={val2}
          min="0"
          required
          onChange={handleVal2Change}
          onFocus={handleFocus}
        />
      </div>
    </div>
  )
}