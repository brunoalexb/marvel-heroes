import axios from 'axios';

const PUBLIC_KEY = 'b03e76a304b21e7f69f815e7c21fcd29';
const PRIVATE_KEY = '911ce96dc299400b9e5bf8e1bc6edfa4c50f28fd'; // Use sua chave privada correta
const FIXED_TS = '1'; // Timestamp fixo
const FIXED_HASH = 'f6a27936ae606f0193e38ea2656383b7'; // Hash fixo

// Configuração da API com valores fixos
// Configuração da API com valores fixos
const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
      apikey: PUBLIC_KEY,
      ts: FIXED_TS,
      hash: FIXED_HASH,
    },
  });
  
  // Logando os parâmetros para verificar os valores
  api.interceptors.request.use((config) => {
    console.log('Requisição para Marvel API:', config.params);
    return config;
  });
  
  export default api;
  
