import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env.APP_KEY,
      signOptions: { expiresIn: '30mins' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
