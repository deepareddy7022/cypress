
import { faker } from '@faker-js/faker';
let email = faker.internet.email()

describe("VAlidate POST", () => {
    it("POST", () => {
        cy.fixture('postUsers').then((payload) => {
            cy.request({
                method: "POST",
                failOnStatusCode: false,
                url: "https://gorest.co.in/public/v2/users",
                headers: {
                    "Authorization": "Bearer 5d646d3cfeb4020346b4a91a90a63681c2ae438724cd4162eb9bff7242db0501"
                },
                body: {
                    "name": payload.name,
                    "email": email,
                    "gender": payload.gender,
                    "status": payload.status

                }

            }).then((res) => {
                expect(res.status).to.be.eq(201)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('email', email)
                expect(res.body).has.property('gender', payload.gender)
                expect(res.body).has.property('status', payload.status)
            }).then((res) => {
                cy.log(JSON.stringify(res))

                const id = res.body.id
                cy.request({
                    method: "GET",
                    failOnStatusCode: false,
                    url: "https://gorest.co.in/public/v2/users/" + id,
                    header: {
                        "Authorization": "Bearer 5d646d3cfeb4020346b4a91a90a63681c2ae438724cd4162eb9bff7242db0501"
                    }

                }).then((res) => {
                    cy.log(JSON.stringify(res))
                    expect(res.body.id).to.be.equal(id)
                })
            })

        })


    })
})