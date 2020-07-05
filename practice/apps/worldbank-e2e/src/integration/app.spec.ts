import { getTitle, getRegions, getCountries, getRoute, getCapital } from '../support/app.po';

describe('Given: worldbank app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Title', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    // Function helper example, see `../support/app.po.ts` file

    getTitle().contains('World Region Viewer');
  });

  it('should display 7 regions', () => {
    getRegions().its('length').should('be', 7)
  });
});


describe('Given: navigate /regions', () => {

  beforeEach(() => cy.visit('/'));

  it('When User visit regions/NAC should display 3 countries', () => {
    getRegions().eq(4).contains('North America').click({ force: true })
    getRoute().should('eq', '/region/NAC')
    getCountries().its('length').should('be', 3)
  });
});

describe('Given: navigate /country/CAN', () => {

  beforeEach(() => cy.visit('/country/CAN'));

  it('When User visit country/country capital should be Ottawa', () => {
    getCapital().contains('Ottawa')
  });
});
