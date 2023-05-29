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

## Trabalhando com HTML
- É necessário trabalhar com plugin para ampliar as possibilidades de uso, instalação:
    `npm install --save-dev html-webpack-plugin`

## Adicinando CSS
- Para trabalhar com estilos também compensa adicionar algumas extensões.

 - node-sass: compilador de sass para node
 - sass-loader: carrega para o Webpack compilar
 - style-loader: injeta estilos na árvore de objetos (DOM)
 - css-loader: interpreta diretivas do CSS (import,..)
 - extract: extrai CSS do JS
    `npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin`
 - Sistema de módulos
 - Gerenciamento de dependências
 - Desenvolvimento x Produção

- Cria um diretório (build) com uma compilação de produção do seu aplicativo: `npm run build`