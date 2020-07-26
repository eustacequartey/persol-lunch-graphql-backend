const { GraphQLServer, PubSub } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: require("./resolvers"),
  context: (request) => ({
    ...request,
    prisma,
    pubsub,
  }),
});

server.start(() => {
  console.log("localhost:4000");
});

// SeedDbWithUsers(server, server.context);
