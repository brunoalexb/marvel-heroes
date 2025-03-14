import axios from "axios";

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b03e76a304b21e7f69f815e7c21fcd29&hash=911ce96dc299400b9e5bf8e1bc6edfa4c50f28fd'
})

export const consultar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}