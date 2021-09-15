import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import DisplayPage from './DisplayPage.js';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={DisplayPage} />
        </BrowserRouter>
    </div>
  );
}

export default App;