export const getTitle = () => cy.get('h1');

export const getRegions = () => cy.get('li')

export const getCountries = () => cy.get('.countries li')

export const getRoute = () => cy.location('pathname')

export const getCapital = () => cy.get('.capital')

