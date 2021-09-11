// import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import DisplayPage from './DisplayPage.js';
import Header from './Components/Header';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component = {DisplayPage}/>
      </BrowserRouter>

    </div>
  );
}

export default App;


// const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       `https://api.coingecko.com/api/v3/ping`,
//       {
//         method: "GET",
//         headers: new Headers({
//           Accept: "aapplication/json"
//         })
//       }
//     )
//       .then(res => res.json())
//       .then(response => {
//         setIsLoading(false);
//       })
//       .catch(error => console.log(error));
//   }, [page]);

// <h1> API calls with React Hooks </h1>
// {isLoading && <p>Wait I'm Loading comments for you</p>}