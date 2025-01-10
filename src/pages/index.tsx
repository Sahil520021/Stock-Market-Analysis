import React, { useEffect, useState } from 'react';
import StockCard from '../components';
import { fetchStockData } from '../services/api';

const App: React.FC = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const getStockData = async () => {
            try {
                const data = await fetchStockData();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        getStockData();
    }, []);

    return (
        <div>
            <h1>Stock Analysis</h1>
            <div className="stock-list">
                {stocks.map((stock) => (
                    <StockCard key={stock.id} stockData={stock} onClick={() => console.log(stock)} />
                ))}
            </div>
        </div>
    );
};

export default App;