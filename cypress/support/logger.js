/// <reference types="cypress" />
class LogHelper {
  logFormatter(wcagViolations) {
    cy.task(
      'log',
      `Number of violations: ${wcagViolations.length} type${wcagViolations.length === 1 ? '' : 's'} of Wcag violation${wcagViolations.length === 1 ? '' : 's'} detected.`
    );
    this.formatLoggedViolationsInATable(wcagViolations);
    this.logEachViolationDetected(wcagViolations);
  }

  formatLoggedViolationsInATable(wcagViolations) {
    cy.task(
      'table',
      wcagViolations.map(({ id, impact, description, nodes }) => ({
        'Id of Axe rule violated': id,
        'User impact': impact,
        'Description of rule': description,
        'Number of nodes affected': `${nodes.length}`,
      }))
    );
  }

  logEachViolationDetected(wcagViolations) {
    wcagViolations.forEach((wcagFailure, indexInViolationsArray, array) => {
      const { id, impact, help, helpUrl, nodes } = wcagFailure;
      cy.task(
        'log',
        `######## Violation ${indexInViolationsArray + 1} of ${array.length}: '${id}', with User impact ${impact} ########`
      );
      cy.task(
        'log',
        `${help}. Access for more details: ${helpUrl}`
      );
      cy.task(
        'log',
        `${nodes.length} instance${nodes.length > 1 ? 's' : ''} of this violation:`
      );
      nodes.forEach((node, indexInNodesArray) => {
        cy.task(
          'log',
          `Violation ${indexInViolationsArray + 1} instance ${indexInNodesArray + 1}: ${node.html}`
        );
      });
    });
  }
}

export const logHelper = new LogHelper();
