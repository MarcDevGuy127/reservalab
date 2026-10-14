const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },

    ra: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    role: {
        type: String,
        enum: ['Professor', 'Infraestrutura', 'Coordenador'],
        default: 'Professor',
        required: true
    },

    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    'Usuario',
    usuarioSchema
);