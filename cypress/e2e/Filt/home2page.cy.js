describe('Home page', () => {
    beforeEach(() => {
      cy.visit('https://erp-homologacao.viasoft.com.br/pt/login');
    });
  
    it('Dado que realizei o login com credenciais válidas', () => {

        cy.get('input[placeholder="Informe seu CPF"]')
            .focus()
            .type("06445988911");

        cy.get('input[placeholder="Informe sua senha"]')
            .focus()
            .type('homepage');

        cy.get('.login-form')
            .submit();
    });
  });