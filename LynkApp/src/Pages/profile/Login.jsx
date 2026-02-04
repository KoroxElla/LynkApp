import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout} from "@react-oauth/google"; 

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    navigate("/home");
  };


  function handleLogout() {
    googleLogout()
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm p-5 bg-gray-900 flex flex-col items-center gap-3 rounded-xl">
	<img src = "/logo.png" alt = "" className = "w-12 md:w-14" />

        <h1 className="text-xl font-semibold">Welcome Back</h1>

        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-white cursor-pointer underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

        {/* Email */}
        <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
          <MdAlternateEmail />
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent w-full outline-none"
          />
        </div>

        {/* Password */}
        <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
          <FaFingerprint />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full outline-none"
          />

          {showPassword ? (
            <FaRegEyeSlash
              onClick={togglePasswordView}
              className="absolute right-4 cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={togglePasswordView}
              className="absolute right-4 cursor-pointer"
            />
          )}
        </div>

        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 rounded-xl"
        >
          Login
        </button>

        {/* Social */}
        <div className="w-full flex justify-evenly mt-4">
	  <div className="p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <GoogleLogin 
	    onSuccess = {(credentialResponse) => {
              console.log(credentialResponse)
	      handleLogin()
	    }}
            onError = {() => console.log("Login failed")}
            size = "large"
            type = "icon"
            shape = "square"
            theme = "filled_blue"
            
	/>
	  </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

