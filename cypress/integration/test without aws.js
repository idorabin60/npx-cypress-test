beforeEach(()=>{
  cy.visit('/')
  cy.typeLogin({email: 'idorabin@seemplicity.com', password: 'Kingbar100!'})

  cy.request({
    method: 'POST',
    url: 'https://app.seemplicity.io/findings?filterId=RmluZGluZ0ZpbHRlcjoxNzE%3D&scopeId=U2NvcGVHcm91cDox', // baseUrl is prepend to URL
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      username: 'idorabin@seemplicity.com',
      password: 'Kingbar100!',
    },
  })

})
describe('new login test ',()=> {
  it('login in a new way', () => {

  })
})
