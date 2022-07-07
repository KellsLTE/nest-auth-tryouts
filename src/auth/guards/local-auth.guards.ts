import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import supertest from 'supertest';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
