/// <reference types=”Cypress”/>


//Assertions wil enable us to validate weather a given test should pass or fail
//Actually, Assertions validates the desired states of your elements, objects or application under test

// two types ====Implicit: should, and === build in Cypress
// =====explicit: assert(), expect() ==== which are have to define on responses different kind of data: Json Obj, Arrays, String

// Cypress is using CHAI assertion library as well as helpful extensions for Sinon and jQuery giving us
// dozens of powerful assertions for free

//================================== BDD & TDD Assertions ==========================

//BDD assertion expects from you the value number one and then something you want to do against the
// value. (expect something to equal something.)

// =============================SHOULD==============================
//The .should() method takes chainers and the expected value as arguments.
// Chainers are provided in a string form and can be any valid chainers that come from Chai.

//  Length
// cy.get('div.card-body h5').should('have.length', 6)

// Class
// cy.get('#demo-tab-more').should('have.class', 'disabled')

// Value
// cy.get('#oldSelectMenu').select('Purple').should('have.value', '4')

// Text Content
// cy.get('div.main-header').should('have.text', 'Elements')
// cy.get('div.main-header').should('include.text', 'Element')
// cy.get('div.main-header').should('contain', 'Element')

// Visibility
// cy.get('header a img').should('be.visible')

// Existence
// cy.get('#result').should('exist')

// Attribute
// .should('have.attr', 'placeholder', 'Full Name')

 describe('Assertions', () => {

     beforeEach(() => {
         cy.visit('https://demoqa.com/radio-button');
     });

     it('TDD assertions CHAI',  () => {
         cy.log('length check ---');
         cy.get('.custom-control input[type="radio"]').should('have.length', 3);

         cy.log('class check-----');
         cy.get('.custom-control input[type="radio"]').eq(2).should('have.class', 'disabled');

         cy.log('exist check----');
         cy.get('.mt-3').should('not.exist'); // this el not exist in the dom

         cy.log('check text----');
         cy.get('.custom-control input[type="radio"]').eq(0).click({force:true});
         cy.get('.mt-3')
             .should('have.text', 'You have selected Yes')
             .and('include.text', 'Yes')
             .and('not.contain','No');

         cy.log('CSS check ---------');
         cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)');

         cy.contains('li#item-1').find('[class="text"]').eq(0).click();
         cy.contains('')
     })
         //==========================BDD Assertions===========================

         it('BDD assertions == CHAI JQuery', () => {
             cy.log('length check ---');
             cy.get('.custom-control input[type="radio"]').should($inputs => {
                 expect($inputs).to.have.lengthOf(3);
                 expect($inputs).to.have.class('disabled');
                 expect($inputs).to.be.a('string');
                 //expect()
             });

             cy.log('check text----');
             cy.get('.custom-control input[type="radio"]').eq(1).click({force:true});
             cy.get('.mt-3')
                 .should($response => {
                     expect($response).to.have.text('You have selected Impressive');
                     expect($response).to.include.text('Impressive');
                     expect($response).to.not.include.text('Yes');
                 });



         })
 })






