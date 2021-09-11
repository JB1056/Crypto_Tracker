import React, { useEffect } from "react";
import axios from "axios";

const coingeckoAxiosURL = axios.create({
    baseURL: "https://api.coingecko.com/api/v3", 
});

function CoinList() {
  //const [coin, setCoin] = useState([])    
  useEffect(() => {
    async function fetchData() {
      // Use Axios to retrieve top 100 (Descending) crypto by market cap
      const response = await coingeckoAxiosURL.get("/coins/markets", {
          params: {
              vs_currency: "aud",
              order: "market_cap_desc",
              per_page: "100"
          }
      })
      console.log(response.status)
      console.log(response.data)

      // Basic Fetch function to retrieve top 100 crypto by market cap
      // fetch("https://api.coingecko.com/api/v3/coins/markets?" +
      //         "vs_currency=aud&order=market_cap_desc&per_page=100", 
      //         {method: "GET"})
      //   .then(res => res.json())
      //   .then(data => console.log(data))
    }

    fetchData()
  }, [])

  return <div> </div>
}

export default CoinList;