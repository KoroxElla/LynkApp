import { motion } from "framer-motion";

export default function TearPanel({ active, direction, splitContent, targetMode }) {
  if (!active) return null;

  const opening = direction === "open";
  const ANIMATION_DURATION = 1.5;
  
  // When opening (going to login): split signup apart to reveal login
  // When closing (going to signup): split login apart to reveal signup

  return (
    <>
      {/* Left Half */}
      <motion.div
        className="half left"
        initial={{ x: opening ? 0 : "-100%" }}
        animate={{ x: opening ? "-100%" : 0 }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
      >
        <div className="content">
          {/* Left half always shows the split content (what's being torn apart) */}
          {splitContent === "signup" ? (
            <>
              <h2>Sign Up</h2>
              <input placeholder="Email" />
              <input placeholder="Password" />
              <button>Sign Up</button>
              <p className="link">
                {splitContent === "signup" ? "Already have an account?" : "Don't have an account?"}
              </p>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <input placeholder="Email" />
              <input placeholder="Password" />
              <button>Login</button>
              <p className="link">
                {splitContent === "signup" ? "Already have an account?" : "Don't have an account?"}
              </p>
            </>
          )}
        </div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        className="half right"
        initial={{ x: opening ? 0 : "100%" }}
        animate={{ x: opening ? "100%" : 0 }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
      >
        <div className="content">
          {/* Right half always shows the target content (what's being revealed) */}
          {targetMode === "signup" ? (
            <>
              <h2>Sign Up</h2>
              <input placeholder="Email" />
              <input placeholder="Password" />
              <button>Sign Up</button>
              <p className="link">
                {targetMode === "signup" ? "Already have an account?" : "Don't have an account?"}
              </p>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <input placeholder="Email" />
              <input placeholder="Password" />
              <button>Login</button>
              <p className="link">
                {targetMode === "signup" ? "Already have an account?" : "Don't have an account?"}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
