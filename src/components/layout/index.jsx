import React from "react"
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../../pages/home";
import AboutUs from "../../pages/aboutUs";
import ContactUs from "../../pages/contactUs";
import Protofolio from "../../pages/protfolio";
import SubProtfolio from "../../pages/protfolio/subProtfolio";
const Layout = () => { //arrow function components this following ES6 standard
    return (
        <Router>
            <TopBar />
            <SideBar />
            <main className="container-fluid p-4">
             <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about-us" element={<AboutUs/>} />
                  <Route path="/protfolio" element={<Protofolio/>} />
                  <Route path="/protfolio/:id" element={<SubProtfolio/>} />
                  <Route path="/contact-us" element={<ContactUs/>} />
             </Routes>
            </main>
        </Router>
    )
}
export default Layout