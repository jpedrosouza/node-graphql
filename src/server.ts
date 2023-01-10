import { ApolloServer } from 'apollo-server'
import path from 'node:path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/user-resolver'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({ schema })

  const { url } = await server.listen()

  console.log(`🚀 GraphQL server running at ${url}`)
}

bootstrap()