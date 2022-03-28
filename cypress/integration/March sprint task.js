beforeEach(()=> {
  cy.visit('/');
  cy.typeLogin({email: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD')});
})

describe('sprint task',()=> {
  it('verify dashboard and findings number test', () => {
    cy.get('[class="dashboard-widget-wrapper widget-size-s avg-age-severity-dashboard-widget"]').find('[data-testid="widget-title"]')
      .invoke('text').should('contain', 'Average Age By Severity')
<<<<<<< HEAD

    cy.get('[class="app-header-wrapper"]').contains('Findings').click().then(findings_page => {
=======
    //go to findings page
    cy.get('[class="app-header-wrapper"]').contains('Findings').click().then(findings_page => {
      //make sure that the number of findings in the page is more then 10
>>>>>>> refs/remotes/origin/master
      cy.wrap(findings_page).get('[class="total-findings-title-num"]').invoke('text').then(check_number_of_findings => {
        const int_findings = parseInt(check_number_of_findings);
        assert.isAbove(int_findings, 10);
      })
    })
  })
})














<<<<<<< HEAD
=======
  
>>>>>>> refs/remotes/origin/master


