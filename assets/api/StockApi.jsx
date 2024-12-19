const API_KEY = 'cthcjghr01qtho2p6dp0cthcjghr01qtho2p6dpg'; // Loaded from .env file
const BASE_URL = "https://finnhub.io/api/v1";

export const searchSymbol = async (query) => {
  const url = `${BASE_URL}/search?q=${query}&token=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${BASE_URL}/stock/profile2?symbol=${stockSymbol}&token=${API_KEY}`;
  const response = await fetch(url);
  // console.log(response);
  

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
   const x = await response.json();
  //  console.log(x);
   
  return x;
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${BASE_URL}/quote?symbol=${stockSymbol}&token=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
  const url = `https://finnhub.io/api/v1/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${API_KEY}`;
  // console.log(url);
  
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status} (${response.statusText})`;
    throw new Error(message);
  }

  return await response.json();
};
