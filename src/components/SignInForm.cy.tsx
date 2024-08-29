import React from 'react'
import { SignInForm } from './SignInForm'

const email = "test@example.com"
const password = "password"

describe('Sign in form', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignInForm />)
  })

  it("set the email and password", () => {
    cy.mount(<SignInForm />)
    cy.get("input[type=email]").type(email)
    cy.get("input[type=password]").type(password)
  })

  it("submit the form", () => {
    cy.mount(<SignInForm />)
    cy.get("input[type=email]").type(email)
    cy.get("input[type=password]").type(password)
    cy.get("button[type=submit]").click()
  })

  it("shows a message when submitting and after 3 seconds hides it", () => {
    cy.mount(<SignInForm />)
    cy.get("input[type=email]").type(email)
    cy.get("input[type=password]").type(password)
    cy.get("button[type=submit]").click()
    cy.get(".message--submitting").should("exist")

    cy.wait(3000).then(() => {
      cy.get(".message--submitting").should("not.exist")
    })
  })

  it("shows a message when submitted after 3 seconds", () => {
    cy.mount(<SignInForm />)
    cy.get("input[type=email]").type(email)
    cy.get("input[type=password]").type(password)
    cy.get("button[type=submit]").click()
    cy.get(".message--submitted").should("not.exist")

    cy.wait(3000).then(() => {
      cy.get(".message--submitted").should("exist")
    })
  })

  it("hides the submitted message after 3 seconds", () => {
    cy.mount(<SignInForm />)
    cy.get("input[type=email]").type(email)
    cy.get("input[type=password]").type(password)
    cy.get("button[type=submit]").click()
    cy.get(".message--submitted").should("not.exist")

    cy.wait(3000).then(() => {
      cy.get(".message--submitted").should("exist")
    })

    cy.wait(3000).then(() => {
      cy.get(".message--submitted").should("not.exist")
    })
  })
})
