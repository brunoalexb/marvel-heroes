# Heroes App

## Sobre o Projeto
O **Heroes App** é uma aplicação web que permite aos usuários explorar os personagens do universo Marvel. Utilizando a [API da Marvel](https://developer.marvel.com/), o aplicativo exibe detalhes sobre cada personagem, incluindo informações como nome, descrição e imagem.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **Vite**: Ferramenta de build para desenvolvimento frontend rápido.
- **Yarn**: Gerenciador de pacotes para dependências do projeto.

## Funcionalidades

- Listagem de personagens da Marvel.
- Exibição de detalhes individuais de cada personagem.
- Busca por personagens.
- Interface responsiva e amigável.

## Como Executar o Projeto

### Pré-requisitos

- Yarn instalado globalmente (`npm install -g yarn`)
- Chave pública da [API da Marvel](https://developer.marvel.com/)
- criação do hash(https://xorbin.com/tools/md5-hash-calculator)

### Passos para rodar o projeto localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/heroes-app.git
   cd heroes-app
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

4. Acesse a aplicação no navegador:

   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

```
heroes-app/
├── public/           # Arquivos públicos
├── src/
│   ├── api.config/   # Configuração de chamadas à API
│   ├── assets/       # Imagens, fontes e outros arquivos estáticos
│   ├── components/   # Componentes reutilizáveis
│   ├── models/       # Definições de tipos e interfaces
│   ├── pages/        # Páginas da aplicação
│   ├── services/     # Comunicação com a API da Marvel
│   ├── App.tsx       # Componente raiz
│   ├── main.tsx      # Ponto de entrada do React
│   └── index.css     # Estilos globais
├── .env              # Variáveis de ambiente
├── package.json      # Dependências e scripts
├── yarn.lock         # Gerenciador de pacotes
└── vite.config.ts    # Configuração do Vite
```

## Endpoints da API da Marvel

Certifique-se de consultar a [documentação oficial da API da Marvel](https://developer.marvel.com/docs) para informações sobre os endpoints disponíveis.

### Exemplo de Chamada à API

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

export const getCharacters = async () => {
  const response = await api.get(`/characters`, {
    params: {
      apikey: process.env.VITE_MARVEL_API_KEY,
    },
  });
  return response.data;
};
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com 💻 por Bruno Alexandre.
