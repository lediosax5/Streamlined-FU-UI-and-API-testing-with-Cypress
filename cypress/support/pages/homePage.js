// -Constants
const cToDoList = '#todolistlink';
const cWaits = '#waitslink';
const cAlerts = '#alertslink';
const cOnlineShop = '#onlineshoplink';
const cFormUtils = '#formutilslink';
const cFileUpload = '#fileuploadlink';

// -Tests
class homePage{
    toDoList (){
        cy.get(cToDoList).click();
    }

    waits (){
        cy.get(cWaits).click();
    }

    alerts (){
        cy.get(cAlerts).click();
    }

    onlineShop (){
        cy.get(cOnlineShop).click();
    }

    formUtils (){
        cy.get(cFormUtils).click();
    }

    fileUpload (){
        cy.get(cFileUpload).click();
    }
}

// -Export
export default new homePage()
