// -Imports

// -Tests
describe('POM API register, login and delete with validations and variable user', () => {
    let user;
    let token;

    before('Taking user data', () => {
        cy.fixture('dataUsers').then(datos => {
            user = datos;
        });
    });

    it.only('Register user', () => {
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

describe('nn', () => {
    it('n1', () => {

    });
});

describe('nn', () => {
    it('n2', () => {

    });
});
