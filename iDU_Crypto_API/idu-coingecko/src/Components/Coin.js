import React from "react";

function Coin({ coin }) {
    return (
        /* create list item containing coin info */
        <li className="coinlist-item">
            <div className="coinHover">
                <img className="coinlist-image" src={coin.image} alt={coin.id} />
                <span>{coin.id}</span>
            </div>
            <span>{coin.name}</span>
            <span>${coin.current_price}</span>
            <div className="coinHover">
                <p className="marketCap">{coin.market_cap_rank}</p>
                <span className="marketPosition">Market Cap: {coin.market_cap}</span>
            </div>
        </li>
    );
};

export default Coin;