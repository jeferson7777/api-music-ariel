import React, { useEffect, useState } from 'react';
import { getMusicData } from './getMusic.js';
import Header from '../components/header.js';
import SearchMusic from './search-music.js';
import MusicItem from './music-item.js';
function App() {
  const [music, setMusic] = useState('');
  const [musicData, setMusicData] = useState([]);
 


  const handleChange = (event) => {
    const { value } = event.currentTarget;
    console.log(value);
    setMusic(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  };
  const fetchMusicData = async () => {
    const data = await getMusicData();
    console.log(data);
    setMusicData(data);
  }
  useEffect(async () => {
    await fetchMusicData();
  }, []);

  return (
    <>
      <Header />
      <SearchMusic
        handleSubmit={handleSubmit}
        handleChange={handleChange}
       // musicItem={MusicItem}
      />
      {<section>
          {musicData.map((musicItem) => (
            <MusicItem key={musicItem.title} music={musicItem} />
          ))}
        </section>
      }
    </>
  );
}

export default App;