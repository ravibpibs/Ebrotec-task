import React, { useState } from 'react';
import "../assets/css/login.css";

const Login = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        const userData = { email, password };

        localStorage.setItem('entra_user', JSON.stringify(userData));


        setError('');
        alert('Login successful! Data saved.');
        onLoginSuccess();
    };

    return (
        <div className='login'>
            <div className='wrapper'>
                <div className='left'>
                    <h1>Start your journey with us.</h1>
                    <p>It brings together your tasks, <br />projects, timelines, files and more.</p>
                </div>

                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h2>Welcome,</h2>
                        <p>Login to continue to ENTRA.</p>

                        {error && <p className="error">{error}</p>}

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <a href="#" className="forgot-password">Forgot Your Password?</a>
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                <span>Remember Me</span>
                            </div>
                        </div>

                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
