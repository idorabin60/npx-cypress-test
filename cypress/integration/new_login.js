// <reference types="cypress" />
beforeEach(()=> {
  cy.visit('/')
  cy.typeLogin({email: 'idorabin@seemplicity.com', password: 'Kingbar100!'})
})
describe('new login test ',()=>{
  it('login in a new way',()=>{
    cy.get('.app-header-wrapper').contains('Findings').click().then(findings_page => {
      cy.wrap(findings_page).get('[data-testid="add-filter-btn-btn"]').click().then(select_filter => {
        cy.wrap(select_filter).get('[class="Popover-body"]').contains('Severity').click().then(choose_seveirty => {
          cy.wrap(choose_seveirty).get('[class="input-wrap checkbox-list-wrapper column"]').find('[data-testid="3-checkbox"]').click({force:true}).then(click_submit =>{
            cy.wrap(click_submit).get('[data-testid="filter-preview-btn"]').click().then(number_of_findings =>{
              cy.wrap(number_of_findings).get('[class="total-findings-title-num"]').invoke('text').then(check_number =>{
                const int_findings = parseInt(check_number)
                assert.isAbove(int_findings,10)

              })
            })
          })

        })

      })
    })


  })


})
