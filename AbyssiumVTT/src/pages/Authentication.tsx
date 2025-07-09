import React, { useState } from "react";
import '../css/Authentication.css';

const Authentication: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginData, setLoginData] = useState({ usernameOrEmail: "", password: "" });
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleSignInClick = () => {
        setIsSignUp(false);
        setError("");
    };

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setError("");
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!loginData.usernameOrEmail || !loginData.password) {
            setError("Please provide a username or email and password.");
            return;
        }
        setError("");
        // Handle login logic here
        alert("Logged in!");
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (signupData.password !== signupData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
        // Handle signup logic here
        alert("Signed up!");
    };

    return (
        <div className="auth-container">
            {/* Login Form */}
            <div className={`form-container sign-in-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                <form className="auth-form" onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name="usernameOrEmail"
                        placeholder="Username or Email"
                        value={loginData.usernameOrEmail}
                        onChange={handleLoginChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                    />
                    <a href="#">
                        Forgot your password?
                    </a>
                    {!isSignUp && error && <div className="error-message">{error}</div>}
                    <button className="auth-button" type="submit">
                        Login
                    </button>
                </form>
            </div>

            {/* Sign Up Form */}
            <div className={`form-container sign-up-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                <form className="auth-form" onSubmit={handleSignupSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={signupData.name}
                        onChange={handleSignupChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={signupData.email}
                        onChange={handleSignupChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={signupData.password}
                        onChange={handleSignupChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={signupData.confirmPassword}
                        onChange={handleSignupChange}
                    />
                    {isSignUp && error && <div className="error-message">{error}</div>}
                    <button className="auth-button" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Overlay Container */}
            <div className={`overlay-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                <div className={`overlay ${isSignUp ? 'sign-up-mode' : ''}`}>
                    {/* Left Overlay Panel */}
                    <div className={`overlay-panel overlay-left ${isSignUp ? 'sign-up-mode' : ''}`}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost-button" onClick={handleSignInClick}>
                            Login
                        </button>
                    </div>
                    {/* Right Overlay Panel */}
                    <div className={`overlay-panel overlay-right ${isSignUp ? 'sign-up-mode' : ''}`}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost-button" onClick={handleSignUpClick}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;