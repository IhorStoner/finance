import React from 'react';
import { Button, Header, Icon, Input, Message, Segment } from 'semantic-ui-react';
import { Divider, Form, Label } from 'semantic-ui-react';
import {useSelector} from "react-redux";
import {selectAccount} from "../../store/selector/accountSelector";

const Output: React.FC = () => {
  const account = useSelector(selectAccount)

  return (
    <div style={{ width: '50%' }}>
      <Header as='h3' block>
        Вывод Средств
      </Header>
      <div>Средства на счету: {account.balance} BTC</div>
      <Form>
        <Header as='h3'>Адресс:</Header>
        <Form.Field>
          <Label pointing='below'>Введите адресс</Label>
          <input type='text' placeholder='Адресс' />
        </Form.Field>
        <Divider />
      </Form>
      <Segment raised>Вы получите: {account.balance - account.balance * 0.025} BTC ({account.balance} BTC - 2.5% коммисия)</Segment>
      <Button color='red' style={{ marginTop: '10px', marginBottom: '10px' }}>
        Вывод
      </Button>
      <Message warning attached='bottom'>
        <Icon name='warning' />
        <div>*Средства выводятся в течении от 1 часа до 2 дней в зависимости от загруженности системы.</div>
        <div>*Коммисия: 2.5% (данная комиссия идет на биржевой обмен по текущему курсу, перевод на ваш кошелек и обслуживание)</div>
      </Message>
      <Button color='orange' style={{ marginTop: '10px' }}>
        Поддержка
      </Button>
    </div>
  );
};

export default Output;
