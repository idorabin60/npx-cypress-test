// beforeEach(()=> {
//   cy.visit('/')
//   cy.Login_udemy({email: 'idorabin@seemplicity.com', password: 'kingbar100'})

  describe('final_taske', () => {
    it.only('intercepting and modifying the req and respone', () => {
      //cy.intercept('POST', '**/articles').as('postArticles');
      cy.visit('/')
      cy.Login_udemy({email: 'idorabin@seemplicity.com', password: 'kingbar100'})
      cy.intercept('POST', '**/articles',(req => {
        req.body.article.body = 'This is the body of the article 2'

      })).as('postArticles');

      cy.contains('New Article').click();
      cy.get('[placeholder="Article Title"]').type('This is a title');
      cy.get('[placeholder="Write your article (in markdown)"]').type('This is a body of the Article ');
      cy.contains('Publish Article').click();

      cy.wait('@postArticles');
      cy.get('@postArticles').then(xhr => {
        console.log(xhr);
        expect(xhr.response.statusCode).to.equal(200);
        expect(xhr.response.body.article.body).to.equal('This is the body of the article 2')
      })
    })
  })
// })


