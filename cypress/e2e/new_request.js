const weightLossUserDetails = (flied, text) => {
  cy.contains(flied).should("be.visible").click();
  cy.get(".q-field__native").should("be.visible").type(text);
  cy.contains("Continue").should("be.enabled").click();
};

describe("new request", () => {
  it("user create a new request", () => {
    cy.loginWithCredentials();
    cy.get('[aria-label="Menu"]').should("be.visible").click();
    cy.get(".q-item__section")
      .contains("New Request")
      .should("be.visible")
      .click({ force: true });
    cy.get("body").click();
    cy.contains("Weight Loss Medication Request Form").click();
    weightLossUserDetails("First Name *", "Alex");
    weightLossUserDetails("Last Name *", "Hales");
    cy.contains("Date of Birth *").click();
    cy.get(".q-date__view").should("be.visible");
    cy.get(".q-date__navigation").find(".q-btn-item").eq(1).click();
    cy.contains("Mar").click();
    cy.get(".q-date__navigation").find(".q-btn-item").eq(4).click();
    cy.get(".col-auto").first().click();
    cy.contains("2000").click();
    cy.get(".q-date__calendar-days")
      .find(".q-date__calendar-item--in")
      .contains("2")
      .click({ force: true });
    cy.contains("Continue").should("be.enabled").click();
    weightLossUserDetails("Sex *", "Male");
    weightLossUserDetails("Email *", "alexhales@gmail.com");
    weightLossUserDetails("Phone *", "9851358798");
    weightLossUserDetails("Address *", "pune");
    weightLossUserDetails("City *", "Pune");
    weightLossUserDetails("State *", "Maharashtra");
    weightLossUserDetails("Zip Code *", "411001");
    weightLossUserDetails("Weight, pounds *", "75");
    weightLossUserDetails("Height, inches *", '5.5"');
    cy.get('[data-testid="submit-button"]').should("be.enabled").click();
    cy.get('[data-testid="submit-form-dialog-submit-button"]')
      .should("be.visible")
      .click();
    cy.contains("Thank you for your submission").should("exist");
    cy.contains("Close").should("be.visible").click();
    cy.get('[aria-label="Menu"]').should("be.visible").click();
    cy.get(".q-item__section")
      .contains("My Requests")
      .should("be.visible")
      .click({ force: true });
    cy.get("body").click();
    cy.get(".q-td.text-left").should("be.visible");
    cy.get(".q-table__sort-icon.q-table__sort-icon--left").first().dblclick();
    cy.get(".q-td.text-left").first().click();
    cy.contains("alexhales@gmail.com").should("be.visible");
    cy.contains("alex").should("be.visible");
    cy.logout();
  });
});
