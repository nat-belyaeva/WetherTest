/// <reference types="cypress"/>

describe("Reviewing cy.task()", ()=> {
    it('Cy task', ()=> {
        //event name, arg
        cy.task('myLog', 'hello!)'). then((message) =>
            cy.log(message)
        )
    })

    it('Counting number of files', () => {
        cy.task('countFiles', 'cypress/pageObjects').then((count) => {
            cy.log(count)
            expect(count).to.equal(19)
        })
    })

    it('Saving an HREF', ()=> {
        cy.task('setHref', 'https://www.cypress-dx.com')
    })

    it('Get the saved HREF', () => {
        cy.task('getHref').then((href) => {
            cy.log(href)
        })
    })
})