/// <reference types="cypress"/>


const apiData = require('../../../fixtures/apiData.json')
const API_BASE_URL = Cypress.env('apiBaseUrl');
let AUTH_TOKEN;


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

        });
    });

    it('TypeOf Token is String', () => {
        createToken().then((response) => {
            AUTH_TOKEN = response.body.token;
            expect(response.body.token).to.be.a('string')
        });
    });

});