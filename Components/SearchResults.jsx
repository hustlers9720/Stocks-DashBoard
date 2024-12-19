import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import StockContext from '../Context/StockContext';

function SearchResults({ result }) {
    const {darkMode} = useContext(ThemeContext)
    const {setStockSymbol} = useContext(StockContext);

    return (
    
    <ul className={`absolute top-full left-0 w-full max-h-60 overflow-y-scroll ${darkMode ? 'bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark' : ' bg-white border border-neutral-200 custom-scrollbar'}`}>
      {result.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md  ${darkMode ? 'hover:bg-indigo-600' : 'hover:bg-indigo-200'}`}
            onClick={()=>{
                setStockSymbol(item.symbol)
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
