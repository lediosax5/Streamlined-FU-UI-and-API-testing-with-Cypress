// -Imports
import registerPage from "../support/pages/registerPage";
import loginPage from "../support/pages/loginPage";
import headerPage from "../support/pages/headerPage";
import consts from "../support/consts";

// -Tests
describe('UI register', () => {
    it('Register user', () => {
        cy.visit("");
        registerPage.typeUser("cami" + Date.now());
        registerPage.typePass("pass123" + "!");
        registerPage.checkGender("Female");
        registerPage.selectDay(31);
        registerPage.selectMonth("May");
        registerPage.selectYear("1980");
        registerPage.clickRegisterBtn();
        headerPage.verifyUser("cami");
    });
});

describe('API register', () => {
    let user;

    before('Taking user data', () => {
        cy.fixture('dataUsers').then(datos => {
            user = datos;
        });
    });

    it('API register user', () => {
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

describe('UI login', () => {
    it('Login', () => {
        cy.visit("");
        registerPage.clickLoginBtn();
        loginPage.typeUser(Cypress.env().user);
        loginPage.typePass(Cypress.env().pass);
        loginPage.clickLoginBtn();
        headerPage.verifyUser(Cypress.env().user);
    });
});

describe('UI negative login', () => {
    beforeEach('Login page', () => {
        cy.visit("");
        registerPage.clickLoginBtn();
    });

    it('Login wrong password', () => {
        loginPage.typeUser(Cypress.env().user);
        loginPage.typePass("badpassword");
        loginPage.clickLoginBtn();
        loginPage.alerts(consts.loginPage.alertPass);
    });
    it('Login wrong credentials', () => {
        loginPage.typeUser("guido10");
        loginPage.typePass(Cypress.env().pass);
        loginPage.clickLoginBtn();
        loginPage.alerts(consts.loginPage.alertCredentials);
    });
});

describe('API login', () => {
    it('API login', () => {
        cy.loginUser(Cypress.env().user, Cypress.env().pass).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(201);
            expect(response.body.user.username).to.be.equal(Cypress.env().user);
        });
    });
});

describe('POM API register, login and delete with validations and variable user', () => {
    let user;
    let token;

    before('Taking user data', () => {
        cy.fixture('dataUsers').then(datos => {
            user = datos;
        });
    });

    it('API register, login and delete user', () => {
        cy.registerUser(user.a.username, user.a.password, user.a.gender, user.a.day, user.a.month, user.a.year)
        .then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(201);
            expect(response.body.newUser.username).to.be.equal(user.a.username);
        });
        cy.loginUser(user.a.username, user.a.password).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(201);
            expect(response.body.user.username).to.be.equal(user.a.username);
            token = response.body.token;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("user", response.body.user.username);
            window.localStorage.setItem("userId", response.body.user._id);
        });
        cy.visit("");
    });

    after("Delete user", () => {
        cy.deleteUser(user.a.username).then(response => {
            cy.log(response);
            expect(response.status).to.be.equal(202);
            expect(response.body.user.username).to.be.equal(user.a.username);
        });
    });
});

/*describe('nn', () => {
    it('n1', () => {

    });
});

describe('nn', () => {
    it('n2', () => {

    });
});*/
