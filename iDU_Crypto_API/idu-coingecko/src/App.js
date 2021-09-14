import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import DisplayPage from './DisplayPage.js';
import Header from './Components/Header';
import { CoinContextProvider } from "./Components/CoinContextProvider.js";
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Wrap app within context */}
      <CoinContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={DisplayPage} />
        </BrowserRouter>
      </CoinContextProvider>
    </div>
  );
}

export default App;