'use client';

import { useState } from 'react';

const allItems = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
];

export default function SearchFilterPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Type to filter the list..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <hr />

      <h2>Results</h2>
      <ul>
       
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}