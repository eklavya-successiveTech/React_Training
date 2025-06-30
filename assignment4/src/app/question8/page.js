'use client';

import { useState } from 'react';

const Temperature = () => {
  const [celsius, setCelsius] = useState(0);

  const handleCelsiusChange = (e) => {
    const value = parseFloat(e.target.value);
    setCelsius(isNaN(value) ? 0 : value);
  };

  const handleFahrenheitChange = (e) => {
    const value = parseFloat(e.target.value);
    const c = (value - 32) * (5 / 9);
    setCelsius(isNaN(c) ? 0 : c);
  };

  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div>
      <p>Celsius:</p>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
      />

      <p>Fahrenheit:</p>
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default Temperature;
