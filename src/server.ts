import fastify from 'fastify'
import { env } from './env'
// import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify({ logger: true })

app.get('/', async () => {
  // const transaction = await knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'Salary',
  //   amount: 3000,
  // })

  const transactions = await knex('transactions')
    .where('amount', 3000)
    .select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
