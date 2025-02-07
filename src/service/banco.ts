import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from '@/utils/database';

const app = express();

// Middleware
app.use(express.json());
app.use(cors())
// Conectar ao banco de dados
connectDB();

// Inicializar servidor
const PORT = process.env.MONGODB_URI;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
