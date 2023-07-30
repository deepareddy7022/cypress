describe("Validate locators", () => {

    it("CSS", () => {
        let brokenLinks = 0
        let activeLinks = 0
        //and, or, contains, get, find, 
        cy.visit("https://qavbox.github.io/demo/links/")
        cy.get('a').each(($link) => {
            const href = $link.attr('href')
            if (href) {

                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {
                        cy.log(`***Broken links*** ${href}`)
                        brokenLinks++

                    }
                    else {
                        cy.log(`Active link ${href}`)
                        activeLinks++
                    }
                })
            }
        }).then(($links) => {

            const totalLinks = brokenLinks + activeLinks
            cy.log(`total: ${totalLinks}, brokenLinks: ${brokenLinks}, activeLinks: ${activeLinks}`)
        })



        //  cy.title().should('contain', "Registration Form")

        // cy.get("#username").type("Deepa Reddy")
        // cy.get("#username").blur()
        // cy.get("#username").focus()
        //cy.get('input[id *= "usern"]').type("Deepa")//contains
        //cy.get('input[id$="name"]').type("Reddy")//ends with
        // cy.get("input[id^='user']").type("Deepa Vamsi")//starts with 
        //cy.get("#mygroup+p")// gets first Paragraph which are siblings of mygroup
        //cy.get("#mygroup~p")// gets all paragraphs which are siblings of mygroup

        // cy.get("input").eq(3).type("8987676765")
        // cy.get("input[name= 'experience']").last().check().should("be.checked", true)
        // cy.get("input[value= 'five']").should("not.be.checked", true)
        // cy.get("input[id='ip']").first().check()
        // cy.get("input[id='ip']").last().check()
        // cy.get("input[id='ip']").first().uncheck().should("not.be.checked", true)
        //cy.get("input[id='ip']").check("apitesting").should("be.checked", true).and('have.value', "apitesting")
        // cy.get("input[id='ip']").check("apitesting").invoke('prop', "checked").then((myProp) => {
        //     cy.log(myProp)
        // })

        // cy.get("select[name='sgender']").select('Female').should('have.value', "female")//bytext


        cy.get("select[name='sgender']").select('Female').then((val) => {
            expect(val.text()).to.eq("Female")
        })

        // cy.get("select[name='sgender']").select('male')//byvalue
        // cy.get("select[name='sgender']").select(3).should('have.value', "na")//byIndex
        //  cy.get("select[name='sgender']").select([2, 3]).should('have.value', "na")//byIndex
        // cy.get("select[name='sgender']").select('na')
        // cy.get("[name='sgender']").find("option:selected").should('have.text', "Not Applicable")

        // cy.get("#tools").select(["Docker", "JMeter", "CodedUI"]).invoke('val').should('deep.equal', ['docker', 'jmeter', 'codedui'])

        // cy.get("#tools").select(["Docker", "JMeter", "CodedUI"]).find('option:selected').each(($el) => {

        //     cy.wrap($el).invoke('val').then((myVal) => {
        //         cy.log(myVal)

        //     })
        // })
        //cy.get("#tools").select(["Docker", "JMeter", "CodedUI"])


        // cy.get("input[id='ip']").check("apitesting").invoke('prop', "checked").should('have.value', 'true')
        // cy.get("input[id='ip']").check(["testng", "manualtesting", "java"])

        //cy.get("#username").type("deepa").invoke('val').then((myVal) => {
        //     cy.log(myVal)
        // })

        // cy.get("label[id='lblname']").invoke('text').then((myText) => {
        //     cy.log(myText)
        // })


        // cy.visit("https://qavbox.github.io/demo/listitems/")
        // cy.get("#mygroup").find("li:nth-child(0)").should("contain", "List Item 2")





    })
})