import { Request, Response } from 'express';
import { WHATSAPP_CONFIG } from '../config/whatsapp.config';
import { validateWhatsAppRequest } from '../utils/validation.util';
import { sendWhatsAppMessage } from '../services/whatsapp.service';

export const sendTextMessage = async (req: Request, res: Response) => {
  try {
    const { to, text } = req.body;
    
    validateWhatsAppRequest(to, text);
    
    const result = await sendWhatsAppMessage({
      to,
      text,
      type: 'text'
    });

    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const sendDocument = async (req: Request, res: Response) => {
  try {
    const { to, url, caption, filename } = req.body;
    
    validateWhatsAppRequest(to, url);
    console.log(url);
    
    const result = await sendWhatsAppMessage({
      to,
      url,
      caption: caption || 'Documento enviado',
      filename: filename || 'document.pdf',
      type: 'document'
    });
    

    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};