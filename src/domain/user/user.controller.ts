import { GetAllUsersUseCase } from "./usecases/get-all-users.usecase";

export class UserController {
    constructor(
        private readonly getAllUsersUseCase: GetAllUsersUseCase,
    ) {}

    handle() {
        return this.getAllUsersUseCase.execute();
    }
}