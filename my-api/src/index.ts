import { Hono } from 'hono'
import usersRoute from './routes/users'
import postsRoute from './routes/posts'
import commentsRoute from './routes/comments'

const app = new Hono()

app.route('/users', usersRoute)
app.route('/posts', postsRoute)
app.route('/comments', commentsRoute)

export default app