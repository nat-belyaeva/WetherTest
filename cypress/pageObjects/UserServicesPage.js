class UserServicesPage {
    elements = {
        getNewProductsLink: () => cy.get('#myTab').contains('New Products', {timeout: 8000}),
    }

    clickNewProductsLink() {
        this.elements.getNewProductsLink().click()
    }
}
export default UserServicesPage;