/// <reference types="cypress" />


import Footer from "../../../pageObjects/Footer.js"
import WidgetsPage from "../../../pageObjects/WidgetsPage.js"

const footer = new Footer();
const widgetsPage = new WidgetsPage();


describe('Widgets page test suite', () => {

    beforeEach(function() {
        cy.fixture('widgetsPage').then(data => {
            this.data = data;
        });
        cy.fixture('footer').then(footer => {
            this.footer = footer;
        });

        cy.fixture('signInPage').then(signIn => {
            this.signIn = signIn;
        });

        cy.visit('/');
    });

    it('Footer > Widgets > Verify there are 9 widgets on the page', function() {
        footer.clickWidgetsLink();
        widgetsPage.elements.getWidgets()
            .should('have.length', this.data.widgetsQuantity)
            .and('be.visible')
    });

    it('Footer > Widgets> Verify redirect to Widgets constructor page', function() {
        cy.typeLogin(this.data.userData1.login, this.data.userData1.password)
        cy.wait(300);
        footer.elements.getWidgetsLink().should('include.text', this.footer.nameWidgetsLink)
        footer.clickWidgetsLink()

        cy.url().should('include', this.data.urn)
        widgetsPage.elements.getPageTitle().should('have.text', this.data.pageTitle)

    })

});