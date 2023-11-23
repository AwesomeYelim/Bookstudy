import { ChannelChats } from '../../entities/ChannelChats';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class CreateChannelDto extends PickType(ChannelChats, ['content']) {
  @ApiProperty({
    example: '수다방',
    description: '채널명',
  })
  public name: string;
}
