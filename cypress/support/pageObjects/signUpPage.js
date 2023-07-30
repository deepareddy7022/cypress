class signUpPage {

    get userName() {
        return cy.get("#username")
    }

    get Email() {
        return cy.get("#email")
    }
    get tel() {
        return cy.get("#tel")
    }
    get fax() {
        return cy.get("#fax")
    }
    get gender() {
        return cy.get("[name='sgender']")
    }

    setexperience(exp) {
        return cy.get("[value='" + exp + "']")
    }

    get skills() {
        return cy.get("#tools")
    }

    get submit() {
        return cy.get("#submit")
    }

    signUp(name, email, tel, gender, skill) {
        this.userName.type(name)
        this.Email.type(email)
        this.tel.type(tel)
        this.fax.should('be.disabled')
        this.gender.select(gender)
        this.setexperience("five").check()
        this.skills.select(skill)
        this.submit.click()
    }


}
export default signUpPage

