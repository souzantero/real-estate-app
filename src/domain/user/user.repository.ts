import { User } from "./user";

export interface UserRepository {
    findAll(): Promise<User[]>;
    finaAllWithPosts(): Promise<User[]>;
}