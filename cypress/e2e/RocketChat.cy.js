import { logHelper } from "../support/logger";

describe('Test Pages', () => {
  it('Rocket-chat Pagina inicial', () => {
    cy.visit('https://pt-br.rocket.chat/')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

    it('Rocket-chat Pagina produto', () => {
    cy.visit('https://pt-br.rocket.chat/team-collaboration')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })

  
    it('Rocket-chat Pagina suporte', () => {
    cy.visit('https://desk.rocket.chat/portal/en/signin')
    cy.wait(3000);
    cy.injectAxe()
    const logFormater = logHelper.logFormatter;
    const wcagVersions = {runOnly: {values: ['wcag2a', 'wcag2aa', 'wcag21aaa']}}
    cy.checkA11y(null, wcagVersions,logFormater)
  })
})