/// <reference types="cypress" />
import SignInPage from "../../../pageObjects/SignInPage";

const signInPage = new SignInPage();

describe('SignIn test suit', () => {

    beforeEach(function (){
        cy.fixture('signInPage').then(data => {
            this.data = data;
            cy.visit('/');
    })
})
    it('login', function () {
        cy.typeLogin(this.data.userEmail, this.data.userPassword, {timeout: 6000})
        signInPage.elements.getNotificationAfterSubmitClicking().should("have.text", this.data.loginSuccessfully);
    })


})