import { ApolloServer } from "@apollo/server";
import { prismaClient } from "../lib/db";
import { User } from "./user";
import { Type } from "./type";

async function createApolloServer() {
  // Create Graphql Server
  const gqlServer = new ApolloServer({
    typeDefs: `
        type User {
            name: String!
            email: String!
        }
    
        type Query {
            users: [User!]!
        }

        type Mutation {
          ${User.mutations},
          ${Type.mutations},
        }
    `, // Schema
    resolvers: {
      Query: {
        users: async () => {
          return await prismaClient.user.findMany({
            select: {
              name: true,
              email: true,
            },
          });
        },
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Type.resolvers.mutations,
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloServer;