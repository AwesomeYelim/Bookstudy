import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;

  // @ApiProperty({
  //   required: true,
  //   example: 'uiop01900@gmail.com',
  //   description: '이메일',
  // })
  // id: number;
}
