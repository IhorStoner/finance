import {createWrapper} from 'next-redux-wrapper';
import {makeStore, AppStore} from './rootReducer';

export const wrapper = createWrapper<AppStore>(makeStore);