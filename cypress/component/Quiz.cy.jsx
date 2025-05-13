import Quiz from '../../client/src/components/Quiz'

describe('Quiz E2E', () => {
    beforeEach(() => {
  
      cy.intercept({
        method:"GET",
        url:"/api/question/random"
      }, {
        fixture:"example.json",
        statusCode:200
      }

    ).as("getrandomquestion")
    });
  
    it('starts the quiz and shows the first question', () => {
        cy.mount(<Quiz />)
      cy.contains('Start Quiz').click();
      // Wait for question to load
      cy.get('h2').should('not.be.empty');
      cy.get('button').contains("1");
    });
    it('starts the quiz and shows the second question', () => {
        cy.mount(<Quiz />)
      cy.contains('Start Quiz').click();
      // Wait for question to load
      cy.get('h2').should('not.be.empty');
      for (let index = 0; index < 10; index++) {
        cy.get('button').contains("1").click()
      }
     
  
  
    });
    it('starts a new quiz', () => {
        cy.mount(<Quiz />)
      cy.contains('Start Quiz').click();
      // Wait for question to load
      cy.get('h2').should('not.be.empty');
      for (let index = 0; index < 10; index++) {
        cy.get('button').contains("1").click()
      }
      cy.get('button').contains("Take New Quiz");
      
  
    });
  });
  
  