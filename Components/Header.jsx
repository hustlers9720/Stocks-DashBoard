import React from 'react';
import Search from './Search';
import ThemeIcon from './ThemeIcon';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Header ({name})  {
  const{darkMode} = useContext(ThemeContext)
  return (
   <>
    <div className='xl:px-32'>
    <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>Meta Platform INC.</h1>
    <Search/>
    </div>
     <ThemeIcon/>
   </> 
  )
};

export default  Header ;