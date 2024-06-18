// -Imports
import registerPage from "../support/pages/registerPage";
import loginPage from "../support/pages/loginPage";
import headerPage from "../support/pages/headerPage";

// -Tests
describe('UI positive login', () => {
    it.only('Login', () => {
        cy.visit("");
        registerPage.clickLoginBtn();
        loginPage.typeUser(Cypress.env().user);
        loginPage.typePass(Cypress.env().pass);
        loginPage.clickLoginBtn();
        headerPage.verifyUser(Cypress.env().user);
    });
});

describe('UI negative login', () => {
    
});

describe('API login', () => {
    
});
