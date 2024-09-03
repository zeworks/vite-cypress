import React from 'react'
import { Button } from '../Button/Button'

describe('button component', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />)
  })

  it("renders the button", () => {
    cy.mount(<Button>Click me</Button>)
    cy.get("button").should("exist")
    cy.get("button").contains("Click me")
  })

  it("calls the onClick function when clicked", () => {
    // on click show an alert
    cy.mount(<Button onClick={() => alert("clicked")}>Click me</Button>)
    cy.get("button").click()
    cy.on("window:alert", (str) => {
      expect(str).to.equal("clicked")
    })
  })

  it("renders the button with the correct class", () => {
    cy.mount(<Button className='button'>Click me</Button>)
    cy.get("button").should("have.class", "button")
  })
})
