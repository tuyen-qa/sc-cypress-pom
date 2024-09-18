it('confirms the item with the lowest price', () => {
  // 0. visit the page
  cy.visit('/')

  // 1. Get username field and type username.
    // https://on.cypress.io/get
    // https://on.cypress.io/type
  cy.get('[data-test="username"]').type('standard_user')
  // 2. Get password field and type password.
    // https://on.cypress.io/get
    // https://on.cypress.io/type
  cy.get('[data-test="password"]').type('secret_sauce')
  // 3. Get login button and Click it.
    // https://on.cypress.io/click
  cy.get('[data-test="login-button"]').click()
  // 4. you should transition to the inventory page. Use the assertion to check the URL
    // https://on.cypress.io/location
  cy.location('pathname').should('equal', '/inventory.html')
  // 5. once the inventory loads, grab the item prices
    // https://on.cypress.io/get
    // https://on.cypress.io/find
  cy.get('.inventory_list')
    .should('be.visible')
    .find('.inventory_item_price')
    .should('have.length.greaterThan', 3)
    // from each price element, get its inner text
    // and log it to the DevTools console
      // https://on.cypress.io/then
      // Tip: Research how to use Cypress._.map. Cypress has Lodash library built-in. We can use it to map over the list of elements.
    .then((list) => Cypress._.map(list, 'innerText'))
    .then(console.log)
    // each price string has "$" character in front
    // remove it using string "substr" method
    .then((list) => Cypress._.map(list, (s) => s.substr(1)))
    .then(console.log)
    // convert each price string into a Number
    .then((list) => Cypress._.map(list, Number))
    .then(console.log)
    // find the smallest price number using Cypress._.min
    .then((list) => Cypress._.min(list))
    .then(console.log)
    // and confirm it is 7.99
    .should('equal', 7.99)
})
