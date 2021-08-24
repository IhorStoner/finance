import type { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Output from '../../components/Output';

const OutputPage: NextPage = (props) => {
  return (
    <div>
      <MainLayout>
        <Output />
      </MainLayout>
    </div>
  );
};

export default OutputPage;
