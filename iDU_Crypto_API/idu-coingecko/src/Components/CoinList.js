import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { PreviewContext } from "./PreviewContext";
import Coin from "./Coin";

const coingeckoAxiosURL = axios.create({
    baseURL: "https://api.coingecko.com/api/v3", 
});

function CoinList() {
  
  // States
  const [coin, setCoin] = useState([]);
  // const { Preview } = useContext(PreviewContext); // response.data.id
  const [isLoading, setIsLoading] = useState(false);
  // remove log later
  // console.log(Preview)


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      // Use Axios to retrieve top 100 (Descending) crypto by market cap
      const response = await coingeckoAxiosURL.get("/coins/markets", {
          params: {
              vs_currency: "aud",
              // ids: Preview.join(','),
              order: "market_cap_desc",
              per_page: "100"
          }
      })
      console.log(response.status)
      console.log(response.data)
      setCoin(response.data)
      setIsLoading(false)

      // Basic Fetch function to retrieve top 100 crypto by market cap
      // fetch("https://api.coingecko.com/api/v3/coins/markets?" +
      //         "vs_currency=aud&order=market_cap_desc&per_page=100", 
      //         {method: "GET"})
      //   .then(res => res.json())
      //   .then(data => console.log(data))
    }

    fetchData()
  }, [])

  // generates list of coins from aquired API response 
  function createList() {
    // Check if response is still loading
    if(isLoading) {
      return <div>Loading...</div>
    }

    return (
      <ul className="coinlist">
        <hr/>
        {coin.map(coin => {
          return <Coin key={ coin.id } coin={ coin} />
        })}
        
      </ul>
    )
  }

  return <div>{createList()}</div>
}

export default CoinList;