import UserService , { CreateUserPayload } from "../../services/user";

const queries = {};

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserService.createProduct(payload);
    return true;
  },
};

export const resolvers = { queries, mutations };