describe('Guardando elementos', () => {
  it('Repetición', () => {
    cy.visit('/automation-practice-form');
    //Obteniendo el elemento padre
    // cy.get('input[placeholder="First Name"]').parent();
    //Obteniendo los elementos padres
    cy.get('input[placeholder="First Name"]').parents();

    // cy.get('input[placeholder="First Name"]').parents().find('label');

    // cy.get('form').find('label');
  });

  it('Evitar repetición', () => {
    // cy.visit('/automation-practice-form');
    //Obteniendo el elemento padre
    cy.get('input[placeholder="First Name"]')
      .parents('form')
      .then((form) => {
        const inputs = form.find('input');
        const divs = form.find('div');
        const labels = form.find('label');

        cy.log('inputs', inputs.length);
        cy.log('divs', divs.length);
        cy.log('labels', labels.length);
        // // validar la cantidad de elementos (inputs || divs || labels) en el formulario
        expect(inputs.length).to.eq(15);
        // // Función para envolver elemento de JQuery para que se vuelva un elemento de cypress
        cy.wrap(inputs).should('have.length', 15);
        expect(divs.length).to.eq(70);
        expect(labels.length).to.eq(16);

        // cy.pause();

        // cy.log('soy la longitud', inputs.length);
        // console.log('Soy la longitud', inputs.length);
        // debugger;

        // cy.task('log', inputs.length);
      });

    // cy.get('form').find('label');
    cy.log('soy la longitud');

    cy.get('input[placeholder="First Name"]').then(console.log);
    cy.get('input[placeholder="First Name"]').debug();
  });
});
