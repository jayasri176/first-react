import React, { useDeferredValue, useImperativeHandle, useRef, useState, useTransition } from 'react';
import { trackUerTyping } from '../comman/hooks/trackUserTyping';
const CustomInput=({ref})=>{
   const [input, setInput] = useState("");
   // const isUserTyping = trackUerTyping(input)
   // const defferHook = useDeferredValue(input, { timeoutMs: 2000 });
   const inputRef = useRef();
   useImperativeHandle(ref, ()=>({
      getValue:()=> input
   }))

   const [isPending, startTransaction] = useTransition();
   
   console.log("UserTyping", isPending?"Typing":"Not Typing")
   return(
      <input ref={inputRef} value={input} type="text" onChange={(e)=>{
         startTransaction(()=>{
            setInput(e.target.value)
         })
      }}/>
   )
}
export default CustomInput;