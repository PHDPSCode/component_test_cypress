## Portfólio de Testes de Componentes com Cypress (PT_BR)

![Cypress](https://img.shields.io/badge/Cypress-%3E13.0-blue?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Visão Geral do Projeto

Este repositório serve como um portfólio prático de Testes de Componentes utilizando Cypress. O projeto foi desenvolvido em conjunto com o curso **"Testando Componentes com Cypress"** da Udemy, com o objetivo de aplicar e demonstrar as melhores práticas de automação em um contexto real, testando componentes de UI de forma isolada.

## Principais Conceitos e Habilidades Demonstradas

* **Montagem de Componentes:** Utilização do comando `cy.mount()` para renderizar componentes individualmente no ambiente de testes do Cypress.
* **Simulação de Interações do Usuário:** Disparo de eventos como `.click()`, `.type()` e `.blur()` para simular o comportamento do usuário e validar a reatividade dos componentes.
* **Teste de Props e Estado:** Validação do comportamento e da renderização dos componentes ao receber diferentes `props` (propriedades), como `isLoading`, `color`, `disabled`, etc.
* **Asserções Abrangentes:** Verificação detalhada de estados da UI, incluindo visibilidade, conteúdo de texto (com normalização usando `.trim()`), atributos (`disabled`) e propriedades CSS.
* **Comandos Customizados:** Criação de comandos customizados (ex: `cy.mountWithDefaults`) para padronizar o setup dos testes (como o viewport), promovendo o reuso de código (princípio DRY) e melhorando a legibilidade.
* **Seletores Robustos:** Priorização de seletores específicos para testes (`data-cy`) e seletores funcionais (`cy.contains`) em detrimento de seletores frágeis baseados em classes de estilo ou estrutura do DOM.
* **Testes Condicionais:** Implementação de lógicas para lidar com diferentes estados da aplicação e garantir a resiliência dos testes.

## Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://react.dev/) (ou o framework de sua preferência)
* [Node.js](https://nodejs.org/en)

## Como Executar os Testes

Siga os passos abaixo para executar os testes de componentes localmente.

### Pré-requisitos

* Node.js (versão 18 ou superior)
* npm

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PHDPSCode/component_test_cypress.git](https://github.com/PHDPSCode/component_test_cypress.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd component_test_cypress
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
