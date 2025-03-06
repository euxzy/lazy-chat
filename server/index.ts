import express from 'express'
import { handler } from '../build/handler'

const port = process.env.SERVER_PORT || 3000
const app = express()

app.get('/health', (_, res) => {
  res.end('ok')
})

app.use(handler)

app.listen(port, () => {
  console.log(`server is running on http://0.0.0.0:${port}`)
})
