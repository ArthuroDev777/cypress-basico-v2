/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('src\\index.html')
})


describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatorios e envia formulario', function() {

        
        cy.get('#firstName').type('Arthur')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('arthurr.rodrigues187@gmail.com')
        cy.get('#open-text-area').type('Muito obrigado pelo apoio.')
        cy.get('#white-background > form > button').click()


    })
  }) 
