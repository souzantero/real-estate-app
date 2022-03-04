import { Post } from "../../domain/post/post";
import { UserPrismaFactory } from "../user/user-prisma.factory";

export class PostPrismaFactory {
    constructor(private readonly post: any) { }

    toModel(): Post {
        return new Post(
            this.post.id.toString(),
            this.post.title,
            this.post.content || '',
            this.post.published,
            this.post.author 
                ? new UserPrismaFactory(this.post.author).toModel()
                : undefined
        );
    }
}