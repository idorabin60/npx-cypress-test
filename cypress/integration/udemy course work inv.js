// <reference types="cypress" />
describe('udemy tests', () => {
  // it('invoke test', () => {
  //   cy.visit('/')
  //   cy.contains('Forms').click().then(forms => {
  //     cy.contains('Form Layouts').click().then(forms_layouts => {
  //       cy.contains('nb-card', 'Basic form')
  //         .find('nb-checkbox')
  //         .click().then(clicked => {
  //         cy.wrap(clicked).find('.custom-checkbox')
  //           .invoke('attr', 'class')
  //           .should('contain', 'checked')
  //       })
  //     })
  //   })



  // it.only('date test', () => {
  //   cy.visit('/')
  //   cy.contains('Forms').click()
  //   cy.contains('Datepicker').click()
  //
  //   let date = new Date()
  //   date.setDate(date.getDate()+20)
  //   let futereday = date.getDate()
  //   let futereMonth = date.toLocaleDateString('default',{month: "short"})
  //
  //   cy.contains('nb-card','Common Datepicker').find('input').then(input=>{
  //     cy.wrap(input).click({force:true})
  //       cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then(dateAttribute =>{
  //         if(!dateAttribute.includes(futereMonth))
  //         {
  //           cy.get('[data-name="chevron-right"').click()
  //           cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]' ).contains(futereday).click()
  //
  //         }
  //         else
  //         {
  //           cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]' ).contains(futereday).click()
  //
  //         }
  //       })
        //.get('nb-calendar-day-picker')
        //.contains('29')
        //.click()
      //cy.wrap(input).invoke('prop','value').should('contain',"Mar 29, 2022")
    })
it.only('tooltip', () =>{
  cy.visit('/')
  cy.contains('Modal & Overlays').click()
  cy.contains('Tooltip').click()
  cy.contains('nb-card','Colored Tooltips')
    .contains('Default').click({force:true})
})









