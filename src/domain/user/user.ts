import { Post } from "../post/post";

export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly name: string,
        public readonly posts: Post[],
    ) { }
}