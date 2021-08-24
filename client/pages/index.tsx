import type { NextPage } from 'next';
import { wrapper } from '../store/index';
import Calculator from '../components/Calculator';
import { calcSave } from '../store/action/calcAction';

const Home: NextPage = (props) => {

  return (
    <div className='homePage'>
      <Calculator />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store: any) => async (pathname: any) => {
  const allTrack = await store.dispatch(calcSave(5));
  return { props: { test: allTrack.payload } };
});

export default Home;
