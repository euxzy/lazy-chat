import { ServerSocket } from '../../server/socket'
import { type PluginOption } from 'vite'
import type { Server } from 'http'

export const socketServer = (): PluginOption => ({
  name: 'socketServer',
  configureServer: (server) => {
    if (!server.httpServer) return

    const socket = new ServerSocket({ server: server.httpServer as Server })
    socket.start()
  },
})
