import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AuthPage from './Pages/AuthPage.jsx'
import backgroundImage from './assets/ta.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
	  className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
	  <AuthPage calssName="opacity-[10] p-8"/>
    </div>
  )
}

export default App
