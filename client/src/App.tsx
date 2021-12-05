import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { getCookie } from "./lib/cookies"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(getCookie("fmntoken"))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bg-red-400">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
