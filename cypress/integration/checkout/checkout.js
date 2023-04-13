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

And("clico em checkout", () => {
  cy.navigateToCheckout();
});

And("preencho minhas informações", () => {
  cy.fillFormCheckout();
});

And("não preencho minhas informações", () => {
  cy.notFillFormCheckout();
});

And("clico em cancelar", () => {
  cy.clickCancelCheckout();
});

Then("devo ir para a home", () => {
  cy.inHome();
});

Then("deve aparecer uma mensagem de erro ao preencher informações", () => {
  cy.seeMessageError();
});

Then("checo as informações da compra", () => {
  cy.seeStepTwoCheckout();
});

And("o sistema me retorna agradecendo a compra", () => {
  cy.seeFeedback();
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
