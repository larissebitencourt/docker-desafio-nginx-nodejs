# Módulo Docker - Desafio Nginx com Node Js - Full Cycle

📝 **Descrição do desafio**

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

**Full Cycle Rocks!**

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

🚀 **Tecnologias**

- Docker
- Node.js
- MySQL
- Nginx

✅ **Solução**

Executar o seguinte comando: `docker-compose up`

Após a subida dos containers, acessar: `http://localhost:8080/`

A cada atualização que a página tiver, meu nome será adicionado no banco de dados e apresentará os registros na tela.

<img width="315" alt="result" src="https://github.com/larissebitencourt/docker-desafio-nginx-nodejs/assets/26878743/f00c0677-c41b-411b-9534-9ff233aee4b3">

