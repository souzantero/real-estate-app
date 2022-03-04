import { Post } from "../post";
import { PostRepository } from "../post.repository";

export class GetAllPostsUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute(): Promise<Post[]> {
        return this.postRepository.findAll()
    }
}