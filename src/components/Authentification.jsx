import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignUpForm.jsx";

export default function Authentification({ onLogin, onRegister }) {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="authentication-container">
            <div className="login-button-container">
                <button
                    className={`btn login-btn ${activeTab === "login" ? "active-btn" : ""}`}
                    onClick={() => setActiveTab("login")}
                >
                    Вход
                </button>
                <button
                    className={`btn register-btn ${activeTab === "register" ? "active-btn" : ""}`}
                    onClick={() => setActiveTab("register")}
                >
                    Регистрация
                </button>
            </div>

            {activeTab === "login"
                ? <LoginForm onSubmit={onLogin} />
                : <SignupForm onSubmit={onRegister} />
            }
        </div>
    );
}