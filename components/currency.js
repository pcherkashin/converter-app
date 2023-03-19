import React from 'react';
import styles from '@/styles/Component.module.css'

export default function CurrencyConverter() {
  const [uah, setUah] = React.useState('')
  const [usd, setUsd] = React.useState('')

  const handleUahChange = (event) => {
    setUah(event.target.value);
    setUsd(event.target.value / 40); // assuming 1 USD = 40 UAH
  }

  const handleUsdChange = (event) => {
    setUsd(event.target.value);
    setUah(event.target.value * 0.3); // assuming 1 UAH = 0.30 USD
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  return (
    <div>
      <form>
        <input
          type="number"
          id="cur1"
          placeholder="0.00"
          value={uah}
          min="0"
          required
          onChange={handleUahChange}
          onFocus={handleFocus}
        />
        UAH
        <br />
        <input
          type="number"
          id="cur2"
          placeholder="0.00"
          value={usd}
          min="0"
          required
          onChange={handleUsdChange}
          onFocus={handleFocus}
        />
        USD
      </form>
    </div>
  );
}
