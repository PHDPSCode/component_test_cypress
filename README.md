
# Cypress Component Testing Portfolio (EN_US)

![Cypress](https://img.shields.io/badge/Cypress-%3E13.0-blue?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Project Overview

This repository serves as a practical portfolio for Component Testing using Cypress. The project was developed alongside the Udemy course **"Testando Componentes com Cypress"** (Testing Components with Cypress), with the goal of applying and demonstrating automation best practices in a real-world context by testing UI components in isolation.

## Key Concepts and Skills Demonstrated

* **Component Mounting:** Using the `cy.mount()` command to render individual components within the Cypress test runner.
* **User Interaction Simulation:** Triggering events like `.click()`, `.type()`, and `.blur()` to simulate user behavior and validate component reactivity.
* **Props and State Testing:** Validating component behavior and rendering when passed different `props` (properties), such as `isLoading`, `color`, `disabled`, etc.
* **Comprehensive Assertions:** Detailed verification of UI states, including visibility, text content (with normalization using `.trim()`), attributes (`disabled`), and CSS properties.
* **Custom Commands:** Creating custom commands (e.g., `cy.mountWithDefaults`) to standardize test setups (like the viewport), promoting code reusability (DRY principle), and improving test readability.
* **Robust Selectors:** Prioritizing test-specific selectors (`data-cy`) and functional selectors (`cy.contains`) over brittle selectors based on style classes or DOM structure.
* **Conditional Testing:** Implementing logic to handle different application states and ensure test resilience.

## Technologies Used

* [Cypress](https://www.cypress.io/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://react.dev/) (or your framework of choice)
* [Node.js](https://nodejs.org/en)

## Getting Started

Follow the steps below to run the component tests locally.

### Prerequisites

* Node.js (version 18 or higher)
* npm

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/PHDPSCode/component_test_cypress.git](https://github.com/PHDPSCode/component_test_cypress.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd component_test_cypress
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Open Cypress in Component Testing mode:**
    ```bash
    npx cypress open --component
    ```
4.  **Abra o Cypress no modo de Teste de Componentes:**
    ```bash
    npx cypress open --component
    ```
