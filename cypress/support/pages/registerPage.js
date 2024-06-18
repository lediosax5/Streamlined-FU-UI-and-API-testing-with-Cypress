// -Constants
const cLoginBtn = '#registertoggle';
const cRegisterBtn = "#submitForm";
const cUser = '#user';
const cPass = '#pass';
const cDay = "#day";
const cMonth = "#month";
const cYear = "#year";

// -Tests
class registerPage{
    clickLoginBtn (){
        cy.get(cLoginBtn).dblclick();
    }

    typeUser (user){
        cy.get(cUser).type(user);
    }

    typePass (pass){
        cy.get(cPass).type(pass);
    }

    checkGender (gender){
        cy.get(`[value^="${gender}"]`).check({force:true});
    }

    selectDay (day){
        cy.get(cDay).select(day - 1);
    }

    selectMonth (month){
        cy.get(cMonth).select(month);
    }

    selectYear (year){
        cy.get(cYear).select(year);
    }

    clickRegisterBtn (){
        cy.get(cRegisterBtn).click({force:true});
    }
}

// -Export
export default new registerPage()
