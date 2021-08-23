import type { NextPage } from 'next';
import Calculator from '../components/Calculator';

const Home: NextPage = () => {
  return (
    <div className='homePage'>
      <Calculator />
    </div>
  );
};

export default Home;
