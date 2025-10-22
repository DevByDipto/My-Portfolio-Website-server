import express from 'express'
import env from "dotenv"
import { abouMeRoute } from './controller/about.controller'
export const app = express()


env.config()
app.use('/about-me',abouMeRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

