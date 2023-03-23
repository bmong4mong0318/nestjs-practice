import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
	constructor(public messagesService: MessagesService) {}

	@Get()
	listMessages() {
		return this.messagesService.findAll();
	}

	@Post()
    createMessage(@Body() body: CreateMessageDto) {
		return this.messagesService.create(body.content);
	}

	@Get('/:id')
	async getMessage(@Param('id') id: string) {
		// await 안하면 어떻게 되는지?
		const message = await this.messagesService.findOne(id);
		
		if (!message) {
            throw new NotFoundException('Message not found');
        }

		return message;
	}
}
