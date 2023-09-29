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
        cy.get('#open-text-area').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {delay:0})
        cy.get('#white-background > form > button').click()
        cy.get('body > span.success').should('be.visible', 'Mensagem enviada com sucesso.')
        
    })

    it('Envia formulario com e-mail invalido e valida mensagem de erro', function() {


        cy.get('#firstName').type('Arthur')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('arthurr.rodrigues187.gmail.com')
        cy.get('#open-text-area').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {delay:0})
        cy.get('#white-background > form > button').click()
        cy.get('body > span.error').should('be.visible', 'Valide os campos obrigatórios!')
        
    })
  })


