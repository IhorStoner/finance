import React, {useState} from 'react';
import {Button, Header, Icon, Image, Input, Message, Segment} from 'semantic-ui-react';
import styles from '../../styles/InputOutputComponent.module.scss';
import { Divider, Form, Label } from 'semantic-ui-react';
import code from '../../assets/img/code.jpg'
import {useAccountAction} from "../../store/action";

const InputComponent: React.FC = () => {
  const [val, setVal] = useState('')
  const { setBalance } = useAccountAction()

  const onChangeValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setVal(value)
  };

  const handleInputMoney = () => {
    setBalance(+val)
  }

  return (
    <div className={styles.inputOutput}>
      <div className={styles.inputOutput__container}>
        <div style={{ width: '50%' }}>
          <Header as='h3' block>
            Открыть счет
          </Header>
          <div style={{ marginBottom: '15px' }}>Номер счёта: 7754</div>
          <Form>
            <Header as='h3'>Адресс:</Header>
            <Segment raised>bc1qafnq6t4ws23j4rtvraepc6f2r8wlrpe3fgyxfw</Segment>
            <Form.Field>
              <Label pointing='below'>Штрих код</Label>
              <Image src={code.src} size='small' />
            </Form.Field>
            <Divider />
            <Form.Field>
              <Label pointing='below'>Сумма вклада</Label>
              <Input type='number' value={val} onChange={onChangeValue} placeholder='Сумма' labelPosition='right' label='BTC' style={{ width: '300px', display: 'block' }} />
            </Form.Field>
            <Divider />
          </Form>
          <h1>Переведите средства и нажмите готово</h1>
          <Button color='green' style={{ marginBottom: '10px' }} onClick={handleInputMoney}>
            Готово
          </Button>
          <Message warning attached='bottom'>
            <Icon name='warning' />
            Внимание! Обязательно укажите при переводе BTC номер вашего счета 7754 в описании, либо отправьте скриншот перевода.
            <div>
              *Средства поступают в течении от 1 часа до 2 дней в зависимости от загруженности системы, курс хранение будет определен на момент поступления
              средств.
            </div>
            <div>*Коммисия: 2.5% (данная комиссия идет на биржевой обмен по текущему курсу, фиксирование цены на счету и обслуживание)</div>
          </Message>
          <Button color='orange' style={{ marginTop: '10px' }}>
            Поддержка
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
