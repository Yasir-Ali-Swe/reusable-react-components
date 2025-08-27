import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const stocks = [
    { ticker: "AAPL", price: 189.50, priceChange: 2.35, percentChange: 1.26 },
    { ticker: "MSFT", price: 325.20, priceChange: -1.10, percentChange: -0.34 },
    { ticker: "GOOGL", price: 138.75, priceChange: 0.85, percentChange: 0.62 },
    { ticker: "AMZN", price: 134.10, priceChange: -2.45, percentChange: -1.79 },
    { ticker: "TSLA", price: 251.30, priceChange: 5.10, percentChange: 2.07 },
    { ticker: "META", price: 290.85, priceChange: 1.45, percentChange: 0.50 },
    { ticker: "NFLX", price: 422.75, priceChange: -3.60, percentChange: -0.84 },
    { ticker: "NVDA", price: 468.90, priceChange: 6.25, percentChange: 1.35 },
    { ticker: "AMD", price: 108.40, priceChange: -0.95, percentChange: -0.87 },
    { ticker: "INTC", price: 33.25, priceChange: 0.40, percentChange: 1.22 },
    { ticker: "ORCL", price: 119.10, priceChange: 2.05, percentChange: 1.75 },
    { ticker: "IBM", price: 146.70, priceChange: -0.65, percentChange: -0.44 },
    { ticker: "BA", price: 218.55, priceChange: 4.25, percentChange: 1.98 },
    { ticker: "DIS", price: 91.30, priceChange: -1.20, percentChange: -1.30 },
    { ticker: "UBER", price: 46.90, priceChange: 0.95, percentChange: 2.07 },
    { ticker: "LYFT", price: 11.75, priceChange: -0.25, percentChange: -2.08 },
    { ticker: "SHOP", price: 63.40, priceChange: 1.70, percentChange: 2.76 },
    { ticker: "SQ", price: 58.20, priceChange: -0.85, percentChange: -1.44 },
    { ticker: "PYPL", price: 64.55, priceChange: 0.65, percentChange: 1.02 },
    { ticker: "SPOT", price: 154.35, priceChange: -2.15, percentChange: -1.37 },
];
const InfiniteScrollAnimation = () => {
    return (
        <div className='h-screen bg-black flex justify-center items-center overflow-x-hidden'>
            <div className="w-full bg-blue-500 py-2 text-black text-2xl font-semibold border-y-6 border-green-800">
                <ul className="inline-flex justify-center gap-10 animate-scroll hover:[animation-play-state:paused]">
                    {[...stocks, ...stocks].map((stock, index) => {
                        const isIncrease = stock.priceChange > 0
                        return (
                            <li key={index} className="flex items-center gap-3">
                                {isIncrease ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />}
                                <span>{stock.ticker}</span>
                                <span>{stock.price}</span>
                                <span className={`${isIncrease ? 'text-green-500' : 'text-red-500'} font-bold`}>{stock.priceChange}</span>
                                <span className={`${isIncrease ? 'text-green-500' : 'text-red-500'} font-bold`}>{stock.percentChange}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default InfiniteScrollAnimation