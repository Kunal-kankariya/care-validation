const clickAndAddDetail = (flied, text) => {
  cy.clickOptionWithText(flied);
  cy.ensureElementPresent(".q-field__native").type(text);
  cy.clickOptionWithText("Continue");
};

describe("New request", () => {
  it("user create a new request", () => {
    cy.loginWithCredentials();
    cy.clickOptionWithElement('[aria-label="Menu"]');
    cy.selectAcomodations("New Request");
    cy.clickOptionWithText("Weight Loss Medication Request Form");
    clickAndAddDetail("First Name *", "Alex");
    clickAndAddDetail("Last Name *", "Hales");
    cy.clickOptionWithText("Date of Birth *");
    cy.ensureElementPresent(".q-date__view");
    cy.getElement(".q-date__navigation").find(".q-btn-item").eq(1).click();
    cy.clickOptionWithText("Mar");
    cy.getElement(".q-date__navigation").find(".q-btn-item").eq(4).click();
    cy.getElement(".col-auto").first().click();
    cy.clickOptionWithText("2000");
    cy.getElement(".q-date__calendar-days")
      .find(".q-date__calendar-item--in")
      .contains("2")
      .click({ force: true });
    cy.clickOptionWithText("Continue");
    clickAndAddDetail("Sex *", "Male");
    clickAndAddDetail("Email *", "alexhales@gmail.com");
    clickAndAddDetail("Phone *", "9851358798");
    clickAndAddDetail("Address *", "pune");
    clickAndAddDetail("City *", "Pune");
    clickAndAddDetail("State *", "Maharashtra");
    clickAndAddDetail("Zip Code *", "411001");
    clickAndAddDetail("Weight, pounds *", "75");
    clickAndAddDetail("Height, inches *", '5.5"');
    cy.ensureElementEnabled('[data-testid="submit-button"]');
    cy.ensureElementPresent(
      '[data-testid="submit-form-dialog-submit-button"]'
    ).click();
    cy.ensureTextPresent("Thank you for your submission");
    cy.clickOptionWithText("Close");
    cy.clickOptionWithElement('[aria-label="Menu"]');
    cy.selectAcomodations("My Requests");
    cy.ensureElementPresent(".q-td.text-left");
    cy.getElement(".q-table__sort-icon.q-table__sort-icon--left")
      .first()
      .dblclick();
    cy.getElement(".q-td.text-left").first().click();
    cy.ensureTextPresent("alexhales@gmail.com");
    cy.ensureTextPresent("alex");
    cy.logout();
  });
});
