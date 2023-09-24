// components/SearchBar.js

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    
  };

  return (
    <div className="w-full bg-white shadow-md p-4">
      <div className="max-w-2xl mx-auto flex">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full rounded-l-md p-2 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
