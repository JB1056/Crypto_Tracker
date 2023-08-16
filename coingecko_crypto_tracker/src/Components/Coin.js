import React from "react";

function Coin({ coin }) {
    return (
        /* create list item containing coin info */
        <li className="coinlist-item">

            <div className="coinHover">
                <img className="coinlist-image" src={coin.image} alt={coin.id} />
                <span>{coin.id}</span>
            </div>

            <div className="coinCentre">{coin.name}</div>
            <div className="coinCentre">${coin.current_price}</div>

            <div className="coinHover">
                <p className="marketCap">{coin.market_cap_rank}</p>
                <span className="marketPosition">Market Cap: {coin.market_cap}</span>
            </div>
        </li>
    );
};

export default Coin;