describe('End-to-End Tests', () => {
    it('Should redirect unauthenticated users to the sign-up page', () => {
      cy.visit('/');
      cy.url().should('include', '/sign-up');
    });
  
    it('Should allow a user to sign up', () => {
      cy.visit('/sign-up');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('eq', 'http://localhost:3000/');
    });
  
    it('Should display the homepage after successful login', () => {
      cy.visit('/sign-in');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('eq', 'http://localhost:3000/');
      cy.contains('Welcome to CareFinder');
    });
  
    it('Should send a message successfully from the contact page', () => {
      cy.visit('/contact');
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('textarea[name="message"]').type('Hello, this is a test message.');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Message sent successfully!').should('be.visible');
    });
  });
  