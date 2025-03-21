import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"




export const appStore = configureStore({
    reducer:{
       user:userReducer
    },

})

// Infer the type of makeStore
export type AppStore = typeof appStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']