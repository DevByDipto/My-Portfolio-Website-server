import express from 'express'
import env from "dotenv"
import { abouMeRoute } from './controller/about.controller'
import cors from "cors"
import { blogRoute } from './controller/blog.controller'
import notFound from './middlewares/notFound'
import globalErrorHandler from './middlewares/globalErrorHandelars'
import { authRoute } from './controller/auth.controller'

export const app = express()


env.config()
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"], // তোমার frontend URL
    credentials: true, // cookies, auth headers allow করবে
  })
);


app.use('/about-me',abouMeRoute)
app.use('/blog',blogRoute)
app.use('/auth',authRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
app.use(notFound)
