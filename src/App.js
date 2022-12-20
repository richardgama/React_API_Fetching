import './App.css';
import { useState,useEffect } from 'react';
import Feed from './feed';
import Currency from './currency';

const App = () => {

  const [coinfeed,setCoinfeed] = useState([]);
  const [currency,setCurrency] = useState('eur');

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`

  const excludedCoins = ['usdt','busd','usdc','xrp'];

  const Apicall = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setCoinfeed(data);
  }

  useEffect(
    () => {Apicall();}
    ,[currency])

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">My feeds</h1>
        <h3 className="site-description">Some useful price feeds</h3>
        <Currency action={setCurrency}/>
      </header>

      <hr className="separator"></hr>

      <div className="navigationBar">
        <label className="navigationButton">CRYPTOS</label>
        <label className="navigationButton">STOCKS</label>
        <label className="navigationButton">WEATHER</label>
      </div>

      <hr className="separator"></hr>

      <div className="content">
        {coinfeed.map((coinInfo)=>{if (excludedCoins.includes(coinInfo.symbol) === false) 
              {return <Feed coin={coinInfo} currency={currency} key={coinInfo.id}/>}})}
      </div>
    </>
  );
}

export default App;
