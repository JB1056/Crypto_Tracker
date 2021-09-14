import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const coingeckoAxiosURL = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const CoinContext = createContext();

export const CoinContextProvider = (props) => {
  // States  
  const [contextCoin, setContextCoin] = useState([]);
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
          setContextCoin(response.data)
          setIsLoading(false)
        }
        fetchData()
      }, [])
      

    return (
        <CoinContext.Provider value = {{ contextCoin, isLoading }}>
            {props.children}
        </CoinContext.Provider>
    );
};
