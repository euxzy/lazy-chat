<script lang="ts">
  import { config } from '$lib/config'
  import { onMount } from 'svelte'

  onMount(() => {
    const socket = new WebSocket(config.wsEndpoint)
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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
