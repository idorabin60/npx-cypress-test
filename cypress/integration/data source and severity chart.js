// <reference types="cypress" />
describe('avis test', () => {
  it('first test', () => {
    cy.visit('/');
    cy.get('[placeholder="USERNAME"]').click().type('idorabin@seemplicity.com');
    cy.get('[placeholder="PASSWORD"]').click().type('Kingbar100!');
    cy.get('[data-testid="login-submit-btn"]').click()
  })
  })
