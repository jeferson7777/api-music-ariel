import React, { useState } from 'react';
import { getMusicData } from './getMusic.js';

function App() {
  const [music, setMusic] = useState([]);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setMusic(getMusicData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(song);
  };

  return (
    <>
      <h1>Music app</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song">Song</label>
        <input
          type="search"
          id="song"
          placeholder="Search song"
          name="song"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;


