import { useEffect, useState, useMemo, useCallback } from "react";
import currencyService from "../../services/currency";
import { CurrencyQuote } from "../../services/currency";
import { AVAILABLE_CURRENCY } from "../../constants/available";

const Currency = () => {
  const [currencyFrom, setCurrencyFrom] = useState("BRL");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyQuote, setCurrencyQuote] = useState<null | CurrencyQuote>(
    null
  );
  const [inputValue, setInputValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const current = parseInt(e.currentTarget.value);
    setInputValue(current);
  }, []);

  useEffect(() => {
    setLoading(true);
    currencyService
      .getLastQuote(currencyFrom, currencyTo)
      .then((data) => {
        setCurrencyQuote(data);
      })

      .catch((err) => {
        console.error("Error" + err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currencyFrom, currencyTo]);

  const convertedValue = useMemo<string>(() => {
    const parsedValue = parseFloat(currencyQuote?.high || "0");
    return (parsedValue * inputValue).toFixed(2);
  }, [currencyQuote, inputValue]);

  return (
    <div
      className="h-screen bg-gray-500 text-white flex items-center justify-center"
    >
      <div className="p-5 shadow-lg rounded-lg flex flex-col">
        <div className="">
          <p className="text-lg">Currency converter</p >
          <i className='bx bx-dollar'></i>    
        </div>

        <div className="main-screen-bottom flex flex-col">
          <div className="main-screen-bottom-left">
            <select
              className="text-black bg-white"
              value={currencyFrom}
              onChange={(e) => {
                setCurrencyFrom(e.target.value);
              }}
            >
              {AVAILABLE_CURRENCY.filter(
                (currency) => currencyTo !== currency.key
              ).map((currency) => (
                <option key={currency.key} value={currency.key}>
                  {currency.key} - {currency.label}
                </option>
              ))}
            </select>
            <input
              onChange={handleChange}
              className="text-black"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="">
            <p>
              <i className="bx bx-right-arrow-alt"></i>
            </p>
          </div>
          <div className="main-screen-bottom-right">
            <label htmlFor="cars"></label>
            <select
              className="text-black bg-white"
              value={currencyTo}
              onChange={(e) => {
                setCurrencyTo(e.target.value);
              }}
            >
              {AVAILABLE_CURRENCY.filter(
                (currency) => currencyFrom !== currency.key
              ).map((currency) => (
                <option key={currency.key} value={currency.key}>
                  {currency.key} - {currency.label}
                </option>
              ))}
            </select>
            <input
              type="number"
              readOnly
              className="text-black"
              value={convertedValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
