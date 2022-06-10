import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateCommentDto {
  @ApiProperty( {name:'text', example:"Title"})
  @IsNotEmpty()
  @IsString()
  public text: string;
  @ApiProperty({name:'published', example:true})
  @IsBoolean()
  public published: boolean;
  @ApiProperty({name:'authorId', example:5})
  @IsNotEmpty()
  @IsNumber()
  public authorId: string;
}
