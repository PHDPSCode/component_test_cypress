Cypress.Commands.add('alertErrorMessage', (
    message
) => {
    cy.contains('.alert-error', message)
      .should('be.visible');
})

Cypress.Commands.add('fillCardForm', (
    card
) => {
    cy.get('[data-cy="number-input"]').type(card.number);
    cy.get('[data-cy="name-input"]').type(card.holderName);
    cy.get('[data-cy="expiration-input"]').type(card.expirationDate);
    cy.get('[data-cy="cvv-input"]').type(card.cvv);
    cy.get(`[data-cy="bank-${card.bank}"]`).click();
})

Cypress.Commands.add('submitCardForm', () => {
    cy.get('[data-cy="submit-button"]').click();
})