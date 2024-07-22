// -Imports
import registerPage from "../support/pages/registerPage";
import loginPage from "../support/pages/loginPage";
import headerPage from "../support/pages/headerPage";

// -Tests
describe('UI login', () => {
    it.only('Login', () => {
        cy.visit("");
        registerPage.clickLoginBtn();
        loginPage.typeUser(Cypress.env().user);
        loginPage.typePass(Cypress.env().pass);
        loginPage.clickLoginBtn();
        headerPage.verifyUser(Cypress.env().user);
    });
});

describe('API login', () => {
    it.only('API login', () => {
        cy.loginUser(Cypress.env().user, Cypress.env().pass).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(201);
            expect(response.body.user.username).to.be.equal(Cypress.env().user);
        });
    });
});
