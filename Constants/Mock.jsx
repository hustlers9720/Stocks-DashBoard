import React from "react";

// Mock Search Results
export const mockSearchResults = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

// Mock Company Details
export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
};

// Mock Stock Quote
export const mockStockQuote = {
  c: 261.74, // Current Price
  h: 263.31, // High Price of the day
  l: 260.68, // Low Price of the day
  o: 261.07, // Open Price
  pc: 259.45, // Previous Close Price
  t: 1582641000, // Timestamp
};

// Mock Historical Data
export const mockHistoricalData = {
  c: [217.68, 221.03, 219.89], // Close Prices
  h: [222.49, 221.5, 220.94], // High Prices
  l: [217.19, 217.1402, 218.83], // Low Prices
  o: [221.03, 218.55, 220], // Open Prices
  s: "ok", // Status
  t: [1569297600, 1569384000, 1569470400], // Timestamps
  v: [33463820, 24018876, 20730608], // Volumes
};


