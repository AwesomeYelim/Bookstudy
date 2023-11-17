import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'uiop01900@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '예림쓰',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '쉿비밀',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
