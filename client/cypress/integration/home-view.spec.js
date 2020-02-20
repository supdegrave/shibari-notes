describe('HomeView', () => {
    it('passes', () => {
        expect(true).to.equal(true);
    });

    it('loads view', () => {
        cy.visit('/');
        expect(true).to.equal(true);
    });
})
