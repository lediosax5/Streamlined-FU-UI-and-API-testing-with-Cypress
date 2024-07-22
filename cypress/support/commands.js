// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const url = 'https://pushing-it.onrender.com';

Cypress.Commands.add('registerUser', (username, password, gender, day, month, year) => {
    cy.request({
        method: 'POST',
        url: `${url}/api/register`,
        body: {
            username : username,
            password: password,
            gender: gender,
            day: day,
            month: month,
            year: year,
        }
    })
})
Cypress.Commands.add('loginUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: `${url}/api/login`,
        body: {
            username : username,
            password: password,
        }
    })
})
Cypress.Commands.add('deleteUser', (user, token) => {
    cy.request({
        method: 'DELETE',
        url: `${url}/api/deleteuser/${user}/`,
        headers: { 'autorization': `Bearer ${token}`, },
    })
})
