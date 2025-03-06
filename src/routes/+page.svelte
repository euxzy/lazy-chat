<script lang="ts">
  import { onMount } from 'svelte'

  onMount(() => {
    const socket = new WebSocket('ws://localhost:5173/ws')
    socket.onopen = () => {
      console.log('connected')
    }

    socket.onmessage = (event) => {
      console.log('Message from server:', event)
    }

    socket.onclose = () => {
      console.log('disconnected')
    }

    setTimeout(() => {
      socket.send('Hello from client')
    }, 5000)
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
