/// <reference types="cypress"/>

describe('Funcionalidade: Cadastrar perfil', () => {
    const perfil = {
        empresa: 'Amberv',
        site: 'https://www.ambev.com.br',
        localizacao: 'Belo Horizonte',
        skill: 'JavaScript, Ruby, Cypress, Java',
        "github": 'https://githu.com/renatosantanaoliveira',
        bioagrafia: 'Olá sou o Renato Santana'
    }

    beforeEach(() => {
        cy.fixture("usuario").then((data) => {
            cy.login(data.email, data.senha)
        })
        cy.visit('/criar-perfil')
    });
    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.wait(5000)
        // cy.get('.MuiList-root').find('[data-value="Especialista em QA"]').click()
        // cy.contains('Especialista em QA').click()
        cy.get('.MuiList-root').contains('Especialista em QA').click()

        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.empresa)
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.site)
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.localizacao)
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.skill)
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.github)
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(perfil.bioagrafia)
        cy.get('[data-test="profile-submit"]').click()

        cy.get('[data-test="dashboard-editProfile"]').should('exist').and('be.visible')
    });

    it.only('Deve criar o perfil com sucesso, usando command', () => {
        cy.criarPerfil(perfil.empresa, perfil.site, perfil.localizacao, perfil.skill, perfil.github, perfil.bioagrafia)
        cy.get('[data-test="dashboard-editProfile"]').should('exist').and('be.visible')
    });
});