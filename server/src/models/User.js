import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            index: {
                unique: true
            }
        },

        password: {
            type: String,
            required: true,
        },

        nome: {
            type: String,
            required: true,
        },

        sobrenome: {
            type: String,
            required: true,
        },

        cpf: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },

        promocoes: {
            type: String,
            required: true,
        },

        novidades: {
            type: String,
            required: true,
        },

        cep: {
            type: String,
            required: false,
        },

        endereço: {
            type: String,
            required: false,
        },
        
        numero: {
            type: String,
            required: false,
        },

        estado: {
            type: String,
            required: false,
        },

        cidade: {
            type: String,
            required: false,
        }  
    },
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema);