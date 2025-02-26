import React, { useEffect, useState } from "react"
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Home from "../../pages/home";
import AboutUs from "../../pages/aboutUs";
import ContactUs from "../../pages/contactUs";
import Protofolio from "../../pages/protfolio";
import SubProtfolio from "../../pages/protfolio/subProtfolio";
const Layout = () => { //arrow function components this following ES6 standard
    const [isHandleSideBar, setIsHandleSideBar] = useState(true);

    const handleConditionalRouting = (pathname)=>{
        let removedSideBarCheck = ['/about-us', '/protfolio', '/contact-us']?.filter((n)=>  pathname?.includes(n));
        if(removedSideBarCheck?.length){
            setIsHandleSideBar(false)
         }else{
            setIsHandleSideBar(true)
         }
    }
    return (
        <Router>
            <TopBar handleConditionalRouting={handleConditionalRouting}/>
            <main className={`container-fluid ${isHandleSideBar?`p-0 main_layout`:`p-4`}`}>
            {
                isHandleSideBar?
                <SideBar/>
                :null
            }
            <section className={`${isHandleSideBar?`full-main-section`:`container-fluid p-0`}`}>
            <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about-us" element={<AboutUs/>} />
                  <Route path="/protfolio" element={<Protofolio/>} />
                  <Route path="/protfolio/:id" element={<SubProtfolio/>} />
                  <Route path="/contact-us" element={<ContactUs/>} />
             </Routes>
            </section>
            </main>
        </Router>
    )
}
export default Layout