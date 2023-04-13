Cypress.Commands.add("seeFeedback", () => {
  cy.get("#checkout_complete_container").should("be.visible");
});
