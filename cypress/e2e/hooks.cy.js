describe('Aserciones', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  after(() => {
    cy.visit('/');
  });

  // Asercion sobre el elemento de Cypress
  it('Asercion', () => {
    // cy.visit('/automation-practice-form');
    //Regresar la url donde estoy contiene demoqa.com
    cy.url().should('include', 'demoqa.com');
    //Verificar si el elemento #firstName es visible
    cy.get('#firstName')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'First Name');
  });

  // Asercion sobre el elemento de JQuery
  it('Asercion 2', () => {
    // cy.visit('/automation-practice-form');
    // Regresar la url donde estoy contiene demoqa.com
    cy.url().should('include', 'demoqa.com');
    //Verificar si el elemento #firstName es visible
    cy.get('#firstName').then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr('placeholder', 'First Name');
    });
  });

  // Asercion sobre el elemento de JQuery
  it('Asercion 3', () => {
    // cy.visit('/automation-practice-form');
    // Regresar la url donde estoy contiene demoqa.com
    cy.url().should('include', 'demoqa.com');
    //Verificar si el elemento #firstName es visible
    cy.get('#firstName').then((element) => {
      assert(element.attr('placeholder'), 'First Name');
    });
  });
});
