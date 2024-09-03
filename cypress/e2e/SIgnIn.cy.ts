describe("sign in screen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it("visit the page and get the input fields", () => {
    cy.get("h1").should("contain", "Sign In")
    cy.get("input[type=email]").should("exist")
    cy.get("input[type=password]").should("exist")
    cy.get("button").should("contain", "Sign In")
    cy.get("button[type=submit]").should("exist")
  })

  it("visit the page and fill the inputs", () => {
    cy.get("input[type=email]").as("Email")
    cy.get("input[type=password]").as("Password")
    cy.get("button[type=submit]").as("Button")

    cy.get("@Email").type("test@mail.com")
    cy.get("@Email").should("have.value", "test@mail.com")
    
    cy.get("@Password").type("password")
    cy.get("@Password").should("have.value", "password")

    cy.get("@Button").click()

    cy.get(".message--submitting").should("exist")

    cy.wait(3000).then(() => {
      cy.get(".message--submitting").should("not.exist")
      cy.get(".message--submitted").should("exist")
      cy.get(".message--submitted").should("have.text", "Signed In!")
    })
  })
})
