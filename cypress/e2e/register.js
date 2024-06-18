// -Imports
import headerPage from "../support/pages/headerPage";
import registerPage from "../support/pages/registerPage";

// -Tests
describe('UI positive register', () => {
    it.only('Register', () => {
        cy.visit("");
        registerPage.typeUser("cami" + Date.now());
        registerPage.typePass("pass123" + "!");
        registerPage.checkGender("Female");
        registerPage.selectDay(31);
        registerPage.selectMonth("May");
        registerPage.selectYear("1980");
        registerPage.clickRegisterBtn();
        headerPage.verifyUser("cami")
    });
});

describe('UI negative register', () => {
    it('', () => {
        
    });
});

describe('API register', () => {
    it('', () => {
        
    });
});
