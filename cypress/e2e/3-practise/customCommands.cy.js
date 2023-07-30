import SignUpPage from "../../support/pageObjects/signUpPage"
const login = new SignUpPage()

describe("CC", () => {
    beforeEach(() => {
        cy.visit("https://qavbox.github.io/demo/signup/")

    })


    it("cc1", () => {

        login.signUp("Deepa", "deepa@gmail.com", "8987675744", "Female", "docker")

    })

    it("cc2", () => {
        // cy.visit("https://qavbox.github.io/demo/signup/")
        login.userName.type("deepa")
        login.Email.type("deepa@gmail.com")
        login.tel.type("9987876767")
        login.fax.should('be.disabled')
        login.gender.select("Female")
        login.setexperience("five").check()
        login.skills.select("docker")
        login.submit.click()

    })


    it("cc3", () => {
        cy.fixture('login').then((data) => {
            // cy.visit("https://qavbox.github.io/demo/signup/")
            login.userName.type(data.name)
            login.Email.type(data.email)
            login.tel.type(data.tel)
            login.fax.should('be.disabled')
            login.gender.select(data.gender)
            login.setexperience("five").check()
            login.skills.select(data.skills)
            login.submit.click()

        })


    })
})