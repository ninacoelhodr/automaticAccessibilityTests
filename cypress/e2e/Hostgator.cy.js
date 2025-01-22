import { logHelper } from "../support/logger";

describe('Test Pages', () => {
  it('Hostgator Pagina inicial', () => {
    cy.visit('https://www.hostgator.com.br/')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

    it('Hostgator Pagina produto', () => {
    cy.visit('https://www.hostgator.com.br/hospedagem-de-sites')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

  
    it('Hostgator Pagina suporte', () => {
    cy.visit('https://suporte.hostgator.com.br/hc/pt-br')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })
})