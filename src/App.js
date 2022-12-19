import './App.css';
import { useState,useEffect } from 'react';
import Feed from './feed';

const App = () => {

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  const [coinfeed,setCoinfeed] = useState([]);

  const excludedCoins = ['usdt','busd','usdc','xrp'];

  const Apicall = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCoinfeed(data);
  }

  // const coinInfo = {
  //   "id": "bitcoin",
  //   "symbol": "btc",
  //   "name": "Bitcoin",
  //   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  //   "current_price": 15762.96,
  //   "market_cap": 303225972111,
  //   "market_cap_rank": 1,
  //   "fully_diluted_valuation": 330997566350,
  //   "total_volume": 12287414850,
  //   "high_24h": 15881.52,
  //   "low_24h": 15672.42,
  //   "price_change_24h": -13.840658555893242,
  //   "price_change_percentage_24h": -0.08773,
  //   "market_cap_change_24h": -240263068.18865967,
  //   "market_cap_change_percentage_24h": -0.07917,
  //   "circulating_supply": 19238043,
  //   "total_supply": 21000000,
  //   "max_supply": 21000000,
  //   "ath": 59717,
  //   "ath_change_percentage": -73.57899,
  //   "ath_date": "2021-11-10T14:24:11.849Z",
  //   "atl": 51.3,
  //   "atl_change_percentage": 30656.88327,
  //   "atl_date": "2013-07-05T00:00:00.000Z",
  //   "roi": null,
  //   "last_updated": "2022-12-19T14:04:12.864Z"
  // }

  useEffect(
    () => {Apicall();}
    ,[])

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">My feeds</h1>
        <h3 className="site-description">Some useful price feeds</h3>
      </header>

      {/* <hr className="separator"></hr> */}

      {/* <div className="App">
        <Feed coin = {coinInfo}/>
      </div> */}

      <div className="content">
        {coinfeed.map((coinInfo)=>{if (excludedCoins.includes(coinInfo.symbol) == false) {return <Feed coin = {coinInfo}/>};})}
      </div>
    </>
  );
}

export default App;
