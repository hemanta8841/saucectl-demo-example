import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open cypress actions page', () => {
  cy.visit('https://example.cypress.io/commands/actions');
});

Then(`I enter {string} as the email address`, (email) => {
  cy.get('.action-email')
      .type(email).should('have.value', email);
});


Given('I open amex home page', () => {
  cy.visit('https://www.americanexpress.com/');
});

Then(`I should see correct title`, () => {
  cy.title().contains('American Express')
});
