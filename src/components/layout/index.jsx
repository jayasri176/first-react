import React, { useEffect, useState } from "react"
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"

const Layout = () => { //arrow function components this following ES6 standard
    const [count, setCount] = useState(0);

    useEffect(()=>{
        let previousCount = localStorage.getItem("count");
        if(previousCount){
            setCount(Number(previousCount))
        }
    }, [])
    return (
        <>
            <TopBar  />
            <SideBar />
            <main className="container-fluid p-4">
                <button onClick={()=>{
                    let newCount = (count+1)
                    localStorage.setItem("count", newCount);
                    setCount(newCount)
                }}>Increase Count</button>
                <p style={{color:'red'}}>Count: {count}</p>
            </main>
        </>
    )
}
export default Layout