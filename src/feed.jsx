import React from "react";
import './App.css';

const Feed = ({coin,currency}) => {

    const currencySymbol = (currency === 'usd') ? "$" : (currency === 'eur')? "€" : "N/A";
    const priceFloat = parseFloat(coin.current_price); 
    let price = ''; let priceInt = ''; let priceDec = '';
    const price_change = parseFloat(coin.price_change_percentage_24h);
    const color_price_change = price_change>0 ? 'green' : 'red';
    const price_change_string = price_change>0 ? 
        "+" + price_change.toFixed(1).toString() + ' %' :
        price_change.toFixed(1).toString() + ' %';
    const bigPrice = coin.current_price>10;
    const sinceAth = coin.ath_change_percentage.toFixed(0).toString() + "%"

    if(bigPrice){
        let priceIntFloat = Math.floor(priceFloat);
        let priceDecFloat = priceFloat-priceIntFloat;
        
        priceInt = priceIntFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        priceDec = priceDecFloat.toString().slice(0,4);
    }
    else{price = parseFloat(coin.current_price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

    return(    
        <>  
            <div className = "coinBox">
                <img style={{"verticalAlign": "middle"}} src={coin.image} width="5%" alt="coin logo"/>
                <label className="coinName">
                    <b>{` ${coin.name} (${coin.symbol.toUpperCase()})`}</b>
                </label>
                <br />
                <font size="+2">{` ${currencySymbol}`}</font><font size="+2">{bigPrice? `${priceInt}.` : price}</font><font size="3">{priceDec}</font><b><label style={{color: color_price_change}}>{` ${price_change_string}`}</label></b>
                <br />
                {`ATH: ${sinceAth}`}
            </div>
            <hr className="separatorp"></hr>
        </>
    )
}

export default Feed;