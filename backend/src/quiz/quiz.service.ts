import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateQuizDto) {
    console.log(dto);
    return this.prisma.quiz.create({
      data: {
        title: dto.title,
        questions: dto.questions
          ? {
              create: dto.questions.map((q) => ({
                text: q.text,
                type: q.type,

                options:
                  q.type === 'CHECKBOX'
                    ? {
                        create: [],
                      }
                    : undefined,
              })),
            }
          : undefined,
      },

      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.quiz.findMany({
      include: { questions: { include: { options: true } } },
    });
  }

  async findOne(id: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: { questions: { include: { options: true } } },
    });
    if (!quiz) throw new NotFoundException(`Quiz #${id} not found`);
    return quiz;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.quiz.delete({ where: { id } });
    return { success: true };
  }
}
