/// <reference types="cypress"/>

import user from '../../fixtures/usuario.json'

describe('Funcionalidade Perfil via api', () => {
    let token

    beforeEach(() => {
        cy.gerarToken(user.email, user.senha).then((tkn) => {
            token = tkn
        })
    });

    it('[GET] - Deve consultar perfil do usuário', () => {
        const options = {
            method: 'GET',
            url: '/api/profile/me',
            headers :{
                Cookie: token
            }
        }

        cy.request(options).then(($response) => {
            expect($response.status).to.equal(200)
            expect($response.body.githubusername).to.equal('https://githu.com/renatosantanaoliveira')
            expect($response.body.skills[2]).to.equal('Cypress')
        })
    });

    it('[PUT] - Deve adicionar uma experiência profissional do usuário', () => {
        const options = {
            method: 'PUT',
            url: '/api/profile/experience',
            headers :{
                Cookie: token
            },
            body: {
                title: 'QA Especialist',
                "company": 'Via',
                from: '2022-09-09'
            }
        }

        cy.request(options).then(($response) => {
            expect($response.status).to.equal(200)
            expect($response.body.experience[2].title).to.equal('QA Especialist');
            expect($response.body.experience[2].company).to.equal('Via');
        })
    });
});