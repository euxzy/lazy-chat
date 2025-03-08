<script lang="ts">
  import { enhance } from '$app/forms'
  import { Bubble } from '.'
</script>

<div class="flex h-full flex-col">
  <div class="bg-amber-300 p-4">
    <div class="flex items-center gap-x-3">
      <div class="size-12 rounded-full bg-neutral-100"></div>
      <h2 class="text-xl font-semibold">Name</h2>
    </div>
  </div>

  <div class="flex-1 overflow-auto bg-blue-100">
    <div class="mt-4 space-x-2 px-4">
      {#each Array.from({ length: 15 })}
        <Bubble source="me" message="Hello" />
        <Bubble source="other" message="Hello" />
      {/each}
    </div>
  </div>

  <div class="bg-blue-500 p-4">
    <form method="POST" action="?/send" use:enhance>
      <div class="relative">
        <textarea name="chat" id="chat" class="relative h-12 w-full rounded-4xl"></textarea>
        <button type="submit" class="absolute inset-y-0 right-3 mt-0 mb-auto"> Send </button>
      </div>
    </form>
  </div>
</div>
