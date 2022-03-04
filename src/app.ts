import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { PrismaClient } from '@prisma/client'
import { GetAllPostsUseCase } from "./domain/post/usecases/get-all-posts.usecase"
import { PostController } from "./domain/post/post.controller"
import { PostPrismaRepository } from "./infra/post/post-prisma.repository"
import { UserPrismaRepository } from "./infra/user/user-prisma.repository"
import { GetAllUsersUseCase } from "./domain/user/usecases/get-all-users.usecase"
import { UserController } from "./domain/user/user.controller"

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/posts', (req: Request, res: Response) => {
    const repository = new PostPrismaRepository(prisma)
    const getAllPosts = new GetAllPostsUseCase(repository)
    const controller = new PostController(getAllPosts)

    controller.handle()
        .then(posts => {
            res.send(posts)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

app.get('/users', (req: Request, res: Response) => {
    const repository = new UserPrismaRepository(prisma)
    const getAllUsers = new GetAllUsersUseCase(repository)
    const controller = new UserController(getAllUsers)

    controller.handle()
        .then(users => {
            res.send(users)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})