Cypress.Commands.add("seeStepTwoCheckout", () => {
  cy.get("#checkout_summary_container").should("be.visible");

  cy.get(".summary_info").should("be.visible");

  cy.get('[data-test="finish"]').click();
});

Cypress.Commands.add("clickCancelCheckout", () => {
  cy.get('[data-test="cancel"]').click();
});
