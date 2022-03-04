import { Post } from "./post";

export interface PostRepository {
    findAll(): Promise<Post[]>;
}