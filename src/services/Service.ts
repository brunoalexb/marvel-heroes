import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const consultar = async (url: string, setDados: Function) => {
    try {
        const resposta = await api.get(url); 
        setDados(resposta.data.data.results); 
      } catch (error) {
        console.error("Erro ao consultar a API:", error);
      }
    };