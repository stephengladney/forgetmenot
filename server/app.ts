require("dotenv").config()
import express from "express"
import { resolve } from "path"

import sequelize from "./config/sequelize"
import routes from "./routes/"

const app = express()
sequelize.sync()

app.use(express.static(resolve(__dirname, "../../client/build")))
app.use(routes)

app.listen(5000, () => {
  console.log("ForgetMeNot server is running!")
})
