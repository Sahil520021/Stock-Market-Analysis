export const fetchStockData = async (symbol: string): Promise<any> => {
    const response = await fetch(`https://api.example.com/stocks/${symbol}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};