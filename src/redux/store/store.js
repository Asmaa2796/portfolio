import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "../reducer/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = configureStore({reducer:AppReducer,composeWithDevTools,applyMiddleware});