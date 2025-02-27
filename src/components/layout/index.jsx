import React, { lazy, Suspense, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const Home = lazy(() => import("../../pages/home"))
const AboutUs = lazy(() => import("../../pages/aboutUs"))
const ContactUs = lazy(() => import("../../pages/contactUs"))
const Protofolio = lazy(() => import("../../pages/protfolio"))
const SubProtfolio = lazy(() => import("../../pages/protfolio/subProtfolio"))
const SideBar = lazy(() => import("./components/sideBar"))
const TopBar = lazy(() => import("./components/tobBar"))
const Layout = () => { //arrow function components this following ES6 standard
    const [isHandleSideBar, setIsHandleSideBar] = useState(true);

    const handleConditionalRouting = (pathname) => {
        let removedSideBarCheck = ['/about-us', '/protfolio', '/contact-us']?.filter((n) => pathname?.includes(n));
        if (removedSideBarCheck?.length) {
            setIsHandleSideBar(false)
        } else {
            setIsHandleSideBar(true)
        }
    }
    return (
        <Router>
            <TopBar handleConditionalRouting={handleConditionalRouting} />
            <main className={`container-fluid ${isHandleSideBar ? `p-0 main_layout` : `p-4`}`}>
                {
                    isHandleSideBar ?
                        <SideBar />
                        : null
                }
                <section className={`${isHandleSideBar ? `full-main-section` : `container-fluid p-0`}`}>
                    <Suspense>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/protfolio" element={<Protofolio />} />
                            <Route path="/protfolio/:id" element={<SubProtfolio />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                        </Routes>
                    </Suspense>
                </section>
            </main>
        </Router>
    )
}
export default Layout