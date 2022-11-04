///<reference types="cypress"/>

describe('Funcionalidade: Cadastro via api', () => {
    it('Deve fazer o cadastro com sucesso', () => {
        var email = `renato${Math.floor(Math.random()*10000)}@dojo.com.br`

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Renato",
                "email": email,
                "password": "senha@54321"
            }
        }).then(($response) => {
            expect($response.status).to.equal(201)
            expect($response.body).to.have.property('jwt')
        })
    });
});