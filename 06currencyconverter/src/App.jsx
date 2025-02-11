import { useState } from "react";
import "./App.css";
import useCurrency from "./hooks/useCurrency";
import InputBox from "./component/inputBox"; 

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/009/731/417/original/growing-chart-against-the-background-of-the-usa-america-flag-candlestick-graph-stock-market-exchange-and-graph-chart-business-finance-money-investment-on-display-board-design-vector.jpg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 p-5 bg-white/30 backdrop-blur-sm rounded-lg shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white text-sm px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg"
              type="submit"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
