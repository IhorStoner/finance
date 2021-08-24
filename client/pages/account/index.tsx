import type { NextPage } from 'next';
import MainLayout from '../../components/MainLayout'
const Account: NextPage = (props) => {

  return (
    <div className='account'>
      <MainLayout >
        <div>Калькулятор</div>
      </MainLayout>
    </div>
  );
};

export default Account;
