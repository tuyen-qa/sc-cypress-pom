it('login, navigates to the inventory page and display at least 3 items in inventory list', () => {
  cy.visit('/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')

  cy.get('[data-test="login-button"]').click()

  cy.location('pathname').should('equal', '/inventory.html')

  cy.get('.inventory_list')
    .should('be.visible')
    .find('.inventory_item')
    .should('have.length.greaterThan', 3)
})
