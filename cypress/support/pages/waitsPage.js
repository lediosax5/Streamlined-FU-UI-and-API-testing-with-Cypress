// -Constants
const cButton = 'button#wait';
const cAlerts = '#message';
const cColorAlerts = '#colorChangeMessage';

// -Tests
class waitsPage{
    clickBtn (){
        cy.get(cButton).dblclick();
    }

    loadingBtn (loadingBtn){
        cy.get(cButton).should('have.text', loadingBtn);
    }

    alerts (alert){
        cy.get(cAlerts).should('have.text', alert);
    }

    colorAlerts (alert){
        cy.get(cColorAlerts).should('have.text', alert);
    }
}

// -Export
export default new waitsPage()
