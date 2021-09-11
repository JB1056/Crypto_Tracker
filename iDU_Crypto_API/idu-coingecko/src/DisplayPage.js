import React from "react";
import CoinList from "./Components/CoinList";
import SortBy from "./Components/SortBy";

function displayPage() {
    return (
        <div>
            <SortBy/>
            <CoinList/>
        </div>
    )
}

export default displayPage;