import React from "react";
import CoinList from "./Components/CoinList";
import SortBy from "./Components/SortBy";

function DisplayPage() {
    return (
        <div className="displayPage">
            <div className="input-bar">
                <SortBy />
                <div className="bob">testo</div>
            </div>
            <CoinList />
        </div>
    )
}

export default DisplayPage;