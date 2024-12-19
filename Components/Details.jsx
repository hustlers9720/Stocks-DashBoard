import React from 'react';
import { useContext } from 'react';
import Card from './Card';
import ThemeContext from '../Context/ThemeContext';

function Details  ({details})  {
      const {darkMode} = useContext(ThemeContext);

    const detailList= {
        name : "Name" ,
        country : "Country",
        currency : "Currency",
        exchange :"Exchange",
        ipo: "IPO Date",
        marketCapitalisation :"Market Capitalisation",
        finnhubIndustry :"Industry",
    };

    const convertMillonToBillion =(number)=>{
        return (number/1000).toFixed(2);
    };
  return (
    <Card>
        <ul className={`w-full h-full flex flex-col justify-between divide-y-1  ${darkMode ? 'divide-gray-800' : null }`}>
            {Object.keys(detailList).map((item) => {
               return (<li key={item} className='flex-1 flex justify-between items-center  '>
                <span>{detailList[item]}</span>
                <span>{item === 'marketCapitalisation' ?`${convertMillonToBillion(details[item])}B`: details[item]}
                </span>
               </li>
               );
            })}
        </ul>
    </Card>
  );
};

export default Details;