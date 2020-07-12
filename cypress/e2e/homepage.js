describe('blog homepage', () => {
  it('can visit homepage', () => {
    cy.visit('/');
    cy.findByText('Remigiusz Wasiak Blog');
    cy.findByAltText("Blog's author Remigiusz Wasiak");
    cy.findByText('by Remigiusz Wasiak');
  });
});
