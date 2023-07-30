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

import SignUpPage from "../support/pageObjects/signUpPage.js"

Cypress.Commands.add('signUp', (name, email, tel, gender, skills) => {
    const SignUp = new SignUpPage()

    cy.log(`${skills}`)
    cy.visit("https://qavbox.github.io/demo/signup/")
    SignUp.userName.type(name)
    cy.get("#email").type(email)
    cy.get("#tel").type(tel)
    cy.get("#fax").should('be.disabled')
    cy.get("[name='sgender']").select(gender)
    cy.get("[name='experience']").first().check()
    cy.get("input[value='" + skills + "']").check()
    cy.get("#submit").click()
    cy.on('window:alert', (alert) => {
        expect(alert).to.contains("Registration Done!")
    })

})

///<reference types="Cypress"/>