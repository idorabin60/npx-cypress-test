 beforeEach(()=> {
   cy.visit('/');
   cy.typeLogin({email: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD')});
 })
describe('goint to severity critical',()=> {
  it('going to severity critical', () => {
    cy.wait(5000);
    //cy.visit('https://app.seemplicity.io/findings?filterId=RmluZGluZ0ZpbHRlcjoxNzU%3D&scopeId=U2NvcGVHcm91cDox')
    cy.visit('findings?filterId=RmluZGluZ0ZpbHRlcjoxNzE%3D&scopeId=U2NvcGVHcm91cDox').then(findingsNumber =>{
      cy.wrap(findingsNumber).get('[class="total-findings-title-num"]').invoke('text').then(verifyNumber =>{
        const numOfFindings= parseInt(verifyNumber);
        assert.isAbove(numOfFindings, 10);
      })
    })
   })
})
