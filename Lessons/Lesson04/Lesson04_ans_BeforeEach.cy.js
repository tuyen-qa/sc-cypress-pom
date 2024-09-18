// import the bike light JSON fixture file
// using the relative path
import item from '../../fixtures/bike-light.json';

beforeEach(() => {
  cy.visit('/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.location('pathname').should('equal', '/inventory.html')
})

it('has an item with details', () => {

  // and confirm there is an item in the inv entory
  // with the name, description, and price listed in the fixture object
  // https://on.cypress.io/contains
  // https://on.cypress.io/within
  cy.contains('.inventory_item', item.name).within(() => {
    cy.contains('.inventory_item_name', item.name)
    cy.contains('.inventory_item_desc', item.description)
    cy.contains('.inventory_item_price', item.price)
  })
})
