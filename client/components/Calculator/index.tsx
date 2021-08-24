import React, { useEffect, useState } from 'react';
import styles from '../../styles/Calculator.module.scss';
import Timer from '../Timer';
import alphavantage from 'alphavantage';
import { Button, Input } from 'semantic-ui-react';
import {useSelector} from "react-redux";
import {selectAccount} from "../../store/selector/accountSelector";
import {router} from "next/client";
import {useRouter} from "next/router";

const Calculator: React.FC = () => {
  const account = useSelector(selectAccount)
  const router = useRouter()
  const [cource, setCource] = useState({ val: 0 });
  const [data, setData] = useState({
    balanc: account.balance,
    contribution: 0,
    storeVal: 0,
    percentBTC: 0,
    marketVal: 0,
  });
  const profit = parseInt((+data.storeVal / +cource.val).toFixed(2));

  const receiveProcent = (cource: number, contribution: number): number => {
    return (contribution * (100 / cource)) / 100;
  };

  const btcInUSD = (cource: number, val: number): number => {
    return cource * val;
  };

  const onChangeContribution = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'contribution') {
      const totalPrice = btcInUSD(cource.val, Number(e.target.value));
      const procent = receiveProcent(cource.val, totalPrice);
      const newVal = parseInt((data.balanc + data.storeVal - totalPrice).toFixed(0));

      if (newVal < 0) return null;

      setData({
        ...data,
        balanc: newVal,
        percentBTC: procent ? procent : 0,
        contribution: Number(e.target.value),
        storeVal: Number(e.target.value) > 0 ? procent * cource.val : 0,
        marketVal: Number(e.target.value) > 0 ? cource.val : 0,
      });
    }
  };

  const onBlurInput = (e: React.SyntheticEvent<EventTarget>) => {
    if (e.target.name === 'balanc') e.target.value = data.balanc;
    if (e.target.name === 'contribution') e.target.value = data.contribution;
    if (e.target.name === 'storeVal') e.target.value = data.storeVal;
    if (e.target.name === 'marketVal') e.target.value = data.marketVal;
  };

  useEffect(() => {
    fetch('https://bitpay.com/api/rates')
      .then((cur) => cur.json())
      .then((cource) => setCource({ ...cource, val: cource[2].rate }));
  }, []);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__currency}>
        <span>Курс: </span>
        <span> {cource.val > 0 && <Timer cource={cource.val} newState={(cource: number): any => setCource({ ...data, val: cource })} />}</span>$
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='balanc'>Баланс счета:</label>
        <Input onChange={onChangeContribution} onBlur={onBlurInput} disabled={true} name={'balanc'} type='text' value={data.balanc} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>Сумма вклада:</label>
        <Input onChange={onChangeContribution} onBlur={onBlurInput} name={'contribution'} type='text' value={data.contribution} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='storeVal'>Сумма резервации:</label>
        <Input disabled={true} onChange={onChangeContribution} onBlur={onBlurInput} name='storeVal' type='text' value={data.storeVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>Курс хранения:</label>
        <Input disabled={true} onChange={onChangeContribution} onBlur={onBlurInput} name='marketVal' type='text' value={data.marketVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>Доход:</label>
        <Input disabled={true} name='marketPrice' value={data.storeVal > 0 ? (profit >= data.contribution ? profit : data.contribution) : 0} type='text' />
      </div>
      <div className={styles.calculator__row}>
        <Button color='green' onClick={() => router.push('/input')}>Открыть счет</Button>
        <Button color='red' onClick={() => router.push('/output')}>Вывести средства</Button>
      </div>
    </div>
  );
};

export default Calculator;
