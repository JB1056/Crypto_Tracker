import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

const coingeckoAxiosURL = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

function CoinList() {
  // States
  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      // Use Axios to retrieve top 100 (Descending) crypto by market cap
      const response = await coingeckoAxiosURL.get("/coins/markets", {
        params: {
          vs_currency: "aud",
          order: "market_cap_desc",
          per_page: "100"
        }
      })

      setCoin(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  // generates list of coins from aquired API response 
  const createList = () => {
    // Check if response is still loading
    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <ul className="coinlist">
        <hr />
        {coin.map(coin => {
          return <Coin key={coin.id} coin={coin} />
        })}
      </ul>
    )
  }

  return <div>{createList()}</div>
}

export default CoinList;