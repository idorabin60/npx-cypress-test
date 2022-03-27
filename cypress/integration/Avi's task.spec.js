/// <reference types="cypress" />


describe('avis test', () => {
  it('first test', () => {
    cy.visit('/');
    cy.get('[placeholder="USERNAME"]').click().type('idorabin@seemplicity.com');
    cy.get('[placeholder="PASSWORD"]').click().type('Kingbar100!');
    cy.get('[data-testid="login-submit-btn"]').click()
    cy.get('[data-testid="add-filter-btn-btn"]').should('exist').click({force: true}).then(filter_section => {
      cy.wrap(filter_section).get('[class="filter-dropdown-item"]').contains('Ticket Status').click().then(filter_selected =>{
        cy.wrap(filter_selected).get('[class="condition-selected-value condition-selected-value  "]').last().click().then(condition_click =>{
          cy.wrap(condition_click).get('[class="filter-dropdown-item"]').contains('!=').click().then(condition_selected=>{
            cy.wrap(condition_selected).get('[class="checkbox-list-option"]').click({multiple:true}).then(value_selected=>{
              cy.wrap(value_selected).get('[data-testid="filter-preview-btn"]').click().then(Check_nofilter =>{
                cy.wrap(Check_nofilter).get('[class="dashboard-widget-wrapper widget-size-s ticket-status-dashboard-widget"]').should('contain','No match for the selected filter')
              })

            })
          })
        })

      })
      // cy.get('[class="filter-dropdown-item"]').contains('Ticket Status').should('exist').click({force: true}).then(() => {
      //   cy.get('[class="condition-selected-value condition-selected-value  "]').last().should('exist').click({force: true}).then(() => {
      //     cy.get('[class="filter-dropdown-item"]').contains('!=').should('exist').click({force: true}).then(() => {
      //
      //       cy.get('[data-testid="IN_PROGRESS-checkbox"]').last().should('exist').click({force: true})
            // .get('[class="filter-dropdown-wrap has-input"]')//.should('be.visible')


          // })

        //})

      })
    })

  })

// });

// describe('avis test', () => {
//   it('first test', () => {
//     cy.visit('/');
//     cy.get('[placeholder="USERNAME"]').click().type('idorabin@seemplicity.com');
//     cy.get('[placeholder="PASSWORD"]').click().type('Kingbar100!');
//     cy.get('[data-testid="login-submit-btn"]').click()
//     cy.get('[data-testid="add-filter-btn-btn"]').should('exist').click({force: true}).then(() => {
//       cy.get('[class="filter-dropdown-item"]').contains('Ticket Status').should('exist').click({force: true}).then(() => {
//         cy.get('[class="condition-selected-value condition-selected-value  "]').last().should('exist').click({force: true}).then(() => {
//           cy.get('[class="filter-dropdown-item"]').contains('!=').should('exist').click({force: true}).then(() => {
//
//             cy.get('[data-testid="IN_PROGRESS-checkbox"]').last().should('exist').click({force: true})
//               // .get('[class="filter-dropdown-wrap has-input"]')//.should('be.visible')
//
//
//           })
//
//         })
//
//       })
//     })
//   });
// });

    // cy.contains('Average Age By Severity').then(Dashboard =>{
    //     const is_dash= Dashboard.text();
    //     expect(is_dash).to.equal('Average Age By Severity');

    // })
    //  cy.wait(5)

    // cy.contains('Add Filter').click().then(TicketStatus =>{
    //     cy.wrap(TicketStatus).get('[class="filter-dropdown-wrap"]').contains('Ticket Status').click()
    //     cy.wrap(TicketStatus).get('[class="filter-row-item"]').eq(1).find('[class="condition-selected-value condition-selected-value  "]')
    //     .click()
    //     .get('[class="filter-dropdown-item-wrap "]')
    //     .wait(5000)
    //     .find('[class="filter-dropdown-item"]').click()
    //     .wait(5000)
    //     .get('[class="filter-row-item"]').eq(1).find('[class="selected-value-title"]').eq(1).click()
    //     .wait(11000)
    //     .get('[class="Popover Popover-below "]')
    //     .find('[class="Popover-body"]')
    //     .find('[class="checkbox-list-options-container  column"]').find('[class="checkbox-list-option"]').click({multiple: true })
    //     .get('[class="form-button-wrap has-label is-secondary is-in-menu "]')
    //     .find('[class="form-button "]').click()


    // })
    // cy.wait(5000)
    // cy.get('[class="dashboard-widget-wrapper widget-size-s ticket-status-dashboard-widget"]').should('contain','No match for the selected filter')


    // cy.contains('Findings').click()

    // cy.get('[class="total-findings-title-num"]').invoke('text').then(number_of_findings =>{
    //     expect(number_of_findings).not.to.equal('0'),{timeout:300000};


    // })
    // cy.contains('Add Filter').click().then(TicketStatus =>{
    //        cy.wrap(TicketStatus).get('[class="filter-dropdown-wrap"]').contains('Ticket Status').click().then(()=>{
    //          cy.get('[class="condition-selected-value condition-selected-value  "]').eq(1).click().then(()=>{
    //             cy.get('[class="filter-dropdown-item"]').eq(1).click({force:true}).then(()=>{
    //                 cy.get('[data-testid="IN_PROGRESS-checkbox"]').should('be.v').click({force:true}).then(()=>{
    //                     cy.get('[class="form-button-wrap has-label is-secondary is-in-menu "]').find('[data-testid="filter-preview-btn"]').click();

    //                 })
    //                 //cy.get('[data-testid="filter-preview-btn"]').click()


    //              })


//   });
// });
