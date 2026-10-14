
const mongoose = require('mongoose');

const laboratorioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },

    localizacao: {
        type: String,
        required: true,
        trim: true
    },

    capacidade: {
        type: Number,
        required: true,
        min: 1,
        max: 45
    },

    disponibilidade: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    'Laboratorio',
    laboratorioSchema
);
