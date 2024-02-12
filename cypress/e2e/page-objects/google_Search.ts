export class GoogleSearchPage {

    readonly URL = 'https://www.google.com';

    get page() {
        return cy.get('body > div').eq(0);
    }

    get form() {
        return this.page.find('form');
    }

    get searchInput() {
        return this.form.find('textarea').eq(0);
    }

    get listbox() {
        return this.form.find('[role="listbox"]').eq(1);
    }

    get googleSearchButton() {
        return this.form.find('center > input').eq(0);
    }

    visit() {
        return cy.visit(this.URL);
    }

    search() {
        return this.googleSearchButton.click();
    }

    findInList(text: string){
        return this.page.find('li > div > div').contains(text);
    }
}