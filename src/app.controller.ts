import { LocalAuthGuard } from './auth/guards/local-auth.guards';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guards';

@Controller()
export class AppController {
  constructor(private readonly auth: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.auth.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req): string {
    return req.user;
    //return this.appService.getHello();
  }
}
