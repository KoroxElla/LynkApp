
import { useState } from "react";
import Home from "./home/Home";
import TearPanel from "./TearPanel";
import Zipper from "../Components/Zipper";
import "../auth.css";


//dummy data for frontend testing.
function AuthPage() {
  // login details for you to use 
  const users = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'user@lynk.com', password: 'lynkpass' },
  ];

  const [mode, setMode] = useState('signup');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [splitContent, setSplitContent] = useState('signup');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const ANIMATION_DURATION = 1500;

  // Switch to login form
  function goToLogin() {
    if (isAnimating || mode === 'login') return;
    setSplitContent('signup');
    setIsAnimating(true);
    setDirection('open');
    setTimeout(() => {
      setMode('login');
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  }

  // Switch to signup form
  function goToSignup() {
    if (isAnimating || mode === 'signup') return;
    setSplitContent('login');
    setIsAnimating(true);
    setDirection('close');
    setTimeout(() => {
      setMode('signup');
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  }

  // Handle the login with dummy data
  function handleLogin(e) {
    e.preventDefault();
    const found = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );
    if (found) {
      setLoginError('');
      setLoggedIn(true);
    } else {
      setLoginError('Invalid email or password');
    }
  }

  // Show homepage if logged in
  if (loggedIn) return <Home />;

  return (
    <div className="auth-container">
      <Zipper active={isAnimating} direction={direction} />
      {!isAnimating ? (
        <div className="full-panel opacity-[10]">
          {mode === 'signup' ? (
            <>
              <h2>Sign Up</h2>
              <br />
              <input placeholder="Email" />
              <br />
              <input placeholder="Password" type="password" />
              <br />
              <button>Sign Up</button>
              <br />
              <p className="link" onClick={goToLogin}>
                Already have an account?
              </p>
            </>
          ) : (
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <br />
              <input
                placeholder="Email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                required
              />
              <br />
              <input
                placeholder="Password"
                type="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit">Login</button>
              <br />
              {loginError && (
                <div style={{ color: 'red', marginTop: 8 }}>{loginError}</div>
              )}
              <p className="link" onClick={goToSignup}>
                Don't have an account?
              </p>
            </form>
          )}
        </div>
      ) : (
        <TearPanel
          active={isAnimating}
          direction={direction}
          splitContent={splitContent}
          targetMode={direction === 'open' ? 'login' : 'signup'}
        />
      )}
    </div>
  );
}

export default AuthPage;
