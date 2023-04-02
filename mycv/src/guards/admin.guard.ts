import { CurrentUser } from './../users/decorators/current-user.decorator';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AdminGuard implements CanActivate {
  canActivate(
    // it is like a wrapper of the income request
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();
    if (!request.CurrentUser) {
      return false;
    }

    return request.currentUser.admin;
  }
}
