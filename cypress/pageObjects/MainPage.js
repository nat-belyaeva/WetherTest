class MainPage {
    elements = {
        getSearchInput: () => cy.get('input[placeholder = "Search city"]'),
        getSearchBtn: () => cy.get('.search-block button'),
        getPageDescriptionWhiteText: () => cy.get('span.white-text'),
        getApiLink: () => cy.get('#desktop-menu a[href="/api"]'),
        getHomePageButton: () => cy.get('.breadcrumb a[href="/"]'),
        getMainPageContent: () => cy.get('h1 span.orange-text'),
        getForecastDays: () => cy.get('.day-list li'),
        getSearchResultsDropdown: () => cy.get('ul.search-dropdown-menu li'),
        getEightDayForecast: () => cy.get('div .daily-container')
    }

    clickSearchBtn() {
        this.elements.getSearchBtn().click({force: true});
    }

    setSearchInputText(inputText) {
        this.elements
            .getSearchInput()
            .clear({force: true})
            .type(inputText, {force: true});
    }

    clickApiLink() {
        this.elements.getApiLink().click({force: true});
    }

    clickHomePageButton() {
        this.elements.getHomePageButton().click({force: true});
    }
}
export default MainPage;