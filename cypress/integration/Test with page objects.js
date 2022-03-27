import {To_Nav} from "../support/navigationPage";
import {To_Nav_Layoutpage} from "../support/Form_Layouts_Page";

describe('page with test objects',() =>{
  beforeEach('open app',() =>{
    cy.visit('/')
  })
  it('verify navigation in the app', () =>{
    To_Nav.FormLayoutPage()
    To_Nav.DatePicker()
    To_Nav.SmartTable_page()
    To_Nav.Toasterpage()
    To_Nav.Tooltip_Page()

  })
  it.only('Inline form',() =>{
    To_Nav.FormLayoutPage()
    To_Nav_Layoutpage.Submit_in_line_for_name_and_email('ido','ido@king')
    To_Nav.DatePicker()

  })
})

