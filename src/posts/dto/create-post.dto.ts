import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreatePostDto {
  @ApiProperty( {name:'title', example:"Title"})
  @IsNotEmpty()
  @IsString()
  public title: string;
  @ApiProperty({name:'content', example:'Some text'})
  @IsString()
  @IsNotEmpty()
  public content: string;
  @ApiProperty({name:'published', example:true})
  @IsBoolean()
  public published?: boolean;
  @ApiProperty({name:'authorId', example:5})
  @IsNotEmpty()
  @IsNumber()
  public authorId: number;
}
