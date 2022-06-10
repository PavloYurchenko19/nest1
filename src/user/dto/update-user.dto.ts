import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'Pavlo', name: 'name' })
  @IsString()
  @Length(3, 10)
  public name: string;
  @ApiProperty({ example: 19, name: 'age' })
  @IsNumber()
  public age: number;
  @ApiProperty({ example: 'Lviv', name: 'city' })
  @IsString()
  public city: string;
  @ApiProperty({ example: true, name: 'boolean' })
  @IsBoolean()
  public status: boolean;
}
