describe('front-ui-shared: NavItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navitem--primary&args=isButton:false;handleClick;iconName;label;outlined:false;path;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to NavItem!');
    });
});
