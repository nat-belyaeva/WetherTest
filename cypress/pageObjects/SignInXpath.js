class SignInPage {
  elements = {
  getEmailInput: () => cy.xpath('//input[@class ="string email optional form-control"]'),
  getPasswordInput: () => cy.xpath('//input[@id="user_password"]'),
  getSubmitButton: () => cy.xpath('//input[@value="Submit"]'),
  getSignOutAllert: () => cy.xpath('//div[@class="panel-body"]'),
    getClickHereToRecover: () => cy.xpath("//a[@href='#']"),
    getTextClickHereToRecover: () => cy.xpath('//div[@class="pwd-lost-q show"]'),
    getOpenTextResetPassword: () => cy.xpath('//p[@class="text-muted"]'),
  getFieldForEmailPasswordReset: () => cy.xpath('//div[@class="form-group email optional user_email"]//input[@id="user_email"]'),
  getBtnSendEmailResetPassword: () => cy.xpath('//input[@value="Send"]'),
  getForgotYourPassword: () =>  cy.xpath('// h3[@class="first-child"]')
  }

  typeEnterEmail(userEmail) {
    this.elements.getEmailInput().type(userEmail);
  }

  typeEnterPassword(userPassword) {
    this.elements.getPasswordInput().type(userPassword);
  };

  clickSubmitButton() {
    this.elements.getSubmitButton().click();
  }

  signIn(email, password) {
    this.typeEnterEmail(email);
    this.typeEnterPassword(password);
    this.clickSubmitButton();
  }

  clickHereToRecover() {
   this.elements.getClickHereToRecover().click({force: true});
  }

  clickOpenHereToRecover() {
    this.elements.getOpenTextClickHereToRecover().click({force: true});
  }

  clickBtnSendEmailResetPassword() {
    this.elements.getBtnSendEmailResetPassword().click({force: true},{timeout: 8000});
  }

}
export default SignInPage;