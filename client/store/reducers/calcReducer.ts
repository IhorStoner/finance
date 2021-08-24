import { AnyAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { CalcState } from '../../types/calctypes';
import { calcSave } from '../action/calcAction';



export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        calc: 0,
    } as CalcState,
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action: AnyAction) => {
            return {
                ...state,
                ...action.payload.player,
            };
        },
        [calcSave.type]: (state,action) => {
            state.calc = action.payload
        },

    },
});