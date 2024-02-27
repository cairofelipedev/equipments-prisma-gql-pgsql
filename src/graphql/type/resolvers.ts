import TypeService, { CreateTypePayload } from "../../services/type";

const queries = {};

const mutations = {
  createType: async (_: any, payload: CreateTypePayload) => {
    const res = await TypeService.createType(payload);
    return true;
  },
};

export const resolvers = { queries, mutations };