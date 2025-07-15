'use client';

import { useState } from 'react';

export default function SelectDropdownPage() {
  const [selectedValue, setSelectedValue] = useState('Apple');

  const handleSelectionChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="fruit-select">Choose a fruit:</label>
      <select
        id="fruit-select"
        value={selectedValue}
        onChange={handleSelectionChange}
      >
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
        <option value="Grape">Grape</option>
      </select>

      <hr />
      <div>
        <p>You have selected: {selectedValue}</p>
      </div>
    </div>
  );
}