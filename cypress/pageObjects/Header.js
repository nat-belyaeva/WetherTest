class Header {
    elements = {
        getBlogMenuLink: () => cy.get('#desktop-menu [href*="blog"]'),
        getPartnersMenuLink: () => cy.get('#desktop-menu a[href="/examples"]'),
        getSupportDropDownMenu: () => cy.get('#support-dropdown'),
        getAskAquestionMenuLink: () => cy.get('#support-dropdown+ul [href$="/questions"]'),
        getFAQMenuLink: () => cy.get('ul#support-dropdown-menu a[href="/faq"]'),
        getMapsMenuLink: () => cy.get('#desktop-menu [href="/weathermap"]'),
        getMarketplaceMenuLink: () => cy.get('#desktop-menu a[href*="marketplace"]'),
        getLogoLink: () => cy.get('li.logo a'),
        getInitiativesPage: () => cy.get('#desktop-menu a[href="/our-initiatives"]'),
        getApiMenuLink: () => cy.get('#desktop-menu a[href="/api"]'),
        getBusinessMenuLink: () => cy.get('#desktop-menu :nth-child(10) > a'),
        getUserDropDownMenu: () => cy.get('#user-dropdown'),
        getMyApiKeysLink: () => cy.get('#user-dropdown-menu a[href*=api_keys]'),
        getGuideMenuLink: () => cy.get('#desktop-menu a[href="/guide"]'),
        getSignInMenuLink: () => cy.get('li[class="user-li"] a[href$="sign_in"]'),
        getDashboardMenuLink: () => cy.get('#desktop-menu [href$=-dashboard]'),
        getUserMyServicesLink: () => cy.get('#user-dropdown-menu > :nth-child(1) > a'),
        getUserLogoutLink: () => cy.get('.dropdown-menu [href*="/sign_out"]'),
        getUserDropDownMyApiLink: () => cy.get('#user-dropdown-menu [href$="/api_keys"]')
    }

      clickApiMenuLink() {
        this.elements.getApiMenuLink().click({force : true})
    }

    clickSignInMenuLink() {
        this.elements.getSignInMenuLink().click({force : true})
    }

    clickUserLogoutLink() {
        this.elements.getUserLogoutLink().click({force : true})
    }

    clickUserDropDownMenu() {
        this.elements.getUserDropDownMenu().click()
    }

    clickUserDropDownMyApiKeysLink() {
        this.elements.getUserDropDownMyApiLink().click({force : true})
    }
}
export default Header;