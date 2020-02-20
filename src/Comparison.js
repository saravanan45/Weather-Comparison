import React, { useState } from 'react';
import './Comp.css';

export default function Comparison() {
  const [placeOne, setPlaceOne] = useState('');
  const [placeTwo, setPlaceTwo] = useState('');
  return (
    <div>
      <header className="header">
        <h1>Weather Comparison</h1>
      </header>
      <div className="inputheader">
        <span className="place1header">Place 1</span>
        <span className="place2header">Place 2</span>
      </div>
      <div className="inputfield">
        <input
          className="place1"
          type="text"
          name="place 1"
          value={placeOne}
          placeholder="Enter your Place"
          onChange={value => setPlaceOne(value)}
        />
        <input
          className="place2"
          type="text"
          name="place 2"
          value={placeTwo}
          placeholder="Enter your Place"
          onChange={value => setPlaceTwo(value)}
        />
        <button type="submit" className="submit">
          Compare
        </button>
      </div>
    </div>
  );
}
