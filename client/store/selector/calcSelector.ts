import { createSelector } from "@reduxjs/toolkit";

interface  stateProps{
    calc: {
        calc: number
    }
}

export const selectCalc = createSelector(
    (state: stateProps) => state,
    (state) => state.calc
)
