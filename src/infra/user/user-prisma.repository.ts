import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/user/user";
import { UserRepository } from "../../domain/user/user.repository";
import { UserPrismaFactory } from "./user-prisma.factory";

export class UserPrismaRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) { }
    
    findAll(): Promise<User[]> {
        return this.prisma
            .user
            .findMany()
            .then(users => users.map(user => new UserPrismaFactory(user).toModel()));
    }

    finaAllWithPosts(): Promise<User[]> {
        return this.prisma
            .user
            .findMany({
                include: { posts: true },
            })
            .then(users => users.map(user => new UserPrismaFactory(user).toModel()));
    }
}