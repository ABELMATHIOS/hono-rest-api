import { db } from "../db"
import { posts } from "../db/schema"
import { eq } from "drizzle-orm"

export const createPost = async (data: {
  title: string
  content: string
  userId: number
}) => {
  return await db.insert(posts).values(data).returning()
}

export const getPosts = async () => {
  return await db.select().from(posts)
}

export const getPostsByUser = async (userId: number) => {
  return await db.select().from(posts).where(eq(posts.userId, userId))
}