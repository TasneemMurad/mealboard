 
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
  };
 
  return (
    <section className="login-page">
       <img
          src="/images/Header.jpg"
            alt="CookShelf delicious recipes"
            className="login-bg-img"
            aria-hidden="true"
        />
 
        <div className="login-bg-overlay" aria-hidden="true"/>

      <div className="login-frame">
        
        <div className="login-glass-card">
           
          {submitted ? (
            <div className="login-success">
              <h2>Welcome, {name}!</h2>
 
              <p>
                Your account has been created
                successfully.
              </p>
 
              <Link
                to="/"
                className="login-btn login-btn--link"
              >
                Explore Recipes
              </Link>
 
              <p className="login-switch">
                Already have an account?{' '}
                <Link to="/login">
                  Login here
                </Link>
              </p>
            </div>
          ) : (
            <>
            <div className="login-brand">
                    <span>CookShelf</span>
                </div>

              <h1>Create Account</h1>
 
              <p className="login-sub">
                Join CookShelf and start your
                culinary journey!
              </p>
 
              <form
                onSubmit={handleSubmit}
                className="login-form"
              >
 
                <div className="login-field">
                  <label htmlFor="register-name">
                    Full Name:
                  </label>
 
                  <input
                    id="register-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />
                </div>
 
                <div className="login-field">
                  <label htmlFor="register-email">
                    Email Address:
                  </label>
 
                  <input
                    id="register-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>
 
                <div className="login-field">
                  <label htmlFor="register-password">
                    Password:
                  </label>
 
                  <input
                    id="register-password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />
                </div>
 
                <button type="submit"
                  className="login-btn"
                >
                  Create Account
                </button>
 
              </form>
 
              <p className="login-switch">
                Already have an account?{' '}
                <Link to="/login">
                  Login here
                </Link>
              </p>
            </>
          )
          }
 
        </div>
      </div>
    </section>
  );
}
 export default RegisterPage;