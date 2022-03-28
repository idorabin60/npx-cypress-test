beforeEach(()=> {
  cy.visit('/');
  cy.typeLogin({email: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD')});
})

describe('sanity test - dashboard page and num of findings',()=> {
  it('verify dashboard and findings number test', () => {
    cy.get('[class="dashboard-widget-wrapper widget-size-s avg-age-severity-dashboard-widget"]').find('[data-testid="widget-title"]')
      .invoke('text').should('contain', 'Average Age By Severity')

    cy.get('[class="app-header-wrapper"]').contains('Findings').click().then(findings_page => {
      cy.get('[class="app-header-wrapper"]').contains('Findings').click().then(Findings_page => {
        cy.wrap(Findings_page).get('[class="total-findings-title-num"]').invoke('text').then(checkNumberOfFindings => {
          const numOfFindings= parseInt(checkNumberOfFindings);
          assert.isAbove(numOfFindings, 10);
        })
      })
    })
  })
})

















