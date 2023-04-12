import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I make to login", () => {
  cy.login();
});
