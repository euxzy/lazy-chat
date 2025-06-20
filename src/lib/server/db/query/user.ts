import { db } from '..'

export const getUserByGithubId = (githubId: string) => {
  return db.query.user.findFirst({
    where: (user, { eq }) => eq(user.githubId, githubId),
  })
}
