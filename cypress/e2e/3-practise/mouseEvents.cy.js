require('@4tw/cypress-drag-drop')

describe("mouseevents", () => {

    xit("mouseOver", () => {
        cy.visit("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").click()
        // cy.get('a:contains("Desktops",{force:true})').click()

    })
    xit("rightClick", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-paste').should('be.visible')
        //
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one.btn.btn-neutral').rightclick({ multiple: true })


    })

    xit("doubleCLick", () => {
        cy.visit("")
    })



    xit("drag and drop", () => {
        cy.visit("https://qavbox.github.io/demo/dragndrop/")
        cy.get('#draggable').drag('#droppable', { force: true })
    })

    xit("scrollIntoView", () => {

    })

    it("iFrames", () => {
        cy.visit("https://qavbox.github.io/demo/iframes/")
        cy.get("#Frame2").its('0.contentDocument.body').find('#frameinput').type("frametesting")
        cy.get("#Frame2").its('0.contentDocument.body').find('a').contains("Category3").invoke('removeAttr', 'target').click()
    })
})