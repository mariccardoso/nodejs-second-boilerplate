# Node.js Second Boilerplate

Este é um projeto de boilerplate para um servidor básico em Node.js.

## Estrutura do Projeto

```
/nodejs-first-boilerplate
├── /node_modules
├── /src
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/nodejs-first-boilerplate.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd nodejs-first-boilerplate
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

Para iniciar o servidor, execute:
```sh
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Scripts

- `npm start`: Inicia o servidor.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload.

## Rotas

Este projeto inclui uma configuração básica de rotas utilizando o Express.js.

### Definindo Rotas

As rotas são definidas no arquivo `src/routes.js`. Aqui está um exemplo de como definir uma rota básica:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;
```

### Usando Rotas no Servidor

Para usar as rotas definidas, importe o arquivo de rotas no `src/index.js` e adicione-o ao aplicativo Express:

```javascript
const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
```

### Estrutura de Diretórios

A estrutura de diretórios para as rotas deve ser semelhante a esta:

```
/src
├── index.js
└── routes.js
```

### Adicionando Novas Rotas

Para adicionar novas rotas, basta criar novos métodos no arquivo `routes.js` ou criar novos arquivos de rotas e importá-los no `index.js`.

```javascript
router.post('/data', (req, res) => {
    // Lógica para lidar com a requisição POST
    res.send('Dados recebidos');
});
```

### Testando Rotas

Você pode testar suas rotas utilizando ferramentas como Postman ou Insomnia, ou ainda utilizando bibliotecas de teste como Mocha e Chai.


## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

