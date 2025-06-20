import type { OAuth2Tokens } from 'arctic'
import type { RequestHandler } from './$types'
import { github } from '$lib/server/oauth'

export const GET: RequestHandler = async ({ url, cookies }) => {
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const storedState = cookies.get('github_oauth_state') ?? null
  if (!code || !state || state !== storedState) {
    return new Response(null, { status: 400 })
  }

  let tokens: OAuth2Tokens
  try {
    tokens = await github.validateAuthorizationCode(code)
  } catch (e) {
    console.error(e instanceof Error ? e.message : e)
    return new Response(null, { status: 400 })
  }

  const githubUserResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${tokens?.accessToken()}`,
    },
  })

  const githubUser = await githubUserResponse.json()
  console.log(githubUser)

  return new Response(null, { status: 302, headers: { Location: '/' } })
}
