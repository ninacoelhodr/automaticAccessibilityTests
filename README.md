# Automatic Accessibility Tests

Este projeto utiliza o Cypress, uma ferramenta de teste end-to-end, para realizar testes automatizados de acessibilidade em aplicações web. O objetivo é identificar problemas de acessibilidade nas páginas e garantir conformidade com as diretrizes de acessibilidade, promovendo uma melhor experiência para todos os usuários.

## Funcionalidades

- Testes automatizados de acessibilidade.

- Integração com a biblioteca [axe-core](https://github.com/dequelabs/axe-core) para análise de acessibilidade.

- Estrutura personalizável para ampliar os testes conforme necessário.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- Node.js (versão 12 ou superior).

## Instalação

- Clone este repositório:
- Navegue até o diretório do projeto:
- Instale as dependências do projeto:

```
npm install
```

## Como Executar os Testes

- Abra a interface gráfica do Cypress:

```
npx cypress open
```

- Na interface, selecione o teste que deseja executar.

## Estrutura do Projeto

`cypress/`

- Contém os testes automatizados e os arquivos de suporte.

`cypress.config.js`

- Arquivo de configuração do Cypress.

`package.json`

- Lista as dependências do projeto.
