///<reference types="cypress"/>

describe('Funcionalidade: Ver perfis', () => {
    beforeEach(() => {
        cy.visit('/perfis')
    });
    
    it('Deve validar o primeiro item da lista', () => {
        cy.fixture("perfis").then((mockPerfis) => {
            cy.intercept('GET', 'api/profile', {
                statusCode: 200,
                body: mockPerfis
            }).as('getPerfis')
        })

        cy.reload()
        cy.get('[data-test="profile-name"]').first().should('have.text', 'Paulo Guerra')
        // cy.visit('/perfis')
    });

    it('Deve validar o último item da lista', () => {
        cy.fixture("perfis").then((mockPerfis) => {
            cy.mockPerfis(mockPerfis)
        })

        cy.reload()
        cy.get('[data-test="profile-name"]').last().should('have.text', 'Wedney Santos Silva')
        cy.get('[data-test="profile-position"]').last().should('contain', 'QA')
    });

    it('Deve validar o terceiro item da lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('have.text', 'Pa Sun')
    });
});