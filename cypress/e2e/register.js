// -Imports
import headerPage from "../support/pages/headerPage";
import registerPage from "../support/pages/registerPage";

// -Tests
describe('UI register', () => {
    it('Register', () => {
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

describe('API register', () => {
    let user;

    before('Taking user data', () => {
        cy.fixture('dataUsers').then(datos => {
            user = datos;
        });
    });

    it.only('Register user', () => {
        cy.registerUser(user.a.username, user.a.password, user.a.gender, user.a.day, user.a.month, user.a.year).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(201);
            expect(response.body.newUser.username).to.be.equal(user.a.username);
        });
    });

    after("Delete user", () => {
        cy.deleteUser(user.a.username).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(202);
            expect(response.body.user.username).to.be.equal(user.a.username);
        });
    });
});
