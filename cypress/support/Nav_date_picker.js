export class Form_Layouts_Page
{
  Submit_in_line_for_name_and_email(name,mail)
  {
    cy.contains('nb-card', 'Inline form').find('form').then(form =>{
      cy.wrap(form).find('[placeholder="Jane Doe"]').clear({force:true}).type(name);
      cy.wrap(form).find('[placeholder="Email"]').type(mail);
      cy.wrap(form).find('[type="checkbox"]').click({force:true})
      cy.wrap(form).submit()


    })
  }


}
export const To_Nav_Layoutpage = new Form_Layouts_Page()
