describe('Prueba de navegación', () => {
  beforeEach(() => {
    cy.visit('https://www.platzi.com');
  });

  it('Esperar por un tiempo definido', () => {
    cy.wait(5000);
  });

  it('Esperar por un elemento', () => {
    //El timeout por defecto para un elemento son 4 segundos (sin el timeout)
    cy.get('.ButtonLogin-cta', { timeout: 6000 });
  });

  it('Esperar por un elemento y hacer una asercion', () => {
    //El timeout por defecto para un elemento son 4 segundos
    cy.get('.ButtonLogin-cta', { timeout: 6000 }).should('be.visible');
  });
});

describe('Esperando por elementos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deshabilitar el retry', () => {
    // cy.get('.banner-image444', { timeout: 5000 });
    // cy.get(':nth-child(3) > :nth-child(1) > .card-body', { timeout: 5000 });
    cy.get(':nth-child(3) > :nth-child(1) > .card-body', { timeout: 0 });
    // cy.get('.banner-image444', { timeout: 0 });
  });
});
