import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionPlays from './calcAction';
import * as accountAction from './accountAction'

export const useCalcAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionPlays, dispatch);
};

export const useAccountAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(accountAction, dispatch);
};