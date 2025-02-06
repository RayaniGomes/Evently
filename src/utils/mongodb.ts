import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Conexão ao MongoDB realizada com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;