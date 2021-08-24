import type { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Input from '../../components/Input';

const InputPage: NextPage = (props) => {
  return (
    <div className='account'>
      <MainLayout>
        <Input />
      </MainLayout>
    </div>
  );
};

export default InputPage;
