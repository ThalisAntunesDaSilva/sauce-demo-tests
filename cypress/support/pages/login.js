Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get("input[id=user-name]").type("standard_user");
  cy.get("input[id=password]").type("secret_sauce");
  cy.get("input[id=login-button]").click();

  // cy.contains("Confirmar").click();
});
