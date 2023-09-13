describe('Testing home page', () => {
  describe('Testing', () =>  {
    it('Testing when click a post is redirect', () => {
      cy.visit('/');

      cy.get('.post-card-container').first().click();

      cy.wait(5000);

      cy.get('.post-page-title').should('have.text', 'Best post of the year');
      cy.title().should('eq', 'Best post of the year');
    });
  })
});
