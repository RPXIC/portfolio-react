/* eslint-disable no-undef */
describe('<About />', () => {
    it('<About /> - Verify landing page', () => {
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:3000/')

        //Text
        cy.get('[data-cy="logo"]')
            .invoke('text')
            .should('equal', 'RP')

        cy.get('[data-cy="w1"]')
            .invoke('text')
            .should('equal', 'WELCOME')

        cy.get('[data-cy="w2"]')
            .invoke('text')
            .should('equal', 'TO')

        cy.get('[data-cy="w3"]')
            .invoke('text')
            .should('equal', 'MY')

        cy.get('[data-cy="w4"]')
            .invoke('text')
            .should('equal', 'PORTFOLIO')

        cy.get('[data-cy="w5"]')
            .invoke('text')
            .should('equal', 'Hey! I\'m Ruben')

        //Description
        cy.get('[data-cy="description"]').should('exist')

        //Navbar
            //Nav
        cy.get('[data-cy="navbar"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'NAV')

            //Links
        cy.get('[data-cy="link-home"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="link-home"]')
            .should('have.attr', 'href')
            .should('equal', '/')

        cy.get('[data-cy="link-projects"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="link-projects"]')
            .should('have.attr', 'href')
            .should('equal', '/projects')

        cy.get('[data-cy="link-projects"]').click()
        cy.url().should('eq', 'http://localhost:3000/projects')

        cy.get('[data-cy="link-home"]').click()
        cy.url().should('eq', 'http://localhost:3000/')



        //Footer
            //Nav
        cy.get('[data-cy="navbar-footer"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'NAV')
            
            //Links
        cy.get('[data-cy="link-github"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')
        
        cy.get('[data-cy="link-github"]')
            .should('have.attr', 'href')
            .should('equal', 'https://github.com/RPXIC')

        cy.get('[data-cy="link-linkedin"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="link-linkedin"]')
            .should('have.attr', 'href')
            .should('equal', 'https://www.linkedin.com/in/ruben-ponce-ca%C3%B1adas/')

        cy.get('[data-cy="link-mail"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="link-mail"]')
            .should('have.attr', 'href')
            .should('equal', 'mailto:rpc2works@gmail.com')

        cy.get('[data-cy="link-cv"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('equal', 'A')

        cy.get('[data-cy="link-cv"]')
            .should('have.attr', 'href')
            .should('have.string', 'rubenponceprofile.pdf')

        //Stacks
        cy.get('[data-cy="stacks"]').should('exist')
    })
})