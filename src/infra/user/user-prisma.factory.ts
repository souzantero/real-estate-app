import { User } from "../../domain/user/user";
import { PostPrismaFactory } from "../post/post-prisma.factory";

export class UserPrismaFactory {
    constructor(private readonly user: any) { }

    toModel(): User {
        return new User(
            this.user.id.toString(),
            this.user.email,
            this.user.name,
            this.user.posts 
                ? (this.user.posts as Array<any>).map(post => new PostPrismaFactory(post).toModel()) 
                : []
        );
    }
}