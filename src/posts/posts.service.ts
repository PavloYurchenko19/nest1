import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.post.findMany();
  }
  getByUserId(userId: string): Promise<Post[]> {
    return this.prismaService.post.findMany({
      where: { authorId: Number(userId) },
      include: { comments: true },
    });
  }

  createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }
}
