import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class JoinRequestDto {
  @IsEmail()
  @ApiProperty({
    example: 'uiop01900@gmail.com',
    description: '이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '홍예림',
    description: '닉네임',
  })
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
  })
  public password: string;
}
