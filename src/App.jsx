import Header from "./components/Header.jsx";
import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";

function AppContent() {
    const location = useLocation();
    const HideHeader = ["/Login"];
    const shouldShowHeader = !HideHeader.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && (
                <div className="wrapper">
                    <Header/>
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

