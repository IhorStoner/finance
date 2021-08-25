import { createSelector } from "@reduxjs/toolkit";

interface  stateProps{
  account: {
    balance: number
  }
}

export const selectAccount = createSelector(
  (state: stateProps) => state,
  (state) => state.account
)
