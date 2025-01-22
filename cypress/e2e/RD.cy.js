import { logHelper } from "../support/logger";

describe('Test Pages RD', () => {
  it('RdStation Pagina inicial', () => {
    cy.visit('https://www.rdstation.com/')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

    it('RdStation Pagina produto', () => {
    cy.visit('https://www.rdstation.com/planos/marketing/')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

  
    it('RdStation Pagina suporte', () => {
    cy.visit('https://www.rdstation.com/contato/')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })
})