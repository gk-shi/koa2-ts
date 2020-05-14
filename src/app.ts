import Koa, { Context, Next } from 'koa'


const app: Koa = new Koa()

app.use(async (ctx: Context, next: Next) => {
  ctx.body = 'hello koa~'
  await next()
})

app.listen(3000) // 监听3000端口

console.log('NODE_ENV = ', process.env.NODE_ENV)

console.log('**************Server running on http://127.0.0.1:3000***************')
