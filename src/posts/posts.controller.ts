import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(public readonly postsService: PostsService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiOperation({summary:"Get all posts "})
  @ApiOkResponse({schema:{example:{
        id: 1,
        title: "Pablo",
        content: "Pablo eskobar",
        published: false,
        authorId: 1
      }}})
  getAll() {
    return this.postsService.getAll();
  }
  @ApiOperation({summary:"Get one post "})
  @ApiOkResponse({schema:{example:{
        id: 1,
        title: "Pablo",
        content: "Pablo eskobar",
        published: false,
        authorId: 1
      }}})
  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  getByUserId(@Param('userId') userId: string) {
    return this.postsService.getByUserId(userId);
  }
  @ApiOperation({summary:"Create  post "})
  @ApiOkResponse({schema:{example:{
        title: "Pablo",
        content: "Pablo eskobar",
        published: false,
        authorId: 1
      }}})
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postsService.createPost(postDto);
  }
}
