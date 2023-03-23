import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  //things that can be used as dependencies for other clasees
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
