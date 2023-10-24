import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';

test('Create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: '1',
    content: 'Answer content',
    instructorId: '1',
  });

  expect(answer).toBeDefined();
  expect(answer.content).toBe('Answer content');
  expect(answer.id).toBe('1');
});
