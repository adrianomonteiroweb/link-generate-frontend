/// <reference types="cypress" />

const typing = (content) => {
  cy.get("[data-cy=field]").type(content);

  cy.get("[data-cy=send]").click();
};

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

    typing("85989587554");
  });

  it("it should be possible to insert a message.", () => {
    cy.visit("http://localhost:3000");

    typing("85989587554");
  });
});

describe("application operations.", () => {
  it("must contain the user number when submitting.", () => {
    cy.visit("http://localhost:3000");

    typing("85989587554");

    cy.get("[data-cy=phone]").contains("(85) 9 8958-7554");
  });

  it("must contain the user's message when sending.", () => {
    cy.visit("http://localhost:3000");

    typing("Olá");

    cy.get("[data-cy=user-message]").contains("Olá");
  });
});
