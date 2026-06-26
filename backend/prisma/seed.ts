import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, QuestionType } from '../generated/prisma/client';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.quiz.create({
    data: {
      title: 'Frontend Basics Quiz',
      questions: {
        create: [
          {
            text: 'HTML is a programming language?',
            type: QuestionType.BOOLEAN,
            correctAnswer: 'false',
          },
          {
            text: 'What is used for styling?',
            type: QuestionType.INPUT,
            correctAnswer: 'CSS',
          },
          {
            text: 'Choose frontend technologies',
            type: QuestionType.CHECKBOX,
            options: {
              create: [
                { text: 'HTML', isCorrect: true },
                { text: 'CSS', isCorrect: true },
                { text: 'Python', isCorrect: false },
                { text: 'JavaScript', isCorrect: true },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.quiz.create({
    data: {
      title: 'JavaScript Fundamentals Quiz',
      questions: {
        create: [
          {
            text: 'JavaScript is a statically typed language?',
            type: QuestionType.BOOLEAN,
            correctAnswer: 'false',
          },
          {
            text: 'Which keyword declares a constant in JavaScript?',
            type: QuestionType.INPUT,
            correctAnswer: 'const',
          },
          {
            text: 'Choose valid JavaScript data types',
            type: QuestionType.CHECKBOX,
            options: {
              create: [
                { text: 'string', isCorrect: true },
                { text: 'boolean', isCorrect: true },
                { text: 'character', isCorrect: false },
                { text: 'undefined', isCorrect: true },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.quiz.create({
    data: {
      title: 'CSS & Layout Quiz',
      questions: {
        create: [
          {
            text: 'Flexbox is used for layout in CSS?',
            type: QuestionType.BOOLEAN,
            correctAnswer: 'true',
          },
          {
            text: 'Which CSS property changes text color?',
            type: QuestionType.INPUT,
            correctAnswer: 'color',
          },
          {
            text: 'Choose valid CSS display values',
            type: QuestionType.CHECKBOX,
            options: {
              create: [
                { text: 'flex', isCorrect: true },
                { text: 'grid', isCorrect: true },
                { text: 'overlap', isCorrect: false },
                { text: 'block', isCorrect: true },
              ],
            },
          },
        ],
      },
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
