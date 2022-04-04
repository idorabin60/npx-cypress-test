beforeEach(()=>{
  cy.visit('/');
  cy.typeLogin({email: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD')});
})
describe('asserting with api',()=> {
  it('asserting with api', () => {
    cy.wait(5000)
    cy.visit('https://app.seemplicity.io/findings?filterToExecute=%7B%22operator%22%3A%20%22and%22%2C%20%22operands%22%3A%20%5B%7B%22field%22%3A%20%22actual_status%22%2C%20%22condition%22%3A%20%22%22%2C%20%22value%22%3A%20%7B%22field%22%3A%20%22key%22%2C%20%22condition%22%3A%20%22in%22%2C%20%22value%22%3A%20%5B%2211%22%2C%20%2212%22%2C%20%2213%22%2C%20%2214%22%2C%20%2215%22%5D%7D%7D%5D%7D&groupByIndex=0&groupByValue-severity=3&scopeId=U2NvcGVHcm91cDox');
  })
})
