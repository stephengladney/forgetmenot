import React, { useState } from "react"
import { setCookie } from "../../lib/cookies"

export function Login({}) {
  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="-mt-16 w-96 text-white p-8 object-center">
        <span className="text-3xl block mb-6">Login</span>
        <span className="block mb-6">Please enter your credentials.</span>
        <div className="flex flex-col items-start">
          <label htmlFor="username" className="text-opacity-100">
            Username
          </label>
          <input
            className="w-full bg-gray-700 p-3 mt-1 rounded"
            name="username"
          ></input>
        </div>
        <div className="mt-6 flex flex-col items-start">
          <label htmlFor="password">Password</label>
          <input
            className="w-full bg-gray-700 p-3 mt-1 rounded"
            name="password"
            type="password"
          ></input>
        </div>
        <button className="mt-8 rounded py-3 w-full bg-indigo-500">
          Login
        </button>
      </div>
    </div>
  )
}
