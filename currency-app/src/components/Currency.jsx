import React, { useState } from "react";
import "../css/Currency.css";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Sme3T2mn9VABb0LLi1BajDCba9zCDPE5agOFmkqi";

function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div className="header">
        <h3>CURRENCY APPLICATION</h3>
      </div>

      <div className="items">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowRight className="arrow" />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>

      <div>
        <button onClick={exchange} className="button">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
