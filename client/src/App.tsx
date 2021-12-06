import React, { useState } from "react"
import "./App.css"
import { getCookie } from "./lib/cookies"
import { Login } from "./components/Login/Login"
import { Dashboard } from "./components/Dashboard/Dashboard"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(getCookie("fmntoken"))

  return (
    <div className="App flex flex-col bg-gray-800 h-screen font-sans">
      <div
        className={"bg-indigo-800 text-white p-4 text-left text-xl gamefont"}
      >
        ForgetMeNot
      </div>
      <div className="flex-grow flex">
        {isLoggedIn ? <Dashboard /> : <Login />}
      </div>
    </div>
  )
}

export default App
