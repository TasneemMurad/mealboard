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

    return (<div className="page-style">
        {submitted ? (
            <div className="success-view">
                <h1>Welcome back!</h1>
                <p>You have successfully logged in as <strong>{email}</strong>.</p>
                <Link to="/" className="button-style">Explore Recipes</Link>
            </div>
        ) : (<div>
            <h1>Login</h1>
            <p>Welcome back! Login to manage your meals.</p>
            <form onSubmit={handleSubmit} className="form-style">
                <div className="row-style">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="row-style">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="button-style">
                    Login
                </button>
            </form>

            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
        )}

    </div>);
}
export default LoginPage;