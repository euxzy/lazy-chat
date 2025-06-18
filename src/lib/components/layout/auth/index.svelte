<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import { Card, CardContent } from '$lib/components/ui/card'
  import { Input } from '$lib/components/ui/input'
  import { Label } from '$lib/components/ui/label'
  import { Github } from '@lucide/svelte'

  const id = $props.id()
</script>

<div class="absolute inset-0 flex min-h-svh items-center justify-center backdrop-blur-sm">
  <Card>
    <CardContent>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center gap-2">
          <h1 class="text-xl font-bold">Welcome to LazyChat</h1>
          <div class="text-center text-sm">
            Don&apos;t have an account?
            <a href="##" class="underline underline-offset-4"> Sign up </a>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="grid gap-3">
            <Label for="email-{id}">Email</Label>
            <Input id="email-{id}" type="email" placeholder="m@example.com" required />
          </div>
          <Button type="submit" class="w-full">Login</Button>
        </div>
        <div
          class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
        >
          <span class="bg-background text-muted-foreground relative z-10 px-2"> Or </span>
        </div>

        <form class="grid gap-4 sm:grid-cols-2">
          <Button variant="outline" class="w-full cursor-pointer">
            <Github />
            Continue with Github
          </Button>
          <Button variant="outline" type="button" class="w-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>
        </form>
      </div>
    </CardContent>
  </Card>
</div>
