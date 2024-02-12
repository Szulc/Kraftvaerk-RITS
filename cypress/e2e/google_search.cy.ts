import { GoogleApi } from "./intefaces/IGoogleResponse";
import { BeforeGoogleSearchPage } from "./page-objects/before_Google_Search";
import { GoogleSearchPage } from "./page-objects/google_Search";
import { ResultsPage } from "./page-objects/results.cy";

const URL = 'https://kraftvaerk.com/';
const PHRASE = 'Kraftvaerk';

describe('Google Search', () => {

    const beforeGoogleSearchPage = new BeforeGoogleSearchPage();
    const googleSearchPage = new GoogleSearchPage();
    const resultsPage = new ResultsPage();

    before(() => {
    })

    it('Verify URL in google search results page', () => {
        googleSearchPage.visit();
        beforeGoogleSearchPage.acceptAll();
        googleSearchPage.searchInput.type(PHRASE);
        googleSearchPage.search();
        resultsPage.getUrlNo(0).should('have.attr', 'href', URL);
    });

    it('Verify page is listed in google listbox', () => {
        googleSearchPage.visit();
        beforeGoogleSearchPage.acceptAll();
        googleSearchPage.searchInput.type(PHRASE);
        googleSearchPage.findInList(PHRASE);
    });

    it('Check reponse', () => {
        var json: GoogleApi;
        cy.intercept('GET', `https://www.google.com/complete/search?q=${PHRASE}*`).as('resp');
        googleSearchPage.visit();
        beforeGoogleSearchPage.acceptAll();
        googleSearchPage.searchInput.type(PHRASE);
        cy.wait('@resp').its('response.body').then((response: string) => {
            return response.substring(4);
        }).then((body) => {
            json = JSON.parse(body);
            let arr: string[] = json[0].map((element) => {
                return (element[0] as string).toLowerCase();
            });
            assert(arr.lastIndexOf(PHRASE.toLowerCase()) > -1, 'No value in returned response');
        });
    });
});