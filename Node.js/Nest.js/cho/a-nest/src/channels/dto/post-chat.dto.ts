import { ChannelChats } from './../../entities/ChannelChats';
import { PickType } from '@nestjs/swagger';

export class PostChatDto extends PickType(ChannelChats, ['content']) {}
