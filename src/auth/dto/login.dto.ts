import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'john_doe', description: 'Foydalanuvchi nomi' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'secret123', description: 'Parol' })
  @IsString()
  password: string;
}
