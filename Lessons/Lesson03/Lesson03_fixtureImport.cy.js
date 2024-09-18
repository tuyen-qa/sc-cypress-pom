// import the bike light JSON fixture file
// using the relative path

it('has an item with details', () => {
  cy.visit('/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.location('pathname').should('equal', '/inventory.html')
  // and confirm there is an item in the inventory
  // with the name, description, and price listed in the fixture object
  // https://on.cypress.io/contains
  // https://on.cypress.io/within

})
