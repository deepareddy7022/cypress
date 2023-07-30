
describe("Alerts", () => {
    xit("alert-accept ", () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.get("#confirm").click()
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.contains("Press a button!")
        })
    })

    xit("alert- cancel", () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.get("#confirm").click()
        cy.on('window:confirm', () => false)
        cy.get("#Parademo").should('have.text', "You pressed Cancel!")
    })

    xit("alert- Prompt", () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.get("#confirm").click()
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Deepa")
        })
        cy.get("input[onClick='myFunctionPrompt()']").click()
        //cancel
        cy.on('window:prompt', () => false)
        cy.get("#Parademo").should('not.be.visible')


    })
    it("alert- auth", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin" } })
        cy.get(".example p").should('have.contain', "Congratulations")
    })

    it("alert- authURL", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get(".example p").should('have.contain', "Congratulations")
    })
})
