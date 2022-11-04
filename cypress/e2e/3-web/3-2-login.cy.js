/// <reference types="cypress"/>

import usuarios  from '../../fixtures/usuarios.json'

describe('Funcionalidade login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('Devo fazer o login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('renatodojoturma6@dojo.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="login-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Renato Santana')
    });

    it('Devo fazer o login com sucesso, usando fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', user.nome)
        })
    });

    it.only('Devo fazer o login com sucesso, usando importacao', () => {
        cy.login(usuarios[1].usuario, usuarios[1].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

});