/// <reference types="cypress"/>

import AboutUs from "../../../pageObjects/AboutUsPage";
import ApiPage from "../../../pageObjects/ApiPage";

const aboutUs = new AboutUs();
const apiPage = new ApiPage();

describe('About Us', () => {

    beforeEach(function () {
        cy.fixture('url').then(url  => {
            this.url = url;
        });
        cy.visit(Cypress.env('homePageUrl') + '/about-us');
    })

    it('About us > Verify "Products Documentation" button redirects to API page', function() {
        aboutUs.clickProductsDocumentationButton();

        cy.url().should('include', this.url.API);
        apiPage.elements.getWeatherApiTitle().should('be.visible');
    });
    
});