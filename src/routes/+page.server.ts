import type { Actions } from './$types'

export const actions = {
  send: async ({ request }) => {
    const data = await request.formData()
    console.log(data.get('chat'))

    // throw redirect(302, '/')
  },
} satisfies Actions
