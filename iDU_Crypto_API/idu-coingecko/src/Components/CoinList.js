import React, { useState, useEffect, useContext } from "react";
import { CoinContext } from "./CoinContextProvider";
import axios from "axios";
import Coin from "./Coin";
import { handleChange, sortCoin } from "./SortBy";

const coingeckoAxiosURL = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

; 

export const coinData = () => {
  const coinSates = FetchCoins()
  return coinSates
}


function FetchCoins() {
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
  return [coin, isLoading]
}

// generates list of coins from aquired API response 
const createList = (isLoading, coin) => {
  // Check if response is still loading
  if (isLoading) {
    return <div>Loading...</div>
  }

  //console.log(coin.sort(sortCoin(e.value)))
  // console.log(coin.sort(sortCoin(handleChange)))
  //sort(sortCoin(handleChange()))

  return (
    <ul className="coinlist"><hr />

      
      {coin.map(coin => {
        return <Coin key={coin.id} coin={coin} />
      })}
    </ul>
  )
}

function CoinList() {
  // const { contextCoin, isLoading } = useContext(CoinContext)
  return <div>{createList(FetchCoins()[1], FetchCoins()[0])}</div>
}

export default CoinList;
