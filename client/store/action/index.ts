import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionPlays from './calcAction';

export const useCalcAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionPlays,dispatch)
}