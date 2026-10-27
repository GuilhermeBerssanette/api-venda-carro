import User from "../models/User.js"

const createUser = async (data) => {
    const { nome, email, telefone, idade } = data

    if (!nome || !email) {
        const error = new Error("Nome e email são obrigatorios")
        error.statusCode = 400
        throw error
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        const error = new Error("email já utilizado")
        error.statusCode = 400
        throw error
    }

    const user = await User.create({
        nome, 
        email, 
        telefone, 
        idade
    })

    return {
        _id: user._id,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        idade: user.idade,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}

const getAllUsers = async () => {
    return User.find()
}

const getUserById = async (id) => {
    const user = await User.findById(id);

    if (!user) {
        const error = new Error("Usuário não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

export default {
    createUser,
    getAllUsers,
    getUserById
}