import React, { Component } from 'react';
import "./Styles/LoginStyle.css";
import Authentification from "./components/Authentification.jsx";
import Description from "./components/Description.jsx";
import {Route} from "react-router-dom";

class Login extends Component {
    handleLogin = (userData) => {
        console.log("Data to be sent to the server:", userData);

        fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.status === 201) {
                    window.location.replace("/");
                    return response.json();
                }
            })

    };



    render() {
        return (
            <div className={"Login"}>
                <Authentification onLogin={this.handleLogin} />
                <Description />
            </div>
        );
    }
}

export default Login;
