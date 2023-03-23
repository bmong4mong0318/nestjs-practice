import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

// di container에 등록
@Injectable()
export class MessagesService {
	constructor(public messagesRepo: MessagesRepository) {}

	findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

	findAll() {
        return this.messagesRepo.findAll();
    }

	create(content: string) {
        return this.messagesRepo.create(content);
    }
}