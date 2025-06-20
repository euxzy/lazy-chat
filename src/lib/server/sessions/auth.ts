import { env } from '$env/dynamic/private'
import type { Cookies } from '@sveltejs/kit'

export type User = {
  id: string
  name: string
  email: string
  username: string
}

export class AuthSession {
  constructor(private cookies: Cookies) {}

  setSession() {
    this.cookies.set('__auth_session', 'true', {
      path: '/',
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: 'lax',
      secure: env.NODE_ENV === 'production',
    })

    return this
  }

  destrySession() {
    this.cookies.delete('__auth_session', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: env.NODE_ENV === 'production',
    })

    return this
  }

  getSession() {
    return this.cookies.get('__auth_session')
  }
}
