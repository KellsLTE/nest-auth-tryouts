import { SessionSerializer } from './../serializers/session.serializers';
import { LocalStrategy } from './strategies/local.strategies';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
