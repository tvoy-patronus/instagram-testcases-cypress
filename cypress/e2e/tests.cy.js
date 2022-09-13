describe('Login Form', () =>
{
  before(() =>
  {
    cy.visit('https://www.instagram.com')
  })
    it('Login form displaying', () =>
    {
      cy.get('button').contains('Allow essential and optional cookies').click()
      cy.get('input[name="username"]').should('be.visible')
      cy.get('input[name="password"]').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
      cy.get('button').contains('Log in with Facebook').should('be.visible')
      cy.get('a[href*="/accounts/password/reset"').should('be.visible')
    })
     it('ability to log in', () =>
    {
      cy.get('input[name="username"]').type('test.taia')
      cy.get('input[name="password"]').type('testtaia1992')
      cy.get('button[type="submit"]').click()
    })
    
})