beforeEach(()=>{
  cy.server()
  cy.route('GET','**/tags','fixture:tags.json')
  cy.visit('/')
  cy.Login_udemy({email: 'idorabin@seemplicity.com', password: 'kingbar100'})
})
describe('final_taske',()=> {
  it('tag test',() =>{
    cy.get('.tag-list')
      .should('contain','cypress')
      .and('contain','automation')
  })
  it('verify global feed',()=>{
    cy.route('GET','**/articles*','fixture:Articales.json')
    cy.route('GET','**/articales/feed*','{"articles":[],"articlesCount":0}')
    cy.contains('Global Feed').click();

  })


})
