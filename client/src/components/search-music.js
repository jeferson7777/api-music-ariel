import React from 'react';

const SearchMusic = ({ handleSubmit, handleChange, musicItem}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="musicItem">Search a title</label>
      <input
        type="search"
        id="musicItem"
        placeholder="Search title"
        name="musicItem"
        onChange={handleChange}
        value={musicItem}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMusic;

