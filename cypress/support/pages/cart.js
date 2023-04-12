Cypress.Commands.add("isVisibleItemCart", () => {
  cy.get(".cart_list").should("be.visible");
});

Cypress.Commands.add("removeItem", () => {
  cy.contains("Remove").should("be.visible");
  cy.contains("Remove").click();
});

Cypress.Commands.add("navigateToShopping", () => {
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("navigateToCheckout", () => {
  cy.get(".shopping_cart_link").click();
});
