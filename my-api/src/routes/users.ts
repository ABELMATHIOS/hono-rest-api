import { Hono } from 'hono'
import { createUser, getUsers } from '../services/userService'

const usersRoute = new Hono()

usersRoute.post('/', async (c) => {
  const body = await c.req.json()
  const user = await createUser(body.name)
  return c.json(user)
})

usersRoute.get('/', async (c) => {
  const users = await getUsers()
  return c.json(users)
})

export default usersRoute