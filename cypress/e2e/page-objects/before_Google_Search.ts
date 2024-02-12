
export class BeforeGoogleSearchPage {

    get page() {
        return cy.get('body > div').eq(1);
    }

    get acceptAllButton() {
        return this.page.find('button').eq(3);
    }

    acceptAll() {
        return this.acceptAllButton.click();
    }
}