import { prismaClient } from "../lib/db";

export interface CreateEquipmentPayload {
  chassi: string;
  typeId: number;
  userId: number;
}

class EquipmentService {
  public static createEquipment(payload: CreateEquipmentPayload) {
    const { chassi, typeId, userId} = payload;

    return prismaClient.equipments.create({
      data: {
        chassi,
        typeId,
        userId,
      },
    });
  }
}

export default EquipmentService;