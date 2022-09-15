describe('Login Form', () =>
{
  before(() =>
  {
    cy.visit('https://www.instagram.com')
  })
    it('Login form displaying', () =>
    {
      cy.get('button').contains('Allow essential and optional cookies').click()
      cy.contains('Phone number, username, or email').next().should('be.visible')
      cy.contains('Password').next().should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
      cy.get('button').contains('Log in with Facebook').should('be.visible')
      cy.get('a').contains('Forgot password').should('be.visible')
    })
     it('ability to log in', () =>
    {
      cy.get('input[aria-label="Phone number, username, or email"]').type('tvoy_patronus')
      cy.get('input[aria-label="Password"]').type('patronus1992')
      cy.get('button[type="submit"]').click()
      cy.get('svg[aria-label="Loading..."]').should('be.visible').should('exist')
      cy.get('svg[aria-label="Loading..."]').should('not.exist')
      cy.get('button').contains('Not now').click()
    })
    
})