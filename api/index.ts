import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import * as path from 'path';
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';
import { GraphQLServer } from 'graphql-yoga';
import * as cors from 'cors';

const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(['*'])
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t => t.prismaFields(['*'])
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});

// address CORS issues
server.express.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: false,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

server.start(
  {
    cors: {
      credentials: false,
      origin: 'http://localhost:3000'
    }
  },
  deetz => console.log(`🚀 Server ready at http://localhost:${deetz.port}`)
);
