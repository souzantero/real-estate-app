import { GetAllPostsUseCase } from "./usecases/get-all-posts.usecase";

export class PostController {
    constructor(private getAllPostsUseCase: GetAllPostsUseCase) { }

    handle() {
        return this.getAllPostsUseCase.execute()
    }
}