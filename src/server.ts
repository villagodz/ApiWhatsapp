import express, { Application } from 'express';
import dotenv from 'dotenv';
import { connect } from 'http2';
import { conectarWhatsappApi } from './config/whatsapp.config';
import whatsappRoute from './routes/whatsapp.routes';

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectarse con API Whaboxxapp
conectarWhatsappApi();

// Rutas
app.use('/api/whatsapp', whatsappRoute);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});