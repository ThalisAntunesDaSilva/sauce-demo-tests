import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("o usuário faz o login", () => {
  cy.login();
});

When("o usuário clica em Add to Cart para os itens desejados", () => {
  cy.addItemsToCart();
});

And("navego para página do carrinho", () => {
  cy.navigateToCart();
});

And("o usuário clica em um item aleatório", () => {
  cy.navigateToRandomProduct();
});

Then("o item adicionado deve estar visível", () => {
  cy.isVisibleItemCart();
});

Then("o item deve ser adicionado ao ícone da navbar", () => {
  cy.isVisibleCartButton();
});
