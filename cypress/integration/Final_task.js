describe('final project',()=>{
  beforeEach(()=> {
    //cy.route('GET','**/tags','fixture:tags.json')
    cy.visit('/')
    cy.server()
    cy.Login_udemy({email: 'idorabin@seemplicity.com', password: 'idoidoido1'})
  })
  it.skip('Verify correct respondes',()=>{

    cy.get('[class="navbar navbar-light"]').contains('New Article').click({force:true})
    cy.get('[placeholder="Article Title"]').type('this is the title')
    //cy.get('[placeholder="Whats this article about?"]').type('blablaba')
    cy.get('[placeholder="Write your article (in markdown)"]').type('123456')
    cy.get('[placeholder="Enter tags"]').type('987')
    cy.get('button').click({force:true})
    cy.wait('@postArticles')
    cy.get('@postArticles').then(xhr=>{
      console.log((xhr))
       expect(xhr.status).to.equal(200)
       expect(xhr.request.body.article.body).to.equal('123456')
    })

    })
  it.skip('should gave tags',()=>{
    cy.get('.tag-list')
      .should('contain','cypress')
      .and('contain','automation')
  })
  it('verify global feed likes count', ()=> {
    cy.intercept('GET','**/articles/feed*',{"articles":[],"articlesCount":0})
    cy.intercept('GET','**/articles*',{fixture: 'Articales.json'})
    cy.get('[class="home-page"]').contains('Global Feed').click()
    cy.get('.article-preview').find('button').then(listofbuttons =>{
      expect(listofbuttons[0]).to.contain('5')
      expect(listofbuttons[1]).to.contain('1')

    })
    it('delete a new article in a global feed')



  });


})
