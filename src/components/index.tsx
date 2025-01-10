import React from 'react';

interface StockCardProps {
    stockData: {
        symbol: string;
        price: number;
        change: number;
    };
    onClick: () => void;
}

const StockCard: React.FC<StockCardProps> = ({ stockData, onClick }) => {
    return (
        <div className="stock-card" onClick={onClick}>
            <h2>{stockData.symbol}</h2>
            <p>Price: ${stockData.price.toFixed(2)}</p>
            <p>Change: {stockData.change.toFixed(2)}%</p>
        </div>
    );
};

export default StockCard;