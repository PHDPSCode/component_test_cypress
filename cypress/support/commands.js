Cypress.Commands.add('accessFile', (
    file
) => {
    cy.viewport(1440, 900);
    cy.mount(file);
})