import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import { Menu } from 'semantic-ui-react'
import {selectAccount} from "../../store/selector/accountSelector";
import {useSelector} from "react-redux";

const ResponsiveDrawer:React.FC  = ({children}) => {
  const router = useRouter()

  const [activeItem,setActiveItem] = useState(router.pathname)
  const account = useSelector(selectAccount)

  return (
    <div className='wrapper'>
      <Menu style={{display: 'flex', width: '100%'}}>
        <Menu.Item
          name='/calculator'
          active={activeItem === '/calculator'}
          onClick={() => {setActiveItem('/calculator');router.push('/calculator')}}
        >
          Калькулятор
        </Menu.Item>

        <Menu.Item
          name='/balance'
          active={activeItem === '/balance'}
          onClick={() => setActiveItem('/balance')}
        >
          Общий баланс: {account.balance} BTC
        </Menu.Item>

        <Menu.Item
          name='/activeCheck'
          active={activeItem === '/activeCheck'}
          onClick={() => setActiveItem('/activeCheck')}
        >
          Активных счетов: 1
        </Menu.Item>
        <Menu.Item
          name='/closeCheck'
          active={activeItem === '/closeCheck'}
          onClick={() => setActiveItem('/closeCheck')}
        >
          Закрытые счета: 0
        </Menu.Item>
        <Menu.Item
          name='/input'
          active={activeItem === '/input'}
          onClick={() => {setActiveItem('/input'); router.push('/input')}}
        >
          Ввод
        </Menu.Item>
        <Menu.Item
          name='/output'
          active={activeItem === '/output'}
          onClick={() => {setActiveItem('/output'); router.push('/output')}}
        >
          Вывод
        </Menu.Item>
        <Menu.Item
          position='right'
          name='exit'
          active={activeItem === 'exit'}
          onClick={() => {setActiveItem('exit');router.push('/')}}
        >
          Выход
        </Menu.Item>
      </Menu>
      <div style={{display: 'block', width: '100%'}}>
        {children}
      </div>

    </div>
  );
}

export default ResponsiveDrawer;
