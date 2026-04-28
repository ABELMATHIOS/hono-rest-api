import { db } from "../db"
import { comments } from "../db/schema"
import { eq } from "drizzle-orm"

export const createComment = async (data: {
  content: string
  postId: number
}) => {
  return await db.insert(comments).values(data).returning()
}

export const getComments = async () => {
  return await db.select().from(comments)
}

export const getCommentsByPost = async (postId: number) => {
  return await db.select().from(comments).where(eq(comments.postId, postId))
}