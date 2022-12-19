// default timeouts https://docs.cypress.io/guides/references/configuration#Timeouts

//  ==========================001 URL Timeouts ================================

//------------yuo can change these settings to override default settings
//"defaultCommandTimeout": 4000
// "pageLoadTimeout": 60000

//these commands affect the whole project

//==========если увеличить или уменьшить время для конкретной команды...
//можно открыть POM и там в метод доавить {timeout: 60000} пример cy.visit('/', {timeout: 8000}); MainPageSpec

//   =========================== 002 Explicit Timeouts ======================================

//для конкретного теста или сьюта
//смотри пример SignInPageSpec === добавить команду Cypress.config("defaultCommandTimeout", 10000);
// добавить в метод в poM
// clickBtnSendEmailResetPassword() {
//     this.elements.getBtnSendEmailResetPassword().click({force: true},{timeout: 5000});
//   }


// =========================003 Assertion Timeouts ================================
//если есть к-н asset  в POM можно увеличить время выполнения
//сlass UserServicesPage {
//     elements = {
//         getNewProductsLink: () => cy.get('#myTab').contains('New Products', {timeout: 8000}),
//     }


// ==========================pause command ====================
//cy.pause(); останавливает run потом нужно нажать Continue

//============================wait ======================
//https://docs.cypress.io/api/commands/wait

