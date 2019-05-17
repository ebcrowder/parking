import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import * as path from 'path';
import { stringArg, idArg } from 'nexus';
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';
import { GraphQLServer } from 'graphql-yoga';

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['user']);
    t.list.field('name', {
      type: 'User',
      resolve: (_, args, ctx) => ctx.prisma.users()
    });
    t.list.field('users', {
      type: 'User',
      resolve: (_, args, ctx) => ctx.prisma.users()
    });
  }
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createUser']);
    t.field('createUser', {
      type: 'User',
      args: {
        name: stringArg(),
        trip: stringArg()
      },
      resolve: (_, { name, trip }, ctx) =>
        ctx.prisma.createUser({
          name,
          trip
        })
    });

    t.field('deleteUser', {
      type: 'User',
      args: {
        id: idArg()
      },
      resolve: (_, { id }, ctx) =>
        ctx.prisma.deleteUser({
          id
        })
    });

    t.field('updateUser', {
      type: 'User',
      args: {
        id: idArg()
      },
      resolve: (_, { id }, ctx) =>
        ctx.prisma.updateUser({
          id
        })
    });
  }
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
server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
