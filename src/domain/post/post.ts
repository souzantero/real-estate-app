import { User } from "../user/user";

export class Post {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly content: string,
        public readonly published: boolean = false,
        public readonly author?: User
    ) { }
}