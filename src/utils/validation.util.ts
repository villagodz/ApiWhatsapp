export const validateWhatsAppRequest = (to: string, content: string) => {

  if (!to) throw new Error('Número de destino requerido');

   // Limpia el número
  const cleanTo = to.replace(/^\+/, '');
  
  if (!/^\d{10,15}$/.test(cleanTo)) {
    throw new Error('Formato de teléfono inválido. Ejemplo válido: 595983475319');
  }

  if (content && !content.trim()) throw new Error('Contenido del mensaje requerido');
  
};