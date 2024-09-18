it('confirms the item with the lowest price', () => {
  // 0. visit the page
  cy.visit('/')

  // 1. Get username field and type username.
  // https://on.cypress.io/get
  // https://on.cypress.io/type

  // 2. Get password field and type password.
  // https://on.cypress.io/get
  // https://on.cypress.io/type

  // 3. Get login button and Click it.
  // https://on.cypress.io/click

  // 4. you should transition to the inventory page. Use the assertion to check the URL
  // https://on.cypress.io/location

  // 5. once the inventory loads, grab the item prices
  // https://on.cypress.io/get
  // https://on.cypress.io/find




    // from each price element, get its inner text
    // and log it to the DevTools console
    // https://on.cypress.io/then
    // Tip: Research how to use Cypress._.map. Cypress has Lodash library built-in. We can use it to map over the list of elements.


    // each price string has "$" character in front
    // remove it using string "substr" method


    // convert each price string into a Number


    // find the smallest price number using Cypress._.min


    // and confirm it is 7.99

})
