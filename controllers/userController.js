import userService from "../services/userService.js"


const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body)

        res.status(201).json({
            message: "Usuario criado com sucesso",
            data: user,
        })
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers()

        res.status(200).json({
            message: "Usuarios encontrados com sucesso",
            total: users.length,
            data: users
        })
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id)

        rea.status(200).json({
            message: "Usuário encontrado com sucesso",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById
}