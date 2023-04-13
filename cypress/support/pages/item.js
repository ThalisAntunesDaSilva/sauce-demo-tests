Cypress.Commands.add("seeItemAndAddCart", () => {
  cy.get(".inventory_details_container").should("be.visible");
  cy.contains("Add to cart").click();
});

Cypress.Commands.add("seeItemAndRemoveToCart", () => {
  cy.get(".inventory_details_container").should("be.visible");
  cy.contains("Add to cart").click();
  cy.wait(1000);
  cy.contains("Remove").click();
});
