require("dotenv").config()
import express from "express"

const app = express()

app.listen(5000, () => {
  console.log("ForgetMeNot server is running!")
  console.log(process.env.HELLO_VAR)
})
