import type { NextPage } from 'next';
import MainLayout from '../../components/MainLayout'
import Calculator from "../../components/Calculator";
import {Button} from "semantic-ui-react";
const Account: NextPage = (props) => {

  return (
    <div className='calculator'>
      <MainLayout >
        <Calculator/>

      </MainLayout>
    </div>
  );
};

export default Account;
