import React, { useState, useContext } from "react";
import Select from 'react-select';
import { CoinContext } from "./CoinContextProvider";

const options = [
  { label: 'Coin Name (A-Z)', value: 0, key: 'name', direction: 'asc' },
  { label: 'Market Position (Low-High)', value: 1, key: 'market_cap_rank', direction: 'asc' },
  { label: 'Price (Low-High)', value: 2, key: 'current_price', direction: 'asc' },
  { label: 'Coin Name (Z-A)', value: 3, key: 'name', direction: 'desc' },
  { label: 'Market Position (High-Low)', value: 4, key: 'market_cap_rank', direction: 'desc' },
  { label: 'Price (High-Low)', value: 5, key: 'current_price', direction: 'desc' }
]; // array containing dropdown menu options and key information

// temp coin array
const coin = [
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', market_cap_rank: 1, current_price: 62369 },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum', market_cap_rank: 2, current_price: 4518.94 },
  { id: 'cardano', symbol: 'ada', name: 'Cardano', market_cap_rank: 3, current_price: 3.29 },
  { id: 'tether', symbol: 'usdt', name: 'Tether', market_cap_rank: 4, current_price: 1.36 },
  { id: 'binancecoin', symbol: 'bnb', name: 'Binance Coin', market_cap_rank: 5, current_price: 550.14 },
  { id: 'ripple', symbol: 'xrp', name: 'XRP', market_cap_rank: 6, current_price: 1.47 },
  { id: 'solana', symbol: 'sol', name: 'Solana', market_cap_rank: 7, current_price: 226.76 },
  { id: 'polkadot', symbol: 'dot', name: 'Polkadot', market_cap_rank: 8, current_price: 49.77 },
  { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', market_cap_rank: 9, current_price: 0.323567 },
  { id: 'usd-coin', symbol: 'usdc', name: 'USD Coin', market_cap_rank: 10, current_price: 1.37 },
  { id: 'terra-luna', symbol: 'luna', name: 'Terra', market_cap_rank: 11, current_price: 50.42 }
];

export const handleChange = e => {
  let eValue = e.value
  console.log("ValueChanged")
  console.log(coin.sort(sortCoin(e.value)))
  console.log("e-value direct from handleChange: " + e.value)
  console.log("e-value passed by eValue: " + eValue)
  return eValue
}

function SelectDropdown() {

  return (
    <div className="dropdown">
      <Select
        options={options}
        defaultValue={options[4]}
        onChange={handleChange}
      />
    </div>
  )
}

export const sortCoin = value => (a, b) => {
  // console.log("e-value from SortCoin: " + handleChange())
  // store information for key and direction from options
  const { key, direction } = options.find(o => o.value === value);
  const isAsc = direction === 'asc';

  // Compare values and determine ordering
  // lowercase string for fair comparison
  if (a[key] === "name") {

    if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) {
      return isAsc ? -1 : 1;
    } if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) {
      return isAsc ? 1 : -1;
    }

  } else {

    if (a[key] < b[key]) {
      return isAsc ? -1 : 1;
    } if (a[key] > b[key]) {
      return isAsc ? 1 : -1;
    }

  } return 0;
}

function SortBy() {
  return (SelectDropdown())
}

export default SortBy;