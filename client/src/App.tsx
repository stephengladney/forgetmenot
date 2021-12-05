import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { getCookie } from "./lib/cookies"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(getCookie("fmntoken"))

  return (
    <div className="App bg-gray-800">
      <div className={"bg-indigo-800 text-white p-4 text-left"}>
        ForgetMeNot
      </div>
      dfgdfgdfg
    </div>
  )
}

export default App
