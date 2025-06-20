import { github } from '$lib/server/oauth'
import { redirect, type Actions } from '@sveltejs/kit'
import { generateState } from 'arctic'

export const actions = {
  async github({ cookies }) {
    const state = generateState()
    const url = github.createAuthorizationURL(state, [])

    cookies.set('github_oauth_state', state, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 10,
      sameSite: 'lax',
    })

    redirect(302, url.toString())
  },
} satisfies Actions
