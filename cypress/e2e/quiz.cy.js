describe('Quiz E2E', () => {
  beforeEach(() => {
    // cy.intercept('GET', '/api/questions/random', {
    //   statusCode: 200,
    //   body: [
    //     {
    //       question: 'What is the capital of France?',
    //       answers: [
    //         { text: 'Berlin', isCorrect: false },
    //         { text: 'Madrid', isCorrect: false },
    //         { text: 'Paris', isCorrect: true },
    //       ],
    //     },
    //   ],
    // }).as('getQuestions');

    cy.visit('/');
  });

  it('starts the quiz and shows the first question', () => {
    cy.contains('Start Quiz').click();
    // Wait for question to load
    cy.get('h2').should('not.be.empty');
    cy.get('button').contains("1");
  });
  it('starts the quiz and shows the second question', () => {
    cy.contains('Start Quiz').click();
    // Wait for question to load
    cy.get('h2').should('not.be.empty');
    for (let index = 0; index < 10; index++) {
      cy.get('button').contains("1").click()
    }
   


  });
  it('starts a new quiz', () => {
    cy.contains('Start Quiz').click();
    // Wait for question to load
    cy.get('h2').should('not.be.empty');
    for (let index = 0; index < 10; index++) {
      cy.get('button').contains("1").click()
    }
    cy.get('button').contains("Take New Quiz");
    

  });
});

