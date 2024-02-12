export class ResultsPage {

    get page(){
        return cy.get('#main');
    }

    getUrlNo(no: number) {
        return this.page.get('h3').eq(no).parent();
    }
}