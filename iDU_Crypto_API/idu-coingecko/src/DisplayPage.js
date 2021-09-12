import React from "react";
import CoinList from "./Components/CoinList";
import SortBy from "./Components/SortBy";

function DisplayPage() {
    return (
        <div className="displayPage">
            <SortBy/>
            <CoinList/>
        </div>
    )
}

export default DisplayPage;