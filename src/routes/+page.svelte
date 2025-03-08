<script lang="ts">
  import { PUBLIC_WS_ENDPOINT as WS } from '$env/static/public'
  import { Chat } from '$lib/components/chat'
  import { onMount } from 'svelte'

  onMount(() => {
    const socket = new WebSocket(WS)
    socket.onopen = () => {
      console.log('connected')
    }

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data)
    }

    socket.onclose = () => {
      console.log('disconnected')
    }

    setTimeout(() => {
      socket.send(JSON.stringify({ test: 'hello' }))
    }, 5000)
  })
</script>

<svelte:head>
  <title>LazyChat</title>
</svelte:head>

<main class="bg-neutral-200">
  <section class="container mx-auto flex h-svh bg-amber-50">
    <div class="w-96">
      <h1>LazyChat</h1>
    </div>

    <div class="flex-1 bg-amber-100">
      <Chat />
    </div>
  </section>
</main>
