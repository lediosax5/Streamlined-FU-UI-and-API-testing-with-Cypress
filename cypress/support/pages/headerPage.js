// -Constants

// -Tests
class headerPage{
    verifyUser (user){
        cy.get(`[id^="user_${user}"]`);
    }
}

// -Export
export default new headerPage()
