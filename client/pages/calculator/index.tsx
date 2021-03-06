import type { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Calculator from '../../components/Calculator';

const Account: NextPage = (props) => {
  return (
    <div className='calculator'>
      <MainLayout>
        <Calculator />
      </MainLayout>
    </div>
  );
};

export default Account;
