import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { calcSlice } from './reducers/calcReducer';
import { accountSlice } from './reducers/accountReducer';

export const makeStore = () =>
  configureStore({
    reducer: {
      [calcSlice.name]: calcSlice.reducer,
      [accountSlice.name]: accountSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
