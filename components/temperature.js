import React from 'react'
import styles from '@/styles/Component.module.css'

export default function TempConverter() {
  const [far, setFar] = React.useState(0)
  const [cel, setCel] = React.useState(0)

  const handleFarChange = (event) => {
    const farValue = event.target.value
    setFar(farValue);
    const setValue = (farValue-32) * 5/9    // C = (fahrenheit - 32) * 5 /9
    setCel(setValue.toFixed(2))
  }

  const handleCelChange = (event) => {
    const celValue = event.target.value
    setCel(celValue);
    const setValue = ((celValue * 9/5) +32) // F = (C × 9/5) + 32
    setFar(setValue.toFixed(2))
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
      <label htmlFor="fahrenheit" className={styles.label}>Fahrenheit</label>
        
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
        <label htmlFor="celsius" className={styles.label}>Celsius</label>
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
