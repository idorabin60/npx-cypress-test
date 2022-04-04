beforeEach(()=>{
  cy.visit('/')
  cy.Login_udemy()

})
describe('delete a new articale using api req', () =>{
  it('lesson 30',() => {
    const usserCredent = {
      "user": {
        "email": "idorabin@seemplicity.com",
        "password": "kingbar100"
      }
    }

    const reqBody ={
      "title": "31.3test after change",
      "description": "abc",
      "body": "defg",
      "tagList": []
    }



    const token1 = ''

    cy.request('POST','http://localhost:3000/api/users/login',usserCredent)
      .its('body1').then(body1 =>{
         //const token1 = body.user.token


    })
    const token2 = token1


    })
       cy.request({
         url:"http://localhost:3000/api/articles",
      headers: {'Authorization': 'Token '+token2},
      method: 'POST',
      body: reqBody
    }).then(response =>{
      expect(response.status).to.equal(200)
    })
  })



