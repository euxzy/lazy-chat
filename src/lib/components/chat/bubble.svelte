<script lang="ts">
  interface Props {
    message: string
    source: 'me' | 'other'
  }

  let { message, source }: Props = $props()
</script>

<div class={['flex w-full', source == 'me' ? 'justify-end' : 'justify-start']}>
  <div class={['max-w-3/5 rounded-3xl px-6 py-2', source == 'me' ? 'bg-green-300' : 'bg-green-400']}>
    {message}
  </div>
</div>
