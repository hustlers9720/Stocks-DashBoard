import React, { useContext, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import SearchResults from './SearchResults';
import ThemeContext from '../Context/ThemeContext';
import { searchSymbol } from '../api/StockApi';

function Search() {
  const [input, setInput] = useState('');
  const [bestMatches, setBestMatches] = useState([]);
  const { darkMode } = useContext(ThemeContext)

  const clear = () => {
    setInput('');
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        const result = searchResults.result;
        setBestMatches(result);
      }

    } catch (error) {
      setBestMatches([])
      console.log(error);

    }
  };

  return (
    <div className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${darkMode ? 'bg-gray-600 border-white' : 'bg-white border-neutral-200'}`}>
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md border-2 ${darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600'
            : 'bg-white text-black placeholder-gray-600 border-neutral-200'
          }`}
        placeholder="Search Stock"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            updateBestMatches();
          }
        }}
      />



      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 text-gray-300" />
        </button>
      )}

      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-500 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-black-400" />
      </button>
      {/* </div> */}

      {input && bestMatches.length > 0 ? (<SearchResults result={bestMatches} />) : null}
    </div>
  );
};

export default Search;
