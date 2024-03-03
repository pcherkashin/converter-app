import React, { useState, useEffect } from 'react'
import styles from '@/styles/Component.module.css'

export default function CurrencyConverter() {
  const [uah, setUah] = useState('')
  const [usd, setUsd] = useState('')
  const [isUahNegative, setIsUahNegative] = useState(false)
  const [isUsdNegative, setIsUsdNegative] = useState(false)
  const [rates, setRates] = useState({})

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          'https://openexchangerates.org/api/latest.json?app_id=a48d1f0d33be4c34ba74c1e61543ed9b'
        )
        const data = await response.json()
        setRates(data.rates)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRates()
  }, [])

  const handleUahChange = (event) => {
    const value = parseFloat(event.target.value)
    setUah(event.target.value)
    setIsUahNegative(value < 0)
    if (value >= 0) {
      setUsd((value / rates.UAH).toFixed(2))
    }
  }

  const handleUsdChange = (event) => {
    const value = parseFloat(event.target.value)
    setUsd(event.target.value)
    setIsUsdNegative(value < 0)
    if (value >= 0) {
      setUah((value * rates.UAH).toFixed(2))
    }
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  // Function to dynamically set input style
  const getInputStyle = (isNegative) => ({
    borderColor: isNegative ? 'red' : '',
    boxShadow: isNegative ? '0 0 0 4px rgba(255, 0, 0, 0.3)' : '',
    color: isNegative ? 'red' : '',
  })

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <label htmlFor='uah' className={styles.label}>
          UAH
        </label>
        <input
          className={styles.input}
          type='number'
          id='uah'
          style={getInputStyle(isUahNegative)}
          placeholder={isUahNegative ? 'Value must be > 0' : '0.00'}
          value={uah}
          onChange={handleUahChange}
          onFocus={handleFocus}
        />
      </div>
      <div className={styles.column}>
        <label htmlFor='usd' className={styles.label}>
          USD
        </label>
        <input
          className={styles.input}
          type='number'
          id='usd'
          style={getInputStyle(isUsdNegative)}
          placeholder={isUsdNegative ? 'Value must be > 0' : '0.00'}
          value={usd}
          onChange={handleUsdChange}
          onFocus={handleFocus}
        />
      </div>
    </div>
  )
}
