import React, {useEffect, useState} from "react";

interface ITimer {
  callback: () => number;
}

const Timer: React.FC<ITimer> = (callback) => {
  const [currency, setCurrency] = useState(0)

  // callback(currency)
  useEffect(() => {
    setInterval(async () => {
      const currencyObj = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR').then(cur => cur.json())
      setCurrency(currencyObj.USD)
    },1000)
  },[])

  return <div>{currency}</div>
}

export default Timer;