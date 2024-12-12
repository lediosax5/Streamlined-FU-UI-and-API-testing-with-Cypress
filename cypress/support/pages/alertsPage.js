// -Constants
const cAlert = '[name="alert"]';
const cPrompt = '[name="prompt"]';
const cConfirmation = '[name="confirmationMessage"]';

// -Tests
class alertsPage{
    clickAlertBtn (){
        cy.get(cAlert).click();
    }

    clickPromptBtn (){
        cy.get(cPrompt).click();
    }

    clickConfirmationBtn (){
        cy.get(cConfirmation).click();
    }

    handleAlert (message){
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(message);
        });
    }

    handlePrompt (message){
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(message)
        });
    }

    handleConfirmation (message){
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal(message);
            return true;
        });
    }
}

// -Export
export default new alertsPage()
