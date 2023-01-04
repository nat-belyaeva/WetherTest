/// <reference types="cypress"/>


const apiData = require('../../../fixtures/apiData.json')
const API_BASE_URL = Cypress.env('apiBaseUrl');
let AUTH_TOKEN;
describe('Testing API Booking', () => {

    describe('Auth - CreateToken', () => {
        const createToken = () => {
           return cy.request({
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              url: `${API_BASE_URL}/auth`,
              body: apiData.admin
        });
       }

      it('Verify Create Token', () => {
        createToken().then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');
            expect(response.body).not.have.property('reason');

        })
    })

      it('TypeOf Token is String', () => {
        createToken().then((response) => {
            AUTH_TOKEN = response.body.token;
            expect(response.body.token).to.be.a('string')
        })
    })
    })
    describe("Get all BokingsIds", () => {
        const getResponse = () =>
            cy.request({
                method: "GET",
                url: `${API_BASE_URL}/booking`
            })

        it('verify response has headers', () => {
            getResponse()
                .then(response => {
                    console.log(response)
                    expect(response).to.have.property('headers')
                })
        })

        it('verify response status is 200', () => {
            getResponse()
                .its('status')
                .should('be.eq', 200)
        })

        it('verify response is an array', () => {
            getResponse()
                .its('body')
                .should('be.an', 'array')
        })

        it('verify response contains object with key bookingid', () => {
            getResponse()
                .its('body')
                .then(response => {
                    expect(response[0]).to.have.keys('bookingid')
                })
        })

    })

    describe.only('Create Booking', () => {
        const getResponse = () => {
            cy.request({
                method: 'POST',
                    `${API_BASE_URL}/booking`,
                headers: {
                    "Content-Type": "application/json",
                },
                body: apiData.dataForbooking
            })
        }

        it('verify response status is 200', () => {
            getResponse()
                .then(response => {
                    console.log(response)

                })
        })

    })

});