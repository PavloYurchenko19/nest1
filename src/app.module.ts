import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import {PostsModule} from "./posts/posts.module";

@Module({
  imports: [UserModule, PostsModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
