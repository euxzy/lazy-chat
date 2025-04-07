import { PUBLIC_WS_ENDPOINT as WS } from '$env/static/public'
import { getContext, setContext } from 'svelte'

const socketKey = Symbol('socket')
let socket = $state<WebSocket>()

export function getSocketContex(): WebSocket {
  return getContext(socketKey)
}

export function setSocketContex() {
  if (!getSocketContex()) {
    socket = new WebSocket(WS)
    setContext(socketKey, socket)
  }

  return getSocketContex()
}
