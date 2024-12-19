import React, { useContext, useState, useEffect } from 'react';
import { mockHistoricalData } from '../Constants/Mock';
import { convertUnixTimeStameToDate, convertDateToUnixTime, createDate } from '../Helpers/data-helpers.jsx';
import Card from './Card';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartFilter from './ChartFilter';
import Config from '../Constants/Config';
import ThemeContext from '../Context/ThemeContext.jsx'; 
// import { fetchHistoricalData } from '../api/StockApi.jsx';
// import StockContext from '../Context/StockContext.jsx';

function Chart() {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState('1W');

    const { darkMode } = useContext(ThemeContext)
    // const { stockSymbol } = useContext(StockContext);

    // useEffect(() => {
    //     const getDateRange = () => {
    //         const { days, weeks, months, years } = Config[filter];

    //         const endDate = new Date();
    //         const startDate = createDate(endDate, -days, -weeks, -months, -years)

    //         const startTimeStampUnix = convertDateToUnixTime(startDate)
    //         const endTimeStampUnix = convertDateToUnixTime(endDate)

    //         return { startTimeStampUnix, endTimeStampUnix }
    //     }
    //     const updateChartData = async () => {
            
    //         try {
    //             const {startTimeStampUnix , endTimeStampUnix} =  getDateRange();
    //             const resolution = Config[filter].resolution;
    //             const result =  await fetchHistoricalData(stockSymbol , resolution,startTimeStampUnix,endTimeStampUnix);
    //             setData(formatData(result));
    //         } catch (error) {
    //             setData([]);
    //             console.log(error);
                
    //         }
    //     }

    //     updateChartData();

    // }, [stockSymbol, filter])

    const formatData = () => {
        return data.c.map((item, index) => ({
            value: item.toFixed(2),
            date: convertUnixTimeStameToDate(data.t[index]),
        }));
    };

    return (
        <Card>
            <ul className='flex absolute top-2 right-2 z-40 '>
                {Object.keys(Config).map((item) => {
                    return (<li key={item}  >
                        <ChartFilter text={item} active={filter === item} onclick={() => {
                            setFilter(item);
                        }} />
                    </li>
                    )
                })}
            </ul>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={formatData(data)}> 
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={darkMode ? "#312e81" : "rgb(199 210 254"} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={darkMode ? "#312e81" : "rgb(199 210 254"} stopOpacity={0} />
                        </linearGradient>
                        
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fillOpacity={1}
                        strokeWidth={0.5}
                        fill='url(#chartColor)'
                    />
                    <Tooltip contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
                        itemStyle={darkMode ? { color: "#818cf8" } : null}
                    />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin', 'dataMax']} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}

export default Chart;
