import { useState } from 'react'
import './App.css'
import DashBoard from './Components/DashBoard.jsx';
import ThemeContext from './Context/ThemeContext.jsx';
import StockContext from './Context/StockContext.jsx';

function App() {
  const [darkMode , setDarkMode] = useState(false);
  const [stockSymbol , setStockSymbol] = useState("FB");
  return (
    <div>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}> 
        <StockContext.Provider value={{stockSymbol , setStockSymbol}} >
        <DashBoard/>
        </StockContext.Provider> 
        
      </ThemeContext.Provider>
    </div>
    
  )
}

export default App
