describe("read/write file", () => {

    it("Write", () => {

        cy.writeFile("search.text", "Hello World \n")
        cy.writeFile("search.text", "Welcome home ! ", { flag: 'a+' })
        cy.writeFile("search.text", "Deepa Here", { flag: 'a+' })
        cy.writeFile('sample.json', '{"name": "Deepa", "phone":"8987876765"}')
        cy.log(Cypress.env()) // {login_url: '/login', products_url: '/products'}
        cy.log(Cypress.env('login_url'))
        cy.log(Cypress.env('products_url'))
    })

    xit("Read", () => {

        cy.readFile("search.text").should('have.contain', "Welcome")
        cy.readFile("sample.json").then((data) => {
            cy.log(data.name)
            cy.log(data.phone)
            cy.log(data.message)
        })
    })
})