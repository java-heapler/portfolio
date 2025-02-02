describe('Home Page', () => {
  it('should display the header', () => {
    cy.visit('/');
    cy.get('header').should('be.visible');
  });
}); 