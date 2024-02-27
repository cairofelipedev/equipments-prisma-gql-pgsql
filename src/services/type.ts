import { prismaClient } from "../lib/db";

export interface CreateTypePayload {
  name: string;
}

class TypeService {
  public static createType(payload: CreateTypePayload) {
    const { name } = payload;

    return prismaClient.type.create({
      data: {
        name
      },
    });
  }
}

export default TypeService;