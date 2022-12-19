import React from "react";
import './App.css';

const Feed = ({coin}) => {

    const price = parseFloat(coin.current_price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " EUR";
    const price_change = parseFloat(coin.price_change_percentage_24h);
    const color_price_change = price_change>0 ? 'green' : 'red';
    const price_change_string = price_change>0 ? 
        "+" + price_change.toFixed(1).toString() + ' %' :
        price_change.toFixed(1).toString() + ' %';

    return(    
        <>  
            <hr className="separatorp"></hr>
            <br />
            <img style={{"vertical-align": "middle"}} src={coin.image} width="5%"/>
            <label className="coinName">
                <b>{` ${coin.name} (${coin.symbol.toUpperCase()})`}</b>
            </label>
            <br />
            <font size="+1">{price}</font><b><label style={{color: color_price_change}}>{price_change_string}</label></b>
            <br /><br />
        </>
    )
}

export default Feed;