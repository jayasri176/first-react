const { createSlice } = require("@reduxjs/toolkit");
const initCount = {
   count:0
}
const countSlice = createSlice({
   name:'count',
   initialState:initCount,
   reducers:{
      changeCount:(state, actions)=>{
         console.log("====>", state, actions)
      },
      resetCount:()=>{
         return {...initCount}
      }
   }
})


export const {changeCount, resetCount} = countSlice.actions;

export default countSlice.reducer
