import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
    {
        code:{
            type: String,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },

        descricao: {
            type: String,
            required: true,
        },

        nomeProjeto: {
            type: String,
            required: true,
        },

        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Repository', repositorySchema);