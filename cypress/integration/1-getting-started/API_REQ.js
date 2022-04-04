beforeEach(()=>{
  cy.visit('/')
  cy.Login_udemy({email: 'idorabin@seemplicity.com', password: 'kingbar100'})

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
      "article": {
        "title": "cool kids test after a change",
        "description": "cool kid test",
        "body": "123",
        "tagList": [
          "123"
        ]
      }
    }

    cy.request('POST', 'http://localhost:3000/api/users/login', usserCredent)
      .its('body').then(body => {
      const token = body.user.token

    })
    cy.request({
      url:"http://localhost:3000/api/articles",
      headers: {'Authorization': 'Token' +token},
      method: 'POST',
      body: reqBody
    }).then(response =>{
      expect(response.status).to.equal(200)
    })
  })

})
