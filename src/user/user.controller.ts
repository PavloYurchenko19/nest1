import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: '1',
        email: 'yurchenkopavlo@gmail.com',
        name: 'Ne Pavlo',
        city: 'Rava-Ruska',
        status: true,
        age: 19,
        password: 'sdsasasasa',
        posts: [],
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAll() {
    return this.userService.getAllUsers();
  }
  @ApiOperation({ summary: 'Get one user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: '1',
        email: 'yurchenkopavlo@gmail.com',
        name: 'Ne Pavlo',
        city: 'Rava-Ruska',
        status: true,
        age: 19,
        password: 'sdsasasasa',
        posts: [],
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  getOneById(@Param('userId') userId: string) {
    return this.userService.getOneById(userId);
  }
  @ApiOperation({ summary: 'Post one user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: '1',
        email: 'yurchenkopavlo@gmail.com',
        name: 'Ne Pavlo',
        city: 'Rava-Ruska',
        status: true,
        age: 19,
        password: 'sdsasasasa',
        posts: [],
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
  @ApiOperation({ summary: 'Put one user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: '1',
        email: 'yurchenkopavlo@gmail.com',
        name: 'Ne Pavlo',
        city: 'Rava-Ruska',
        status: true,
        age: 19,
        password: 'sdsasasasa',
      },
    },
  })
  @Put('/:id')
  updateUser(@Body() userData: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUser(userData, id);
  }
}
