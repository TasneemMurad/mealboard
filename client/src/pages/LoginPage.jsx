import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
    <section className="login-page">
            <img
            src="/images/Header.jpg"
            alt="Mealboard recipes"
            className="login-bg-img"
            aria-hidden="true"
            />
            <div className="login-bg-overlay" aria-hidden="true"/>
            <div className="login-frame">
                <div className="login-glass-card">
                <div className="login-brand">
                    <span>CookShelf</span>
                </div>
                <h1>Welcome Back</h1>

                <p className="login-sub">
                  Your favorite recipes are waiting for you.
                </p>
 
                    {submitted ? (
 
                        <div className="login-success">
 
                            <h2>Welcome back!</h2>
 
                            <p>
                                You have successfully logged in as
                                <strong> {email}</strong>.
                            </p>
 
                            <Link
                                to="/"
                                className="login-btn login-btn--link"
                            >
                                Explore Recipes
                            </Link>
 
                        </div>
 
                    ) : (
 
                        <form
                            onSubmit={handleSubmit}
                            className="login-form"
                        >
 
                            <div className="login-field">
 
                                <label htmlFor="login-email">
                                    Email Address
                                </label>
 
                                <input
                                    id="login-email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    autoComplete="email"
                                    required
                                />
 
                            </div>
 
                            <div className="login-field">
 
                                <label htmlFor="login-password">
                                    Password
                                </label>
 
                                <input
                                    id="login-password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    autoComplete="current-password"
                                    required
                                />
 
                            </div>
 
                            <div className="login-options">
 
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
 
                                <Link to="/forgot-password">
                                    Forgot Password?
                                </Link>
 
                            </div>
 
                            <button
                                type="submit"
                                className="login-btn"
                            >
                                Log In
                            </button>
 
                        </form>
 
                    )}
 
                    <p className="login-switch">
                        Don't have an account?
                        {' '}
                        <Link to="/register">
                            Register here
                        </Link>
                    </p>
 
                </div>
 
            </div>
 
        </section>
    );
}
 
export default LoginPage;
 