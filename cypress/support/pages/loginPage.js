// -Constants
const cUser = '#user';
const cPass = '#pass';
const cLoginBtn = '#submitForm';

// -Tests
class loginPage{
    typeUser (user){
        cy.get(cUser).type(user);
    }

    typePass (pass){
        cy.get(cPass).type(pass);
    }

    clickLoginBtn (){
        cy.get(cLoginBtn).click({force:true});
    }

    login (user, pass){
        cy.get(cUser).type(user);
        cy.get(cPass).type(pass);
        cy.get(cLoginBtn).click({force:true});
    }

    alerts (alert){
        cy.get("body").should('contain', alert);
    }
}

// -Export
export default new loginPage()
