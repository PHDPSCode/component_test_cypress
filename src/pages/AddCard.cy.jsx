import React from 'react';
import AddCard from './AddCard';

const file = <AddCard />

describe('<AddCard />', () => {
  before(() => {
    cy.accessFile(file);
  });
  it('Validates error message with missing fields', () => {
    cy.contains('button', 'Adicionar Cartão').click();
  })
})