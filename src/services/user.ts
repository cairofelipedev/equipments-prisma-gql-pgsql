import { prismaClient } from "../lib/db";

export interface CreateUserPayload {
  name: string;
  email: string;
}

class UserService {
  public static createUser(payload: CreateUserPayload) {
    const { name, email } = payload;

    return prismaClient.user.create({
      data: {
        name,
        email,
      },
    });
  }
}

export default UserService;