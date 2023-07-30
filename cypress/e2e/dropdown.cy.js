describe("dropdown", () => {

    it("general dropdown", () => {
        cy.visit("https://qavbox.github.io/demo/signup/")
        // cy.get('[name="sgender"]').select("Female").find('option:selected').should('have.text', "Female")
        // cy.get("[name='sgender']").select('male').should('have.value', "male")
        // cy.get("[name='sgender']").select('Not Applicable').should('have.value', "na")
        // cy.get("[name='sgender']").select('Not Applicable').find('option:selected').invoke('text').then(($text) => {
        //     cy.log($text)
        // })
        cy.get('[name="sgender"]').select(3)
        // cy.get('#tools').select("docker")
        cy.get('#tools').select(["Jenkins", "Postman", "JMeter"]).invoke('val').should('deep.equal', ["jenkins", "postman", "jmeter"])

        //cy.get('#tools').select(["Jenkins", "Postman", "JMeter"])//value

        cy.get('#tools').select(["Jenkins", "Postman", "JMeter"]).find('option:selected').each(($ele) => {
            cy.wrap($el).invoke('val').then(($myValue) => {
                cy.log($myValue)

            })

        })

    })
})