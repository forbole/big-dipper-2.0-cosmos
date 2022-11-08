describe('Example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Displays english', () => {
    cy.contains("Big ol' welcome to this boilerplate").should('be.visible');
    cy.contains('change lang').click();
    cy.contains("中文 Big ol' welcome to this boilerplate").should('be.visible');
  });
});

export {};
