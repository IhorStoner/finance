import { AnyAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AccountState } from '../../types/calctypes';
import { setBalance } from '../action/accountAction';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 0.5,
  } as AccountState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.player,
      };
    },
    [setBalance.type]: (state, action) => {
      state.balance = state.balance + action.payload;
    },
  },
});
