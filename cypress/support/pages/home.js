Cypress.Commands.add("addItemsToCart", () => {
  cy.contains("Add to cart").click();
  cy.contains("Add to cart").should("be.visible");
  cy.contains("Add to cart").click();
  cy.contains("Add to cart").should("be.visible");
  cy.contains("Add to cart").click();
});

Cypress.Commands.add("isVisibleCartButton", () => {
  cy.get(".shopping_cart_badge").should("be.visible");
});

Cypress.Commands.add("isNotVisibleCartButton", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

Cypress.Commands.add("inHome", () => {
  cy.get(".title").should("be.visible");
});

Cypress.Commands.add("removeItemsToCart", () => {
  cy.contains("Remove").click();
  cy.contains("Remove").should("be.visible");
  cy.contains("Remove").click();
  cy.contains("Remove").should("be.visible");
  cy.contains("Remove").click();
});

Cypress.Commands.add("navigateToCart", () => {
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("navigateToRandomProduct", () => {
  cy.get(".inventory_item_img > a").then(($lista) => {
    const totalItens = $lista.length;
    const indiceAleatorio = Math.floor(Math.random() * totalItens);
    cy.get(".inventory_item_img > a").eq(indiceAleatorio).click();
  });
});
