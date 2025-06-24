import axios from 'axios';

async function testConnection() {
  try {
    const response = await axios.get('https://api.waboxapp.com');
    console.log('Conexión exitosa:', response.status);
  } catch (error: any) {
    console.error('Error de conexión:', error.message);
    if (error.response) {
      console.error('Detalles:', error.response.data);
    }
  }
}

testConnection();