import { PrismaClient } from "@prisma/client";
import { Post } from "../../domain/post/post";
import { PostRepository } from "../../domain/post/post.repository";
import { PostPrismaFactory } from "./post-prisma.factory";

export class PostPrismaRepository implements PostRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findAll(): Promise<Post[]> {
        return this.prisma
            .post
            .findMany({
                include: { author: true }
            })
            .then(posts => posts.map(post => new PostPrismaFactory(post).toModel()));
    }
}