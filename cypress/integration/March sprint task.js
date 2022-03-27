beforeEach(()=> {
  // login function
  cy.visit('/')
  cy.typeLogin({email: 'idorabin@seemplicity.com', password: 'Kingbar100!'})
})
describe('sprint task',()=> {
  it('verify dashboard and findings number test', () => {
    //make sure you are on dashboard pasge, according to 'age by severity chart'
    cy.get('[class="dashboard-widget-wrapper widget-size-s avg-age-severity-dashboard-widget"]').find('[data-testid="widget-title"]')
      .invoke('text').should('contain', 'Average Age By Severity')
    //go to findings page
    cy.get('.app-header-wrapper').contains('Findings').click().then(findings_page => {
      //make sure that the number of findings in the page is more then 10
      cy.wrap(findings_page).get('[class="total-findings-title-num"]').invoke('text').then(check_number_of_findings => {
        const int_findings = parseInt(check_number_of_findings)
        assert.isAbove(int_findings, 10)
      })
    })
  })
})














  // it.only('Sprint_Task',()=>{
  //   cy.visit('/');
  //
  // })


