import { useState } from "react";
import TearPanel from "./TearPanel";
import Zipper from "../Components/Zipper";
import "../auth.css";

export default function AuthPage() {
  const [mode, setMode] = useState("signup");
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // "open" | "close"
  const [splitContent, setSplitContent] = useState("signup");
  const ANIMATION_DURATION = 1500; // Changed from 900ms to 1500ms (1.5 seconds)

  const goToLogin = () => {
    if (isAnimating || mode === "login") return;

    // Set split content to signup (what we're splitting apart)
    setSplitContent("signup");
    setIsAnimating(true);
    setDirection("open");

    setTimeout(() => {
      setMode("login");
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  const goToSignup = () => {
    if (isAnimating || mode === "signup") return;

    // Set split content to login (what we're splitting apart)
    setSplitContent("login");
    setIsAnimating(true);
    setDirection("close");

    setTimeout(() => {
      setMode("signup");
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  return (
    <div class="auth-container">
      <Zipper active={isAnimating} direction={direction} />

      {!isAnimating ? (
        <div class="full-panel" className="opacity-[10]">
          {mode === "signup" ? (
            <>
              <h2>Sign Up</h2>
		  <br/>
              <input placeholder="Email" />
		  <br/>
              <input placeholder="Password" type="password" />
		  <br/>
              <button>Sign Up</button>
		  <br/>
              <p className="link" onClick={goToLogin}>
                Already have an account?
              </p>
            </>
          ) : (
            <>
              <h2>Login</h2>
		  <br/>
              <input placeholder="Email" />
		  <br/>
              <input placeholder="Password" type="password" />
		  <br/>
              <button>Login</button>
		  <br/>
              <p className="link" onClick={goToSignup}>
                Don't have an account?
              </p>
            </>
          )}
        </div>
      ) : (
        <TearPanel 
          active={isAnimating} 
          direction={direction} 
          splitContent={splitContent}
          targetMode={direction === "open" ? "login" : "signup"}
        />
      )}
    </div>
  );
}
