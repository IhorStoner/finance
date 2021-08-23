import React, { useEffect, useState } from 'react';
import styles from '../../styles/Calculator.module.scss';

const Calculator: React.FC = () => {
  const [contribution, setContrubution] = useState('');
  const onChangeContribution = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContrubution(e.target.value);
  };

  useEffect(() => {
    console.log(contribution);
  }, [contribution]);

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
        <div>Курс</div>
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
