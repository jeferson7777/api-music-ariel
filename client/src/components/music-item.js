import React from 'react';

const MusicItem = ({ music }) => {
  return (
    <article key={music.title}>
      <h2>{music.title}</h2>
      <h3>{music.artist}</h3>
    </article>
  );
};

export default MusicItem;
