import { Router } from 'express';
import { sendDocument, sendTextMessage } from '../controllers/whatsapp.controller';


const router = Router();

router.post('/text', sendTextMessage);
router.post('/document', sendDocument);

export default router;