import React, { Component } from 'react';
import "./Styles/LoginStyle.css";
import Authentification from "./components/Authentification.jsx";
import Description from "./components/Description.jsx";

class Login extends Component {
    handleLogin = (userData) => {
        fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    window.location.replace("/");
                } else {
                    throw new Error("Неверные учетные данные");
                }
            })
            .catch(error => console.error("Ошибка входа:", error));
    };

    handleRegister = (userData) => {
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
                } else {
                    throw new Error("Ошибка регистрации");
                }
            })
            .catch(error => console.error("Ошибка регистрации:", error));
    };

    render() {
        return (
            <div className={"Login"}>
                <Authentification
                    onLogin={this.handleLogin}
                    onRegister={this.handleRegister}
                />
                <Description />
            </div>
        );
    }
}

export default Login;