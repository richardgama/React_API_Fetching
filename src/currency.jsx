import React from "react";
import './App.css';

const Currency = ({action}) => {
    return(
        <> 
            <center>
                <div className="optionBox">
                    <button id="eurButton" onClick={() => {action('eur')}}>EUR</button>
                    <br />
                    <button id="usdButton" onClick={() => {action('usd')}}>USD</button>
                </div>
            </center>
        </>
    )
}

export default Currency;