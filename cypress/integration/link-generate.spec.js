/// <reference types="cypress" />

describe("Link generate screen.", () => {
  it("must contain title contents, data entry field and send and copy button.", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=title]");
    cy.get("[data-cy=field]");
    cy.get("[data-cy=send]");
    cy.get("[data-cy=copy]");
  });

  it("it should be possible to enter a whatsapp number.", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=field]").type("85989587554");

    cy.get("[data-cy=send]").click();
  });

  it("it should be possible to insert a message.", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=field]").type("85989587554");

    cy.get("[data-cy=send]").click();
  });
});
