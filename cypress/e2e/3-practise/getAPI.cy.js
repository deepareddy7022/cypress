describe("API Testing", () => {
    it("GET API", () => {

        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer 5d646d3cfeb4020346b4a91a90a63681c2ae438724cd4162eb9bff7242db0501"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.be.eq(200)
            expect(response.body[0].name).to.be.eq("Deepa")
            expect(response.body[0]).has.property("email", "Macy_Purdy@hotmail.com")
        })
    })

    xit("GET particular id", () => {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users/3962299",
            headers: {
                Authorization: "Bearer 5d646d3cfeb4020346b4a91a90a63681c2ae438724cd4162eb9bff7242db0501"
            }
        }).then((response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.name).to.be.eq('Aaryan Gandhi')
        })

    })
})