<script lang="ts">
  import { Chat } from '$lib/components/chat'
  import Auth from '$lib/components/layout/auth/index.svelte'
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

  <Auth />
</main>
