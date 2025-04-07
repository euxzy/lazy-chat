<script lang="ts">
  import { enhance } from '$app/forms'
  import { setSocketContex } from '$lib/stores/socket.svelte'
  import { onMount } from 'svelte'
  import { Bubble, type BubbleProps } from '.'

  let socket: WebSocket

  let chats = $state<BubbleProps[]>([])

  onMount(() => {
    socket = setSocketContex()
    socket.onopen = () => {
      console.info('connected')
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      chats.push(data)
    }

    socket.onclose = () => {
      console.warn('disconnected')
    }
  })
</script>

<div class="flex h-full flex-col">
  <div class="bg-amber-300 p-4">
    <div class="flex items-center gap-x-3">
      <div class="size-12 rounded-full bg-neutral-100"></div>
      <h2 class="text-xl font-semibold">Name</h2>
    </div>
  </div>

  <div class="flex-1 overflow-auto bg-blue-100">
    <div class="mt-4 space-y-2 px-4">
      {#each chats as chat, index (index)}
        <Bubble {...chat} />
      {/each}
    </div>
  </div>

  <div class="bg-blue-500 p-4">
    <form
      method="POST"
      action="?/send"
      use:enhance={({ formData }) => {
        const message = String(formData.get('message'))
        chats.push({ source: 'me', message })

        return async ({ result, update }) => {
          if (result.type === 'success') {
            update({ reset: true, invalidateAll: true })
            const payload: BubbleProps = { source: 'other', message }

            socket.send(JSON.stringify(payload))
          }
        }
      }}
    >
      <div class="relative">
        <textarea name="message" id="chat" class="relative h-12 w-full rounded-4xl" placeholder="Write message here..."
        ></textarea>
        <button type="submit" class="absolute inset-y-0 right-3 mt-0 mb-auto"> Send </button>
      </div>
    </form>
  </div>
</div>
