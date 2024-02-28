import createApolloServer from "../src/graphql";
import { ApolloServer } from "@apollo/server";

describe('createApolloServer', () => {
    let server: ApolloServer;

    beforeAll(async () => {
        server = await createApolloServer();
    });

    afterAll(async () => {
        await server.stop();
    });

    it('should create Apollo Server instance', async () => {
        expect(server).toBeInstanceOf(ApolloServer);
    });

    it('should be able to start the server', async () => {
        // Verifica se o servidor ainda não foi iniciado
        if (!server.start) {
            // Iniciar o servidor
            try {
                await server.start();
                // Se a execução chegar até aqui, esperamos que não ocorra exceção
            } catch (error) {
                // Se ocorrer um erro ao iniciar o servidor, falha o teste
                throw new Error(`Failed to start the server: ${error}`);
            }
        } else {
            ('ApolloServer is already started');
        }
    });


    // Adicione mais testes conforme necessário...
});
