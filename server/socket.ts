import { Server } from 'http'
import WebSocket, { WebSocketServer } from 'ws'

export interface ServerSocketProps {
  server: Server
}

export class ServerSocket {
  readonly wss: WebSocketServer
  private readonly server: Server

  constructor({ server }: ServerSocketProps) {
    this.wss = new WebSocketServer({ noServer: true })
    this.server = server as Server
  }

  private startWS() {
    this.wss.on('connection', (ws: WebSocket) => {
      ws.on('error', console.log)

      ws.on('message', (message) => {
        console.log('received: %s', message)

        this.wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            console.log('client message: %s', message.toString())
            client.send(message?.toString())
          }
        })
      })
    })
  }

  public start() {
    this.startWS()

    this.server.on('upgrade', (req, socket, head) => {
      const { pathname } = new URL(req.url || '', req.headers.origin || 'ws://0.0.0.0:3000')

      if (pathname === '/ws') {
        this.wss.handleUpgrade(req, socket, head, (ws) => {
          ws.on('error', console.log)

          this.wss.emit('connection', ws, req)
        })
      }
    })
  }
}
