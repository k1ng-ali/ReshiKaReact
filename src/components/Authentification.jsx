import React, { useState } from "react";
export default function Authentification({ onLogin }) {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [BtnActive, setBtnActive] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "nickname") setNickname(value);
        else if (name === "password") setPassword(value);
        else if (name === "repeat-password") setRepeatPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9-]+$/;
        if (!regex.test(nickname) || !regex.test(password)) {
            setIsValid(false);
            setErrorMessage("Никнейм и пароль могут содержать только латинские буквы, цифры и дефис.");
            return;
        }

        if (password !== repeatPassword) {
            setIsValid(false);
            setErrorMessage("Пароли не совпадают.");
            return;
        }

        onLogin({ nickname, password });
        setIsValid(true);
        setErrorMessage("");
    };

    return (
        <div className="authentication-container">
            <div className="login-button-container">
                <button className={`btn login-btn ${BtnActive ? "active-btn" : ""}`} onClick={() => setBtnActive(true)}>Login</button>
                <button className={`btn register-btn ${!BtnActive ? "active-btn" : ""}`} onClick={() => setBtnActive(false)}>Signup</button>
            </div>

            <div className="login-form-container">
                <h1 className="form-title">Welcome back</h1>

                <h3 className="fieldset-title">username</h3>
                <label className="label">
                    <input
                        type="text"
                        name="nickname"
                        placeholder="Nickname"
                        value={nickname}
                        onChange={handleChange}
                        title="Разрешены только латинские буквы, цифры и дефис"
                        className="fieldset user-name"
                        required
                    />
                </label>

                <h3 className="fieldset-title">password</h3>
                <label className="label">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        title="Разрешены только латинские буквы, цифры и дефис"
                        className="fieldset password"
                        required
                    />
                </label>

                <h3 className="fieldset-title" id="repeat-pass-title">
                    repeat password
                </h3>
                <label className="label">
                    <input
                        type="password"
                        name="repeat-password"
                        className="fieldset repeat-password"
                        value={repeatPassword}
                        onChange={handleChange}
                    />
                </label>

                { !isValid && <p className="error-message">{errorMessage}</p> }

                <button className="form-login-button" onClick={handleSubmit}>login</button>
                <button className="form-login-button tg-login-btn">LogIn with telegram</button>
            </div>
        </div>
    );
}
