import React, { useEffect, useState } from 'react';
import styles from '../../styles/Calculator.module.scss';
import alphavantage from 'alphavantage';

const Calculator: React.FC = () => {
  const [contribution, setContrubution] = useState('');
  const [val, setVal] = useState('');
  const onChangeContribution = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContrubution(e.target.value);
  };

  useEffect(() => {
    const alpha = alphavantage({ key: 'LWBLO3CDJ3BELOF6' });
    alpha.crypto.daily('btc', 'usd').then((data) => {
      const objData = data[`Time Series (Digital Currency Daily)`];
      const lastItem = Object.keys(objData)[0];

      setVal(objData[lastItem][`1a. open (USD)`]);
    });
  }, [contribution]);

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <div>Курс: ${val}</div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>Вклад:</label>
        <input onChange={onChangeContribution} name={'contribution'} type='text' placeholder={'btc'} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>Текущий баланс:</label>
        <input name={'contribution'} disabled={true} type='text' placeholder={''} />
      </div>
      <div className={styles.calculator__row}>
        <label htmlFor='contribution'>Цена фиксации:</label>
        <input name={'contribution'} disabled={true} type='text' placeholder={''} />
      </div>
    </div>
  );
};

export default Calculator;
