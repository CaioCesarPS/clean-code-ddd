import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';
import { randomUUID } from 'crypto';
import { AnswerRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer): Promise<void> => {
    return;
  },
};

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    questionId: '1',
    content: 'Answer content',
    instructorId: '1',
  });

  expect(answer).toBeDefined();
  expect(answer.content).toBe('Answer content');
  expect(answer.questionId).toBe('1');
  expect(answer.authorId).toBe('1');
  expect(typeof answer.id).toBe(typeof randomUUID());
});
