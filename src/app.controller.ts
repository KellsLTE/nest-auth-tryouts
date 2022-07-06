import { LocalAuthGuard } from './auth/guards/local-auth.guards';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthSessionGuard } from './auth/guards/auth-session.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged in' };
  }

  @UseGuards(AuthSessionGuard)
  @Get()
  getHello(@Request() req): string {
    return req.user;
    //return this.appService.getHello();
  }
}
