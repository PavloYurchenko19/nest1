import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user/dto/create-user.dto';
import { PrismaService } from './core/prisma.service';

@Injectable()
export class AppService {}
