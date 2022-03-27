/// <reference types="cypress" />






// describe('Our first suite', () => {

//          cy.get('[data-testid="login-username-input"]')
//          cy.contains('Forms').click();
//          cy.contains('Form Layouts').click();



//          //by Tag Name
//          cy.get('input')
//         // //by ID
//          cy.get('#inputEmail1')
//         // //by Class name
//          cy.get('.input-full-width')
//         // //by Attribute name
//          cy.get('[placeholder]')
//         // //by Atrribute name and value
//          cy.get('[placeholder="Email"]')
//         // //by class value
//          cy.get('[class="input-full-width size-medium shape-rectangle"]')
//         // //by tag name and Attribute with value
//          cy.get('input[placeholder="Email"]')
//         // //by two diffrent Attributesa
//          cy.get('[placeholder="Email"][type="email"]')
//         // //by tag name Attribute with vale, id and class name
//          cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
//         // //the most recomende way by cypress
//          cy.get('[data-cy="imputEmail1"]')

//     })
//     it('seconed test', () =>{
//         cy.visit('/')
//         cy.contains('Forms').click();
//         cy.contains('Form Layouts').click();
//         cy.get('[data-cy="signInButton"]')
//         cy.contains('Sign in')
//         cy.contains('[status=warning]','Sign in')
//         cy.get('#inputEmail3')
//             .parents('form')
//             .find('button')
//             .should('contain', 'Sign in')
//             .parents('form')
//             .find('nb-checkbox')
//             .click({force:true})


//     })
//     it('then and wrap methods', () =>{
//         cy.visit('/')
//         cy.contains('Forms').click();
//         cy.contains('Form Layouts').click();
//         cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email');
//         cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password');
// 3
//         cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address');
//         cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password');

//         cy.contains('nb-card','Using the Grid').then(firstform=>{
//            const enaillabelfirst = firstform.find('[for="inputEmail1"]').text();
//            const passwordlabelfirst = firstform.find('[for="inputPassword2"]').text();
//            expect(enaillabelfirst).to.equal('Email');
//            expect(passwordlabelfirst).to.equal('Password');
//            cy.contains('nb-card','Basic form').then(secondform=>{
//               const second_password = secondform.find('[for="exampleInputPassword1"]').text();
//               expect(second_password).to.equal(passwordlabelfirst);
//               cy.wrap(secondform).find('[for="exampleInputPassword1"]').should('contain','Password');
//            })
//         });
//      });
//      it('invoke test', () =>{
//         cy.visit('/')
//         cy.contains('Forms').click();
//         cy.contains('Form Layouts').click();
//         cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

//         cy.contains('nb-card', 'Basic form').then(a_test =>{
//             const is_email = a_test.find('[for="exampleInputEmail1"]').text();
//             expect(is_email).to.equal('Email address');
//         })
//         cy.get('[for="exampleInputEmail1"]').invoke('text').then(text =>{
//             expect(text).to.equal('Email address')
//         })
//         cy.contains('nb-card', 'Basic form').find('nb-checkbox').click().find('.custom-checkbox').invoke('attr','class').then(classvalue=>{
//             expect(classvalue).to.contain('checked')
//         })




//      })
//      it('assert tests', ()=>{
//         cy.visit('/')
//         cy.contains('Forms').click();
//         cy.contains('Datepicker').click();
//         cy.contains('nb-card', 'Common Datepicker').find('input').then( input =>{
//             cy.wrap(input).click({force: true})
//             cy.get('nb-calendar-day-picker').contains('14').click()
//             cy.wrap(input).invoke('prop','value').should('contain', 'Mar 14, 2022')
//         cy.contains('nb-card','Datepicker With Range').find('input').then(input2 =>{
//             cy.wrap(input2).click({force: true});
//             cy.get('nb-calendar-day-picker').contains('14').click()
//             cy.wrap(input2).invoke('prop','value').should('contain','Mar 14, 2022')
//         })

//         })

//      })
//      it('check box', ()=>{
//         cy.visit('/')
//         cy.contains('Forms').click();
//         cy.contains('Form Layouts').click();
//         cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radio_buttons =>{
//             cy.wrap(radio_buttons)
//                 .first()
//                 .check({force:true})
//                 .should('be.checked')

//             cy.wrap(radio_buttons)
//                 .eq(1)
//                 .check({force:true})

//             cy.wrap(radio_buttons)
//                 .eq(0)
//                 .should('not.be.checked')
//             cy.wrap(radio_buttons)
//                 .eq(2)
//                 .should('be.disabled')

//         })

    // })
    // it.only('lists and dropdowns', () =>{
    //     cy.visit('/')
    //     cy.contains('Tables & Data').click();
    //     cy.contains('Smart Table').click();
    //     cy.contains('tr','Larry').then(tableRow =>{
    //         cy.wrap(tableRow).find('.nb-edit').click({force:true});
    //         cy.wrap(tableRow).find('[placeholder="Age"]').clear()
    //         cy.wrap(tableRow).find('[placeholder="Age"]').type('25')
    //         cy.wrap(tableRow).find('[class="nb-checkmark"]').click({force:true})
    //         cy.wrap(tableRow).find('td').eq(6).should('contain','25');
    //
    //
    //     })
    //     cy.get('thead').find('[class="nb-plus"]').click({force:true});
    //     cy.get('thead').find('tr').eq(2).then(tableRow=>{
    //          cy.wrap(tableRow).find('[placeholder="First Name"]').type('ido');
    //          //const tex= cy.wrap(tableRow).find('[placeholder="First Name"]');
    //          cy.wrap(tableRow).find('[placeholder="Last Name"]').type('rabin');
    //          cy.wrap(tableRow).find('[class="nb-checkmark"]').click({force:true})
    //
    //     cy.get('tbody').find('tr').first().then(tablerow =>{
    //         //cy.wrap(tablerow).should('contain','ido')
    //         //cy.wrap(tablerow).find('td').eq(2).should('contain','ido');
    //         cy.wrap(tablerow).find('[class="nb-edit"]').click({force:true})
    //         cy.wrap(tablerow).find('[placeholder="First Name"]').clear()
    //         cy.wrap(tablerow).find('[placeholder="First Name"]').type('dogg')
    //         cy.wrap(tablerow).find('[class="nb-checkmark"]').click({force:true})
    //         cy.wrap(tablerow).find('td').eq(2).should('contain','dogg')
    //
    //
    //
    //
    //     })
    //
    //
    //     })












        // })
        //




