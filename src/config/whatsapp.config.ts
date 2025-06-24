import dotenv from 'dotenv';

dotenv.config();


export const conectarWhatsappApi = () => {
    const token = process.env.WABOXAPP_TOKEN;

    if (!token) {
        throw new Error('Waboxapp token no configurado en .env');
    }

    console.log('Conectado a API');
}

export const WHATSAPP_CONFIG = {
  apiUrl: 'https://www.waboxapp.com/api/send',
  token: process.env.WABOXAPP_TOKEN || '',
  uid: (process.env.WHATSAPP_SENDER_NUMBER || '').replace(/^\+/, '')
}