import React from 'react';
import styles from '@/styles/Component.module.css'

export default function CurrencyConverter() {
  const [rub, setRub] = React.useState(0);
  const [eur, setEur] = React.useState(0);

  const handleRubChange = (event) => {
    setRub(event.target.value);
    setEur(event.target.value / 80); // assuming 1 EUR = 80 RUB
  };

  const handleEurChange = (event) => {
    setEur(event.target.value);
    setRub(event.target.value * 80); // assuming 1 EUR = 80 RUB
  };

  return (
    <div>
      <form>
        <input
          type="number"
          id="cur1"
          placeholder="0.00"
          value={rub}
          onChange={handleRubChange}
        />
        RUB
        <br />
        <input
          type="number"
          id="cur2"
          placeholder="0.00"
          value={eur}
          onChange={handleEurChange}
        />
        EUR
      </form>
    </div>
  );
}
