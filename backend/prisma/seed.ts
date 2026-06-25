import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, QuestionType } from '../generated/prisma/client.js';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
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
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
