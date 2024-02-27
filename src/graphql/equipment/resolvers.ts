import EquipmentService, { CreateEquipmentPayload } from "../../services/equipment";

const queries = {};

const mutations = {
  createEquipment: async (_: any, payload: CreateEquipmentPayload) => {
    const res = await EquipmentService.createEquipment(payload);
    return true;
  },
};

export const resolvers = { queries, mutations };