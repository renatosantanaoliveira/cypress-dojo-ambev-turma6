class ExperienciaPage {
    get #posicao() {return cy.get('[data-test="experience-title"]')}
    get #empresa() {return cy.get('[data-test="experience-company"]')}
    get #localizacao() {return cy.get('[data-test="experience-location"]')}
    get #inicio() {return cy.get('#from')}
    get #ate() {return cy.get('#to')}
    get #desc() {return cy.get('[data-test="experience-description"]')}
    get #enviar() {return cy.get('[data-test="experience-submit"]')}
    get #atual() {return cy.get('.MuiTypography-root')}

    addExperiencia(posicao, empresa, localizacao, inicio, ate, descricao) {
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#localizacao.type(localizacao)
        this.#inicio.type(inicio)
        this.#ate.type(ate)
        this.#enviar.click()
    }

    addExperienciaAtual(posicao, empresa, localizacao, inicio, descricao) {
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#localizacao.type(localizacao)
        this.#inicio.type(inicio)
        this.#atual.click()
        this.#enviar.click()
    }

}

module.exports = new ExperienciaPage()