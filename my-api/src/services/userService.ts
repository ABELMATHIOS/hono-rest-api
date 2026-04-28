// src/services/userService.ts
import { db } from '../db'
import { users } from '../db/schema'

export const createUser = async (name: string) => {
  return await db.insert(users).values({ name }).returning()
}

export const getUsers = async () => {
  return await db.select().from(users)
}