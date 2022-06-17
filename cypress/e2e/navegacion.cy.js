describe('Prueba de navegación', { browser: 'chrome' }, () => {
  it('Navegar a nuestra primer pagina', () => {
    cy.visit('https://www.platzi.com');
  });

  it('Recargar pagina', () => {
    cy.reload();
  });

  it('Recargar pagina de forma forzada', () => {
    cy.visit('https://www.google.com');
    cy.reload(true);
  });

  it.only('Navegar hacia atras', () => {
    cy.visit('https://www.google.com');
    cy.visit(
      'https://www.google.com/search?q=platzi&sxsrf=ALiCzsamOpiWtdZIvMOpx2K4IjKWOnvyOA%3A1655290219616&source=hp&ei=a7mpYuqYI-yNwbkP08iOiAM&iflsig=AJiK0e8AAAAAYqnHe0NthXlRcCvA3_K7nFY92ZEj7v8C&ved=0ahUKEwiq-qbMpK_4AhXsRjABHVOkAzEQ4dUDCAc&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyEQguEIAEELEDEIMBEMcBENEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoLCAAQgAQQsQMQgwE6BQguEIAEOgsILhCABBDHARCvAToFCAAQsQM6DgguEIAEELEDEIMBENQCOggIABCxAxCDAVAAWKUIYN4KaABwAHgAgAFuiAH6BJIBAzAuNpgBAKABAQ&sclient=gws-wiz'
    );
    cy.go('back');
    cy.go('forward');
  });
});
