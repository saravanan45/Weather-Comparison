import React from 'react';

export default function Comparison() {
  return (
    <div>
      <header>
        <h1>Weather Comparison</h1>
      </header>
      Place 1: <input type="text" name="place 1" placeholder="Place 1" />
      Place 2: <input type="text" name="place 2" placeholder="Place 2" />
      <button type="submit" className="submit">
        Compare
      </button>
    </div>
  );
}
