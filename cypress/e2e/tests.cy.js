describe('Login Form', () =>
{
  before(() =>
  {
    cy.visit('https://www.instagram.com')
  })
    it('Login form displaying', () =>
    {
      cy.get('button').contains('Allow essential and optional cookies').click()
      cy.get('button', {timeout: 4000}).contains('Allow essential and optional cookies').should('not.exist')
      cy.get('img[alt="Instagram"]').should('be.visible')
      cy.get('input[name="username"]').should('be.visible')
      cy.get('input[name="password"]').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
      cy.get('button').contains('Log in with Facebook').should('be.visible')
      cy.get('a').contains('Forgot password').should('be.visible')
    })
     it('ability to log in', () =>
    {
      cy.get('input[name="username"]').type('test.taia')
      cy.get('input[name="password"]').type('testtaia1992')
      cy.get('button[type="submit"]').click()
      cy.get('svg[aria-label="Loading..."]').should('be.visible').should('exist')
      cy.get('svg[aria-label="Loading..."]', {timeout: 4000}).should('not.exist')
      cy.get('div').contains('Save your login information?').should('be.visible')
    })
    
})