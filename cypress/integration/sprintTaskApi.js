beforeEach(()=> {
  //cy.visit('/');
  //cy.typeLogin({email: Cypress.env('USERNAME'), password: Cypress.env('PASSWORD')});
})
describe('asserting with api',()=> {
  it('asserting with api',()=>{
    const bodyReq = {
      "operationName": "GetFindingsByGroup",
      "variables": {
        "groupBy": [
          "finding.severity"
        ],
        "sort": [
          "SEVERITY_DESC"
        ],
        "filters_config": {
          "scopesjson": null,
          "filtersjson": "{\"operator\":\"and\",\"operands\":[{\"field\":\"actual_status\",\"condition\":\"\",\"value\":{\"field\":\"key\",\"condition\":\"in\",\"value\":[\"11\",\"12\",\"13\",\"14\",\"15\"]}},{\"value\":[\"3\"],\"field\":\"severity\",\"condition\":\"in\"}]}",
          "scopesid": "U2NvcGVHcm91cDox"
        }
      },
      "query": "query GetFindingsByGroup($groupBy: [String], $sort: [FindingsViewGroupSortEnum], $filters_config: FiltersConfigInput) {\n  findings_groups: findings_view_groups(\n    group_by: $groupBy\n    sort: $sort\n    filters_config: $filters_config\n  ) {\n    total_count\n    group_by {\n      field\n      value\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
    const token ='Bearer eyJraWQiOiIzbDF5dVNRSUxCZmhqNk9lZ1RBTnZrWmZvdXhSMVwvZ2VMQmMwOG5QNWdzOD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYmYwOGE0Ny1iZTFiLTQ5YjktOGFkMi00ZjY1ODMwNTEwNTEiLCJjb2duaXRvOmdyb3VwcyI6WyJ7XCJzdWJcIjogXCJjYmYwOGE0Ny1iZTFiLTQ5YjktOGFkMi00ZjY1ODMwNTEwNTFcIiwgXCJjb2duaXRvOnVzZXJfc3RhdHVzXCI6IFwiQ09ORklSTUVEXCIsIFwiZW1haWxcIjogXCJpZG9yYWJpbkBzZWVtcGxpY2l0eS5jb21cIn0iXSwiZXZlbnRfaWQiOiJlOWMzZGJjNS05ZDNiLTRlZTAtYTZjNS0zOTYwN2MwZDE3ZDkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ4OTg3MzAwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9lSEp5SXQ0bkgiLCJleHAiOjE2NDg5OTA5MDAsImlhdCI6MTY0ODk4NzMwMCwianRpIjoiNTg2Yzc5MTctYjA2Yy00NDhhLTljNzAtYmY2ODg2OTVhOTU3IiwiY2xpZW50X2lkIjoiNTdqb290bHNrbzRiZGZxdGkyMmc3b3VzdTQiLCJ1c2VybmFtZSI6ImNiZjA4YTQ3LWJlMWItNDliOS04YWQyLTRmNjU4MzA1MTA1MSJ9.hGvQJyRHPJEcYtIB9HuWL0yq7rpc98BtZy1XsUxl1i2KYFGF_jyMlKBs9uz6n_n5NfN3pm9_KYu4ZewL3qbCwEWmOLMIQDN7vVqI90jRdvRhCgr_MOfM7KNxFHuE1RxA8LFvvxEOJKR89lT39-AT4qQyi94TcrE-OPgWq_ifGYeJGLwc8EyoSfLEyZ6jvKJnU47zFfnO211emwBqe6lbpUozG8G_a8NNsFXFHWGe403H7xDUgskJH40QyYK0kumd2dj4iDObchYpTYmKeLA0Pr_rzq1CkZuqGm-cODiQGh8R0FhNpMyw2ccQnaK29R9-Pozc-9NZA3mymD12rJq1jQ'
    cy.request({
      url: 'https://api.seemplicity.io/api/graphql',
      headers: {'Authorization': token},
      method: 'POST',
      body: {
        "operationName": "GetFindingsByGroup",
        "variables": {
          "groupBy": [
            "finding.severity"
          ],
          "sort": [
            "SEVERITY_DESC"
          ],
          "filters_config": {
            "scopesjson": null,
            "filtersjson": "{\"operator\":\"and\",\"operands\":[{\"field\":\"actual_status\",\"condition\":\"\",\"value\":{\"field\":\"key\",\"condition\":\"in\",\"value\":[\"11\",\"12\",\"13\",\"14\",\"15\"]}},{\"value\":[\"3\"],\"field\":\"severity\",\"condition\":\"in\"}]}",
            "scopesid": "U2NvcGVHcm91cDox"
          }
        },
        "query": "query GetFindingsByGroup($groupBy: [String], $sort: [FindingsViewGroupSortEnum], $filters_config: FiltersConfigInput) {\n  findings_groups: findings_view_groups(\n    group_by: $groupBy\n    sort: $sort\n    filters_config: $filters_config\n  ) {\n    total_count\n    group_by {\n      field\n      value\n      __typename\n    }\n    __typename\n  }\n}\n"


      }
    }).then(response =>{
      console.log(response)
      expect(response.body.data.findings_groups[0].total_count).to.equal(65);
    })
  })
  })



