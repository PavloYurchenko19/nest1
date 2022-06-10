import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Prisma, Comment } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.comment.findMany();
  }
  getByPostId(postId: string) {
    return this.prismaService.comment.findMany({
      where: { authorId: Number(postId) },
    });
  }

  createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prismaService.comment.create({ data });
  }
}
