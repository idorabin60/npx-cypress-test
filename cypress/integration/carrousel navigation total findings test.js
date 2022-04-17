beforeEach(()=> {
  cy.typeLogin({email: 'idorabin@seemplicity.com', password: 'Kingbar100!'})
  cy.waitForPageToLoad();
})
describe('carrousel nav total findings test',() =>{
  it('carrousel nav total findings test',() =>{
    cy.contains('Findings').click();
    cy.waitForPageToLoad();
    const totalNumberOfFindings = cy.getTotalFindings();
    cy.get('.group-by-panel').find('.selection-menu-option  ').then(carrousel =>{
      cy.wrap(carrousel).each(groupBy =>{
        cy.wrap(groupBy).click().then(checkNumOfFindings =>{
          cy.waitForPageToLoad();
          cy.getTotalFindings().then(numOfFindings =>{
            totalNumberOfFindings.should('eq',numOfFindings);
          })
        })
      })
    })
  })
})
