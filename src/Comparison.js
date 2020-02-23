import React, { useState, useEffect } from 'react';
import './Comp.css';
import suggestedCities from './SuggestionCities.json';

export default function Comparison() {
  const [placeOne, setPlaceOne] = useState('');
  const [placeTwo, setPlaceTwo] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let tempCities = [];
    tempCities = suggestedCities.map(data => data.name);
    setCities(tempCities);
  }, []);

  const compareCities = async () => {
    const dataOne = await fetch(
      `https://samples.openweathermap.org/data/2.5/find?q=${placeOne}&units=metric&appid=b6907d289e10d714a6e88b30761fae22`
    );
    const dataTwo = await fetch(
      `https://samples.openweathermap.org/data/2.5/find?q=${placeTwo}&units=metric&appid=b6907d289e10d714a6e88b30761fae22`
    );

    const tempOne = dataOne.list[0].main.temp;
    const tempTwo = dataTwo.list[0].main.temp;
    console.log('tempOne', tempOne);
    console.log('tempTwo', tempTwo);
  };

  return (
    <div>
      <form>
        <header className="header">
          <h1>Weather Comparison</h1>
        </header>
        <div className="inputfield">
          <input
            className="place1"
            type="text"
            name="place 1"
            value={placeOne}
            list="citiesOne"
            placeholder="Enter your Place 1"
            onChange={event => setPlaceOne(event.target.value)}
          />
          {placeOne.length ? (
            <datalist id="citiesOne">
              {cities.map(city => (
                <option value={city} />
              ))}
            </datalist>
          ) : null}
          <input
            className="place2"
            type="text"
            name="place 2"
            list="citiesTwo"
            value={placeTwo}
            placeholder="Enter your Place 2"
            onChange={event => setPlaceTwo(event.target.value)}
          />
          {placeTwo.length ? (
            <datalist id="citiesTwo">
              {cities.map(city => (
                <option value={city} />
              ))}
            </datalist>
          ) : null}
          <button type="submit" className="submit" onClick={compareCities}>
            Compare
          </button>
        </div>
      </form>
    </div>
  );
}
