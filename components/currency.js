import React, { useState, useEffect } from 'react';
import styles from '@/styles/Component.module.css'

export default function CurrencyConverter() {
  const [uah, setUah] = useState('')
  const [usd, setUsd] = useState('')
  const [rates, setRates] = useState({})

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=a48d1f0d33be4c34ba74c1e61543ed9b')
        const data = await response.json()
        setRates(data.rates)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRates()
  }, [])

  const handleUahChange = (event) => {
    setUah(event.target.value);
    setUsd((event.target.value / rates.UAH).toFixed(2));
  }

  const handleUsdChange = (event) => {
    setUsd(event.target.value);
    setUah((event.target.value * rates.UAH).toFixed(2));
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
      <label htmlFor="val1" className={styles.label}>UAH</label>
        
        <input
          className={styles.input}
          type="number"
          id="uah"
          placeholder="0.00"
          value={uah}
          min="0"
          required
          onChange={handleUahChange}
          onFocus={handleFocus}
        />
        </div>
        <div className={styles.column}>
        <label htmlFor="val2" className={styles.label}>USD</label>
        <input
          className={styles.input}
          type="number"
          id="usd"
          placeholder="0.00"
          value={usd}
          min="0"
          required
          onChange={handleUsdChange}
          onFocus={handleFocus}
        />
      </div>
    </div>
  )
}