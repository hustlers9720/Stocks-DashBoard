import React, { useContext, useEffect, useState } from "react";
import Header from "./Header.jsx";
import Details from "./Details.jsx";
import Overview from "./Overview.jsx";
import Chart from "./Chart.jsx";
import ThemeContext from "../Context/ThemeContext.jsx";
import StockContext from "../Context/StockContext.jsx";
import { fetchQuote, fetchStockDetails } from "../api/StockApi.jsx";

function DashBoard() {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetail, setStockDetail] = useState({ name: "", currency: "" });
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateStockDetails = async () => {
      setIsLoading(true);
      try {
        const result = await fetchStockDetails(stockSymbol);
        // console.log(result);
          setStockDetail(result);
      } catch (error) {
        setStockDetail({});
        console.error(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
        // console.log(result);
        
      } catch (error) {
        setQuote({});
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen-1 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 grid-rows-6 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-200 ${
        darkMode ? "bg-gray-950 text-gray-700" : "bg-neutral-100"
      }`}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
            <Header name={stockDetail?.name || "N/A"} />
          </div>

          <div className="md:col-span-1 row-span-2">
            <Chart />
          </div>

          <div className="md:col-span-1 row-span-1">
            <Overview
              symbol={stockSymbol || "N/A"}
              price={quote?.pc ?? 0}
              change={quote?.d ?? 0}
              changePercent={quote?.dp ?? 0}
              currency={stockDetail?.currency || "N/A"}
            />
          </div>

          <div className="md:col-span-1 row-span-2 xl:row-span-3">
            <Details details={stockDetail} />
          </div>
        </>
      )}
    </div>
  );
}

export default DashBoard;
