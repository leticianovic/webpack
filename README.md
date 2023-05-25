# WEBPACK
`https://webpack.js.org/`

- É um empacotador de módulos criado para agrupar arquivos JavaScript que estão sendo usados em um navegador. Uma funcionalidade importante é transformar, agrupar ou empacotar qualquer recurso.
- Utilizado por diversos frameworks modernos como o React, Angular...
- Trabalha com o Node.js

## Instalação
- Iniciar o projeto no diretório:
    `npm init -y`

- Instalar o Webpack como dependência de desenvolvimento
    `npm install --save-dev webpack webpack-cli`

- Executar o comando "npx webpack", faz com que receba o script src/index.js como ponto de entrada e gerará dist/main.js como saída. O npx, executa o binário webpack ( ./node_modules/.bin/webpack):
    `npx webpack --config webpack.config.js`