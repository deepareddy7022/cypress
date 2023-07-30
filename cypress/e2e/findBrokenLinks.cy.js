describe("brokenLinks", () => {
    let brokenLinks = 0
    let activeLinks = 0

    it("find active and broken links", () => {
        cy.visit("https://qavbox.github.io/demo/links/")

        cy.get('a').each(($link) => {

            const href = $link.attr('href')
            if (href) {

                cy.request({ url: href, failOnStatusCode: false }).then((response) => {

                    if (response.status >= 400) {
                        cy.log("***Broken Links***", `${href}`)
                        brokenLinks++

                    }
                    else {
                        cy.log("***Active links***", `${href}`)
                        activeLinks++
                    }
                })
            }
        }).then(($links) => {
            const totalLinks = brokenLinks + activeLinks
            cy.log(`broken Links: ${brokenLinks}, active Links: ${activeLinks}, total Links:  ${totalLinks}`)
        })


    })
})