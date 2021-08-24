import React, { useEffect, useState } from 'react';
import styles from '../../styles/Calculator.module.scss';
import Timer from "../Timer";
import alphavantage from 'alphavantage';

const Calculator: React.FC = () => {
  const [cource, setCource] = useState({val: 0})
  const [profit, setProfit] = useState(0);
  const [data, setData] = useState({
    balanc: 20,
    contribution: 0,
    storeVal: 0,
    percentBTC: 0,
    marketVal: 0,
  });

  const receiveProcent = (cource: number, contribution: number):number => {
    return (contribution * (100 / cource)) / 100
  }

  const btcInUSD = (cource: number, val: number): number => {
    return cource * val
  }

  const onChangeContribution = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "contribution"){

      const totalPrice =  btcInUSD(cource.val, Number(e.target.value))
      const procent = receiveProcent(cource.val, totalPrice)
      const newVal = Number(data.balanc + data.contribution - Number(e.target.value))

      if(newVal < 0) return null

      setData({...data,
        balanc: newVal,
        percentBTC: procent ? procent : 0,
        contribution: Number(e.target.value),
        storeVal: Number(e.target.value) > 0 ? Number((procent * cource.val).toFixed(2)) : 0,
        marketVal: Number(e.target.value) > 0 ? cource.val : 0,
      })
    }
  };

  useEffect(() => {
    setProfit(Number((+data.storeVal / +cource.val).toFixed(8)));
  },[cource])

  useEffect(() => {
    fetch("https://bitpay.com/api/rates").then(cur => cur.json()).then(cource => setCource({...cource, val: cource[2].rate}))
  },[])

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <div className={styles.calculator__currency}>Курс: {cource.val > 0 && <Timer cource={cource.val} newState={(cource:number):any => setCource({...data, val: cource})} />}</div>
      <div className={styles.calculator__row}>
        <label htmlFor='balanc'>Баланс счета:</label>
        <input onChange={onChangeContribution} disabled={true} name={'balanc'} type='number' value={data.balanc} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>Сумма вклада:</label>
        <input onChange={onChangeContribution} name={'contribution'} type='number' value={data.contribution} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='storeVal'>Сумма резервации:</label>
        <input disabled={true} onChange={onChangeContribution}  name="storeVal" type='number' value={data.storeVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>Курс хранения:</label>
        <input disabled={true} onChange={onChangeContribution}  name='marketVal'  type='number' value={data.marketVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>Доход:</label>{console.log(profit)}
        <input disabled={true} name='marketPrice' value={ data.storeVal > 0 ?  (profit >= data.contribution) ? profit : data.contribution : 0 }  type='number'  />
      </div>
    </div>
  );
};

export default Calculator;
