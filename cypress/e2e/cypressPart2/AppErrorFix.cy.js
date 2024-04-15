/// <reference types="cypress"/>

describe('Fixing error generating from Application not from Cypress code', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Fixing App error', ()=> {
        cy.visit('https://chercher.tech/practice/popups#')
    })
})

describe("Cypress Exception Handling", () => {
    it("Fail on status code", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1", { failOnStatusCode: false } )
    })
})
describe("Cypress Exception Handling", () => {
    it("Fail on status code by calling api", () => {
        cy.request(
            {url:"https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1",
                failOnStatusCode: false, })
    })  })

describe('handle js Alerts', ()=> {
    it('Confirm js alert contains the correct test',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
cy.get('#button1').click({force:true})

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it('Validate js Confirm alert box works correctly when clicking ok',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click({force:true})

        cy.on('window:alert', (str) => {
            return true
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it('Validate js Confirm alert box works correctly when clicking Cancel',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click({force:true})

        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only('Validate js Confirm alert box using a stub',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub) //when the Even is fired , the stub is then going to store the result


        cy.get('#button4').click({force:true}).then(()=> { //then click th btn to trigger js alert then created the promise
            expect(stub.getCall(0)).to.be.calledWith('Press a button!') //then use the result stored in out stub by using getCall with index of 0
        }).then(()=> {
            return true
        }).then(()=> {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})