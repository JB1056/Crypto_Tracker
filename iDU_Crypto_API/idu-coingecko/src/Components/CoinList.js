import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import SelectDropdown from "./NavigationTools";

const coingeckoAxiosURL = axios.create({
  baseURL: "https://api.coingecko.com/api/v3"
});

function fetchData() {
  console.log("API WAS PULLED")
  // Use Axios to retrieve top 100 (Descending) crypto by market cap
  return coingeckoAxiosURL.get("/coins/markets", {
    params: {
      vs_currency: "aud",
      order: "market_cap_desc",
      per_page: "100"
    }
  });
}

const orderCoins = (list, key, direction) => {
  const isAsc = direction === "asc";

  return list.slice().sort((a, b) => {
    // Compare values and determine ordering
    // lowercase string for fair comparison
    if (key === "name") {
      if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) {
        return isAsc ? -1 : 1;
      }
      if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) {
        return isAsc ? 1 : -1;
      }
    } else {
      if (a[key] < b[key]) {
        return isAsc ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return isAsc ? 1 : -1;
      }
    }
    return 0;
  });
};

function useFetchCoins() {
  // States
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function sortCoins(key, direction) {
    setCoins((val) => orderCoins(val, key, direction));
  }

  useEffect(() => {
    async function load() {
      try {
        setError(null);
        setIsLoading(true);
        const response = await fetchData();
        setCoins(response.data);
      } catch (e) {
        setError("Failed to fetch.");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);
  return [coins, sortCoins, isLoading, error];
}

// generates list of coins from aquired API response
const CoinList = () => {
  const [coins, sortCoins, isLoading, error] = useFetchCoins();

  function onChange(options, value) {
    const { key, direction } = options.find((o) => o.value === value);
    sortCoins(key, direction);
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="input-bar">
        <SelectDropdown onChangeCallback={onChange} />
        <div className="bob">testo</div>
      </div>
      <ul className="coinlist">

        <hr />
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    </div>
  );
};

export default CoinList;
