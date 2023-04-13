import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("o usuário faz o login", () => {
  cy.login();
});

When("o usuário clica em Add to Cart para os itens desejados", () => {
  cy.addItemsToCart();
});

And("o usuário navega para página do carrinho", () => {
  cy.navigateToCart();
});

And("o usuário clica em um item aleatório", () => {
  cy.navigateToRandomProduct();
});

Then("o item adicionado deve estar visível", () => {
  cy.isVisibleItemCart();
});

And("o item deve ser adicionado ao ícone da navbar", () => {
  cy.isVisibleCartButton();
});

And("o usuário remove os itens", () => {
  cy.removeItemsToCart();
});

When("o usuário ve o item e click em Add to Cart", () => {
  cy.seeItemAndAddCart();
});

When("o usuário ve o item e adiciona e remove item", () => {
  cy.seeItemAndRemoveToCart();
});

Then("o item adicionado não deve estar visível", () => {
  cy.isNotVisibleItemCart();
});

And("o item não deve estar adicionado ao ícone da navbar", () => {
  cy.isNotVisibleCartButton();
});
