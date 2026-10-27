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

        res.status(200).json({
            message: "Usuário encontrado com sucesso",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

const searchUsersByName = async (req, res, next) => {
    try {
        const users = await userService.searchUsersByName(req.params.name)

        res.status(200).json({
            message: "Usuarios encontrados com sucesso",
            total: users.length,
            data: users
        })
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id)

        res.status(200).json({
            message: "Usuário deletado com sucesso",
            data: user
        })

    } catch (error) {
        next(error)
    }
}

const getUserByEmail = async (req, res, next) => {
    try {
        const user  = await userService.getUserByEmail(req.params.email)

        res.status(200).json({
            message: "Usuário encontrado com sucesso",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try { 
        const user = await userService.updateUser(req.params.id, req.body)

        res.status(200).json({
            message: "Usuário editado com sucesso",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

const countUsers = async (req, res, next) => {
    try {
        const total = await userService.countUsers()

        res.status(200).json({
            message: "Quantidade de usuarios encontrada com sucesso",
            total
        })

    } catch (error) {
        next(error)
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    searchUsersByName,
    deleteUser,
    getUserByEmail,
    updateUser,
    countUsers
}