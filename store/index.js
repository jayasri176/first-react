import { configReducer } from "./reducer/reducerConfig"
export const makeStore = ()=>{
   configReducer
}
const store = makeStore()
export default store;