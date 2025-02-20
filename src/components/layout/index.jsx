import React, { useCallback, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react"
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"
import CustomInput from "./input";
import { userId } from "../comman/hooks/trackUserTyping";

const Layout = () => { //arrow function components this following ES6 standard
    const {userUniqueId} = userId()
    console.log("userUniqueId", userUniqueId)
    const [count, setCount] = useState(0);
    const inputValueRef= useRef(null);
    useEffect(() => {
        let previousCount = localStorage.getItem("count");
        if (previousCount) {
            setCount(Number(previousCount))
        }
    }, [])

    // useLayoutEffect(() => {
    //     if (countRef?.current) {
    //         if (count > 30) {
    //             countRef.current.style.color = "green"
    //         } else {
    //             countRef.current.style.color = "yellow"
    //         }
    //     }
    // }, [count])


    const Percentage = useMemo(() => {
        return (count * 100) / 100
    }, [count])


    const handleClick = useCallback((countNew) => {
        let newCount = (countNew + count)
        localStorage.setItem("count", newCount);
        setCount(newCount)
    }, [count])

 
    const handleFormSubmit=()=>{
        if(inputValueRef.current){
            console.log("Parent Side-->",inputValueRef.current.getValue())
        }
        
    }

    return (
        <>
            <TopBar />
            <SideBar />
            <main className="container-fluid p-4">
                <button onClick={() => {
                    handleClick(1)

                }}>Increase Count</button>
                <p style={{ color: 'red' }}>Count: {count}</p>
                <p style={{ color: 'black', fontWeight: 600 }}>Percentage: {
                    Percentage
                }%</p>
                <button onClick={() => { setCount(0); localStorage.setItem("count", 0) }}>Reset</button>
<br/>
                <CustomInput ref={inputValueRef}/>
                <button onClick={()=>handleFormSubmit()}>Submit</button>
            </main>
        </>
    )
}
export default Layout
