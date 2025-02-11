import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Import styling

const AdminLogin = () => {
    const navigate = useNavigate();

    // Fixed Admin Credentials
    const ADMIN_EMAIL = "admin@example.com";
    const ADMIN_PASSWORD = "admin123";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            navigate("/ad"); // Redirect to add offer page
        } else {
            setError("❌ Incorrect email or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
