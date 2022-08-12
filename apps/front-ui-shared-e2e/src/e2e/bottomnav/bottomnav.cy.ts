describe('front-ui-shared: Bottomnav component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bottomnav--primary&args=children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Bottomnav!');
    });
});
