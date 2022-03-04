import { User } from "../user";
import { UserRepository } from "../user.repository";

export class GetAllUsersUseCase {
    constructor(
        private readonly userRepository: UserRepository,
    ) { }

    execute(): Promise<User[]> {
        return this.userRepository.finaAllWithPosts();
    }
}