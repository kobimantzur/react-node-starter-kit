import express from "express"
const server = express()
import { PORT } from "./constants/index.js"
import webpackMiddleware from './middlewares/webpackMiddleware';
const isProd = process.env.NODE_ENV === "production"
server.use('/', require('./controllers'));

if (!isProd) {
  webpackMiddleware(server)
}


const staticMiddleware = express.static("dist")
server.use(staticMiddleware)

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
