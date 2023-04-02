import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';

// Import necessary modules
@Module({
  // Import TypeOrmModule and specify the User entity
  imports: [TypeOrmModule.forFeature([User])],
  // Specify the controller for handling user requests
  controllers: [UsersController],
  // Specify the services for handling user and authentication logic
  providers: [UsersService, AuthService],
})
export class UsersModule {
  // Configure middleware to apply CurrentUserMiddleware to all routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
