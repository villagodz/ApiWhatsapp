// validation.util.ts (CORRECCIÓN)
export const validateWhatsAppRequest = (to: string, content: string) => {
  if (!to) throw new Error('Número de destino requerido');
  
  const cleanTo = to.replace(/^\+/, '');
  
  // Permite números internacionales (8-15 dígitos)
  if (!/^\d{8,15}$/.test(cleanTo)) {
    throw new Error(`Formato inválido: ${cleanTo}. Use 5959XXXXXXX`);
  }

  if (content && !content.trim()) throw new Error('Contenido requerido');
};