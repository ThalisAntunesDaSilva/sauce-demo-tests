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

And("o usuário clica em checkout", () => {
  cy.navigateToCheckout();
});

And("o usuário preenche as informações", () => {
  cy.fillFormCheckout();
});

And("o usuário não preenche as informações", () => {
  cy.notFillFormCheckout();
});

And("o usuário clica em cancelar", () => {
  cy.clickCancelCheckout();
});

Then("o sistema redireciona para a home", () => {
  cy.inHome();
});

Then(
  "o sistema deve apresentar uma mensagem de erro ao preencher informações",
  () => {
    cy.seeMessageError();
  }
);

Then("o usuário checa as informações da compra", () => {
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
