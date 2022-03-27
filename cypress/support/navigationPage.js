function select_group_menu(groupname)
{
  cy.contains('a',groupname).then(menu =>{
  cy.wrap(menu).find('.expand-state g g ').invoke('attr','data-name').then(attr=>{
    if(attr.includes('left'))
    {
      cy.wrap(menu).click()
    }
  })
})

}
export class NavigationPage
{
  FormLayoutPage()
  {
    select_group_menu('Form')
    cy.contains('Form Layouts').click();
  }

  DatePicker()
  {
    select_group_menu('Form')
    cy.contains('Datepicker').click();
  }

  Toasterpage()
  {
    select_group_menu('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  SmartTable_page()
  {
    select_group_menu('Tables & Data')
    cy.contains('Smart Table').click()

  }

  Tooltip_Page()
  {
    select_group_menu('Modal & Overlays')
    cy.contains('Tooltip').click()

  }






}
export const To_Nav = new NavigationPage()

