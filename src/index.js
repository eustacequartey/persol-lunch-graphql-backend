const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { AdminAuthorization, SeedDbWithUsers } = require("./utils");
const Mutation = require("./resolvers/Mutation");
const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: (_, args, ctx) => ctx.prisma.users(),
  },
  Mutation,
  User: {
    role: (parent, args, ctx) => {
      return ctx.prisma.user({ id: parent.id }).role();
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => ({
    ...request,
    prisma,
  }),
});

server.start(() => {
  console.log("localhost:4000");
});

// SeedDbWithUsers(server, server.context);
