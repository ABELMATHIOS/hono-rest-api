import { Hono } from "hono"
import {
  createComment,
  getComments,
  getCommentsByPost
} from "../services/commentService"

const commentsRoute = new Hono()

// CREATE COMMENT
commentsRoute.post("/", async (c) => {
  const body = await c.req.json()
  const comment = await createComment(body)
  return c.json(comment)
})

// GET ALL COMMENTS
commentsRoute.get("/", async (c) => {
  const comments = await getComments()
  return c.json(comments)
})

// GET COMMENTS BY POST
commentsRoute.get("/post/:id", async (c) => {
  const id = Number(c.req.param("id"))
  const comments = await getCommentsByPost(id)
  return c.json(comments)
})

export default commentsRoute