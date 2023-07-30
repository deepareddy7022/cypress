import 'cypress-file-upload'

describe("File Upload", () => {

    it("file upload ", () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("Deepa_reddy_cv.pdf")
        cy.get("#file-submit").click()
        cy.get(".example h3").should('have.text', "File Uploaded!").screenshot("Success")
    })
    xit("file uplaod- Rename ", () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: "Deepa_reddy_cv.pdf", fileName: "test.pdf" })
        cy.get("#file-submit").click()
        cy.get(".example h3").should('have.text', "File Uploaded!")
    })

    xit("drag and drop upload", () => {

        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Deepa_reddy_cv.pdf", { subjectType: 'drag-n-drop' })

        cy.get(".dz-filename span").contains("Deepa")
    })

    it("multiple file upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.screenshot("upload page")
        cy.get("#filesToUpload").attachFile(["test1.pdf", "test2.pdf"])
        cy.get('#fileList > li').should('not.contain.text', "No")
    })


})