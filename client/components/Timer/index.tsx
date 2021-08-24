import React, {useEffect, useState} from "react";

interface ITimer {
  cource: number,
  newState(cource:number): number
}

const Timer: React.FC<ITimer> = ({cource, newState}) => {
  const [currency, setCurrency] = useState(cource)

  useEffect(() => {
    setInterval(async () => {
      const currencyObj = await fetch("https://bitpay.com/api/rates").then(cur => cur.json())
      setCurrency(currencyObj[2].rate)
      newState(currencyObj[2].rate)
    },5000)
  },[])

  return <div>{currency}</div>
}

export default Timer;