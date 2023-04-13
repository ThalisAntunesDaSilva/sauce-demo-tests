Cypress.Commands.add("fillFormCheckout", () => {
  cy.get('[data-test="firstName"]').type("Fulano");
  cy.get('[data-test="lastName"]').type("da Silva");
  cy.get('[data-test="postalCode"]').type("81930158");

  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add("notFillFormCheckout", () => {
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add("seeMessageError", () => {
  cy.get(".error-message-container").should("be.visible");
});
