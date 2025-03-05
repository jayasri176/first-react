import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
export const combinedReducer = combinedReducer({
   count:countReducer
})
export const configReducer = configureStore({
   reducer:{
      count:countReducer
   },
   middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware({
         serializableCheck:false
      })
})