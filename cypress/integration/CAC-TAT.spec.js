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

    it('Preenche o telefone com caracteres nao numericos e valida se o campo esta vazio', function() {

        cy.get('#phone').type('abcdefghij') 
        cy.get('#phone').should('be.empty')

    })

    it('Exibe mensagem de erro quando o campo telefone se torna obrigatorio mas nao e preenchido antes do envio', function() {

        cy.get('#phone-checkbox').click()
        cy.get('#firstName').type('Arthur')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('arthurr.rodrigues187@gmail.com')
        cy.get('#open-text-area').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {delay:0})
        cy.get('#white-background > form > button').click()
        cy.get('body > span.error').should('be.visible', 'Valide os campos obrigatórios!')



    })

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('#firstName').type('Arthur')
        .should('have.value', 'Arthur')
        .clear().should('have.value', '')
        cy.get('#lastName').type('Rodrigues')
        .should('have.value', 'Rodrigues')
        .clear().should('have.value', '')
        cy.get('#email').type('arthur@gmail.com')
        .should('have.value', 'arthur@gmail.com')
        .clear().should('have.value', '')
        cy.get('#phone').type('11988060409')
        .should('have.value', '11988060409')
        .clear().should('have.value', '')

    })

    it.only('Exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatorios', function() {

        cy.get('#white-background > form > button').click()
        cy.get('body > span.error > strong').should('be.visible', 'Valide os campos obrigatórios!')

    })

    
  })


//#phone