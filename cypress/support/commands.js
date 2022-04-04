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
Cypress.Commands.add('typeLogin', (user) => {
  cy.visit('/')
  cy.get('[data-testid="login-username-input"]').type(user.email);
  cy.get('[data-testid="login-password-input"]').type(user.password);
  cy.get('[data-testid="login-submit-btn"]').click();
})

Cypress.Commands.add('Login_udemy',(user) =>{
  const userCredent = {
    "user": {
      "email": "idorabin@seemplicity.com",
      "password": "kingbar100"
    }
  }
  cy.request('POST','http://localhost:3000/api/users/login',userCredent).its('body').then(body=>{
    const token = body.user.token;
    cy.visit('/',{
      onBeforeLoad(win) {
        win.localStorage.setItem('user',token);
      }

    })

  })
  // cy.get('[class="nav-link"]').eq(0).click();
  // cy.get('[placeholder="Email"]').type(user.email)
  // cy.get('[placeholder="Password"]').type(user.password)
  // cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()
})
