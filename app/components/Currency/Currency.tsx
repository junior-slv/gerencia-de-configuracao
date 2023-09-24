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
      className="h-screen bg-[#252525] text-white flex items-center justify-center"
    >
      <div className="p-5 shadow-lg rounded-lg flex flex-col">
        <div className="">
          <p className="text-lg">Currency converter</p >
          <i className='bx bx-dollar'></i>    
        </div>

        <div className="main-screen-bottom flex flex-col">
          <div className="main-screen-bottom-left p-2">
            <select
              className="text-black bg-white m-2"
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
          <div className="main-screen-bottom-right p-2">
            <select
              className="text-black bg-white m-2"
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
        <span className={loading ? "block" : "hidden"}>Loading...</span>
      </div>
    </div>
  );
};

export default Currency;
