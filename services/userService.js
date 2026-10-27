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

const searchUsersByName = async (name) => {
     const users = await User.find({
        nome: { $regex: name, $options: "i" }
     })

     return users
}

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id)

    if (!user) {
        const error = new Error("Usuário não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email: email })

    if (!user) {
        const error = new Error("Usuário não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const updateUser = async (id, data) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!user) {
        const error = new Error("Usuário não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const countUsers = async () => {
    return User.countDocuments()
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