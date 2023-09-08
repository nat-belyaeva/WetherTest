/// <reference types="cypress"/>

describe('verify checkboxes', ()=> {
    it('check and validate checkbox',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#checkboxes [value="option-1"]').check({force: true}).should('be.checked')

        cy.get('#checkboxes [value="option-1"]').as('option-1')

        cy.get('@option-1').check().should('be.checked').and('have.value', 'option-1')
    })

    it('Uncheck and validate checkbox',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#checkboxes [value="option-1"]').check({force: true}).should('be.checked')

        cy.get('#checkboxes [value="option-3"]').as('option-3')

        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it('Check multiple checkboxes',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('input[type="checkbox"]').as('allOptions')

        cy.get('@allOptions').each(($el) => {
             cy.wrap($el).check().should('be.checked')
        })
    })
})

describe('verify radio buttons and dropdowns', ()=> {
    it('check and validate radiobuttons',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})


        cy.get('#radio-buttons').find('type="radio"').first().check().should('be.checked')


    })

    it.only('Check dropdowns',()=> {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
        })
})
