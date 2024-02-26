import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "./lib/db";

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json());

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
          createUser(name: String!, email: String!): Boolean
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
                createUser: async (
                    _,
                    {
                        name,
                        email,
                    }: {
                        name: string;
                        email: string;
                    }
                ) => {
                    await prismaClient.user.create({
                        data: {
                            name,
                            email,
                        },
                    });
                    return true;
                },
            },
        },
    });

    // Start the gql server
    await gqlServer.start();

    app.get("/", (req, res) => {
        res.json({ message: "Server is up and running" });
    });

    app.use("/graphql", expressMiddleware(gqlServer));

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();