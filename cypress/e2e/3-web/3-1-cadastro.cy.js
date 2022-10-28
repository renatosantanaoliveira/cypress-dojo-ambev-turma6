/// <reference types="cypress"/>

const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {  // Separar os contexto dos meus testes
    beforeEach(() => {
        cy.visit('/cadastrar')
    });

    it('Cadastro com sucesso', () => { // cenário de teste ou caso de teste ou história de teste
        let nome = `Renato ${faker.name.lastName()}`
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')

        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain', 'Dashboard')
        cy.contains(nome).should('exist')
    });

    it.only('Devo validar a mensagem quando cadastrar com e-mail repetido', () => {
        let nome = 'Augusto'
        let email = faker.internet.email(nome)
        let senha = 'senha@54321'
        let confirmarSenha = 'senha@54321'

        cy.cadastro(nome, email, senha, confirmarSenha)
        cy.get('[data-test="navbar-logout"] > .hide-sm').click()

        cy.cadastro(nome, email, senha, confirmarSenha)
        cy.get('[data-test="alert"]').should('have.text', 'Usuário já registrado')
    })
});


/*
Funcionalidade: Cadastro

Cenário: Cadastro com sucesso
Dado que eu esteja na tela de de cadastro
Quando eu preencher os campos obrigatórios
Então deve direcionar para a dashboard

Cenário: Cadastro com pessoa jurídica

Cenário: Cadastro com email inválido

Hooks:
    Before (antes de todos os cenários)
    visti
    login
    input dados
    criar conexao de banco de dados

    Before each (antes de cada cenário)
    visit

    After (depois de todos cenários)
    matar a conexao com o banco dados

    After each (depois de cada cenário)
    gerar um screenshot

*/