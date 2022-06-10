import { Module } from '@nestjs/common';
import { PrismaService } from '../core/prisma.service';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsService, PrismaService],
  imports: [],
  controllers: [PostsController],
})
export class PostsModule {}
