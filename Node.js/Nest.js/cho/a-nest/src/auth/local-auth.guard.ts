import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable() // provider
export class LocalAuthGuard extends AuthGuard('local') {
  // AuthGuard 안에 canActivate 가 들어있어서 implement 생략됨
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const can = await super.canActivate(context);
    if (can) {
      const request = context.switchToHttp().getRequest();
      console.log('login for cookie');
      await super.logIn(request);
    }

    return true;
  }
}
