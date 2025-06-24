import axios from 'axios';
import { WHATSAPP_CONFIG } from '../config/whatsapp.config';

interface WhatsAppMessage {
  to: string;
  type: 'text' | 'document';
  text?: string;
  url?: string;
  caption?: string;
  filename?: string;
}

export const sendWhatsAppMessage = async (message: WhatsAppMessage) => {
  const endpoint = message.type === 'text' 
    ? '/chat' 
    : '/media';

  const payload = {
    token: WHATSAPP_CONFIG.token,
    uid: WHATSAPP_CONFIG.uid,
    to: message.to,
    custom_uid: 'msg_' + Date.now(),
    ...(message.type === 'text' ? { text: message.text } : {
      url: message.url,
      caption: message.caption,
      filename: message.filename
    })
  };

  try {
    const response = await axios.post(
      `${WHATSAPP_CONFIG.apiUrl}${endpoint}`,
      payload
    );

    console.log('Respuesta de Waboxapp:', {
      status: response.status,
      data: response.data
    });
    
    return {
      success: true,
      messageId: response.data?.custom_uid,
      status: response.data?.success ? 'enviado' : 'fallido'
    };
  } catch (error: any) {
    // Registra el error COMPLETO
    console.error('Error detallado:', {
      status: error.response?.status,
      data: error.response?.data,
      config: {
        url: error.config?.url,
        data: error.config?.data
      }
    });
    const errorMessage = error.response?.data?.error || 
                        error.response?.data?.message || 
                        error.message;
    
    throw new Error(`WhatsApp API: ${errorMessage}`);
  }
};