/// <reference types="cypress"/>

import MainPage from "../../../pageObjects/MainPage.js";

const mainPage = new MainPage();

describe('mainPageSpec', () => {
    
    beforeEach(function () {
        cy.fixture('mainPage').then(data => {
            this.data = data;
        });
        cy.fixture('url').then(url => {
            this.url = url;
        });
        cy.visit('/');

    })

    it('Main page > Section with search > Verify entered a Zip code into the Search city field', function () {
        mainPage.setSearchInputText(this.data.searchInputText.zipCode);
        mainPage.clickSearchBtn();
        //cy.pause(); cy.wait(300)
        mainPage.elements
            .getSearchInput()
            .invoke('val')
            .should('eq', this.data.searchInputText.zipCode);
    });

    it('Main page > Section with search > Verify entered a City name into the Search city field', function () {
        mainPage.setSearchInputText(this.data.searchInputText.cityName);
        mainPage.clickSearchBtn();
        mainPage.elements
            .getSearchInput()
            .invoke('val')
            .should('eq', this.data.searchInputText.cityName);
    });

    it( 'Mainpage > Verify the website"s description', function () {
        mainPage.elements.getPageDescriptionWhiteText()
            .should('have.text', this.data.pageDescriptionWhiteText);
    });

    it('API > Testing Home button > Verify that after clicking on the Home link on the API page the user gets redirected to the Home page of the site.', function () {
        mainPage.clickApiLink()
        mainPage.elements
                .getHomePageButton()
                .should('have.text', 'Home')
        mainPage.clickHomePageButton()

        mainPage.elements.getMainPageContent()
                .should('have.text', 'OpenWeather')
    });

    it('Main page > Section with 8-day forecast > Verifying the weather forecast for 8 days is displayed in the section', function () {
        mainPage.elements.getForecastDays().should('have.length', this.data.forecastDaysLength);
    });

    it('Main page > Section with search > Search City >  Dropdown menu with relevant options appears after clicking the Search button,', function () {
        mainPage.setSearchInputText(this.data.searchInputText.cityName);
        mainPage.clickSearchBtn();
        mainPage.elements
                .getSearchResultsDropdown()
                .should('exist')
                .each($el => {
                    cy.wrap($el).should('contain', this.data.searchInputText.cityName)
                })
     });
                
    it('Main page > Section with 8-day forecast>the weather forecast for 8 days is displayed', function () {
        mainPage.elements.getForecastDays().should('have.length', this.data.forecastDaysLength);
    });

    it('Main page > Section with search > Search City > Verify that entered city is displayed into the dropdown', function () {
        mainPage.elements.getSearchInput().type(this.data.searchInputText1.city);
        mainPage.clickSearchBtn();

        mainPage.elements.getSearchResultsDropdown()
            .contains(this.data.searchInputText1.searchResult)
            .click();
    });

    it('method invoke ', function () {
        mainPage.elements.getEightDayForecast()
            .invoke('text')
            .invoke('replaceAll', '-', '')
            .invoke('replaceAll', '8', '10')
            .then((textValue => cy.log(textValue)));
    })

});