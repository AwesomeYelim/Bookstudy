
import { combineReducers }  from "@reduxjs/toolkit"; 
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

