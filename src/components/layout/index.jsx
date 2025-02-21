import React from "react"
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"
import { Outlet } from "react-router-dom"

const Layout = ({children}) => { //arrow function components this following ES6 standard
    return (
        <>
            <TopBar />
            <SideBar />
            <main className="container-fluid p-4">
                <Outlet/>
            </main>
            {children}
        </>
    )
}
export default Layout