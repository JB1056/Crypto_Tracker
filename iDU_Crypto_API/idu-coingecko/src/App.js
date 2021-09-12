import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import DisplayPage from './DisplayPage.js';
import Header from './Components/Header';
import './App.css';
// import { PreviewContextProvider } from "./Components/PreviewContext";

function App() {


  return (
    <div className="container">
      {/* Wrap app within context */}
      {/* <PreviewContextProvider> */}
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={DisplayPage} />
        </BrowserRouter>
      {/* </PreviewContextProvider> */}
    </div>
  );
}

export default App;