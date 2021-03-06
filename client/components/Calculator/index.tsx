import React, { useEffect, useState } from 'react';
import styles from '../../styles/Calculator.module.scss';
import Timer from '../Timer';
import { Button, Input } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectAccount } from '../../store/selector/accountSelector';
import { useRouter } from 'next/router';


const Calculator: React.FC = () => {
  const account = useSelector(selectAccount);
  const router = useRouter();

  const [cource, setCource] = useState({ val: 0 });
  const [profit, setProfit] = useState(0);
  const [data, setData] = useState({
    balanc: account.balance,
    contribution: '',
    storeVal: 0,
    percentBTC: 0,
    marketVal: 0,
  });

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
      // @ts-ignore
      const newVal = Number(data.balanc + data.contribution - Number(e.target.value))

      if(newVal < 0) return

      setData({
        ...data,
        balanc: newVal,
        percentBTC: procent ? procent : 0,
        // @ts-ignore
        contribution: Number(e.target.value),
        storeVal: Number(e.target.value) > 0 ? Number((procent * cource.val).toFixed(2)) : 0,
        marketVal: Number(e.target.value) > 0 ? cource.val : 0,
      });
    }
  };

  useEffect(() => {
    setProfit(Number((+data.storeVal / +cource.val).toFixed(8)));
  }, [cource]);

  useEffect(() => {
    fetch('https://bitpay.com/api/rates')
      .then((cur) => cur.json())
      .then((cource) => setCource({ ...cource, val: cource[2].rate }));
  }, []);

  // @ts-ignore
  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__currency}>
        <span>????????: </span>
        <span> {cource.val > 0 && <Timer cource={cource.val} newState={(cource: number): any => setCource({ ...data, val: cource })} />}</span>$
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='balanc'>???????????? ??????????:</label>
        <Input onChange={onChangeContribution} min={0} disabled={true} name={'balanc'} type='number' value={data.balanc} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>?????????? ????????????:</label>
        <Input onChange={onChangeContribution} name={'contribution'} type='number' value={data.contribution} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='storeVal'>?????????? ????????????????????:</label>
        <Input disabled={true} onChange={onChangeContribution} name='storeVal' type='number' value={data.storeVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>???????? ????????????????:</label>
        <Input disabled={true} onChange={onChangeContribution} name='marketVal' type='number' value={data.marketVal} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='marketVal'>??????????:</label>
        {/*@ts-ignore*/}
        <Input disabled={true} name='marketPrice' value={data.storeVal > 0 ? (profit >= data.contribution ? profit : data.contribution) : 0} type='number' />
      </div>
      <div className={styles.calculator__row}>
        <Button color='green' onClick={() => router.push('/input')}>
          ?????????????? ????????
        </Button>
        <Button color='red' onClick={() => router.push('/output')}>
          ?????????????? ????????????????
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
