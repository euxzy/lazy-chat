import express from 'express'
import { handler } from '../build/handler'
import { createServer } from 'http'
import { ServerSocket } from './socket'

const port = process.env.SERVER_PORT || 3000
const app = express()
const server = createServer(app)

const socket = new ServerSocket({ server })
socket.start()

app.get('/health', (_, res) => {
  res.end('ok')
})

app.use(handler)

server.listen(port, () => {
  console.log(`server is running on http://0.0.0.0:${port}`)
})
