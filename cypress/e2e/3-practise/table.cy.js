//var customerinfo


// beforeEach(function () {

//     cy.fixture("example").then(function (data) {

//         customerinfo = data

//     })
// })

describe("Validate locators", () => {

    xit("CSS", () => {
        cy.visit("https://qavbox.github.io/demo/webtable/")

        cy.get("#table01 thead tr th").should('have.length', 4)

        //find count of all rows

        cy.get("#table01 tbody tr").should("have.length", 3)

        //Print secific row data

        cy.get("#table01 tbody tr:nth-child(1) td").each(($el) => {

            cy.log($el.text())
        })
        //or

        cy.get("#table01 tbody tr").eq(1).within(() => {

            cy.get('td').each(($cell) => {
                cy.log($cell.text())
            })
        })

        //fetch all cell data


        cy.get("#table01 tbody tr").each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($cell) => {
                    cy.log($cell.text())
                })

            })


        })


        cy.get("#table01 tbody tr").each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($cell) => {
                    if ($cell.text() === "GUI") {
                        cy.get('td').eq(4).click()
                    }

                })
            })

        })


    })



    xit("fixture", () => {
        cy.visit("https://www.google.com")
        cy.log(customerinfo.email)


    })

    it("fixture", () => {
        cy.visit("https://www.google.com")
        cy.fixture("users").then((data) => {
            // data = JSON.parse(data);

            data.forEach((userData) => {
                cy.log(userData.name)
            })

        })




    })
})