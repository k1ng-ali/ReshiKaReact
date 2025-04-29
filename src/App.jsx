import Header from "./components/Header.jsx";
import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Footer from "./components/Footer.jsx";
import MobileFooter from "./components/MobileFooter.jsx";

function AppContent() {
    const location = useLocation();
    const HideHeader = ["/Login"];
    const HideFooter = ["/Profile"];
    const shouldShowHeader = !HideHeader.includes(location.pathname);
    const shouldShowFooter = !HideFooter.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && (
                <div className="wrapper">
                    <Header/>
                    {shouldShowFooter && (
                    <Footer/>
                        )}
                    <MobileFooter />
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </>
    );

}

function App(){
    return (
        <Router>
            <AppContent/>
        </Router>
    )
}

export default App

