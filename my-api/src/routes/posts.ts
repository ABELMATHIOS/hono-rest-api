import { Hono } from "hono"
import { createPost, getPosts, getPostsByUser } from "../services/postService"

const postsRoute = new Hono()

// CREATE POST
postsRoute.post("/", async (c) => {
  const body = await c.req.json()
  const post = await createPost(body)
  return c.json(post)
})

// GET ALL POSTS
postsRoute.get("/", async (c) => {
  const posts = await getPosts()
  return c.json(posts)
})

// GET POSTS BY USER
postsRoute.get("/user/:id", async (c) => {
  const id = Number(c.req.param("id"))
  const posts = await getPostsByUser(id)
  return c.json(posts)
})

export default postsRoute