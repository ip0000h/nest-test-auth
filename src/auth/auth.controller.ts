import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { User } from '../users/entity/user';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('register')
  // @HttpCode(HttpStatus.CREATED)
  // @UseInterceptors(TokenInterceptor)
  // register(@Body() signUp: SignUp): Promise<User> {
  //   return this.authService.register(signUp);
  // }

  // @Post('login')
  // @UseGuards(LocalAuthGuard)
  // @HttpCode(HttpStatus.OK)
  // @UseInterceptors(TokenInterceptor)
  // async login(@AuthUser() user: User): Promise<User> {
  //   return user;
  // }

  // @Get('/profile')
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  // profile(@AuthUser() user: User): User {
  //   return user;
  // }
}
