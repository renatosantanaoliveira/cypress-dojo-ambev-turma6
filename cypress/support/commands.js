// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastro', (nome, email, senha, confirmarSenha) => {
    cy.visit('/cadastrar')

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmarSenha)

    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('criarPerfil', (empresa, site, localizacao, skill, github, biografia) => {
    cy.get('#mui-component-select-status').click()
    cy.wait(5000)
    cy.get('.MuiList-root').contains('Especialista em QA').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(site)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(localizacao)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(skill)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(github)
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(biografia)
    cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add('gerarToken', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            email: email,
            password: senha
        }
    }).then(($response) => {
        return $response.body.jwt;
    })
})

Cypress.Commands.add('mockPerfis', (bodyMock) => {
    cy.intercept('GET', 'api/profile', {
        statusCode: 200,
        body: bodyMock
    }).as('getPerfis')
})