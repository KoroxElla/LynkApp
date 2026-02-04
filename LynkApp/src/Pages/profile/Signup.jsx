import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    navigate("/home");
  };

  const loginGoogle = () => {
    window.location.href =
      "https://accounts.google.com/signin";
  };

  const loginX = () => {
    window.location.href =
      "https://twitter.com/i/flow/login";
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm p-5 bg-gray-900 flex flex-col items-center gap-3 rounded-xl">
	<img src = "/logo.png" alt = "" className = "w-12 md:w-14"/>

        <h1 className="text-xl font-semibold">Create Account</h1>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="text-white cursor-pointer underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

        <div className="w-full bg-gray-800 p-2 rounded-xl">
          <input
            placeholder="Full Name"
            className="bg-transparent w-full outline-none"
          />
        </div>

        <div className="w-full bg-gray-800 p-2 rounded-xl">
          <input
            placeholder="Email"
            className="bg-transparent w-full outline-none"
          />
        </div>

        <div className="w-full bg-gray-800 p-2 rounded-xl">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full outline-none"
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full p-2 bg-green-500 rounded-xl"
        >
          Sign Up
        </button>

        <div className="w-full flex justify-evenly mt-4">
          <button onClick={loginGoogle}>Google</button>
          <button onClick={loginX}>
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

