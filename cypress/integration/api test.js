beforeEach(()=>{
  cy.visit('/');
  cy.Login_udemy()
})

describe('api test',()=>{
  it('api test',() =>{
    const userCredent = {
      "user": {
        "email": "idorabin@seemplicity.com",
        "password": "kingbar100"
      }
    }
    const bodyReq = {
      "article": {
        "title": "31.3test after change",
        "description": "abc",
        "body": "defg",
        "tagList": []
      }
    }
    cy.request('POST','http://localhost:3000/api/users/login',userCredent)
      .its('body').then(body=>{
        console.log(body)
        const token1 = body.user.token
    })
    cy.request({
      url:'http://localhost:3000/api/articles?',
      headers: {'Authorization': 'Token '+token1};
    })
  })

})
