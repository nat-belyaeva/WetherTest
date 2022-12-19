/// <reference types=”Cypress”/>

describe('learning BDD Explicit Assertions', () => {



    it.skip('Validate Data using expect', () => {

        cy.visit('www.google.com')

        //simple string verification
        let pageName = 'Google';
        expect(pageName).to.not.equal('Google Homepage');
        expect(pageName).to.be.equal('Google');
        expect(pageName).to.be.a('string');
        expect(pageName).to.have.length.of.at.most(6);

        //validating Object
        let person = {
            firstName:'Nat',
            lastName: 'QA'
        };
        expect(person).to.deep.equal({
            firstName:'Nat',
            lastName: 'QA'
        });

        expect(person).to.have.property('lastName');
        expect(person).to.have.property('lastName', 'QA');

        //validating Array
        let employeesID = [1, 2, 3, 4, 5];
        expect(employeesID).to.have.ordered.members([1, 2, 3, 4, 5]);
        expect(employeesID).to.include(3);
        expect(employeesID).to.include.members([3,2]);

    })
  // ============================ should ====================
    it.only('Validate Orange HRM Login Page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.url().should('include', '/auth/login');
        cy.title().should('eq', 'OrangeHRM');

        cy.get('.oxd-text--h5').should('have.text', 'Login');
        cy.get('.orangehrm-demo-credentials p').eq(1)
            .should('have.text', 'Password : admin123')
            .and('contain', 'admin123')
            .and("include.text", 'Password')
            .and('not.contain', 'qwerty');

        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="username"]').should('exist'); //exist this el in DOM
        cy.get('input[name="username"]')
            .should('be.enabled')
            .and('not.be.disabled');

        cy.get('button[type="submit"]').should("have.css", 'background-color', 'rgb(255, 123, 29)');

    })
})