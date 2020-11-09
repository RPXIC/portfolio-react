/* eslint-disable no-undef */

describe('<Projects />', () => {
    it('<Projects /> - Verify the projects page', () => {
        cy.visit('/projects')

        cy.get('[data-cy="logo"]').should('exist')
        cy.get('[data-cy="navbar"]').should('exist')
        cy.get('[data-cy="navbar-footer"]').should('exist')

        cy.get('[data-cy="title"]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Projects')

        cy.get('[data-cy="projects-list"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'UL')

        cy.get('[data-cy="projects-list"]').children().should('have.length', 6)

        cy.get('[data-cy="project-container"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'LI')

        cy.get('[data-cy="project-title"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'H3')

        cy.get('[data-cy="project-description"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'P')

        cy.get('[data-cy="project-link"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="project-link"]')
            .should('have.attr', 'href')

        cy.get('[data-cy="project-link"]')
            .should('have.attr', 'target', '_blank')

        cy.get('[data-cy="project-link"]')
            .children()
            .should('have.prop', 'tagName')
            .should('equal', 'DIV')

        cy.get('[data-cy="project-link"]')
            .children().children()
            .should('have.prop', 'tagName')
            .should('equal', 'IMG')

        cy.get('[data-cy="project-stack"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'P')
    })
})