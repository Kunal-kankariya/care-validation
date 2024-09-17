// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginWithCredentials", (username, passwrod) => {
  cy.visit("/");
  cy.get('[data-testid="login-with-password"]').should("be.visible").click();
  cy.get('[data-testid="email"]')
    .should("be.visible")
    .type("qa+employee@carevalidate.com");
  cy.get('[data-testid="password"]')
    .should("be.visible")
    .type("bLPgk5tr7D3ZqpXvV@aNKz");
  cy.get('[data-testid="continue"]').should("be.enabled").click();
  cy.contains("QA employee (QA Interview)").should("exist");
});

Cypress.Commands.add("logout", () => {
  cy.get('[data-testid="right-menu"]').click();
  cy.contains("Log out").click();
  cy.contains("Welcome back! Please enter your details.").should("exist");
});
