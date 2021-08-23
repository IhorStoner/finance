import { createAction } from "@reduxjs/toolkit";
import { calcSlice } from "../reducers/calcReducer";
import { AppThunk } from "../rootReducer";
import { useDispatch } from "react-redux";

export const calcSave = createAction<number>("CALCSAVE")