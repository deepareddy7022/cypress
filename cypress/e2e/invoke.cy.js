describe("invoke", () => {
    it("case 1", () => {

        //invoke is used to call jquery functions like .text(), val(), attr(), css, prop, removeattr()

        cy.visit("https://qavbox.github.io/demo/signup/")
        // cy.get('[for="email"]').then((label) => {
        //     cy.log(label.text())
        // })

        // cy.get('[for="email"]').invoke('text').then((label) => {//invoke text function
        //     cy.log(label)
        // })

        // cy.get("#username").type("deepa").invoke('val').then((value) => {
        //     cy.log(value)
        // })

        // cy.get("#ip").invoke('attr', "type").should('eq', 'checkbox')
        // cy.contains("Tutorials").invoke('attr', 'target').should('eq', '_blank')
        // cy.contains('Tutorials').invoke('removeAttr', 'target').click()

        // cy.get('[name="experience"]').first().check().invoke('prop', 'checked').should('eq', true)


        cy.get("select[name='sgender']").select('Female').then((val) => {
            expect(val.text()).to.eq("Female")
        })
    })
})