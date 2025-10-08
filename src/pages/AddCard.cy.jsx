import React from "react";
import AddCard from "./AddCard";

const file = <AddCard />;
const alerts = [
  "Número do cartão é obrigatório",
  "Nome do titular é obrigatório",
  "Data de expiração é obrigatória",
  "CVV é obrigatório",
  "Selecione um banco",
];
const myCard = {
  number: "4242424242424242",
  holderName: "Pedro Silva",
  expirationDate: "12/31",
  cvv: "689",
  bank: "nubank",
};

describe("Validates <AddCard /> page", () => {
  beforeEach(() => {
    cy.accessFile(file);
  });

  it("Validates error message with missing fields", () => {
    cy.contains("button", "Adicionar Cartão").click();
    alerts.forEach((alert) => {
      cy.alertErrorMessage(alert);
    });
  });

  it("Validates new credit card registration", () => {
    cy.fillCardForm(myCard);
    cy.intercept("POST", "**/cards", (req) => {
      req.reply({
        statusCode: 201,
        body: myCard,
      });
    }).as("addCard");
    cy.submitCardForm();
    cy.wait("@addCard").its("response.statusCode").should("eq", 201);
    cy.get(".notice-success")
      .should("be.visible")
      .and("have.text", "Cartão cadastrado com sucesso!");
  });

  it("Validates new credit card registration with invalide name", () => {
    cy.fillCardForm({...myCard, holderName: "P"});
    cy.submitCardForm();
    cy.alertErrorMessage("Nome deve ter pelo menos 2 caracteres");
  });

  it("Validates new credit card registration with invalide expiration date", () => {
    cy.fillCardForm({...myCard, expirationDate: "13/31"});
    cy.submitCardForm();
    cy.alertErrorMessage("Data de expiração inválida ou vencida");
  });

  it("Validates new credit card registration with invalide cvv", () => {
    cy.fillCardForm({...myCard, cvv: "1"});
    cy.submitCardForm();
    cy.alertErrorMessage("CVV deve ter 3 ou 4 dígitos");
  });
});
