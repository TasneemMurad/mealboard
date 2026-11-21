import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="page-style">
            {submitted ? (
                <div className="success-view">
                    <h1>Welcome, {name}!</h1>
                    <p>Your account has been created successfully.</p>
                    <Link to="/" className="button-style">Explore Recipes</Link>
                </div>
            ) : (
                <div>
                    <h1>Register</h1>
                    <p>Create an account to get started!</p>
                    <form onSubmit={handleSubmit} className="form-style">
                        <div className="row-style">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
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
                                placeholder="Set your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="button-style">
                            Register
                        </button>
                    </form>

                    <p>Already have an account? <Link to="/login">Login here</Link></p>

                </div>
            )}
        </div>
    );
}

export default RegisterPage;