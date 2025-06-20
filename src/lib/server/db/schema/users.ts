import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 150 }),
  email: varchar('email', { length: 150 }).unique(),
  username: varchar('name', { length: 150 }).unique(),
  photo: text('photo'),
  bio: varchar('bio', { length: 256 }),
  githubId: varchar('github_id', { length: 256 }),
})
