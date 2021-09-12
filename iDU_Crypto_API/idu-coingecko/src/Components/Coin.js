import React from "react";

function Coin({ coin }) {
    return (
            /* create list item containing coin info */
            <li className="coinlist-item">
                <img className="coinlist-image" src={coin.image} alt={coin.name} />
                <span className="coinName">{coin.id}</span>
                <span>${coin.current_price}</span>
                <span>{coin.market_cap}</span>
                <span>{coin.market_cap_rank}</span>
            </li>
    );
};

export default Coin;