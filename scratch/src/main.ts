import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	// app의 인스턴스를 생성해서
	const app = await NestFactory.create(AppModule);

	// 들어오는  
	await app.listen(3000);
}

bootstrap();