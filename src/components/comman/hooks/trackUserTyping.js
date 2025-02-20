import { useDebugValue, useEffect, useState, useTransition } from "react";

export const trackUerTyping=(inputValue)=>{
   const [isTyping, setIsTyping] = useState(false);
   useEffect(()=>{
      setIsTyping(true);
      setTimeout(()=>{
         setIsTyping(false);
      }, 2000)
   }, [inputValue])

   useDebugValue(isTyping?"Typing":"Not Typing")
   return isTyping;
}

export const userId=()=>{
   const [id, setId] = useState(0);
   useEffect(()=>{
      if(!id){
         if(localStorage.getItem("userId")){
            setId(localStorage.getItem("userId"))
         }else{
            let userId = Math.floor(Math.random() * 1000000)
            localStorage.setItem("userId", userId);
            setId(userId)
         }
      }
   }, [id])
   return {userUniqueId:id}
}