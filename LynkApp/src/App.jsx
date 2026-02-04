import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import backgroundImage from './assets/ta.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/profile/Login.jsx'
import Signup from "./Pages/profile/Signup";
import Home from "./Pages/home/Home";

function App() {

  return (
	  <BrowserRouter>
	  	<div
	  	className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
 		style={{ backgroundImage: `url(${backgroundImage})` }}>
	  		<Routes>
          			<Route path="/" element={<Login />} />
          			<Route path="/signup" element={<Signup />} />
          			<Route path="/home" element={<Home />} />
        		</Routes>
    		</div>
	  </BrowserRouter>
  );
}

export default App
