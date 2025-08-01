import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'john_doe', description: 'Foydalanuvchi nomi' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'secret123', description: 'Parol (kamida 6 belgidan iborat)' })
  @IsString()
  @MinLength(6)
  password: string;
}
