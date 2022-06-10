import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Pavlo', name: 'name' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  public name: string;
  @ApiProperty({ example: 'pavloyurchenko@gmail.com', name: 'email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;
  @ApiProperty({ example: 19, name: 'age' })
  @IsNumber()
  public age: number;
  @ApiProperty({ example: 'Lviv', name: 'city' })
  @IsString()
  public city: string;
  @ApiProperty({ example: 'password', name: 'password' })
  @IsString()
  @Length(2, 10)
  readonly password: string;
  @ApiProperty({ example: true, name: 'boolean' })
  @IsBoolean()
  public status: boolean;
}
