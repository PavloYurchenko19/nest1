import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
@ApiTags('Comment')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({summary:"Get all comments"})
  @ApiOkResponse({status:200, schema:{
    example:{
      id: 1,
      text: "ura ura",
      published: true,
      authorId: 4
    }
    }})
  getAll() {
    return this.commentService.getAll();
  }
  @ApiOperation({summary:"Get all comments from postId"})
  @ApiOkResponse({status:200, schema:{
      example:{
        id: 1,
        text: "ura ura",
        published: true,
        authorId: 4
      }
    }})
  @HttpCode(HttpStatus.OK)
  @Get('/:postId')
  getByPostId(@Param('postId') postId: string) {
    return this.commentService.getByPostId(postId);
  }
  @ApiOperation({summary:"Post comment"})
  @ApiOkResponse({status:200, schema:{
      example:{
        id: 1,
        text: "ura ura",
        published: true,
        authorId: 4
      }
    }})
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createComment(@Body() commentDto: CreateCommentDto) {
    return this.commentService.createComment(commentDto);
  }
}
