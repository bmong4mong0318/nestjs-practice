import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
	//앱이 시작되면 모듈을 살펴봐서 모든 컨트롤러의 인스턴스를 생성한다.
	controllers: [ AppController ],
})
export class AppModule {}