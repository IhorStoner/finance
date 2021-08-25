import type { NextPage } from 'next';
import { wrapper } from '../store/index';
import { calcSave } from '../store/action/calcAction';
import styles from '../styles/LoginPage.module.scss';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

const Login: NextPage = (props) => {
  const router = useRouter();

  return (
    <div className='loginPage'>
      <div className='wrapper'>
        <h1 className='loginPage__title'>Главная</h1>
        <header className={styles.loginPage__header}>
          <div className='loginPage__logo'>LOGO</div>
          <div className='loginPage__container'>
            <div>
              <Button variant='outlined' primary style={{ marginRight: '5px' }} onClick={() => router.push('/registration')}>
                Открыть Счет
              </Button>
              <Button variant='outlined' primary onClick={() => router.push('/calculator')}>
                Вход
              </Button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store: any) => async (pathname: any) => {
  const allTrack = await store.dispatch(calcSave(5));
  return { props: { test: allTrack.payload } };
});

export default Login;
