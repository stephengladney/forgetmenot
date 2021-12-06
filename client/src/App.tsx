import React, { useState } from "react"
import "./App.css"
import { getCookie } from "./lib/cookies"
import { Login } from "./components/Login/Login"
import { Dashboard } from "./components/Dashboard/Dashboard"

function App() {
  const [token, setToken] = useState(getCookie("fmntoken"))
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false)

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
