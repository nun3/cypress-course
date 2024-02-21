describe('Home page', () => {
    beforeEach(() => {
      cy.visit('https://erp-homologacao.viasoft.com.br/pt/login');
    });
  
    it('Dado que realizei o login com credenciais válidas', () => {
      const cpf = '064.459.889-11';
      const password = 'homepage';
  
      // Seleciona o elemento pai diretamente
      cy.get('.login-form')
        .find('input[placeholder="Informe seu CPF"]')
        .should('be.visible')
        .focus()
        .type(cpf);
  
      cy.get('.login-form')
        .find('input[placeholder="Informe sua senha"]')
        .should('be.visible')
        .focus()
        .type(password);

      cy.get('.login-form')
      .submit();
      
      cy.get('#main').should('be.visible');

    });
  });