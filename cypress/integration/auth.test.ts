describe("Authentication", () => {
  it("Account registration", () => {
    cy.visit("localhost:3000");
    cy.findByRole("button", { name: "Register" }).click();
    cy.findByPlaceholderText("Username").type("test account");
    cy.findByPlaceholderText("Email").type("test@account.com");
    cy.findByPlaceholderText("Password").type("testpass");
    cy.findByRole("button", { name: "Register!" }).click();
  });
});
