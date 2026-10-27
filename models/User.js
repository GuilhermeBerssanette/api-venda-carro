import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        telefone: {
            type: String,
            trim: true,
            unique: true
        },

        idade: {
            type: Number,
            required: true
        },

        ativo: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        collection: "users"
    }
)

export default mongoose.model("User", UserSchema);