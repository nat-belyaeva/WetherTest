/// <reference types="cypress" />

import Header from "../../../pageObjects/Header";
import SignInPage from "../../../pageObjects/SignInPage";

const header = new Header();
const signInPage = new SignInPage();

describe('SignIn test suit', () => {

Cypress.config("defaultCommandTimeout", 10000);

  beforeEach(function() {
    cy.fixture('signInPage').then(data => {
      this.data = data;
    })
    cy.visit('/');
  });

  it('Validate log in using commands', function () {
       cy.typeLogin(this.data.userEmail, this.data.userPassword);
    cy.clearCookies();

  })


  it('Sign in > Account Dropdown Menu > Verify that the message appears after clicking the "logout" button ',
      function () {
    header.clickSignInMenuLink();
    signInPage.signIn(this.data.userEmail, this.data.userPassword);
  
    header.clickUserDropDownMenu();
    header.clickUserLogoutLink();

    signInPage.elements.getNotificationAfterSubmitClicking().should('have.text', this.data.signOutAllertMessage)
  });

  it(' Main page>Sign in> Create an account > "Lost your password? Click here to recover." is displayed', function(){
    header.clickSignInMenuLink();
    cy.url().should('eq', this.data.signInUrlUsers);
    signInPage.elements.getTextClickHereToRecover().should('be.visible');
    signInPage.clickHereToRecover();
    signInPage.elements.getOpenTextResetPassword().should('have.text', this.data.resetYourPassord);
    signInPage.elements.getFieldForEmailPasswordReset().should('be.visible').type(this.data.userNegativeEmail);
    signInPage.clickBtnSendEmailResetPassword();

    cy.url().should('eq', this.data.urlUsersPassword);
    signInPage.elements.getForgotYourPassword().should('have.text', this.data.textForgotYourPassword);
  });
});